function ownergel($scope,pfactory)
{
    $scope.ownerobj = pfactory.createowner();
    $scope.ownerobjs = [];
    $scope.ownerobjs.push({ "name": "" });
    $scope.ownername = [];

    $scope.add=function()
    {
        $scope.ownerobjs.push({
            "name": $scope.ownerobj.name,
            "phoneno":$scope.ownerobj.phoneno

        })
      
    }
}