module.exports = {
    calcTotalRun: function (activityList) {
        let totalRunDistance = 0;
        for (let i = 0; i < activityList.length; i++) {
            //if the sport is running
            if (activityList[i].sport === "Run")
                //if the unit is miles
                if (activityList[i].units === "mi") {
                    totalRunDistance += parseInt(activityList[i].distance)
                } else {
                    //convert to miles
                    totalRunDistance += (parseInt(activityList[i].distance) * 0.621371)
                }
        }
        return totalRunDistance
    },

    calcTotalSwim: function (activityList) {
        let totalSwimDistance = 0;
        for (let i = 0; i < activityList.length; i++) {
            //if the sport is swimming
            if (activityList[i].sport === "Swim")
                //if the unit is yards
                if (activityList[i].units === "yards") {
                    totalSwimDistance += parseInt(activityList[i].distance)
                } else {
                    //convert to yards
                    totalSwimDistance += (parseInt(activityList[i].distance) * 1.09361)
                }
        }
        return totalSwimDistance
    },

    calcTotalBike: function (activityList) {
        let totalBikeDistance = 0;
        for (let i = 0; i < activityList.length; i++) {
            //if the sport is biking
            if (activityList[i].sport === "Ride")
                //if the unit is miles
                if (activityList[i].units === "mi") {
                    totalBikeDistance += parseInt(activityList[i].distance)
                } else {
                    //convert to yards
                    totalBikeDistance += (parseInt(activityList[i].distance) * .621371)
                }
        }
        return totalBikeDistance;
    }
}