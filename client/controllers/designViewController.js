var designViewController = angular.module('designViewController', []);

designViewController.controller('designViewController', function($scope, pictureService, landingTextService){
    $scope.activeTab = 'est';
    $scope.changeActiveTab = function(item){
        $scope.activeTab = item;
    }
    $scope.estDesign = true;
    $scope.engDesign = false;
    $scope.finDesign = false;
    $scope.rusDesign = false;

    $scope.changeEng = function(){
        $scope.estDesign = false;
        $scope.engDesign = true;
        $scope.finDesign = false;
        $scope.rusDesign = false;
    }

    $scope.changeEst = function(){
        $scope.estDesign = true;
        $scope.engDesign = false;
        $scope.finDesign = false;
        $scope.rusDesign = false;
    }

    $scope.changeFin = function(){
        $scope.finDesign = true;
        $scope.estDesign = false;
        $scope.engDesign = false;
        $scope.rusDesign = false;
    }

    $scope.changeRus = function(){
        $scope.finDesign = false;
        $scope.estDesign = false;
        $scope.engDesign = false;
        $scope.rusDesign = true;
    }



    // LANDING PAGE ESTONIAN VERSION

    landingTextService.getLandingText("workerTitle", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTitle = "There is nothing yet inserted";

        }else{
            $scope.workerTitle = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertWorkerTitle = function(){
        var update = "";
        update = $scope.workerTitle;
        if($scope.workerTitle === "{{editWorkerTitle}}"){
            update = $scope.editWorkerTitle;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("workerTitle", update, "ee").then(function(data){
            landingTextService.getLandingText("workerTitle", "ee").then(function(data){
                if(data.text == null){
                    $scope.workerTitle = "Nothing here";
                }
                $scope.workerTitle = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerTitle.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitle", val, "ee");
    })
    */

    landingTextService.getLandingText("workerText", "ee").then(function(data){
        if(data.text == null){
            $scope.workerText = "There is nothint yet inserted";
        }else{
            $scope.workerText = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertWorkerText = function(){
        var update = "";
        update = $scope.workerText;
        if($scope.workerText === "{{editWorkerText}}"){
            update = $scope.editWorkerText;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("workerText", update, "ee").then(function(data){
            landingTextService.getLandingText("workerText", "ee").then(function(data){
                if(data.text == null){
                    $scope.workerText = "Nothing here";
                }
                $scope.workerText = data.text;
            })
        });
    }
    /*
    $scope.$watch('worker.text', function(val){
        landingTextService.addOrUpdateLandingText("workerText", val, "ee");
    })
    */


    landingTextService.getLandingText("menuTitle", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTitle = "There is nothint yet inserted";
        }else{
            $scope.menuTitle = data.text
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertMenuTitle = function(){
        var update = "";
        update = $scope.menuTitle;
        if($scope.menuTitle === "{{editMenuTitle}}"){
            update = $scope.editMenuTitle;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("menuTitle", update, "ee").then(function(data){
            landingTextService.getLandingText("menuTitle", "ee").then(function(data){
                if(data.text == null){
                    $scope.menuTitle = "Nothing here";
                }
                $scope.menuTitle = data.text;
            })
        });
    }
    /* $scope.$watch('menuTitle.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitle", val, "ee");
    })
    */

    landingTextService.getLandingText("menuText", "ee").then(function(data){
        if(data.text == null){
            $scope.menuText = "There is nothint yet inserted";
        }else{
            $scope.menuText = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertMenuText = function(){
        var update = "";
        update = $scope.menuText;
        if($scope.menuText === "{{editMenuText}}"){
            update = $scope.editMenuText;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("menuText", update, "ee").then(function(data){
            landingTextService.getLandingText("menuText", "ee").then(function(data){
                if(data.text == null){
                    $scope.menuText = "Nothing here";
                }
                $scope.menuText = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuText.text', function(val){
        landingTextService.addOrUpdateLandingText("menuText", val, "ee");
    })
    */

    landingTextService.getLandingText("tastingText", "ee").then(function(data){
        if(data.text == null){
            $scope.tastingText = "There is nothint yet inserted";
        }else{
            $scope.tastingText = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertTastingText = function(){
        var update = "";
        update = $scope.tastingText;
        if($scope.tastingText === "{{editTastingText}}"){
            update = $scope.editTastingText;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("tastingText", update, "ee").then(function(data){
            landingTextService.getLandingText("tastingText", "ee").then(function(data){
                if(data.text == null){
                    $scope.tastingText = "Nothing here";
                }
                $scope.tastingText = data.text;
            })
        });
    }
    /*
    $scope.$watch('tastingText.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingText", val, "ee");
    })
    */

    landingTextService.getLandingText("eventTitle", "ee").then(function(data){
        if(data.text == null){
            $scope.eventTitle = "There is nothint yet inserted";
        }else{
            $scope.eventTitle = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertEventTitle = function(){
        var update = "";
        update = $scope.eventTitle;
        if($scope.eventTitle === "{{editEventTitle}}"){
            update = $scope.editEventTitle;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("eventTitle", update, "ee").then(function(data){
            landingTextService.getLandingText("eventTitle", "ee").then(function(data){
                if(data.text == null){
                    $scope.eventTitle = "Nothing here";
                }
                $scope.eventTitle = data.text;
            })
        });
    }
    /*
    $scope.$watch('eventTitle.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitle", val, "ee");
    })
    */
    /*
    landingTextService.getLandingText("contactCall", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCall = "There is nothint yet inserted";
        }else{
            $scope.contactCall = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })*/

    landingTextService.getLandingText("contactCallEst", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCallEst = "There is nothint yet inserted";
        }else{
            $scope.contactCallEst = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactCallEst = function(){
        var update = "";
        update = $scope.contactCallEst;
        if($scope.contactCallEst === "{{editContactCallEst}}"){
            update = $scope.editContactCallEst;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactCallEst", update, "ee").then(function(data){
            landingTextService.getLandingText("contactCallEst", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactCallEst = "Nothing here";
                }
                $scope.contactCallEst = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactCall.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCall", val, "ee");
    })
    */
    /*
    $scope.$watch('contactCallEst.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallEst", val, "ee");
    })
    */

    landingTextService.getLandingText("contactVisitEst", "ee").then(function(data){
        if(data.text == null){
            $scope.contactVisitEst = "There is nothint yet inserted";
        }else{
            $scope.contactVisitEst = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactVisitEst = function(){
        var update = "";
        update = $scope.contactVisitEst;
        if($scope.contactVisitEst === "{{editContactVisitEst}}"){
            update = $scope.editContactVisitEst;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactVisitEst", update, "ee").then(function(data){
            landingTextService.getLandingText("contactVisitEst", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactVisitEst = "Nothing here";
                }
                $scope.contactVisitEst = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactVisitEst.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitEst", val, "ee");
    })
    */

    landingTextService.getLandingText("contactEmailEst", "ee").then(function(data){
        if(data.text == null){
            $scope.contactEmailEst = "There is nothint yet inserted";
        }else{
            $scope.contactEmailEst = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactEmailEst = function(){
        var update = "";
        update = $scope.contactEmailEst;
        if($scope.contactEmailEst === "{{editContactEmailEst}}"){
            update = $scope.editContactEmailEst;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactEmailEst", update, "ee").then(function(data){
            landingTextService.getLandingText("contactEmailEst", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactEmailEst = "Nothing here";
                }
                $scope.contactEmailEst = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactEmailEst.text', function(val){
        landingTextService.addOrUpdateLandingText("contactEmailEst", val, "ee");
    })
    */

    landingTextService.getLandingText("contactTimeWorkWeek", "ee").then(function(data){
        if(data.text == null){
            $scope.workWeekTime = "Nothing here";
        }
        $scope.workWeekTime = data.text;
    })
    $scope.insertWorkWeek = function(){
        var update = "";
        update = $scope.workWeekTime;
        if($scope.workWeekTime === "{{editWorkWeekTime}}"){
            update = $scope.editWorkWeekTime;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeek", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWorkWeek", "ee").then(function(data){
                if(data.text == null){
                    $scope.workWeekTime = "Nothing here";
                }
                $scope.workWeekTime = data.text;
            })
        });
    }

    landingTextService.getLandingText("contactTimeWeekend", "ee").then(function(data){
        if(data.text == null){
            $scope.weekendTime = "Nothing here";
        }
        $scope.weekendTime = data.text;
    })
    $scope.insertWeekend = function(){
        var update = "";
        update = $scope.weekendTime;
        if($scope.weekendTime === "{{editWeekendTime}}"){
            update = $scope.editWeekendTime;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWeekend", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWeekend", "ee").then(function(data){
                if(data.text == null){
                    $scope.weekendTime = "Nothing here";
                }
                $scope.weekendTime = data.text;
            })
        });
    }


    // LANDING PAGE ENGLISH VERSION


    landingTextService.getLandingText("workerTitleEng", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTitleEng = "There is nothing yet inserted";

        }else{
            $scope.workerTitleEng = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertWorkerTitleEng = function(){
        var update = "";
        update = $scope.workerTitleEng;
        if($scope.workerTitleEng === "{{editWorkerTitleEng}}"){
            update = $scope.editWorkerTitleEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("workerTitleEng", update, "ee").then(function(data){
            landingTextService.getLandingText("workerTitleEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.workerTitleEng = "Nothing here";
                }
                $scope.workerTitleEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerTitleEng.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitleEng", val, "ee");
    })*/

    landingTextService.getLandingText("workerTextEng", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTextEng = "There is nothint yet inserted";
        }else{
            $scope.workerTextEng = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertWorkerTextEng = function(){
        var update = "";
        update = $scope.workerTextEng;
        if($scope.workerTextEng === "{{editWorkerTextEng}}"){
            update = $scope.editWorkerTextEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("workerTextEng", update, "ee").then(function(data){
            landingTextService.getLandingText("workerTextEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.workerTextEng = "Nothing here";
                }
                $scope.workerTextEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerEng.text', function(val){
        landingTextService.addOrUpdateLandingText("workerTextEng", val, "ee");
    })*/

    landingTextService.getLandingText("menuTitleEng", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTitleEng = "There is nothint yet inserted";
        }else{
            $scope.menuTitleEng = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertMenuTitleEng = function(){
        var update = "";
        update = $scope.menuTitleEng;
        if($scope.menuTitleEng === "{{editMenuTitleEng}}"){
            update = $scope.editMenuTitleEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("menuTitleEng", update, "ee").then(function(data){
            landingTextService.getLandingText("menuTitleEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.menuTitleEng = "Nothing here";
                }
                $scope.menuTitleEng = data.text;
            })
        });
    }
    /*$scope.$watch('menuTitleEng.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitleEng", val, "ee");
    })*/

    landingTextService.getLandingText("menuTextEng", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTextEng = "There is nothint yet inserted";
        }else{
            $scope.menuTextEng = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertMenuTextEng = function(){
        var update = "";
        update = $scope.menuTextEng;
        if($scope.menuTextEng === "{{editMenuTextEng}}"){
            update = $scope.editMenuTextEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("menuTextEng", update, "ee").then(function(data){
            landingTextService.getLandingText("menuTextEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.menuTextEng = "Nothing here";
                }
                $scope.menuTextEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuTextEng.text', function(val){
        landingTextService.addOrUpdateLandingText("menuTextEng", val, "ee");
    })*/

    landingTextService.getLandingText("tastingTextEng", "ee").then(function(data){
        if(data.text == null){
            $scope.tastingTextEng = "There is nothint yet inserted";
        }else{
            $scope.tastingTextEng = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertTastingTextEng = function(){
        var update = "";
        update = $scope.tastingTextEng;
        if($scope.tastingTextEng === "{{editTastingTextEng}}"){
            update = $scope.editTastingTextEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("tastingTextEng", update, "ee").then(function(data){
            landingTextService.getLandingText("tastingTextEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.tastingTextEng = "Nothing here";
                }
                $scope.tastingTextEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('tastingTextEng.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingTextEng", val, "ee");
    })*/

    landingTextService.getLandingText("eventTitleEng", "ee").then(function(data){
        if(data.text == null){
            $scope.eventTitleEng = "There is nothint yet inserted";
        }else{
            $scope.eventTitleEng = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertEventTitleEng = function(){
        var update = "";
        update = $scope.eventTitleEng;
        if($scope.eventTitleEng === "{{editEventTitleEng}}"){
            update = $scope.editEventTitleEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("eventTitleEng", update, "ee").then(function(data){
            landingTextService.getLandingText("eventTitleEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.eventTitleEng = "Nothing here";
                }
                $scope.eventTitleEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('eventTitleEng.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitleEng", val, "ee");
    })*/

    landingTextService.getLandingText("contactCallEng", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCallEng = "There is nothint yet inserted";
        }else{
            $scope.contactCallEng = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactCallEng = function(){
        var update = "";
        update = $scope.contactCallEng;
        if($scope.contactCallEng === "{{editContactCallEng}}"){
            update = $scope.editContactCallEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactCallEng", update, "ee").then(function(data){
            landingTextService.getLandingText("contactCallEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactCallEng = "Nothing here";
                }
                $scope.contactCallEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactCallEng.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallEng", val, "ee");
    })*/

    landingTextService.getLandingText("contactVisitEng", "ee").then(function(data){
        if(data.text == null){
            $scope.contactVisitEng = "There is nothint yet inserted";
        }else{
            $scope.contactVisitEng = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactVisitEng = function(){
        var update = "";
        update = $scope.contactVisitEng;
        if($scope.contactVisitEng === "{{editContactVisitEng}}"){
            update = $scope.editContactVisitEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactVisitEng", update, "ee").then(function(data){
            landingTextService.getLandingText("contactVisitEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactVisitEng = "Nothing here";
                }
                $scope.contactVisitEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactVisitEng.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitEng", val, "ee");
    })*/

    landingTextService.getLandingText("contactEmailEng", "ee").then(function(data){
        if(data.text == null){
            $scope.contactEmailEng = "There is nothint yet inserted";
        }else{
            $scope.contactEmailEng = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactEmailEng = function(){
        var update = "";
        update = $scope.contactEmailEng;
        if($scope.contactEmailEst === "{{editContactEmailEng}}"){
            update = $scope.editContactEmailEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactEmailEng", update, "ee").then(function(data){
            landingTextService.getLandingText("contactEmailEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactEmailEng = "Nothing here";
                }
                $scope.contactEmailEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactEmailEng.text', function(val){
        landingTextService.addOrUpdateLandingText("contactEmailEng", val, "ee");
    })*/

    landingTextService.getLandingText("contactTimeWeekendEng", "ee").then(function(data){
        if(data.text == null){
            $scope.weekendTimeEng = "Nothing here";
        }
        $scope.weekendTimeEng = data.text;
    })
    $scope.insertWeekendEng = function(){
        var update = "";
        update = $scope.weekendTimeEng;
        if($scope.weekendTimeEng === "{{editWeekendTimeEng}}"){
            update = $scope.editWeekendTimeEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWeekendEng", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWeekendEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.weekendTimeEng = "Nothing here";
                }
                $scope.weekendTimeEng = data.text;
            })
        });
    }

    landingTextService.getLandingText("contactTimeWorkWeekEng", "ee").then(function(data){
        if(data.text == null){
            $scope.workWeekTimeEng = "Nothing here";
        }
        $scope.workWeekTimeEng = data.text;
    })
    $scope.insertWorkWeekEng = function(){
        var update = "";
        update = $scope.workWeekTimeEng;
        if($scope.workWeekTimeEng === "{{editWorkWeekTimeEng}}"){
            update = $scope.editWorkWeekTimeEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeekEng", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWorkWeekEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.workWeekTimeEng = "Nothing here";
                }
                $scope.workWeekTimeEng = data.text;
            })
        });
    }

////// FINNISH LANGUAGE DESIGN VIEW

    landingTextService.getLandingText("workerTitleFin", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTitleFin = "There is nothing yet inserted";

        }else{
            $scope.workerTitleFin = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertWorkerTitleFin = function(){
        var update = "";
        update = $scope.workerTitleFin;
        if($scope.workerTitleFin === "{{editWorkerTitleFin}}"){
            update = $scope.editWorkerTitleFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("workerTitleFin", update, "ee").then(function(data){
            landingTextService.getLandingText("workerTitleFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.workerTitleFin = "Nothing here";
                }
                $scope.workerTitleFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerTitleFin.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitleFin", val, "ee");
    })*/


    landingTextService.getLandingText("workerTextFin", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTextFin = "There is nothint yet inserted";
        }else{
            $scope.workerTextFin = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertWorkerTextFin = function(){
        var update = "";
        update = $scope.workerTextFin;
        if($scope.workerTextFin === "{{editWorkerTextFin}}"){
            update = $scope.editWorkerTextFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("workerTextFin", update, "ee").then(function(data){
            landingTextService.getLandingText("workerTextFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.workerTextFin = "Nothing here";
                }
                $scope.workerTextFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerFin.text', function(val){
        landingTextService.addOrUpdateLandingText("workerTextFin", val, "ee");
    })*/

    landingTextService.getLandingText("menuTitleFin", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTitleFin = "There is nothint yet inserted";
        }else{
            $scope.menuTitleFin = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertMenuTitleFin = function(){
        var update = "";
        update = $scope.menuTitleFin;
        if($scope.menuTitleFin === "{{editMenuTitleFin}}"){
            update = $scope.editMenuTitleFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("menuTitleFin", update, "ee").then(function(data){
            landingTextService.getLandingText("menuTitleFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.menuTitleFin = "Nothing here";
                }
                $scope.menuTitleFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuTitleFin.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitleFin", val, "ee");
    })*/

    landingTextService.getLandingText("menuTextFin", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTextFin = "There is nothint yet inserted";
        }else{
            $scope.menuTextFin = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertMenuTextFin = function(){
        var update = "";
        update = $scope.menuTextFin;
        if($scope.menuTextFin === "{{editMenuTextFin}}"){
            update = $scope.editMenuTextFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("menuTextFin", update, "ee").then(function(data){
            landingTextService.getLandingText("menuTextFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.menuTextFin = "Nothing here";
                }
                $scope.menuTextFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuTextFin.text', function(val){
        landingTextService.addOrUpdateLandingText("menuTextFin", val, "ee");
    })*/

    landingTextService.getLandingText("tastingTextFin", "ee").then(function(data){
        if(data.text == null){
            $scope.tastingTextFin = "There is nothint yet inserted";
        }else{
            $scope.tastingTextFin = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertTastingTextFin = function(){
        var update = "";
        update = $scope.tastingTextFin;
        if($scope.tastingTextFin === "{{editTastingTextFin}}"){
            update = $scope.editTastingTextFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("tastingTextFin", update, "ee").then(function(data){
            landingTextService.getLandingText("tastingTextFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.tastingTextFin = "Nothing here";
                }
                $scope.tastingTextFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('tastingTextFin.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingTextFin", val, "ee");
    })*/

    landingTextService.getLandingText("eventTitleFin", "ee").then(function(data){
        if(data.text == null){
            $scope.eventTitleFin = "There is nothint yet inserted";
        }else{
            $scope.eventTitleFin = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertEventTitleFin = function(){
        var update = "";
        update = $scope.eventTitleFin;
        if($scope.eventTitleFin === "{{editEventTitleFin}}"){
            update = $scope.editEventTitleFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("eventTitleFin", update, "ee").then(function(data){
            landingTextService.getLandingText("eventTitleFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.eventTitleFin = "Nothing here";
                }
                $scope.eventTitleFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('eventTitleFin.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitleFin", val, "ee");
    })*/

    landingTextService.getLandingText("contactCallFin", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCallFin = "There is nothint yet inserted";
        }else{
            $scope.contactCallFin = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactCallFin = function(){
        var update = "";
        update = $scope.contactCallFin;
        if($scope.contactCallFin === "{{editContactCallFin}}"){
            update = $scope.editContactCallFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactCallFin", update, "ee").then(function(data){
            landingTextService.getLandingText("contactCallFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactCallFin = "Nothing here";
                }
                $scope.contactCallFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactCallFin.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallFin", val, "ee");
    })*/

    landingTextService.getLandingText("contactVisitFin", "ee").then(function(data){
        if(data.text == null){
            $scope.contactVisitFin = "There is nothint yet inserted";
        }else{
            $scope.contactVisitFin = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactVisitFin = function(){
        var update = "";
        update = $scope.contactVisitFin;
        if($scope.contactVisitFin === "{{editContactVisitFin}}"){
            update = $scope.editContactVisitFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactVisitFin", update, "ee").then(function(data){
            landingTextService.getLandingText("contactVisitFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactVisitFin = "Nothing here";
                }
                $scope.contactVisitFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactVisitFin.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitFin", val, "ee");
    })*/


    landingTextService.getLandingText("contactEmailFin", "ee").then(function(data){
        if(data.text == null){
            $scope.contactEmailFin = "There is nothint yet inserted";
        }else{
            $scope.contactEmailFin = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactEmailFin = function(){
        var update = "";
        update = $scope.contactEmailFin;
        if($scope.contactEmailFin === "{{editContactEmailFin}}"){
            update = $scope.editContactEmailFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactEmailFin", update, "ee").then(function(data){
            landingTextService.getLandingText("contactEmailFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactEmailFin = "Nothing here";
                }
                $scope.contactEmailFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactEmailFin.text', function(val){
        landingTextService.addOrUpdateLandingText("contactEmailFin", val, "ee");
    })*/


    landingTextService.getLandingText("contactTimeWorkWeekFin", "ee").then(function(data){
        if(data.text == null){
            $scope.workWeekTimeFin = "Nothing here";
        }
        $scope.workWeekTimeFin = data.text;
    })
    $scope.insertWorkWeekFin = function(){
        var update = "";
        update = $scope.workWeekTimeFin;
        if($scope.workWeekTimeFin === "{{editWorkWeekTimeFin}}"){
            update = $scope.editWorkWeekTimeFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeekFin", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWorkWeekFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.workWeekTimeFin = "Nothing here";
                }
                $scope.workWeekTimeFin = data.text;
            })
        });
    }

    landingTextService.getLandingText("contactTimeWeekendFin", "ee").then(function(data){
        if(data.text == null){
            $scope.weekendTimeFin = "Nothing here";
        }
        $scope.weekendTimeFin = data.text;
    })
    $scope.insertWeekendFin = function(){
        var update = "";
        update = $scope.weekendTimeFin;
        if($scope.weekendTimeFin === "{{editWeekendTimeFin}}"){
            update = $scope.editWeekendTimeFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWeekendFin", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWeekendFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.weekendTimeFin = "Nothing here";
                }
                $scope.weekendTimeFin = data.text;
            })
        });
    }


//// RUSSIAN DESIGN VIEW


    landingTextService.getLandingText("workerTitleRus", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTitleRus = "There is nothing yet inserted";

        }else{
            $scope.workerTitleRus = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertWorkerTitleRus = function(){
        var update = "";
        update = $scope.workerTitleRus;
        if($scope.workerTitleRus === "{{editWorkerTitleRus}}"){
            update = $scope.editWorkerTitleRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("workerTitleRus", update, "ee").then(function(data){
            landingTextService.getLandingText("workerTitleRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.workerTitleRus = "Nothing here";
                }
                $scope.workerTitleRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerTitleRus.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitleRus", val, "ee");
    })*/

    landingTextService.getLandingText("workerTextRus", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTextRus = "There is nothint yet inserted";
        }else{
            $scope.workerTextRus = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertWorkerTextRus = function(){
        var update = "";
        update = $scope.workerTextRus;
        if($scope.workerTextRus === "{{editWorkerTextRus}}"){
            update = $scope.editWorkerTextRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("workerTextRus", update, "ee").then(function(data){
            landingTextService.getLandingText("workerTextRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.workerTextRus = "Nothing here";
                }
                $scope.workerTextRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerRus.text', function(val){
        landingTextService.addOrUpdateLandingText("workerTextRus", val, "ee");
    })*/

    landingTextService.getLandingText("menuTitleRus", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTitleRus = "There is nothint yet inserted";
        }else{
            $scope.menuTitleRus = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertMenuTitleRus = function(){
        var update = "";
        update = $scope.menuTitleRus;
        if($scope.menuTitleRus === "{{editMenuTitleRus}}"){
            update = $scope.editMenuTitleRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("menuTitleRus", update, "ee").then(function(data){
            landingTextService.getLandingText("menuTitleRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.menuTitleRus = "Nothing here";
                }
                $scope.menuTitleRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuTitleRus.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitleRus", val, "ee");
    })*/

    landingTextService.getLandingText("menuTextRus", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTextRus = "There is nothint yet inserted";
        }else{
            $scope.menuTextRus = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertMenuTextRus = function(){
        var update = "";
        update = $scope.menuTextRus;
        if($scope.menuTextRus === "{{editMenuTextRus}}"){
            update = $scope.editMenuTextRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("menuTextRus", update, "ee").then(function(data){
            landingTextService.getLandingText("menuTextRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.menuTextRus = "Nothing here";
                }
                $scope.menuTextRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuTextRus.text', function(val){
        landingTextService.addOrUpdateLandingText("menuTextRus", val, "ee");
    })*/

    landingTextService.getLandingText("tastingTextRus", "ee").then(function(data){
        if(data.text == null){
            $scope.tastingTextRus = "There is nothint yet inserted";
        }else{
            $scope.tastingTextRus = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertTastingTextRus = function(){
        var update = "";
        update = $scope.tastingTextRus;
        if($scope.tastingTextRus === "{{editTastingTextRus}}"){
            update = $scope.editTastingTextRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("tastingTextRus", update, "ee").then(function(data){
            landingTextService.getLandingText("tastingTextRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.tastingTextRus = "Nothing here";
                }
                $scope.tastingTextRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('tastingTextRus.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingTextRus", val, "ee");
    })*/

    landingTextService.getLandingText("eventTitleRus", "ee").then(function(data){
        if(data.text == null){
            $scope.eventTitleRus = "There is nothint yet inserted";
        }else{
            $scope.eventTitleRus = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertEventTitleRus = function(){
        var update = "";
        update = $scope.eventTitleRus;
        if($scope.eventTitleRus === "{{editEventTitleRus}}"){
            update = $scope.editEventTitleRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("eventTitleRus", update, "ee").then(function(data){
            landingTextService.getLandingText("eventTitleRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.eventTitleRus = "Nothing here";
                }
                $scope.eventTitleRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('eventTitleRus.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitleRus", val, "ee");
    })*/

    landingTextService.getLandingText("contactCallRus", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCallRus = "There is nothint yet inserted";
        }else{
            $scope.contactCallRus = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactCallRus = function(){
        var update = "";
        update = $scope.contactCallRus;
        if($scope.contactCallRus === "{{editContactCallRus}}"){
            update = $scope.editContactCallRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactCallRus", update, "ee").then(function(data){
            landingTextService.getLandingText("contactCallRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactCallRus = "Nothing here";
                }
                $scope.contactCallRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactCallRus.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallRus", val, "ee");
    })*/

    landingTextService.getLandingText("contactVisitRus", "ee").then(function(data){
        if(data.text == null){
            $scope.contactVisitRus = "There is nothint yet inserted";
        }else{
            $scope.contactVisitRus = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactVisitRus = function(){
        var update = "";
        update = $scope.contactVisitRus;
        if($scope.contactVisitRus === "{{editContactVisitRus}}"){
            update = $scope.editContactVisitRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactVisitRus", update, "ee").then(function(data){
            landingTextService.getLandingText("contactVisitRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactVisitRus = "Nothing here";
                }
                $scope.contactVisitRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactVisitRus.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitRus", val, "ee");
    })*/


    landingTextService.getLandingText("contactEmailRus", "ee").then(function(data){
        if(data.text == null){
            $scope.contactEmailRus = "There is nothint yet inserted";
        }else{
            $scope.contactEmailRus = data.text;
        }
    }, function(err){
        console.log(err);
    })
    $scope.insertContactEmailRus = function(){
        var update = "";
        update = $scope.contactEmailRus;
        if($scope.contactEmailRus === "{{editContactEmailRus}}"){
            update = $scope.editContactEmailRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactEmailRus", update, "ee").then(function(data){
            landingTextService.getLandingText("contactEmailRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.contactEmailRus = "Nothing here";
                }
                $scope.contactEmailRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactEmailRus.text', function(val){   // watch is so-called digest cycle, considered as a loop during which angular checks if there are any changes to all the variables watched
        landingTextService.addOrUpdateLandingText("contactEmailRus", val, "ee");
    })*/


    landingTextService.getLandingText("contactTimeWorkWeekRus", "ee").then(function(data){ // This is a service. Once the program has the promice "getLandingText" it does the following function
        if(data.text == null){  //"ee" is a language, "contactTimeForWeekRus" is a place
            $scope.workWeekTimeRus = "Nothing here";
        }
        $scope.workWeekTimeRus = data.text;
    })
    $scope.insertWorkWeekRus = function(){
        var update = "";
        update = $scope.workWeekTimeRus;
        if($scope.workWeekTimeRus === "{{editWorkWeekTimeRus}}"){
            update = $scope.editWorkWeekTimeRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeekRus", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWorkWeekRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.workWeekTimeRus = "Nothing here";
                }
                $scope.workWeekTimeRus = data.text;
            })
        });
    }

    landingTextService.getLandingText("contactTimeWeekendRus", "ee").then(function(data){
        if(data.text == null){
            $scope.weekendTimeRus = "Nothing here";
        }
        $scope.weekendTimeRus = data.text;
    })
    $scope.insertWeekendRus = function(){
        var update = "";
        update = $scope.weekendTimeRus;
        if($scope.weekendTimeRus === "{{editWeekendTimeRus}}"){
            update = $scope.editWeekendTimeRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWeekendRus", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWeekendRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.weekendTimeRus = "Nothing here";
                }
                $scope.weekendTimeRus = data.text;
            })
        });
    }


    landingTextService.getLandingText("bannerTitleEst", "ee").then(function(data){
        console.log(data);
        if(data.text == null){
            console.log("data.text on nulll: " + data.text);
            $scope.bannerTitleEst = "Nothing here";
        }
        console.log("data.text niisama: " + data.text);
        $scope.bannerTitleEst = data.text;
    })

    $scope.insertBannerTitleEst = function(){
        var update = "";
        update = $scope.bannerTitleEst;
        if($scope.bannerTitleEst === "{{editBannerTitleEst}}"){
            update = $scope.editBannerTitleEst;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("bannerTitleEst", update, "ee").then(function(data){
            landingTextService.getLandingText("bannerTitleEst", "ee").then(function(data){
                if(data.text == null){
                    $scope.bannerTitleEst = "Nothing here";
                }
                $scope.bannerTitleEst = data.text;
            })
        });
    }



    landingTextService.getLandingText("bannerTitleEng", "ee").then(function(data){
        console.log(data);
        if(data.text == null){
            console.log("data.text on nulll: " + data.text);
            $scope.bannerTitleEng = "Nothing here";
        }
        console.log("data.text niisama: " + data.text);
        $scope.bannerTitleEng = data.text;
    })

    $scope.insertBannerTitleEng = function(){
        var update = "";
        update = $scope.bannerTitleEng;
        if($scope.bannerTitleEng === "{{editBannerTitleEng}}"){
            update = $scope.editBannerTitleEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("bannerTitleEng", update, "ee").then(function(data){
            landingTextService.getLandingText("bannerTitleEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.bannerTitleEng = "Nothing here";
                }
                $scope.bannerTitleEng = data.text;
            })
        });
    }

    landingTextService.getLandingText("bannerTitleFin", "ee").then(function(data){
        console.log(data);
        if(data.text == null){
            console.log("data.text on nulll: " + data.text);
            $scope.bannerTitleFin = "Nothing here";
        }
        console.log("data.text niisama: " + data.text);
        $scope.bannerTitleFin = data.text;
    })

    $scope.insertBannerTitleFin = function(){
        var update = "";
        update = $scope.bannerTitleFin;
        if($scope.bannerTitleFin === "{{editBannerTitleFin}}"){
            update = $scope.editBannerTitleFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("bannerTitleFin", update, "ee").then(function(data){
            landingTextService.getLandingText("bannerTitleFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.bannerTitleFin = "Nothing here";
                }
                $scope.bannerTitleFin = data.text;
            })
        });
    }

    landingTextService.getLandingText("bannerTitleRus", "ee").then(function(data){
        if(data.text == null){
            $scope.bannerTitleRus = "Nothing here";
        }
        $scope.bannerTitleRus = data.text;
    })

    $scope.insertBannerTitleRus = function(){
        var update = "";
        update = $scope.bannerTitleRus;
        if($scope.bannerTitleFin === "{{editBannerTitleRus}}"){
            update = $scope.editBannerTitleRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("bannerTitleRus", update, "ee").then(function(data){
            landingTextService.getLandingText("bannerTitleRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.bannerTitleRus = "Nothing here";
                }
                $scope.bannerTitleRus = data.text;
            })
        });
    }



    pictureService.getMenuPicture('map').then(function(data){
        if(data == null){
            $scope.mapPicturePath = "";

        }else {
            $scope.mapPicturePath = data.picturePath;
        }
    })
    pictureService.getMenuPicture('event').then(function(data){
        if(data == null){
            $scope.eventPicturePath = "";
        }else {
            $scope.eventPicturePath = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventEst').then(function(data){
        if(data == null){
            $scope.eventPicturePathEst = "";
        }else {
            $scope.eventPicturePathEst = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventFin').then(function(data){
        if(data == null){
            $scope.eventPicturePathFin = "";
        }else {
            $scope.eventPicturePathFin = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventEng').then(function(data){
        if(data == null){
            $scope.eventPicturePathEng = "";
        }else {
            $scope.eventPicturePathEng = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventRus').then(function(data){
        if(data == null){
            $scope.eventPicturePathRus = "";
        }else {
            $scope.eventPicturePathRus = data.picturePath;
        }
    })
    pictureService.getMenuPicture('second').then(function(data){
        if(data == null){
            $scope.secondPicturePath = "";
        }else {
            $scope.secondPicturePath = data.picturePath;
        }
    })
    pictureService.getMenuPicture('first').then(function(data){
        if(data == null){
            $scope.firstPicturePath="";
        }else {
            $scope.firstPicturePath = data.picturePath;
        }
    })
    pictureService.getMenuPicture('third').then(function(data){
        if(data == null){
            $scope.thirdPicturePath = "";
        }else {
        $scope.thirdPicturePath = data.picturePath;
        }
    })
    $scope.user = {
        name: 'awesome user'
    };
    $scope.$watch('user.name', function(val){
        console.log(val);
    })
    pictureService.getBannerPicture().then(function(data){
        var item = data.length-1;
        $scope.bannerImage = data[item].picturePath;
    }, function(err){
        console.log(err);
    })
    $scope.filesChanged = function(elm){
        console.log("tulen siia");
        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(file){
            $scope.bannerImage = file;
            pictureService.addBannerPicture(file).then(function(data){
                console.log(data);
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
    $scope.menuPicChanged = function(elm, type){
        console.log(elm, type);
        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(file){
            if(type==="first"){
                $scope.firstPicturePath = file;
            }
            if(type==="second"){
                $scope.secondPicturePath = file;
            }
            if(type==="third"){
                $scope.thirdPicturePath = file;
            }
            if(type==="eventEst"){
                $scope.eventPicturePathEst = file;
            }
            if(type==="eventEng"){
                $scope.eventPicturePathEng = file;
            }
            if(type==="eventFin"){
                $scope.eventPicturePathFin = file;
            }
            if(type==="eventRus"){
                $scope.eventPicturePathRus = file;
            }
            pictureService.addMenuPicture(type, file).then(function(data){
                console.log(elm.parentNode);
                elm.parentNode.style.backgroundImage = "url("+data+")";
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
    $scope.eventPicChanged = function(elm, type){

        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(file){
            if(type==="event"){
                $scope.eventPicturePath = file;
            }
            if(type==="eventEst"){
                $scope.eventPicturePathEst = file;
            }
            if(type==="eventEng"){
                $scope.eventPicturePathEng = file;
            }
            if(type==="eventFin"){
                $scope.eventPicturePathFin = file;
            }
            if(type==="eventRus"){
                $scope.eventPicturePathRus = file;
            }
            pictureService.addMenuPicture(type, file).then(function(data){
                elm.parentNode.style.backgroundImage = "url("+data+")";
                $timeout(function(){
                    $scope.$apply();
                }, 100);
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
    $scope.mapPicChanged = function(elm, type){

        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(file){
            console.log(type);
            if(type==="map"){
                $scope.mapPicturePath = file;
            }
            if(type==="event"){
                $scope.eventPicturePath = file;
            }
            if(type==="eventEst"){
                $scope.eventPicturePathEst = file;
            }
            if(type==="eventEng"){
                $scope.eventPicturePathEng = file;
            }
            if(type==="eventFin"){
                $scope.eventPicturePathFin = file;
            }
            if(type==="eventRus"){
                $scope.eventPicturePathRus = file;
            }
            if(type==="first"){
                $scope.firstPicturePath = file;
            }
            if(type==="second"){
                $scope.secondPicturePath = file;
            }
            if(type==="third"){
                $scope.thirdPicturePath = file;
            }
            pictureService.addMenuPicture(type, file).then(function(data){

            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
})
