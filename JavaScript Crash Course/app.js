const statusRef = document.querySelector(`.status`);
//Here we're creating constant references for our code. The code is searching for the references inside our HTML and will use them here
const videoRef = document.querySelector(`.video`);

function getSubscriptionStatus() {
  //creating a promise starts with `return` followed by `new` and (with a capitol P)`Promise`
  //inside the () we write `resolve, reject`. basically we want to run the code to have the promise resolve. otherwise it will reject
  return new Promise((resolve, reject) => {
    //here we can even set a time function for our promise to activate
    setTimeout(() => {
      resolve(`VIP`);
    }, 1000);
  });
}

//Here we're creating a new promise. We're basically looking at what the users subscription status is and based on that the console decides what to show them
function getVideo(getSubscriptionStatus) {
  //we put getVideo(getSubscriptionStatus) so the console can refer to the previous code we ran above
  return new Promise((resolve, reject) => {
    //we add some `if` and `else if` statements with our using of the promise to determine what to show the user
    if (getSubscriptionStatus === `VIP`) {
      resolve(`Show Video`);
    } else if (getSubscriptionStatus === `FREE`) {
      resolve(`Show Trailer`);
    } else {
      reject(`No Video`);
    }
  });
}

//It gets tricky here. We want to add the Subscription Status into the HTML as well as add the Video Viewing Status into the HTML
async function main() {
    //first we'll add in the sub status
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  //next we're gonna do whats called a `try and catch`. They're basically if else statements but used specifically for the java code
  //So if the sub status is `VIP`, the console looks for that
  try {
    const playVideo = await getVideo(status);
    //it found it in the promise! now we want to put it into the HTML like this:
    videoRef.innerHTML = playVideo;
    //let's say though the user wasn't subscribed, that's when the console will look to use our `catch` statement below
    // (e) in this case is the error code that the system runs when the sub status is undefined or the user isn't subbed
  } catch (e) {
    //we'll go ahead and console log that error statement
    console.log(e);
    //and then we'll put that error statment into the HTML
    videoRef.innerHTML = e;
  }
}

//always add a main(); section down here
main();
