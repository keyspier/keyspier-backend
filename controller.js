import { execFile } from 'child_process'


//start service fucntion

const startService = async (req, res) => {
    console.log("getting users...");
    

    const child = execFile('k_main.exe', [], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      console.log(stdout);
    });
};

//stop service fucntion
const stopService = async (req, res) => {
    console.log("stop service...");

    
        process.exit(0);
   
    
    
    
};



export { startService, stopService };