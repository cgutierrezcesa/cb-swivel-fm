import * as Rox from 'rox-browser';
import { deviceType } from "react-device-detect";



            const Flags = {
             enableTutorial: new Rox.Flag(),
            
             };

             export const userList = [
              {
                device: deviceType,
              
              }]

             export const configurationFetchedHandler = fetcherResults => {
              if (fetcherResults.hasChanges && fetcherResults.fetcherStatus === 'APPLIED_FROM_NETWORK') {
                window.location.reload(false)
              }
            }

          

        async function initRollout() {
            const options = {
              configurationFetchedHandler: configurationFetchedHandler,
              user: userList, 
            }
          
            // Register the flags with Rollout
            Rox.register('Swivel', Flags);
          
            // Setup the Rollout key
            await Rox.setup('62cf73334d686c52925958d5', options);
        
            if (Flags.enableTutorial.isEnabled()) {
                console.log('enableTutorial flag is true');
                // TODO:  Put your code here that needs to be gated
              }else{
                  console.log("NOT WORKING")
              }
          
           
            }
            
            initRollout().then(function() {
                console.log('Done loading Rollout');
              });
    
    
        export default Flags;
        
        
       


        
