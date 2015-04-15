package riotapi;

import dto.Match.MatchDetail;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import static java.math.BigDecimal.ROUND_HALF_UP;
import java.math.RoundingMode;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import main.java.riotapi.RiotApi;
import main.java.riotapi.RiotApiException;

/**
 *
 * @author JsKingBoo
 */

public class URF {
    final int SECOND_ONE = 1;
    final int SECOND_TEN = 10;
    final int SECOND_SIXTY = 60;
    final int SECOND_FIVEMINUTES = SECOND_SIXTY * 5;
    final int sscale = 10;
    //final int gameNumber = 90;
    
    //The List
    private BigDecimal matchDurations = new BigDecimal(0);
    private int matchCounted = 0;
    private int requests = 1;

    //calculate epoch time
    int epochTime = 1428332400; 
    //add 5 minutes (300)
        
    //URL
    String riotURL;
    String charset = "UTF-8";
    String key;
    
    RiotApi api;

    List<Long> matchIDs = new ArrayList<>();   
    
    boolean paused = false;
    
    public URF(String key) {
       
        //do this so my memory doesn't explode
        //force bigdecimals to have 10 decimal places maximum
        matchDurations.setScale(sscale, RoundingMode.HALF_UP);
        
        //////////////////////////////PART 0: THE SETUP
        //dun dun duuuun
        this.key = key;
        api = new RiotApi(key);
        
        //its boring generating the same average every time so lets make this fun
        int rand = (int) (Math.random() * 1000);
        epochTime += SECOND_FIVEMINUTES * rand;
        
        riotURL = "https://na.api.pvp.net/api/lol/na/v4.1/game/ids?beginDate=" + epochTime + "&api_key=";
        
        //much excite
        //many code
        //wow

        //then wait for the driver to run "fetchMatches"
        
    }
    
    public int fetchMatches(){
         ///////////////////////////////////PART 1: URF API REQUEST
        //dun dun duuuun
        String latestURFData = riotAPIQuery(riotURL, key);
        //the ONE LINE OF DOOOOOOOOOM
        
        /////////////////////////////////////PART 2: MATCH LOOKUP
        
        //part 2.1: parsing responseArray
        //this is probably one of the worst things I've ever done in the history of ever

        //add match ids to list
        Scanner s = new Scanner(latestURFData);
        
        matchIDs.clear();
        
        while (s.hasNext()){
            matchIDs.add(s.nextLong());
        }
        
        return matchIDs.size();

    }
    
    public void modifyAverage(int x){

        Iterator<Long> iter= matchIDs.iterator();
        
        //get the data from each match, one by one
        while(iter.hasNext()) {

            Long matchID = iter.next();
            
            //update progress
            matchCounted++;
            
            MatchDetail match = null;
            
            try {
                pauseRequests();
                match = api.getMatch(matchID, false);
            } catch (RiotApiException ex) {
                Logger.getLogger(URF.class.getName()).log(Level.SEVERE, null, ex);
            }
            
            //d0 = old average duration = matchDurations
            //d1 = new average duration = matchDurations
            //a  = duration data point  = match.getMatchDuration()
            //c  = match counted        = matchCounted
            //d1 = ((d0 * c) + a) / (c + 1)
            
            //get new average value
            matchDurations = (matchDurations.multiply(new BigDecimal(matchCounted)).add(new BigDecimal(match.getMatchDuration()))).divide(new BigDecimal(matchCounted + 1), sscale, ROUND_HALF_UP);
            
            //we counted this now so remove it
            iter.remove();
            
            //stop when x is exhausted
            x--;
            if (x == 0){
                break;
            }
            
        }        
    }
    
    private String riotAPIQuery(String url, String key){        
        HttpURLConnection connection = null;
        riotURL = "https://na.api.pvp.net/api/lol/na/v4.1/game/ids?beginDate=" + epochTime + "&api_key=";
        String responseArray = "";
        pauseRequests();
        try {
            //establish connection
            connection = (HttpURLConnection) new URL(url + key).openConnection();
            connection.setRequestMethod("GET");
            connection.setInstanceFollowRedirects(false);

            //get response code
            int responseCode = connection.getResponseCode();
            if (responseCode != 200) {
                System.out.println("Error Code " + responseCode);
                //System.out.println(url + key);'
                responseArray = "Error: " + responseCode;
                return responseArray;
            }                

            //connection established
            //get the yummy inputs MMMMMM
            InputStream inputstream = connection.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputstream, "UTF-8"));
            StringBuilder response = new StringBuilder();

            String line;
            while ((line = reader.readLine()) != null){
                response.append(line);
                response.append('\r');
            }

            connection.disconnect();
            responseArray = response.toString();
            
            //////////
            //System.out.println(responseArray);
            
            responseArray = responseArray.replaceAll("[\\[\\]]", ""); 
            //netbeans pls stop saying this is an error ty
            responseArray = responseArray.replace(',', ' ');
            return responseArray;

        } catch (MalformedURLException ex) {
            System.out.println("ERROR: MalformedURLException: " + ex);
        } catch (IOException ex){
            System.out.println("ERROR: IOException: " + ex);
        } finally {
            //no leaks or some ~
            if (connection != null){
                connection.disconnect();
            }
        }        
        return responseArray;
    }
    
    public BigDecimal getMatchDuration(){
        return matchDurations;
    }
    public int getMatchCounted(){
        return matchCounted;
    }
    
    public void iterateEpoch(){
        //whose idea was it to name it "second five minutes"
        epochTime += SECOND_FIVEMINUTES;
    }
    
    private void pauseRequests(){
        if (requests % 10 == 0){
            try {
                //System.out.println("Pausing API requests");
                paused = true;
                
                //i'm sorry i'm sorry :(
                Thread.sleep(SECOND_TEN * 1000); //its in milliseconds
                
                paused = false;
            } catch (InterruptedException ex) {
                Logger.getLogger(URF.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        requests++;        
    }
    
    public boolean isPaused(){
        return paused;
    }
    
    /*private static int binarySearch(List<Long> list, long input){
        int lo = 0;
        int hi = list.size() - 1;
        int mid = lo + (hi - lo) / 2;      
        while (lo <= hi) {
            mid = lo + (hi - lo) / 2;      
            if (input < list.get(mid)){
                hi = mid - 1;
            } else if (input > list.get(mid)){
                lo = mid + 1;
            } else {
                return mid;
            }
        }
        return mid;
    }*/
    
    public static void main(String args[]){ 
        
        Scanner s = new Scanner(System.in);
        System.out.println("The Most Average Game");
        //HOOPLA
        
        System.out.println("Enter key (it won't be saved):");
        String k = s.next();
        s.nextLine();
        
        System.out.println("Gathering info...");
        
        URF urf = new URF(k);
        
        while(true){
            urf.fetchMatches();
            urf.iterateEpoch();
            urf.modifyAverage(10);
            System.out.println(urf.getMatchDuration());
        }
    }
}
