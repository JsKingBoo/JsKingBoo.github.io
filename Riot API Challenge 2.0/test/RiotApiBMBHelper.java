package riotapibmbhelper;

import constant.Region;
import dto.Match.MatchDetail;
import dto.Match.Timeline;
import java.io.FileReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;
import main.java.riotapi.RiotApi;
import main.java.riotapi.RiotApiException;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;

/**
 *
 * @author kids
 */
public class RiotApiBMBHelper {

    /**
     * @param args the command line arguments
     */
    private static int currentMatchIndex = 1040;
    //constants
    private static final int API_WAIT_TIME = 3000;
    private static final int NO_OF_MATCHES = 10000;
    private static final int NO_OF_CHAMPS = 126;
    private static Timer timer = new Timer();
    private static RiotApi api = new RiotApi("key");

    //setup champion/brawler array; id >> brawler list
    private static Map<Integer, Integer[]> champData = new HashMap();

    public static void main(String[] args) {
        api.setRegion(Region.NA);
        for (int i = 1; i <= 432; i++){
            champData.put(i, new Integer[4]);
        }
        runTimer();
    }
    
    public static void runTimer(){
        //iterate through every match
        timer.scheduleAtFixedRate(new TimerTask() {            
            @Override
            public void run() {
                System.out.println("currentMatchIndex: " + currentMatchIndex);
                long matchID = getMatchID(currentMatchIndex);
                MatchDetail matchInfo = null;
                try {
                    matchInfo = api.getMatch(matchID, true);
                } catch (RiotApiException ex) {
                    //Logger.getLogger(RiotApiBMBHelper.class.getName()).log(Level.SEVERE, null, ex);
                    //print what you have
                    System.out.println("BENCHMARK");
                    System.out.println("var merge2 = {");
                    for (int k = 1; k <= 432; k++){
                        System.out.println("\"" + k + "\": " + Arrays.toString(champData.get(k)) + ",");
                    }        
                    System.out.println("}");
                    //runTimer();
                }
                int[] tempChampList = new int[10];
                int[] tempBrawlerList = new int[10];
                
                //add all participants to the tempChampList
                for (int i = 0; i < matchInfo.getParticipants().size(); i++){
                    tempChampList[i] = matchInfo.getParticipants().get(i).getChampionId();
                }
                
                //add brawler data
                //iterate through all frames looking for brawler purchase data
                Timeline timeline = matchInfo.getTimeline();
                for (int i = 0; i < timeline.getFrames().size(); i++){
                    //no events in frame, continue
                    if (timeline.getFrames().get(i).getEvents() == null){
                        continue;
                    }
                    //System.out.println("searching for events");
                    //search for eventType = "ITEM_PURCHASED";
                    for (int j = 0; j < timeline.getFrames().get(i).getEvents().size(); j++){
                        if (timeline.getFrames().get(i).getEvents().get(j).getEventType().equals("ITEM_PURCHASED")){
                            //System.out.println("item");
                            //check if the item bought is a brawler
                            if (timeline.getFrames().get(i).getEvents().get(j).getItemId() >= 3611 && timeline.getFrames().get(i).getEvents().get(j).getItemId() <= 3614){
                                //its a brawler, add to list
                                tempBrawlerList[timeline.getFrames().get(i).getEvents().get(j).getParticipantId() - 1] = timeline.getFrames().get(i).getEvents().get(j).getItemId();
                                //System.out.println(timeline.getFrames().get(i).getEvents().get(j).getItemId());
                            }
                        }
                    }
                }
                
                //add this to champData array
                for (int i = 0; i < 10; i++){
                    //THIS GUY FORGOT TO BUY A BRAWLER
                    if (tempBrawlerList[i] == 0){
                        tempBrawlerList[i] = 3611;
                    }
                    //System.out.println(tempBrawlerList[i]);
                    //get old brawler array [razor, iron, plund, ockle]
                    Integer[] oldArray = champData.get(tempChampList[i]);
                    //get old brawler value
                    Integer oldValue = oldArray[tempBrawlerList[i] - 3611];
                    if (oldValue == null){
                        oldValue = 0;
                    }
                    
                    //System.out.println(i + ", " + tempBrawlerList[i]);
                    //System.out.println(Arrays.toString(oldArray) + ", " + oldValue);
                    
                    //reset and reapply
                    oldArray[tempBrawlerList[i] - 3611] = oldValue + 1;
                    //re-add to champData
                    champData.put(tempChampList[i], oldArray);
                }
                
                currentMatchIndex++;
                if (currentMatchIndex > NO_OF_MATCHES){
                    //print
                    for (int k = 0; k < 432; k++){
                        System.out.println(k + ": " + Arrays.toString(champData.get(k)));
                    }
                    
                    timer.cancel();
                    timer.purge();
                    return;
                }
            }
        }, API_WAIT_TIME, API_WAIT_TIME);        
    }
    
    public static long getMatchID(int i){
        JSONParser parser = new JSONParser();   
        try {
 
            Object obj = parser.parse(new FileReader("NA.json"));
 
            JSONArray jsonObject = (JSONArray) obj;
            
            return (long) jsonObject.get(i);
 
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }
    
}
