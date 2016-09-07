function vehiclegel($scope,vehfactory)
{
    $scope.vehobj = vehfactory.createvehicle();
    $scope.vehobjs = [];
    $scope.add=function()
    {
        $scope.vehobjs.push({
            "vehno": $scope.vehobj.vehno,
            "vehdesc": $scope.vehobj.vehdesc

        });
    }
}