function vehiclefactory()
{
    var _createvehicle=function(val)
    {
        if (val == undefined)
            return new vehicle();
    }

    return {createvehicle:_createvehicle}

}