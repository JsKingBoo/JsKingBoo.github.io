package riotapi;

import java.applet.Applet;
import java.awt.Button;
import java.awt.Graphics;
import java.awt.Label;
import java.awt.TextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 *
 * @author JsKingBoo
 */
public class URFViewer extends Applet {
    
    private TextField keyInput;
    private TextField timeOutput;
    private Label paused;
    
    URF urf;
    
    public void init () {
   
     // Construct the TextFields
     this.keyInput = new TextField("Enter development key here (won't be saved)", 43);
     
     this.timeOutput = new TextField(40);
     this.timeOutput.setEditable(false);
     
     this.paused = new Label("PAUSED: API requests exceeded");
     paused.setVisible(false);
     
     Button b = new Button("    Go!    ");

     // add the button to the layout
     this.add(keyInput);
     this.add(b);
     this.add(timeOutput);
     this.add(paused);

     // specify that action events sent by the
     // button or the input TextField should be handled 
     // by the same CapitalizerAction object
     URFHandler urfh = new URFHandler(keyInput, timeOutput, paused);
     b.addActionListener(urfh);
     this.keyInput.addActionListener(urfh);
    }    
    
    class URFHandler implements ActionListener {

        private TextField in;
        private TextField out;
        private Label l;

        public URFHandler(TextField in, TextField out, Label ell) {
            this.in = in;
            this.out = out;
            this.l = ell;
        }

        @Override
        public void actionPerformed(ActionEvent a) {

            String s = in.getText();
            urf = new URF(s);
            
            out.setText("Loading...");
            
            while(true){
                urf.fetchMatches();
                urf.iterateEpoch();
                urf.modifyAverage(1);

                //calculate time and then output
                
                //lel
                long magic = 60;

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

                out.setText("Average game length: " + hours + ":" + minZ + minutes + ":" + secZ + seconds);          

            }
        }        
    }      
}
