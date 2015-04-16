
package riotapi;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.SwingWorker;

/**
 *
 * @author JsKingBoo
 */
public class URFFrame {
    
    private JFrame frame;
    private JLabel outputLabel;
    private JTextField keyInput;
    private JButton proceed;
    
    private URF urf = null;
    
    public URFFrame(){
        setupGUI();
    }
    
    private void setupGUI(){
        frame = new JFrame("Average Game Length");
        frame.setSize(200, 140);
        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent windowEvent){
                System.exit(0);
            }        
        });    

        outputLabel = new JLabel("Enter key and press \"Proceed\"", JLabel.CENTER);
        keyInput = new JTextField("Enter your dev key here (won't be saved)", 45);
        proceed = new JButton("Proceed!");
        
        frame.getContentPane().add(outputLabel, BorderLayout.CENTER);
        frame.getContentPane().add(keyInput, BorderLayout.NORTH);
        frame.getContentPane().add(proceed, BorderLayout.SOUTH);
        frame.setVisible(true);
       
        keyInput.addFocusListener(new FocusListener(){

            boolean touched = false;
            
            @Override
            public void focusGained(FocusEvent e) {
                if (!touched){
                    keyInput.setText("");
                    touched = true;
                }
            }

            @Override
            public void focusLost(FocusEvent e) {
            }
        
        });
        
        proceed.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                
                String key = keyInput.getText();
                urf = new URF(key);
                
                outputLabel.setText("Loading...");
                
                class stuffManager extends SwingWorker<String, Object> { //much description
                    
                    @Override
                    public String doInBackground(){

                        while (true) {
                            java.awt.EventQueue.invokeLater(new Runnable() {
                            public void run() {
                                //System.out.println("executed");
                                //System.out.println("Its happening!");

                                urf.fetchMatches();
                                urf.iterateEpoch();
                                urf.modifyAverage(1);
                                //calculate time and then output

                                long magic = 60; //lol

                                long totalSeconds = urf.getMatchDuration().longValue();             
                                long seconds = totalSeconds % magic;
                                long totalMinutes = totalSeconds / magic;
                                long minutes = totalMinutes % magic;
                                long hours = totalMinutes / magic;                

                                //converting "1" to "01"
                                String secZ = "";
                                if (seconds < 10){
                                    secZ = "0";
                                }
                                String minZ = "";
                                if (minutes < 10){
                                    minZ = "0";
                                }

                                //return "Average game length: " + hours + ":" + minZ + minutes + ":" + secZ + seconds;          
                                outputLabel.setText("Average game length: " + hours + ":" + minZ + minutes + ":" + secZ + seconds);
                                
                                }
                            });
                            
                            try {
                                Thread.sleep(1000);
                            } catch (InterruptedException e) {
                                e.printStackTrace();
                            }
                        }
                        /*
                            System.out.println("Its happening!");

                            urf.fetchMatches();
                            urf.iterateEpoch();
                            urf.modifyAverage(1);
                            //calculate time and then output

                            long magic = 60; //lol

                            long totalSeconds = urf.getMatchDuration().longValue();             
                            long seconds = totalSeconds % magic;
                            long totalMinutes = totalSeconds / magic;
                            long minutes = totalMinutes % magic;
                            long hours = totalMinutes / magic;                

                            //converting "1" to "01"
                            String secZ = "";
                            if (seconds < 10){
                                secZ = "0";
                            }
                            String minZ = "";
                            if (minutes < 10){
                                minZ = "0";
                            }

                            return "Average game length: " + hours + ":" + minZ + minutes + ":" + secZ + seconds;          
                        */
                    }
                    
                    @Override
                    protected void done(){
                        try {          
                            outputLabel.setText(get());
                        } catch (InterruptedException ex) {
                            Logger.getLogger(URFFrame.class.getName()).log(Level.SEVERE, null, ex);
                        } catch (ExecutionException ex) {
                            Logger.getLogger(URFFrame.class.getName()).log(Level.SEVERE, null, ex);
                        }
                       
                    }
                    
                }
                
                (new stuffManager()).execute();
            }

        });

    }
    
    public String amAwesome(){
        return "Yup! :D";
    }
    
    public static void main (String args[]) {
        URFFrame I = new URFFrame();
        System.out.println(I.amAwesome());
    }
}