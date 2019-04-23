



var CopmonentTypes = {
    entity: 1,
    field: 2,

    optionset: 9,

    relationship: 10,

    entityKey: 14,

    role: 20,
    rolePrivilege: 21,
    view: 26,
    workflow: 29,

    emailTemplate: 36,

    ribbon: 50,

    chart: 59,


    form: 60,
    webResource: 61,
    sitemap: 62,

    connectionRole: 63,

    hierarchyRule: 65,

    app: 80,

    pluginAssembly: 91,

    pluginStep: 92,

    routingRule: 150,
    convertRule: 154,


}


var SetDefinitions = [
    {
        type: CopmonentTypes.entity,
        isChild: false,
        link: "/tools/solution/edit.aspx?id={{0}}",
        set: "EntityDefinitions({0})?$select=LogicalName,DisplayName",
        display: {
            description: "Entity",
            logicalName: "definition.LogicalName",
            displayName: "definition.DisplayName.UserLocalizedLabel.Label",
            parentlogicalName: null,
            class: "crm-entity",
        }
    },
    {
        type: CopmonentTypes.field,
        isChild: true,
        link: "/tools/systemcustomization/attributes/manageAttribute.aspx?appSolutionId={{0}}&attributeId={{1}}}&entityId={{2}}}",
        set: "EntityDefinitions({0})/Attributes({1})?$select=LogicalName,DisplayName",

        display: {
            description: "Field",
            logicalName: "definition.LogicalName",
            displayName: "definition.DisplayName.UserLocalizedLabel.Label",
            parentlogicalName: "definition.DisplayName.UserLocalizedLabel.Label",
            class: "crm-field",
        }
    },

    {
        type: CopmonentTypes.optionset,
        isChild: false,
        link: "/tools/systemcustomization/optionset/optionset.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "GlobalOptionSetDefinitions({0})?$select=Name,DisplayName",
        display: {
            description: "OptionSet",
            logicalName: "definition.Name",
            displayName: "definition.DisplayName.UserLocalizedLabel.Label",
            parentlogicalName: "",
            class: "crm-optionset",
        }
    },


    {
        type: CopmonentTypes.relationship,
        isChild: false,
        link: "/tools/systemcustomization/relationships/manageRelationship.aspx?appSolutionId={{0}}&entityId={{2}}&entityRelationshipId={{1}}&entityRole=referenced",
        set: "RelationshipDefinitions({0})",

        display: {
            class: "crm-relationship",
        }
    },

    {
        type: CopmonentTypes.entityKey,
        isChild: true,
        link: "/tools/systemcustomization/AlternateKeys/manageAlternateKeys.aspx?_bView=true&appSolutionId={{0}}&entityId={{2}}&entityKeyId={{1}}",
        set: "EntityDefinitions({0})/Keys({1})?$select=LogicalName,DisplayName",
        display: {
            description: "Entity key",
            logicalName: "definition.LogicalName",
            displayName: "definition.DisplayName.UserLocalizedLabel.Label",
            parentlogicalName: "",
            class: "crm-entitykey",
        }
    },

    {
        type: CopmonentTypes.role,
        isChild: false,
        link: "/biz/roles/edit.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "roles({0})?$select=name",
        display: {
            description: "Rol",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-role",
        }
    },

    {
        type: CopmonentTypes.rolePrivilege,
        isChild: false,
        link: "/biz/roles/edit.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "roles({0})?$select=name",

        display: {
            description: "Rol privilege",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-role",
        }
    },

    {
        type: CopmonentTypes.workflow,
        isChild: false,
        link: "/sfa/workflow/edit.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "workflows({0})?$select=name",
        display: {
            description: "Workflow",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-workflow",
        }
    },


    {
        type: CopmonentTypes.emailTemplate,
        isChild: false,
        link: "/tools/emailtemplateeditor/emailtemplateeditor.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "templates({0})?$select=name",
        display: {
            description: "Email template",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-emailtemplate",
        }
    },

    {
        type: CopmonentTypes.ribbon,
        isChild: false,
        link: null,
        set: "ribboncustomizations?$filter=ribboncustomizationid eq {0}&$select=name",
        display: {
            description: "Ribbon",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-ribbon",
        }
    },

    {
        type: CopmonentTypes.form,
        isChild: false,
        link: "/main.aspx?appSolutionId=%7b{0}%7d&etc=2&extraqs=formtype%3dmain%26formId%3d{1}%26action%3d-1&pagetype=formeditor",
        set: "systemforms({0})?$select=name",

        display: {
            description: "Form",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "definition.objecttypecode",
            class: "crm-form",
        }
    },

    {
        type: CopmonentTypes.chart,
        isChild: false,
        link: "/main.aspx?appSolutionId={{0}}&extraqs=etc=10382&id={{1}}&pagetype=vizdesigner#622052463",
        set: "savedqueryvisualizations({0})?$select=name",

        display: {
            description: "Chart",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "definition.objecttypecode",
            class: "crm-chart",
        }
    },

    {
        type: CopmonentTypes.view,
        isChild: false,
        link: "/tools/vieweditor/viewManager.aspx?appSolutionId={{0}}&entityId={{2}}&id={{1}}",
        set: "savedqueries({0})?$select=name",
        display: {
            description: "View",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "definition.objecttypecode",
            class: "crm-form",
        }
    },



    {
        type: CopmonentTypes.webResource,
        isChild: false,
        link: "/main.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&etc=9333&id={{1}}&pagetype=webresourceedit",
        set: "webresourceset({0})?$select=name",
        display: {
            description: "Web Resource",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-webresource",
        }
    },

    {
        type: CopmonentTypes.sitemap,
        isChild: false,
        link: "",
        set: "sitemaps",
        display: {
            description: "Sitemap",
            logicalName: "",
            displayName: "",
            parentlogicalName: "",
            class: "crm-sitemap",
        }
    },


    {
        type: CopmonentTypes.connectionRole,
        isChild: false,
        link: "/connections/connectionroles/edit.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "connectionroles({0})?$select=name",
        display: {
            description: "Connection role",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-connectionrole",
        }
    },


    {
        type: CopmonentTypes.hierarchyRule,
        isChild: false,
        link: "/tools/systemcustomization/HierarchyRules/manageHierarchyRule.aspx?_bEdit=true&appSolutionId={{0}}&entityId={{2}}&hierarchySettingId={1}",
        set: "hierarchyrules({0})?$select=name",
        display: {
            description: "Hierarchy rule",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-hierarchyrule",
        }
    },

    {
        type: CopmonentTypes.app,
        isChild: false,
        link: "/designer/app/{0}/{1}#/AppDesignerCanvas/{1}",
        set: "appmodules({0})?$select=name",
        display: {
            description: "App",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-app",
        }
    },

    {
        type: CopmonentTypes.pluginAssembly,
        isChild: false,
        link: null,
        set: "pluginassemblies({0})?$select=name",
        display: {
            description: "Plugin",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-assembly",
        }
    },

    {
        type: CopmonentTypes.pluginStep,
        isChild: false,
        link: null,
        set: "sdkmessageprocessingsteps({0})?$select=name",
        display: {
            description: "Plugin step",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-assemblystep",
        }
    },

    {
        type: CopmonentTypes.routingRule,
        isChild: false,
        link: "/main.aspx?appSolutionId={{0}}&etc=8181&extraqs=?_CreateFromId=%7b{0}%7d&_CreateFromType=7100&etc=8181&id=%7b{1}%7d&histKey=850460459&newWindow=true&pagetype=entityrecord",
        set: "routingrules({0})?$select=name",
        display: {
            description: "Routing rule",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-routingrule",
        }
    },

    {
        type: CopmonentTypes.convertRule,
        isChild: false,
        link: "/main.aspx?appSolutionId={{0}}&etc=9300&extraqs=?_CreateFromId=%7b{0}%7d&_CreateFromType=7100&etc=9300&id=%7b{1}%7d&histKey=925091788&newWindow=true&pagetype=entityrecord",
        set: "convertrules({0})?$select=name",
        display: {
            description: "Convert rule",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-convertrule",
        }
    },
]


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

        this.getPublishers = function () {
            return webApiGet('publishers')
                .then(response => { return response.data.value; })
        }

        this.getSolutionComponents = function (solutionId) {
            return webApiGet(`solutioncomponents?$filter=_solutionid_value eq ${solutionId}`)
                .then(response => { return response.data.value; })
        }


        this.addSolutionComponent = function (solutionComponentId, componentId, componentType, solutionUniqueName, addRequiredComponents, doNotIncludeSubcomponents) {
            return webApiPost
                (`AddSolutionComponent`,
                    {
                        ComponentId: componentId,
                        ComponentType: componentType,
                        SolutionUniqueName: solutionUniqueName,
                        AddRequiredComponents: addRequiredComponents,
                        DoNotIncludeSubcomponents: doNotIncludeSubcomponents,
                    })
                .then(response => { return response; })
        }



        this.getGenericResourceDefinition = function (definition, id, rootId) {

            var path = definition.isChild ?
                definition.set.replace("{0}", rootId).replace("{1}", id) :
                definition.set.replace("{0}", id);
            //console.log(path);
            return webApiGet(path)
                .then(response => {
                    if (typeof response.data.value != 'undefined' && Array.isArray(response.data.value)) {
                        return response.data.value[0];
                    }
                    return response.data
                })
        }


        this.all = function (promises) {
            /* const isArray = Array.isArray(promises);
            const promisesLength = isArray ?
                promises.length :
                Object.keys(promises).length;
            const maxParallel = 20;
            const modLength = promisesLength % maxParallel;
            const iterations = (promisesLength - modLength) / maxParallel;
            let promise = Promise.resolve();
            console.log("promises.length:" + promisesLength);
            console.log("modLength:" + modLength);
            console.log("iterations:" + iterations);
            if (iterations == 0) {
                return $q.all(promises);
            }
            for (let iterator = 0; iterator < iterations; iterator++) {
                var promiseSusbsetArray = [];
                var promiseSusbsetObject = {};
                if (isArray) {
                    promiseSusbsetArray = promises.slice(iterator * maxParallel, maxParallel);
                    console.log(promiseSusbsetArray);
                } else {
                    var keys = Object.keys(promises);
                    var keysSubset = keys.slice(iterator * maxParallel, maxParallel);
                    for (const key of keysSubset) {
                        promiseSusbsetObject[key] = promises[key];
                    }
                    console.log(promiseSusbsetObject);
                }
                promise = promise.then(items => {
                    console.log(items);
                    if (isArray) {
                        return $q.all(promiseSusbsetArray)
                    } else {
                        return $q.all(promiseSusbsetObject)
                    }
                });
            }
            return promise; */


            return $q.all(promises);
        }


        webApiPost = function (options, data) {
            const url = getApiUrl() + options;

            return $http.post(url, data, { "Accept": "application/json", "Content-Type": "application/json; charset=utf-8", "OData-MaxVersion": "4.0", "OData-Version": "4.0" })
                .then(response => {
                    return response;
                })
                .catch(function (error) {
                    console.log("Error:");
                    console.log(data);
                    console.log(error);

                });
        }


        webApiGet = function (options) {
            const url = getApiUrl() + options;
            console.log(url);
            return $http({
                method: 'GET',
                url: url
            })
                .then(response => {
                    return response;
                })
                .catch(function (data) {
                    console.log("Error:");
                    if (data.status == 403) { //forbiden
                        return webApiGet(options);
                    }
                    console.log(data);
                });
        }

        getApiUrl = function () {
            return `${GetGlobalContext().getClientUrl()}/api/data/v9.1/`;
        }

        this.getUrl = function () {
            return `${GetGlobalContext().getClientUrl()}`;
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



            $scope.$on('reloadSolutions', (event, data) => { console.log("requestedReloadSolutions"); $scope.reloadSolutions(); });

            $scope.reloadSolutions = function () {
                $scope.loadingSolutions = true;
                $scope.solutions.splice(0, $scope.solutions.length);
                xrmRepositoryService.getSolutions().then(solutions => {
                    $scope.solutions = solutions;
                    $scope.loadingSolutions = false;
                });
            }


            initialize = function () {
                $scope.solutions = [];
                $scope.solutionComponents = [];
                $scope.loadingSolutions = false;
                $scope.loadingSolutionComponents = false;
                $scope.selectedSolutions = [];
                $scope.selectedSolutionComponents = [];
                $scope.selectedSolution = null;
                $scope.reloadSolutions();
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
                        window.scrollTo(0, 0);
                        $scope.solutionComponents.splice(0, $scope.solutionComponents.length);
                        $scope.loadingSolutionComponents = true;
                        const solutionId = newValue["solutionid"];
                        xrmRepositoryService.getSolutionComponents(solutionId)
                            .then(solutionComponents => {
                                $scope.solutionComponents = solutionComponents;
                                let promiseObj = {};
                                for (const solutionComponent of solutionComponents) {

                                    const type = solutionComponent["componenttype"];
                                    const objectId = solutionComponent["objectid"];
                                    const rootSolutionObjectId = solutionComponent["rootsolutioncomponentid"];
                                    let rootObjectId = null;
                                    if (rootSolutionObjectId != null) {
                                        rootObjectId = $scope.getObjectIdFromSolutionObjectId(rootSolutionObjectId);
                                    }
                                    var promise = getPromiseForSolutionComponentDefinition(type, objectId, rootObjectId);
                                    if (promise != null) {
                                        promiseObj[objectId] = promise;
                                    }
                                }
                                return xrmRepositoryService.all(promiseObj);
                            }).then(definitions => {
                                for (const item of $scope.solutionComponents) {
                                    item["definition"] = {};
                                }
                                for (const objectId in definitions) {
                                    var value = definitions[objectId];
                                    setDefinitionToSolutionComponent(objectId, value);
                                }
                                $scope.loadingSolutionComponents = false;

                            })
                    } else {
                        $scope.solutionComponents.splice(0, $scope.solutionComponents.length);
                    }
                }
            });


            $scope.getObjectIdFromSolutionObjectId = function (solutionObjectId) {

                for (const solutionComponent of $scope.solutionComponents) {
                    var componentId = solutionComponent["solutioncomponentid"];
                    if (componentId.toLowerCase() == solutionObjectId.toLowerCase()) {
                        return solutionComponent["objectid"];
                    }
                }
                return null;
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

                var definition = getTypeDefinition(type);
                if (definition != null) {
                    return xrmRepositoryService.getGenericResourceDefinition(definition, objectId, rootObjectId);
                }
                return null
            }

            getTypeDefinition = function (type) {
                for (const definition of SetDefinitions) {
                    if (definition.type == type) {
                        return definition;
                    }
                }
                return null;
            }

            $scope.nonSolutionsSelected = function () {
                return typeof $scope.selectedSolutions != 'undefined' && $scope.selectedSolutions.length == 0;
            }

            $scope.oneSolutionSelected = function () {
                return typeof $scope.selectedSolutions != 'undefined' && $scope.selectedSolutions.length == 1;
            }

            $scope.moreThanOneSolutionSelected = function () {
                return typeof $scope.selectedSolutions != 'undefined' && $scope.selectedSolutions.length > 1;
            }

            $scope.mergeSolutions = function () {
                if ($scope.selectedSolutions.length < 2) {
                    $scope.raiseMessage("Error", "Selecciona más de una solución para hacer merge", null, "Ok");
                    return;
                }
                $scope.showMergeSolutionsModal({
                    backdrop: 'static',
                    keyboard: false
                });
            }


            $scope.showMergeSolutionsModal = function () {
                $('#mergeSolutionsModal').modal(null);
            }

            $scope.raiseMessage = function (title, text, ok, cancel) {
                $scope.errTitle = title;
                $scope.errText = text;
                $scope.errOk = ok;
                $scope.errCancel = cancel;

                $('#errorModal').modal(null);
            }


            initialize();

        },
        template:
            ['<div id="mainViewController">',

                //Toolbar
                '<div class="container">',
                '   <div class="row">',
                '       <span  ng-show="!loadingSolutions" style="font-size: 20px; margin: 10px; cursor: pointer;" ng-click="reloadSolutions()"><i class="fas fa-sync"></i></span>',
                '       <div class="btn-group" role="group" aria-label="Button group with nested dropdown">',
                '           <div class="btn-group" role="group">',
                '               <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
                '                   Solutions',
                '               </button>',
                '               <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">',
                '                   <a class="dropdown-item" href="#" ng-click="mergeSolutions()">Merge solutions</a>',
                '               </div>',
                '           </div>',
                '       </div>',
                '   </div>',
                '</div>', //container


                //Content
                '<div class="container" style="margin-top:20px; padding: 10px">',
                '   <div class="row">',
                '       <div class="col-md-4">',
                '           <h5 class="card-title">Solutions</h5>',
                '           <div ng-show="loadingSolutions" style="text-align:center;"><div>Loading solutions...</div><div class="spinner-border" role="status"></div></div>',
                '           <solution-list-view ng-if="solutions.length>0" solutions="solutions" selected-solutions="selectedSolutions"/>',
                '       </div>',
                '       <div class="col-md-8"  ng-if="selectedSolution!=null">',
                '           <h5 class="card-title">Solution components ({{selectedSolution.friendlyname}})</h5>',
                '           <div ng-show="loadingSolutionComponents" style="text-align:center;"><div>Loading solution components...</div><div class="spinner-border" role="status"></div></div>',
                '           <solution-component-list-view ng-if="solutionComponents.length>0" selected-solution="selectedSolution" solution-components="solutionComponents" selected-solution-components="selectedSolutionComponents"/>',
                '       </div>',
                '   </div>',
                '</div>',
                '<div>',


                //merge solutions modal
                '<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" id="mergeSolutionsModal">',
                '   <div class="modal-dialog modal-lg">',
                '       <div class="modal-content">',
                '           <merge-solutions-view  solutions="solutions" selected-solutions="selectedSolutions"/>',
                '       </div>',
                '   </div>',
                '</div>',


                //err message modal
                '<div class="modal" tabindex="-1" role="dialog" id="errorModal">',
                '   <div class="modal-dialog" role="document">',
                '       <div class="modal-content">',
                '           <div class="modal-header">',
                '               <h5 class="modal-title">{{ errTitle }}</h5>',
                '               <button type="button" class="close" data-dismiss="modal" aria-label="Close">',
                '                   <span aria-hidden="true">&times;</span>',
                '               </button>',
                '           </div>',
                '           <div class="modal-body">',
                '               <p>{{ errText }}</p>',
                '           </div>',
                '           <div class="modal-footer">',
                '               <button type="button" class="btn btn-primary"  ng-show="errOk!=null">{{ errOk }}</button>',
                '               <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-show="errCancel!=null">{{ errCancel }}</button>',
                '           </div>',
                '       </div>',
                '   </div>',
                '</div>',
                '</div>',
                '</div>'].join(""),
        replace: true
    };

}]);

app.directive('mergeSolutionsView', ['xrmRepositoryService', (xrmRepositoryService) => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            solutions: '=',
            selectedSolutions: '=',
        },
        controller: function ($scope, $element) {





            $scope.initialize = function () {
                $scope.bufferedSolutions = [];
                $scope.loadingSolutions = false;
                $scope.selectedExistingSolution = { value: null };
                $scope.solutionComponentsForMerge = [];
                $scope.currentComponentForMerge = 1;
                $scope.totalComponentForMerge = 0;
                $scope.steps = steps;
                $scope.mergeStep = steps.stop;
                $scope.reloadSolutions();
            }

            $scope.reloadSolutions = function () {
                $scope.loadingSolutions = true;
                $scope.bufferedSolutions = [];
                xrmRepositoryService.getSolutions()
                    .then(solutions => {
                        for (const solution of solutions) {
                            $scope.bufferedSolutions.push(solution);
                        }
                        $scope.loadingSolutions = false;
                    });
            }

            $scope.openSourceSolution = function (solution) {
                if (solution != null) {
                    const solutionId = solution["solutionid"];
                    const url = `${GetGlobalContext().getClientUrl()}/tools/solution/edit.aspx?id=${solutionId}`;
                    var win = window.open(url, '_blank');
                    win.focus();
                }
            }

            $scope.openSelectedExistingSolution = function () {
                if ($scope.selectedExistingSolution.value != null) {
                    const solutionId = $scope.selectedExistingSolution.value["solutionid"];
                    const url = `${GetGlobalContext().getClientUrl()}/tools/solution/edit.aspx?id=${solutionId}`;
                    var win = window.open(url, '_blank');
                    win.focus();
                }
            }

            $scope.newSolution = function () {
                const url = `${GetGlobalContext().getClientUrl()}/tools/solution/edit.aspx`;
                var win = window.open(url, '_blank');
                win.focus();
            }



            const steps = {
                stop: 0,
                gatheringComponents: 1,
                addingComponents: 2,
                complete: 3,
            }


            $scope.loadingMessage = function () {
                if ($scope.mergeStep == steps.stop) {
                    return null;
                }
                else if ($scope.mergeStep == steps.gatheringComponents) {
                    return `Gathering solution components...`;
                }
                else if ($scope.mergeStep == steps.addingComponents) {
                    return `Adding component ${$scope.currentComponentForMerge}/${$scope.totalComponentForMerge}...`;
                }
                else if ($scope.mergeStep == steps.complete) {
                    return `Merge completed!`;
                }
            };



            $scope.doMerge = function () {
                $scope.mergeStep = steps.gatheringComponents;
            }

            $scope.$watch('mergeStep', function (newValue, oldValue) {

                if (oldValue == steps.stop
                    && newValue == steps.gatheringComponents) {
                    $scope.gatherSolutionComponents();
                }
                else if (oldValue == steps.gatheringComponents
                    && newValue == steps.addingComponents) {
                    $scope.addComponents();
                }
                else if (oldValue == steps.addingComponents
                    && newValue == steps.complete) {
                }
            });


            $scope.addComponents = function () {
                let promise = Promise.resolve();
                const sortArray = $scope.solutionComponentsForMerge
                    .sort((a, b) => {
                        const componentType = a["componenttype"];
                        if (componentType == CopmonentTypes.entity) {
                            return -1;
                        }
                        return 1;
                    });
                for (let component of sortArray) {
                    promise = promise.then(k => {
                        const componentType = component["componenttype"];
                        var doNotIncludeSubComponents = componentType == CopmonentTypes.entity && component["rootcomponentbehavior"] == 1;
                        $scope.currentComponentForMerge++;
                        xrmRepositoryService.addSolutionComponent(
                            component["solutioncomponentid"],
                            component["objectid"],
                            componentType,
                            $scope.selectedExistingSolution.value["uniquename"],
                            false,
                            doNotIncludeSubComponents,
                        );

                    });
                }
                promise.then(response => {
                    $scope.mergeStep = steps.complete;
                })
            }

            $scope.gatherSolutionComponents = function () {
                let promises = [];
                for (const solution of $scope.selectedSolutions) {
                    promises.push(xrmRepositoryService.getSolutionComponents(solution["solutionid"]));
                }
                xrmRepositoryService.all(promises)
                    .then(solutionComponentsArrs => {
                        let allItems = [];
                        for (const solutionComponents of solutionComponentsArrs) {
                            for (const component of solutionComponents) {
                                allItems.push(component);
                            }
                        }

                        let sortedComponents = allItems.sort((a, b) => {
                            if (a["componenttype"] == CopmonentTypes.entity) {
                                return -1;
                            }
                            return 1;
                        });
                        for (const component of sortedComponents) {
                            $scope.upsertSolutionComponentToGatheredCoponents(component)
                        }
                        $scope.totalComponentForMerge = $scope.solutionComponentsForMerge.length;
                        console.log($scope.solutionComponentsForMerge);
                        $scope.mergeStep = steps.addingComponents;
                        //$scope.mergeStep = steps.stop;
                    });
            }

            $scope.upsertSolutionComponentToGatheredCoponents = function (newSolutionComponent) {
                let found = false;

                for (const solutionComponent of $scope.solutionComponentsForMerge) {
                    if (newSolutionComponent["objectid"] == solutionComponent["objectid"]) {
                        found = true;
                        if (newSolutionComponent["componenttype"] == CopmonentTypes.entity
                            && newSolutionComponent["rootcomponentbehavior"] == 0) {
                            solutionComponent["rootcomponentbehavior"] = 0;
                        }
                        break;
                    }
                }
                if (!found) {
                    $scope.solutionComponentsForMerge.push(newSolutionComponent);
                }
            }

            $scope.closeModal = function () {
                $scope.initialize();
                $scope.$parent.$broadcast('reloadSolutions', null)
                $("#mergeSolutionsModal").modal('toggle');
            }

            $scope.initialize();
        },
        template:
            ['<div>',
                '   <div ng-show="mergeStep == steps.stop">',
                '       <div >',
                '           <div class="container">',
                '               <div class="jumbotron" style="margin: 10px">',
                '                   <h4 >Solutions for merge</h1>',
                '                   <p>All the components from this solutions will be added to the destination solution without modify anything in the sources</p>',
                '                   <hr>',
                '                   <div style="    max-height: 200px; overflow-y: auto;">',
                '                       <ul class="list-group">',
                '                           <li ng-repeat="solution in selectedSolutions" class="list-group-item"><span>{{$index + 1}} - {{solution.friendlyname}}</span><span style="font-size: 20px; margin: 10px; cursor: pointer;" ng-click="openSourceSolution(solution)" ><i class="fas fa-external-link-alt"></i></span></li>',
                '                       </ul>',
                '                   </div>',
                '               </div>',
                '           </div>',
                '       </div>',
                '       <div >',
                '           <div class="container">',
                '               <div class="jumbotron" style="margin: 10px">',
                '                   <h4 >Solution result</h1>',
                '                   <p>All the components from the source solutions will be added to this solution</p>',
                '                   <hr>',
                '                   <div ng-if="loadingSolutions" style="text-align:center;"><div>Loading solutions...</div><div class="spinner-border" role="status"></div></div>',
                '                   <div  class="row" ng-if="!loadingSolutions">',
                '                       <span style="font-size: 20px; margin: 10px; cursor: pointer;" ng-click="reloadSolutions()"><i class="fas fa-sync"></i></span>',
                '                       <autocomplete-view placeholder="Solution" data="bufferedSolutions" display-property="friendlyname"  selected-item="selectedExistingSolution.value"/>',
                '                       <span style="font-size: 20px; margin: 10px; cursor: pointer;" ng-click="openSelectedExistingSolution()" ng-show="selectedExistingSolution.value != null"><i class="fas fa-external-link-alt"></i></span>',
                '                       <span style="font-size: 20px; margin: 10px; cursor: pointer;" ng-click="newSolution()"><i class="fas fa-plus"></i></span>',
                '                   </div>',
                '               </div>',
                '           </div>',
                '       </div>',
                '       <div ng-show="selectedExistingSolution.value != null">',
                '           <div class="container">',
                '               <div class="jumbotron" style="margin: 10px">',
                '                   <h4 >Merge</h1>',
                '                   <p>Click in merge button for start the merge</p>',
                '                   <hr>',
                '                   <div>',
                '                       <button type="button" class="btn btn-primary" ng-click="doMerge()">Merge!</button>',
                '                   </div>',
                '               </div>',
                '           </div>',
                '       </div>',
                '   </div>',
                '   <div >',
                '       <div >',
                '           <div class="container">',
                '               <div class="jumbotron" style="margin: 10px" ng-show="mergeStep == steps.gatheringComponents || mergeStep == steps.addingComponents">',
                '                   <h4 >Working...</h1>',
                '                   <div style="text-align: center;"><div>{{loadingMessage()}}</div><div class="spinner-border" role="status"></div></div>',
                '               </div>',
                '               <div class="jumbotron" style="margin: 10px" ng-show="mergeStep == steps.complete">',
                '                   <h4 >Merge completed!</h1>',
                '                   <p>The merge has been completed. {{totalComponentForMerge}} solution components has been added to the result solution</p>',
                '                   <p>Open result solution: ',
                '                       <span style="font-size: 20px; margin: 10px; cursor: pointer;" ng-click="openSelectedExistingSolution()" ng-show="selectedExistingSolution.value != null"><i class="fas fa-external-link-alt"></i></span>',
                '                   </p>',
                '                   <button type="button" class="btn btn-primary" ng-click="closeModal()">Close</button>',
                '               </div>',
                '           </div>',
                '       </div>',
                '   </div>',
                '</div>'].join(""),
        replace: true
    };

}]);




app.directive('autocompleteView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            data: '=',
            selectedItem: '=',
            placeholder: '@',
            displayProperty: '@',
        },
        controller: function ($scope, $element) {

            $scope.autocomplete = function (inp, arr) {
                var currentFocus;
                inp.addEventListener("input", function (e) {
                    var a, b, i, val = this.value;
                    closeAllLists();
                    if (!val) { return false; }
                    currentFocus = -1;
                    a = document.createElement("DIV");
                    a.setAttribute("id", this.id + "autocomplete-list");
                    a.setAttribute("class", "autocomplete-items");
                    this.parentNode.appendChild(a);
                    for (let i = 0; i < arr.length; i++) {
                        let display = arr[i][$scope.displayProperty];
                        if (display.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                            b = document.createElement("DIV");
                            b.innerHTML = "<strong>" + display.substr(0, val.length) + "</strong>";
                            b.innerHTML += display.substr(val.length);
                            b.innerHTML += "<input type='hidden' value='" + display + "'>";
                            b.addEventListener("click", function (e) {
                                $scope.$apply(() => { $scope.selectedItem = arr[i]; });
                                inp.value = this.getElementsByTagName("input")[0].value;
                                closeAllLists();
                            });
                            a.appendChild(b);
                        }
                    }
                });
                inp.addEventListener("keydown", function (e) {
                    var x = document.getElementById(this.id + "autocomplete-list");
                    if (x) x = x.getElementsByTagName("div");
                    if (e.keyCode == 40) {
                        currentFocus++;
                        addActive(x);
                    } else if (e.keyCode == 38) { //up
                        currentFocus--;
                        addActive(x);
                    } else if (e.keyCode == 13) {
                        e.preventDefault();
                        if (currentFocus > -1) {
                            if (x) x[currentFocus].click();
                        }
                    }
                });
                function addActive(x) {
                    if (!x) return false;
                    removeActive(x);
                    if (currentFocus >= x.length) currentFocus = 0;
                    if (currentFocus < 0) currentFocus = (x.length - 1);
                    x[currentFocus].classList.add("autocomplete-active");
                }
                function removeActive(x) {
                    for (var i = 0; i < x.length; i++) {
                        x[i].classList.remove("autocomplete-active");
                    }
                }
                function closeAllLists(elmnt) {
                    var x = document.getElementsByClassName("autocomplete-items");
                    for (var i = 0; i < x.length; i++) {
                        if (elmnt != x[i] && elmnt != inp) {
                            x[i].parentNode.removeChild(x[i]);
                        }
                    }
                }
                document.addEventListener("click", function (e) {
                    closeAllLists(e.target);
                });
            }

            $scope.autocomplete(document.getElementById("autocompleteInput"), $scope.data);
        },
        template:
            ['<div>',
                '   <div class="autocomplete" style="width:300px;">',
                '       <input id="autocompleteInput" type="text" placeholder="{{placeholder}}" />',
                '   </div>',
                '</div>'].join(""),
        replace: true
    };

});

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
                var description = `Not implemented (componenttype=${type})`;
                var logicalName = "";
                var displayName = "";
                var parentlogicalName = "";
                var extraData = null;
                var isRelationship = false;
                var _class = "";
                if (type == CopmonentTypes.relationship) {
                    description = "Relationship";
                    logicalName = "definition.IntersectEntityName";
                    displayName = "definition.DisplayName.UserLocalizedLabel.Label";
                    parentlogicalName = "definition.DisplayName.UserLocalizedLabel.Label";
                    isChild = true;
                    isRelationship = true;

                    var relationshipType = $scope.getProperty("definition.RelationshipType");
                    var shortType = null;
                    var entity1 = null;
                    var entity2 = null;
                    var intersect = null;

                    if (relationshipType == "ManyToManyRelationship") {
                        shortType = "N:N"
                        entity1 = $scope.getProperty("definition.Entity1LogicalName");
                        entity2 = $scope.getProperty("definition.Entity2LogicalName");
                        intersect = $scope.getProperty("definition.IntersectEntityName");
                    } else if (relationshipType == "OneToManyRelationship") {
                        shortType = "1:N"
                        entity1 = $scope.getProperty("definition.ReferencedEntity");
                        entity2 = $scope.getProperty("definition.ReferencingEntity");
                        intersect = $scope.getProperty("definition.SchemaName");
                    } else if (relationshipType == "ManyToOneRelationship") {
                        shortType = "N:1"
                        entity1 = $scope.getProperty("definition.ReferencedEntity");
                        entity2 = $scope.getProperty("definition.ReferencingEntity");
                        intersect = $scope.getProperty("definition.SchemaName");
                    }
                    extraData = `${shortType} from ${entity1} to ${entity2} (${intersect})`;
                    _class = "crm-relationship";

                } else {
                    let definition = getTypeDefinition(type);
                    if (definition != null) {
                        _class = definition.display.class;
                        isChild = definition.isChild;
                        description = definition.display.description;
                        logicalName = definition.display.logicalName;
                        displayName = definition.display.displayName;
                        parentlogicalName = definition.display.parentlogicalName;
                    }

                }
                $scope.class = _class;
                $scope.extraData = extraData;
                $scope.logicalName = logicalName;
                $scope.displayName = displayName;
                $scope.parentlogicalName = parentlogicalName;
                $scope.isChild = isChild;
                $scope.isRelationship = isRelationship;
                $scope.typeDescription = description;

                $('[data-toggle="tooltip"]').tooltip();
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


            $scope.showAllSubcomponentsIncluded = function () {
                return $scope.solutionComponent["componenttype"] == CopmonentTypes.entity && $scope.solutionComponent["rootcomponentbehavior"] == 0;
            }

            getTypeDefinition = function (type) {
                for (const definition of SetDefinitions) {
                    if (definition.type == type) {
                        return definition;
                    }
                }
                return null;
            }


            $scope.getClass = function () {
                return `crm-resource ${$scope.class}`;
            }

            setTypeDescription();

            $scope.getDisplayForParent = function () {
                var displayName = $scope.getProperty($scope.displayName);
                var logicalName = $scope.getProperty($scope.logicalName);
                var extraData = $scope.extraData;
                return `${displayName} (${logicalName}) [${extraData}]`;
            }

            $scope.getDisplayForChild = function () {

                var parentLogicalName = $scope.getProperty($scope.parentlogicalName);
                var displayName = $scope.getProperty($scope.displayName);
                var logicalName = $scope.getProperty($scope.logicalName);
                var extraData = $scope.extraData;

                return `(Entity=${parentLogicalName}) ${displayName} (${logicalName}) [${extraData}]`;
            }

            $scope.getDisplayForRelationship = function () {
                var extraData = $scope.extraData;
                return `${extraData}`;
            }




        },
        template:
            ['<div>',
                '<div ng-show="!isChild" class="row"><span class="col-md-3 badge badge-secondary {{getClass()}}">{{typeDescription}}</span><span ng-show="showAllSubcomponentsIncluded()" class="badge badge-danger">+ All subcomponents</span><span class="col-md-8 crm-row" data-toggle="tooltip" data-placement="top" ng-attr-title="{{getDisplayForParent()}}">{{getDisplayForParent()}}</span></div>',
                '<div ng-show="isChild && !isRelationship" class="row"><span class="col-md-3 badge badge-secondary {{getClass()}}">{{typeDescription}}</span><span  class="col-md-8 crm-row" data-toggle="tooltip" data-placement="top" ng-attr-title="{{getDisplayForChild()}}">{{getDisplayForChild()}}</span></div>',
                '<div ng-show="isChild && isRelationship" class="row"><span class="col-md-3 badge badge-secondary {{getClass()}}">{{typeDescription}}</span><span  class="col-md-8 crm-row" data-toggle="tooltip" data-placement="top" ng-attr-title="{{getDisplayForRelationship()}}">{{getDisplayForRelationship()}}</span></div>',
                '</div>'].join(""),
        replace: true
    };

});

app.directive('solutionComponentListView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            selectedSolution: '=',
            solutionComponents: '=',
            selectedSolutionComponents: '=',
        },
        controller: function ($scope, $element) {

            $scope.itemsPerPage = 100;
            $scope.currentPage = 1;
            $scope.pagesNumber = 1;

            $scope.filter = null;
            $scope.includingComponentsType = [];
            $scope.displayComponentsType = {};
            $scope.selectedComponentsType = [];



            $scope.setSolutionComponentsForPage = function () {
                $scope.filteredSolutionComponents = [];
                var filtered = $scope.getFilteredSolutionComponents($scope.solutionComponents);

                $scope.pagesNumber = Math.floor(filtered.length / $scope.itemsPerPage) + 1;
                var paged = filtered;
                if ($scope.pagesNumber > 1) {
                    const startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
                    const endIndex = Math.min($scope.currentPage * $scope.itemsPerPage, filtered.length - 1);
                    paged = filtered.slice(startIndex, endIndex);
                }
                for (const component of paged) {
                    $scope.filteredSolutionComponents.push(component);
                }

            }

            $scope.$watch('selectedComponentsType', function (newValue, oldValue) {
                $scope.setSolutionComponentsForPage();
            }, true);

            $scope.selectIncludeAllComponents = function () {
                $scope.selectedComponentsType = $scope.includingComponentsType;
            }
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


            /* $scope.$watch('filter', function (newValue, oldValue) {
                $scope.loading = true;
                if (typeof newValue != 'undefined' && newValue != oldValue) {
                    var filtered = filterFunction($scope.solutionComponents);
                    setFilteredSolutionComponents(filtered);
                }
                $scope.loading = false;

            }) */

            $scope.$watch('currentPage', function (newValue, oldValue) {
                if (newValue != null && newValue != oldValue) {
                    $scope.setSolutionComponentsForPage();
                }
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

            $scope.initialize = function () {
                $scope.filter = null;
                $scope.includingComponentsType = [];
                $scope.displayComponentsType = {};
                $scope.selectedComponentsType = [];
                for (const key in CopmonentTypes) {
                    let value = CopmonentTypes[key];
                    for (const component of $scope.solutionComponents) {
                        if (component["componenttype"] == value) {
                            $scope.displayComponentsType[value] = key;
                            $scope.includingComponentsType.push(value);
                            break;
                        }
                    }
                }

                for (const componentType of $scope.includingComponentsType) {
                    $scope.selectedComponentsType.push(componentType);
                }
                $scope.setSolutionComponentsForPage();
                //setFilteredSolutionComponents($scope.solutionComponents);
            }

            $scope.getFilteredSolutionComponents = function (solutionComponents) {
                var filteredSolutionComponents = [];
                for (const solutionComponent of solutionComponents) {
                    const type = solutionComponent["componenttype"];
                    if ($scope.selectedComponentsType.indexOf(parseInt(type)) > -1) {
                        filteredSolutionComponents.push(solutionComponent);
                    }
                }
                return filteredSolutionComponents;
            }

            $scope.openResource = function (solutionComponent) {
                const componentId = solutionComponent["objectid"];
                const type = solutionComponent["componenttype"];
                let definition = getTypeDefinition(type);
                let link = definition.link;
                if (link == null) {
                    alert("Selected component cannot be opened");
                    return;
                }
                let isChild = definition.isChild;
                const rootSolutionObjectId = solutionComponent["rootsolutioncomponentid"];
                let parentEntityId = isChild ? getObjectIdFromSolutionObjectId(rootSolutionObjectId) : null;
                let solutionId = $scope.selectedSolution["solutionid"];
                let path = isChild ?
                    link.replaceAll("{0}", solutionId)
                        .replaceAll("{1}", componentId)
                        .replaceAll("{2}", parentEntityId) :
                    link.replaceAll("{0}", solutionId)
                        .replaceAll("{1}", componentId);

                const url = `${GetGlobalContext().getClientUrl()}${path}`;
                console.log(url);
                var win = window.open(url, '_blank');
                win.focus();
            }

            getObjectIdFromSolutionObjectId = function (solutionObjectId) {
                for (const solutionComponent of $scope.solutionComponents) {
                    if (solutionComponent["solutioncomponentid"] == solutionObjectId) {
                        return solutionComponent["objectid"];
                    }
                }
            }

            getTypeDefinition = function (type) {
                for (const definition of SetDefinitions) {
                    if (definition.type == type) {
                        return definition;
                    }
                }
                return null;
            }


            $scope.backPage = function () {
                $scope.currentPage--;
            }

            $scope.nextPage = function () {
                $scope.currentPage++;
            }

            $scope.initialize();

        },
        template:
            ['<div>',
                '<div class="form-group">',
                '   <label for="exampleFormControlSelect2">Filter components (Ctrl + click)<span class="badge badge-secondary" style="margin-left: 10px; cursor: pointer;" ng-click="selectIncludeAllComponents()">Add all filters</span></label>',
                '   <select multiple class="form-control" ng-model="selectedComponentsType" convert-to-number>',
                '       <option ng-repeat="type in includingComponentsType" ng-value="type">{{displayComponentsType[type]}}</option>',
                '   </select>',
                /* '<input type="text" class="form-control" ng-model="filter"  placeholder="Search solution components" ng-model-options="{ debounce: 500 }"/>', */
                '</div>',
                '<div ng-if="loading" style="text-align:center;"><div>Filtering solution components...</div><div class="spinner-border" role="status"></div></div>',
                
                '<div class="row">',
                '   <div class="col-md-1"  ng-show="pagesNumber>1 && currentPage!=1" ng-click="backPage()" style="cursor: pointer"><i class="fa fa-arrow-left"></i></div>',
                '   <div class="col-md-10" >Page {{currentPage}}/{{pagesNumber}}</div>',
                '   <div class="col-md-1"  ng-show="pagesNumber>1 && currentPage!=pagesNumber" ng-click="nextPage()" style="cursor: pointer"><i class="fa fa-arrow-right"></i></div>',
                '</div>',

                '<ul class="list-group" ng-if="!loading">',
                '   <li class="list-group-item list-group-item-action" ng-class="isSelected(solutionComponent) ? \'active\' : undefined" ng-repeat="solutionComponent in filteredSolutionComponents" style="cursor:pointer;">',
                '       <div class="row">',
                '           <div class="col-md-1"  ng-click="selectSolutionComponent(solutionComponent)" ng-show="isSelected(solutionComponent)"><i class="fa fa-check-square"></i></div>',
                '           <div class="col-md-1"  ng-click="selectSolutionComponent(solutionComponent)" ng-show="!isSelected(solutionComponent)"><i class="fa fa-square"></i></div>',
                '           <div class="col-md-1" style="width: auto; "><span>{{$index + 1}}.</span></div>',
                '           <solution-component-view class="col-md-8" ng-if="solutionComponent!=null && solutionComponent.definition!=null" solution-component="solutionComponent"  ng-click="selectOneSolutionComponent(solutionComponent)" />',
                //'           <div style="margin-left: 10px" ng-click="openResource(solutionComponent)"><i class="fa fa-external-link-alt" aria-hidden="true"></i></div>',
                '       </div>',
                '   </li>',
                
                '</ul>',
                
                '<div class="row">',
                '   <div class="col-md-1"  ng-show="pagesNumber>1 && currentPage!=1" ng-click="backPage()" style="cursor: pointer"><i class="fa fa-arrow-left"></i></div>',
                '   <div class="col-md-10" >Page {{currentPage}}/{{pagesNumber}}</div>',
                '   <div class="col-md-1"  ng-show="pagesNumber>1 && currentPage!=pagesNumber" ng-click="nextPage()" style="cursor: pointer"><i class="fa fa-arrow-right"></i></div>',
                '</div>',
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

            $scope.openResource = function (solution) {
                const url = `${GetGlobalContext().getClientUrl()}/tools/solution/edit.aspx?id=%7b${solution["solutionid"]}%7d#`;
                var win = window.open(url, '_blank');
                win.focus();
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
                '       <div class="row ">',
                '           <div style="width: 30px;"  ng-click="selectSolution(solution)" ng-show="isSelected(solution)"><i class="fa fa-check-square"></i></div>',
                '           <div style="width: 30px;"  ng-click="selectSolution(solution)" ng-show="!isSelected(solution)"><i class="fa fa-square"></i></div>',
                '           <div style="width: auto; margin-right:10px"><span>{{$index + 1}}.</span></div>',
                '           <solution-view solution="solution" ng-click="selectOneSolution(solution)" />',
                '           <div style="margin-left: 10px" ng-click="openResource(solution)"><i class="fa fa-external-link-alt" aria-hidden="true"></i></div>',
                '       </div>',
                '   </li>',
                '</ul>',

                '</div>'].join(""),
        replace: true
    };

});

app.directive('alertView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '=',
            text: '=',
            ok: '=',
            cancel: '=',
            show: '=',
        },
        controller: function ($scope, $element) {
            $scope.showCancel = function () {
                return typeof ($scope.cancel) != 'undefined' && $scope.cancel != null;
            }

            $scope.showOk = function () {
                return typeof ($scope.ok) != 'undefined' && $scope.ok != null;
            }
            $scope.$watch('show', function (newValue, oldValue) {
                if (newValue != null && newValue != oldValue) {
                    if (newValue) {
                        $('#errorModal').modal({
                            backdrop: 'static',
                            keyboard: false
                        });
                    }
                }
            })
        },
        template:
            ['<div>',
                '<div class="modal" tabindex="-1" role="dialog" id="errorModal">',
                '   <div class="modal-dialog" role="document">',
                '       <div class="modal-content">',
                '           <div class="modal-header">',
                '               <h5 class="modal-title">{{title}}</h5>',
                '               <button type="button" class="close" data-dismiss="modal" aria-label="Close">',
                '                   <span aria-hidden="true">&times;</span>',
                '               </button>',
                '           </div>',
                '           <div class="modal-body">',
                '               <p>{{text}}</p>',
                '           </div>',
                '           <div class="modal-footer">',
                '               <button type="button" class="btn btn-primary"  ng-show="showOk()">{{ok}}</button>',
                '               <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-show="showCancel()">{{cancel}}</button>',
                '           </div>',
                '       </div>',
                '   </div>',
                '</div>',
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

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};