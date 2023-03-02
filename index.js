var removeDuplicates = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        nums[count] = nums[i];
        count++;
    }
    return {count,nums};
    // const set=new Set(nums);
    // const resArray=Array.from(set)
    // const removedLength=resArray.length
    // const removeDuplicatesArrayLength=nums.length-resArray.length
    // for(let i=0;i<removeDuplicatesArrayLength;i++){
    //     resArray.push('_')
    // }
    // return resArray
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))