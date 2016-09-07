function ownerfactory()
{
    var _createowner=function(val)
    {
        if (val == undefined)
            return new owner();
    }
    return {
        createowner:_createowner

    }
}