// get input from command line then put into an array
const profileDataArgs = process.argv.slice(2, process.argv.length);

//print each element of new array 
const printProfileData = profileDataArr => 
{
    //array method to iterate through array 
    profileDataArr.forEach(profileItem => console.log(profileItem));
};


printProfileData(profileDataArgs);