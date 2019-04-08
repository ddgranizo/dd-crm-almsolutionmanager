var CopmonentTypes = {
    entity: 1,
    field: 2,

    relationship: 10,

    form: 60,
    webResource: 61,

    pluginAssembly: 91,
}



var app = angular.module("almApp", [])
    .controller("almController", ["$scope", ($scope) => {
        $scope.todos = [
            { text: 'learn AngularJS', done: true },
            { text: 'build an AngularJS app', done: false }];
    }]);

app.service('xrmRepositoryService', ['$window', '$http', '$q', '$rootScope',
    function ($window, $http, $q, $rootScope) {

        this.getSolutions = function () {
            return webApiGet('solutions')
                .then(response => { return response.data.value; })
        }

        this.getSolutions = function () {
            return webApiGet('solutions')
                .then(response => { return response.data.value; })
        }

        this.getSolutionComponents = function (solutionId) {
            return webApiGet(`solutioncomponents?$filter=_solutionid_value eq ${solutionId}`)
                .then(response => { return response.data.value; })
        }

        this.getEntityDefinition = function (id) {
            return webApiGet(`EntityDefinitions(${id})`)
                .then(response => { return response.data })
        }

        this.getFieldDefinition = function (rootId, id) {
            return webApiGet(`EntityDefinitions(${rootId})/Attributes(${id})`)
                .then(response => { return response.data })
        }

        this.getRelationshipDefinition = function (id) {
            return webApiGet(`RelationshipDefinitions(${id})`)
                .then(response => { return response.data })
        }

        this.getFormDefinition = function (id) {
            return webApiGet(`systemforms(${id})`)
                .then(response => { return response.data })
        }


        this.getPluginAssemblyDefinition = function (id) {
            return webApiGet(`pluginassemblies(${id})`)
                .then(response => { return response.data })
        }

        this.getWebResourceDefinition = function (id) {
            return webApiGet(`webresourceset(${id})`)
                .then(response => { return response.data })
        }


        this.all = function (promises) {
            return $q.all(promises);
        }

        webApiGet = function (options) {
            const url = getApiUrl() + options;
            console.log(url);
            return $http({
                method: 'GET',
                url: url
            }).then(response => {
                return response;
            }).catch(function (data) {
                console.log("Error:");
                console.log(data);
            });;
        }

        getApiUrl = function () {
            return `${GetGlobalContext().getClientUrl()}/api/data/v9.1/`;
        }

    }]);

app.directive('mainView', ["xrmRepositoryService", (xrmRepositoryService) => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            context: '=',
        },
        controller: function ($scope, $element) {



            xrmRepositoryService.getSolutions().then(solutions => {
                $scope.solutions = solutions;
                $scope.loadingSolutions = false;
            });

            initialize = function () {
                $scope.solutions = [];
                $scope.solutionComponents = [];
                $scope.loadingSolutions = true;
                $scope.loadingSolutionComponents = false;
                $scope.selectedSolutions = [];
                $scope.selectedSolutionComponents = [];
                $scope.selectedSolution = null;
            }

            $scope.$watch('selectedSolutions', function (newValue, oldValue) {
                if (newValue.length == 1) {
                    $scope.selectedSolution = newValue[0];
                } else {
                    $scope.selectedSolution = null;
                }
            }, true);

            $scope.$watch('selectedSolution', function (newValue, oldValue) {
                if (typeof newValue != 'undefined' && newValue != oldValue) {
                    if (newValue != null) {
                        $scope.solutionComponents.splice(0, $scope.solutionComponents.length);
                        $scope.loadingSolutionComponents = true;
                        xrmRepositoryService.getSolutionComponents(newValue["solutionid"]).then(solutionComponents => {
                            $scope.solutionComponents = solutionComponents;
                            let promiseObj = {};
                            for (const solutionComponent of solutionComponents) {

                                const type = solutionComponent["componenttype"];
                                const objectId = solutionComponent["objectid"];
                                const rootSolutionObjectId = solutionComponent["rootsolutioncomponentid"];
                                const rootObjectId = getObjectIdFromSolutionObjectId(rootSolutionObjectId);
                                var promise = getPromiseForSolutionComponentDefinition(type, objectId, rootObjectId);
                                if (promise != null) {
                                    promiseObj[objectId] = promise;
                                }
                            }
                            return xrmRepositoryService.all(promiseObj);
                        }).then(definitions => {

                            for (const objectId in definitions) {
                                var value = definitions[objectId];
                                setDefinitionToSolutionComponent(objectId, value);
                            }
                            $scope.loadingSolutionComponents = false;
                            console.log($scope.solutionComponents);
                        })
                    } else {
                        $scope.solutionComponents.splice(0, $scope.solutionComponents.length);
                    }
                }
            });


            getObjectIdFromSolutionObjectId = function (solutionObjectId) {
                for (const solutionComponent of $scope.solutionComponents) {
                    if (solutionComponent["solutioncomponentid"] == solutionObjectId) {
                        return solutionComponent["objectid"];
                    }
                }
            }

            setDefinitionToSolutionComponent = function (objectId, definition) {
                for (const solutionComponent of $scope.solutionComponents) {
                    if (solutionComponent["objectid"] == objectId) {
                        solutionComponent["definition"] = definition;
                        break;
                    }
                }
            }

            getPromiseForSolutionComponentDefinition = function (type, objectId, rootObjectId) {
                if (type == CopmonentTypes.entity) {
                    return xrmRepositoryService.getEntityDefinition(objectId);
                }
                else if (type == CopmonentTypes.field) {
                    return xrmRepositoryService.getFieldDefinition(rootObjectId, objectId);
                }
                else if (type == CopmonentTypes.form) {
                    return xrmRepositoryService.getFormDefinition(objectId);
                }
                else if (type == CopmonentTypes.pluginAssembly) {
                    return xrmRepositoryService.getPluginAssemblyDefinition(objectId);
                }
                else if (type == CopmonentTypes.webResource) {
                    return xrmRepositoryService.getWebResourceDefinition(objectId);
                }
                else if (type == CopmonentTypes.relationship) {
                    return xrmRepositoryService.getRelationshipDefinition(objectId);
                }
                
                return null;
            }

            initialize();
        },
        template:
            ['<div>',

                //Toolbar
                '',
                '<div class="container">',
                '   <div class="btn-group" role="group" aria-label="Button group with nested dropdown">',
                '   <button type="button" class="btn btn-secondary">1</button>',
                '   <button type="button" class="btn btn-secondary">2</button>',
                '       <div class="btn-group" role="group">',
                '           <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
                '               Dropdown',
                '           </button>',
                '           <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">',
                '               <a class="dropdown-item" href="#">Dropdown link</a>',
                '               <a class="dropdown-item" href="#">Dropdown link</a>',
                '           </div>',
                '       </div>',
                '   </div>',
                '</div>', //container


                //Content
                '<div class="container" style="margin-top:20px">',
                '   <div class="row">',
                '       <div class="col-sm">',
                '           <h5 class="card-title">Solutions</h5>',
                '           <div ng-show="loadingSolutions" style="text-align:center;"><div>Loading solutions...</div><div class="spinner-border" role="status"></div></div>',
                '           <solution-list-view ng-if="solutions.length>0" solutions="solutions" selected-solutions="selectedSolutions"/>',
                '       </div>',
                '       <div class="col-sm"  ng-if="selectedSolution!=null">',
                '           <h5 class="card-title">Solution components ({{selectedSolution.friendlyname}})</h5>',
                '           <div ng-show="loadingSolutionComponents" style="text-align:center;"><div>Loading solution components...</div><div class="spinner-border" role="status"></div></div>',
                '           <solution-component-list-view ng-if="solutionComponents.length>0" solution-components="solutionComponents" selected-solution-components="selectedSolutionComponents"/>',
                '       </div>',
                '   </div>',
                '</div>',

                '</div>'].join(""),
        replace: true
    };

}]);


app.directive('solutionComponentView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            solutionComponent: '=',
        },
        controller: function ($scope, $element) {


            $scope.isChild = false;
            $scope.isRelationship = false;
            setTypeDescription = function () {
                var type = $scope.solutionComponent["componenttype"];
                var isChild = false;
                var description = `Not implemented (componenttype=${type}`;
                var logicalName = "";
                var displayName = "";
                var parentlogicalName = "";
                var extraData = null;
                var isRelationship = false;
                if (type == CopmonentTypes.entity) {
                    description = "Entity";
                    logicalName = "definition.LogicalName";
                    displayName = "definition.DisplayName.UserLocalizedLabel.Label";
                } else if (type == CopmonentTypes.field) {
                    description = "Field";
                    logicalName = "definition.LogicalName";
                    displayName = "definition.DisplayName.UserLocalizedLabel.Label";
                    parentlogicalName = "definition.DisplayName.UserLocalizedLabel.Label";
                    isChild = true;
                } else if (type == CopmonentTypes.form) {
                    description = "Form";
                    logicalName = "";
                    displayName = "definition.name";
                    parentlogicalName = "definition.objecttypecode";
                    isChild = true;
                }
                else if (type == CopmonentTypes.pluginAssembly) {
                    description = "Plugin";
                    logicalName = "";
                    displayName = "definition.name";
                    parentlogicalName = "definition.objecttypecode";
                    isChild = false;
                }
                else if (type == CopmonentTypes.webResource) {
                    description = "Web Resource";
                    logicalName = "";
                    displayName = "definition.name";
                    parentlogicalName = "definition.objecttypecode";
                    isChild = false;
                }
                else if (type == CopmonentTypes.relationship) {
                    description = "Relationship";
                    logicalName = "definition.IntersectEntityName";
                    displayName = "definition.DisplayName.UserLocalizedLabel.Label";
                    parentlogicalName = "definition.DisplayName.UserLocalizedLabel.Label";
                    isChild = true;
                    isRelationship = true;
                    console.log( $scope.solutionComponent.definition);
                    var relationshipType = $scope.getProperty("definition.RelationshipType");
                    //console.log(relationshipType);
                    var shortType = null;
                    var entity1 = null;
                    var entity2 = null;
                    var intersect = null;
                    
                    if (relationshipType == "ManyToManyRelationship") {
                        shortType = "N:N"
                        entity1 = $scope.getProperty("definition.Entity1LogicalName");
                        entity2 = $scope.getProperty("definition.Entity2LogicalName");
                        intersect = $scope.getProperty("definition.IntersectEntityName");
                    }else if (relationshipType == "OneToManyRelationship") {
                        shortType = "1:N"
                        entity1 = $scope.getProperty("definition.ReferencedEntity");
                        entity2 = $scope.getProperty("definition.ReferencingEntity");
                        intersect = $scope.getProperty("definition.SchemaName");
                    }else if (relationshipType == "ManyToOneRelationship") {
                        shortType = "N:1"
                        entity1 = $scope.getProperty("definition.ReferencedEntity");
                        entity2 = $scope.getProperty("definition.ReferencingEntity");
                        intersect = $scope.getProperty("definition.SchemaName");
                    }

                    extraData = `${shortType} from ${entity1} to ${entity2} (${intersect})`;
                }

                $scope.extraData = extraData;
                $scope.logicalName = logicalName;
                $scope.displayName = displayName;
                $scope.parentlogicalName = parentlogicalName;
                $scope.isChild = isChild;
                $scope.isRelationship = isRelationship;
                $scope.typeDescription = description;
            }

            $scope.getProperty = function (path, obj = $scope.solutionComponent, separator = '.') {
                if (typeof obj == 'undefined' || obj == null) {
                    return null;
                }
                if (typeof path == 'undefined' || path == null) {
                    return null;
                }
                var properties = Array.isArray(path) ? path : path.split(separator);
                return properties.reduce((prev, curr) => prev && prev[curr], obj);
            }

           
            setTypeDescription();
            

            
        },
        template:
            ['<div>',
                '<div ng-show="!isChild">[{{typeDescription}}] {{getProperty(displayName)}} ({{getProperty(logicalName)}}) [{{extraData}}]</div>',
                '<div ng-show="isChild && !isRelationship"> [{{typeDescription}}] (Entity={{getProperty(parentlogicalName)}}) {{getProperty(displayName)}} ({{getProperty(logicalName)}}) [{{extraData}}]</div>',
                '<div ng-show="isChild && isRelationship"> [{{typeDescription}}] {{extraData}}</div>',
                '</div>'].join(""),
        replace: true
    };

});


app.directive('solutionComponentListView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            solutionComponents: '=',
            selectedSolutionComponents: '=',
        },
        controller: function ($scope, $element) {


            $scope.selectOneSolutionComponent = function (solutionComponent) {
                $scope.selectedSolutionComponents.splice(0, $scope.selectedSolutionComponents.length)
                $scope.selectedSolutionComponents.push(solutionComponent);
            }

            $scope.selectSolutionComponent = function (solutionComponent) {
                var inSelectedArray = isSolutionComponentInSelectedArray(solutionComponent);
                if (inSelectedArray) {
                    var index = $scope.selectedSolutionComponents.map(k => { return k["solutioncomponentid"] }).indexOf(solutionComponent["solutioncomponentid"]);
                    $scope.selectedSolutionComponents.splice(index, 1);
                } else {
                    $scope.selectedSolutionComponents.push(solutionComponent);
                }
            }

            $scope.isSelected = function (solutionComponent) {
                return isSolutionComponentInSelectedArray(solutionComponent);
            }

            isSolutionComponentInSelectedArray = function (solutionComponent) {
                return $scope.selectedSolutionComponents.filter(k => { return solutionComponent["solutioncomponentid"] == k["solutioncomponentid"] }).length > 0;
            }

            $scope.$watch('filter', function (newValue, oldValue) {
                $scope.loading = true;
                if (typeof newValue != 'undefined' && newValue != oldValue) {
                    var filtered = filterFunction($scope.solutionComponents);
                    setFilteredSolutionComponents(filtered);
                }
                $scope.loading = false;

            })


            function filterFunction(allSolutionComponents) {
                var filter = $scope.filter;
                if (filter == null || filter == "") {
                    return allSolutionComponents;
                } else {
                    var searchFields = ["friendlyname", "uniquename"];
                    var filteredSolutionComponents = $scope.solutionComponents.filter(solutionComponent => {
                        for (const field of searchFields) {
                            if (solutionComponent[field].toLowerCase().indexOf(filter) > -1) {
                                return true;
                            }
                        }
                        return false;
                    });
                    return filteredSolutionComponents;
                }
            }

            initialize = function () {
                $scope.filter = null;
                setFilteredSolutionComponents($scope.solutionComponents);
            }

            setFilteredSolutionComponents = function (solutionComponents) {
                $scope.filteredSolutionComponents = [];
                for (const solutionComponent of solutionComponents) {
                    $scope.filteredSolutionComponents.push(solutionComponent);
                }
            }

            initialize();

        },
        template:
            ['<div>',
                '<div class="form-group">',
                '<input type="text" class="form-control" ng-model="filter"  placeholder="Search solution components" ng-model-options="{ debounce: 500 }"/>',
                '</div>',
                '<div ng-if="loading" style="text-align:center;"><div>Filtering solution components...</div><div class="spinner-border" role="status"></div></div>',
                '<ul class="list-group" ng-if="!loading">',
                '   <li class="list-group-item list-group-item-action" ng-class="isSelected(solutionComponent) ? \'active\' : undefined" ng-repeat="solutionComponent in filteredSolutionComponents" style="cursor:pointer;">',
                '       <div class="row">',
                '       <div style="width: 30px;"  ng-click="selectSolutionComponent(solutionComponent)" ng-show="isSelected(solutionComponent)"><i class="fa fa-check-square"></i></div>',
                '       <div style="width: 30px;"  ng-click="selectSolutionComponent(solutionComponent)" ng-show="!isSelected(solutionComponent)"><i class="fa fa-square"></i></div>',
                '       <solution-component-view ng-if="solutionComponent!=null && solutionComponent.definition!=null" solution-component="solutionComponent"  ng-click="selectOneSolutionComponent(solutionComponent)" />',
                '       </div>',
                '   </li>',
                '</ul>',

                '</div>'].join(""),
        replace: true
    };

});


app.directive('solutionListView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            solutions: '=',
            selectedSolutions: '=',
        },
        controller: function ($scope, $element) {


            $scope.selectOneSolution = function (solution) {
                $scope.selectedSolutions.splice(0, $scope.selectedSolutions.length)
                $scope.selectedSolutions.push(solution);
            }

            $scope.selectSolution = function (solution) {
                var inSelectedArray = isSolutionInSelectedArray(solution);
                if (inSelectedArray) {
                    var index = $scope.selectedSolutions.map(k => { return k["solutionid"] }).indexOf(solution["solution"]);
                    $scope.selectedSolutions.splice(index, 1);
                } else {
                    $scope.selectedSolutions.push(solution);
                }
            }

            $scope.isSelected = function (solution) {
                return isSolutionInSelectedArray(solution);
            }

            isSolutionInSelectedArray = function (solution) {
                return $scope.selectedSolutions.filter(k => { return solution["solutionid"] == k["solutionid"] }).length > 0;
            }

            $scope.$watch('filter', function (newValue, oldValue) {
                $scope.loading = true;
                if (typeof newValue != 'undefined' && newValue != oldValue) {
                    var filtered = filterFunction($scope.solutions);
                    setFilteredSolutions(filtered);
                }
                $scope.loading = false;

            })


            function filterFunction(allSolutions) {
                var filter = $scope.filter;
                if (filter == null || filter == "") {
                    return allSolutions;
                } else {
                    var searchFields = ["friendlyname", "uniquename"];
                    var filteredSolutions = $scope.solutions.filter(solution => {
                        for (const field of searchFields) {
                            if (solution[field].toLowerCase().indexOf(filter) > -1) {
                                return true;
                            }
                        }
                        return false;
                    });
                    return filteredSolutions;
                }
            }

            initialize = function () {
                $scope.filter = null;
                setFilteredSolutions($scope.solutions);
            }

            setFilteredSolutions = function (solutions) {
                $scope.filteredSolutions = [];
                for (const solution of solutions) {
                    $scope.filteredSolutions.push(solution);
                }
            }

            initialize();

        },
        template:
            ['<div>',
                '<div class="form-group">',
                '<input type="text" class="form-control" ng-model="filter"  placeholder="Search solutions" ng-model-options="{ debounce: 500 }"/>',
                '</div>',
                '<div ng-if="loading" style="text-align:center;"><div>Filtering solutions...</div><div class="spinner-border" role="status"></div></div>',
                '<ul class="list-group" ng-if="!loading">',
                // 
                '   <li class="list-group-item list-group-item-action" ng-class="isSelected(solution) ? \'active\' : undefined" ng-repeat="solution in filteredSolutions" style="cursor:pointer;">',
                '       <div class="row">',
                '       <div style="width: 30px;"  ng-click="selectSolution(solution)" ng-show="isSelected(solution)"><i class="fa fa-check-square"></i></div>',
                '       <div style="width: 30px;"  ng-click="selectSolution(solution)" ng-show="!isSelected(solution)"><i class="fa fa-square"></i></div>',
                '       <solution-view solution="solution" ng-click="selectOneSolution(solution)" />',
                '       </div>',
                '   </li>',
                '</ul>',

                '</div>'].join(""),
        replace: true
    };

});


app.directive('solutionView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            solution: '=',
            isSelected: '=',
        },
        controller: function ($scope, $element) {
        },
        template:
            ['<div>',
                '<div ng-bind="solution.friendlyname"></div>',
                '</div>'].join(""),
        replace: true
    };

});

