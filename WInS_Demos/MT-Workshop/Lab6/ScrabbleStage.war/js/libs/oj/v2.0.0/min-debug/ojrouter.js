/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "signals", "promise"], function($oj$$17$$, $ko$$3$$, $signals$$1$$) {
  (function() {
    function $removeLastSegment$$() {
      var $url$$21$$ = window.location.href.split("#")[0];
      return $url$$21$$.substring(0, $url$$21$$.lastIndexOf("/"));
    }
    function $parseQueryParam$$($key$$76_queryString$$2$$) {
      var $params$$17$$ = {}, $keyValPairs$$ = [], $pairNum$$, $parts$$4_value$$222$$;
      if ($key$$76_queryString$$2$$) {
        for ($pairNum$$ in $keyValPairs$$ = $key$$76_queryString$$2$$.split("\x26"), $keyValPairs$$) {
          $parts$$4_value$$222$$ = $keyValPairs$$[$pairNum$$].split(/\=(.+)?/), $key$$76_queryString$$2$$ = $parts$$4_value$$222$$[0], $key$$76_queryString$$2$$.length && ($params$$17$$[$key$$76_queryString$$2$$] || ($params$$17$$[$key$$76_queryString$$2$$] = []), $parts$$4_value$$222$$ = $parts$$4_value$$222$$[1] && decodeURIComponent($parts$$4_value$$222$$[1].replace(/\+/g, " ")), $params$$17$$[$key$$76_queryString$$2$$].push($parts$$4_value$$222$$));
        }
      }
      return $params$$17$$;
    }
    function $getStateFromId$$($router$$, $stateId$$) {
      var $state$$3$$;
      $stateId$$ && $router$$.$_states$ && ($oj$$17$$.$Assert$.$assertString$($stateId$$), $router$$.$_states$.every(function($stateAt$$) {
        return $stateAt$$.$_id$ === $stateId$$ ? ($state$$3$$ = $stateAt$$, !1) : !0;
      }));
      return $state$$3$$;
    }
    function $getShortUrl$$() {
      return window.location.href.split("#")[0].replace($_ojBaseUrl$$ + "/", "");
    }
    function $getRouterFullName$$($router$$1$$) {
      return $router$$1$$.$_parentRouter$ ? $getRouterFullName$$($router$$1$$.$_parentRouter$) + "." + $router$$1$$.$_name$ : $router$$1$$.$_name$;
    }
    function $getCurrentPath$$($router$$2$$) {
      return $router$$2$$ ? $getCurrentPath$$($router$$2$$.$_parentRouter$) + $router$$2$$.$_currentState$().$_id$ + "/" : "/";
    }
    function $_getChildRouter$$($router$$3$$, $value$$223$$) {
      var $subRouter$$;
      $router$$3$$.$_childRouters$.every(function($sr$$) {
        return $sr$$.$_parentState$ && $sr$$.$_parentState$ !== $value$$223$$ ? !0 : ($subRouter$$ = $sr$$, !1);
      });
      return $subRouter$$;
    }
    function $isTransitionCancelled$$() {
      return $_transitionQueue$$[0] && $_transitionQueue$$[0].cancel;
    }
    function $decodeStateParam$$($param$$4$$) {
      var $compressionType$$ = $param$$4$$.charAt(0);
      $param$$4$$ = $param$$4$$.slice(1);
      if ("0" === $compressionType$$) {
        $param$$4$$ = decodeURIComponent($param$$4$$);
      } else {
        if ("1" === $compressionType$$) {
          $param$$4$$ = $oj$$17$$.$LZString$.$decompressFromEncodedURIComponent$($param$$4$$);
        } else {
          throw Error("Error retrieving bookmarkable data. Format is invalid");
        }
      }
      return JSON.parse($param$$4$$);
    }
    function $addStateParam$$($url$$22$$, $extraState$$1$$) {
      if ($extraState$$1$$ && 0 < Object.getOwnPropertyNames($extraState$$1$$).length) {
        var $sep$$1$$;
        $sep$$1$$ = -1 === $url$$22$$.indexOf("?") ? "?" : "\x26";
        var $JSCompiler_temp_const$$10$$ = $url$$22$$, $compressedState$$inline_702_jsonState$$inline_700$$ = JSON.stringify($extraState$$1$$), $encodedState$$inline_701$$ = encodeURIComponent($compressedState$$inline_702_jsonState$$inline_700$$), $compressedState$$inline_702_jsonState$$inline_700$$ = $oj$$17$$.$LZString$.$compressToEncodedURIComponent$($compressedState$$inline_702_jsonState$$inline_700$$), $useCompressed$$inline_703$$ = !1, $param$$inline_704$$ = "oj_Router\x3d";
        $compressedState$$inline_702_jsonState$$inline_700$$.length <= $encodedState$$inline_701$$.length && ($useCompressed$$inline_703$$ = !0);
        $param$$inline_704$$ = $useCompressed$$inline_703$$ ? $param$$inline_704$$ + ("1" + $compressedState$$inline_702_jsonState$$inline_700$$) : $param$$inline_704$$ + ("0" + $encodedState$$inline_701$$);
        if (1024 < $param$$inline_704$$.length) {
          throw Error("Size of bookmarkable data is too big.");
        }
        $url$$22$$ = $JSCompiler_temp_const$$10$$ + ($sep$$1$$ + $param$$inline_704$$);
      }
      return $url$$22$$;
    }
    function $_findRouterForStateId$$($router$$4$$, $sId$$, $parentStateId$$) {
      var $result$$41$$;
      $router$$4$$.$_childRouters$.every(function($child$$3$$) {
        return $child$$3$$.$_parentState$ && $child$$3$$.$_parentState$ !== $parentStateId$$ || !$child$$3$$.$stateFromIdCallback$($sId$$) ? !0 : ($result$$41$$ = $child$$3$$, !1);
      });
      return $result$$41$$;
    }
    function $_buildState$$($router$$6$$, $path$$15$$) {
      var $newStates$$ = [], $i$$248_routers$$ = [], $canDefault_rt$$ = $router$$6$$, $parts$$5$$ = $path$$15$$.split("/"), $sId$$1$$, $parent$$11$$, $parentStateId$$1$$;
      for ($parts$$5$$.splice(0, 1);$canDefault_rt$$;) {
        $i$$248_routers$$.unshift($canDefault_rt$$), $canDefault_rt$$ = $canDefault_rt$$.$_parentRouter$;
      }
      for (;$sId$$1$$ = $parts$$5$$.shift();) {
        $canDefault_rt$$ = $i$$248_routers$$.shift();
        if (!$canDefault_rt$$) {
          if ($canDefault_rt$$ = $_findRouterForStateId$$($parent$$11$$, $sId$$1$$, $parentStateId$$1$$), !$canDefault_rt$$) {
            $_deferredPath$$ = $path$$15$$;
            break;
          }
        } else {
          if (!$canDefault_rt$$.$stateFromIdCallback$($sId$$1$$)) {
            throw Error('Invalid path "' + $path$$15$$ + '". State id "' + $sId$$1$$ + '" does not exist on router "' + $canDefault_rt$$.$_name$ + '".');
          }
        }
        $newStates$$.push({$router$:$canDefault_rt$$, $stateId$:$sId$$1$$});
        $parent$$11$$ = $canDefault_rt$$;
        $parentStateId$$1$$ = $sId$$1$$;
      }
      $canDefault_rt$$ = !0;
      for ($i$$248_routers$$ = $newStates$$.length - 1;0 <= $i$$248_routers$$ && $canDefault_rt$$;$i$$248_routers$$--) {
        $newStates$$[$i$$248_routers$$].$stateId$ === $newStates$$[$i$$248_routers$$].$router$.$_defaultStateId$ ? $newStates$$[$i$$248_routers$$].$stateId$ = null : $canDefault_rt$$ = !1;
      }
      return $newStates$$;
    }
    function $_buildAllCanExitPromises$$($router$$7$$, $promisesArray$$) {
      var $canExit$$ = !0, $promise$$1$$ = Promise.resolve(!0), $currentState$$ = $router$$7$$.$_currentState$(), $canExitCallback_i$$249$$, $result$$42$$;
      if ($currentState$$) {
        for ($canExitCallback_i$$249$$ = 0;$canExitCallback_i$$249$$ < $router$$7$$.$_childRouters$.length;$canExitCallback_i$$249$$++) {
          if ($canExit$$ = $_buildAllCanExitPromises$$($router$$7$$.$_childRouters$[$canExitCallback_i$$249$$], $promisesArray$$), !$canExit$$) {
            return!1;
          }
        }
        $canExitCallback_i$$249$$ = $currentState$$.$viewModel$ && $currentState$$.$viewModel$.canExit ? $currentState$$.$viewModel$.canExit : $currentState$$.$_canExit$;
        if ("function" === typeof $canExitCallback_i$$249$$) {
          try {
            $result$$42$$ = $canExitCallback_i$$249$$();
          } catch ($err$$17$$) {
            return $oj$$17$$.$Logger$.error("Error when executing canExit callback: %s", $err$$17$$.message), !1;
          }
          $result$$42$$ && $result$$42$$.then ? $promise$$1$$ = $result$$42$$ : ($result$$42$$ || $oj$$17$$.$Logger$.info("canExit is false for state %s", $currentState$$.$_id$), $canExit$$ = $result$$42$$);
        }
      }
      $promisesArray$$.push($promise$$1$$);
      return $canExit$$;
    }
    function $_canExit$$($router$$8$$) {
      var $allPromises$$;
      if (!$router$$8$$) {
        return Promise.resolve(!$isTransitionCancelled$$());
      }
      $allPromises$$ = [];
      return $_buildAllCanExitPromises$$($router$$8$$, $allPromises$$) ? Promise.all($allPromises$$).then(function($results$$9$$) {
        var $i$$250$$;
        for ($i$$250$$ = 0;$i$$250$$ < $results$$9$$.length;$i$$250$$++) {
          if (!$results$$9$$[$i$$250$$]) {
            return $oj$$17$$.$Logger$.info("CanExit promise at position %s returned false.", String($i$$250$$)), !1;
          }
        }
        return!$isTransitionCancelled$$();
      }) : Promise.resolve(!1);
    }
    function $_canEnter$$($allChanges$$, $origin$$) {
      $oj$$17$$.$Logger$.info("Start _canEnter.");
      var $canEnter$$ = !0, $promise$$2$$ = Promise.resolve(!0), $allPromises$$1$$ = [];
      $allChanges$$.every(function($canEnterCallback_change$$) {
        var $newState$$, $result$$43$$;
        if ($newState$$ = $canEnterCallback_change$$.$router$.$stateFromIdCallback$($canEnterCallback_change$$.value)) {
          if ($canEnterCallback_change$$ = $newState$$.$_canEnter$, "function" === typeof $canEnterCallback_change$$) {
            try {
              $result$$43$$ = $canEnterCallback_change$$();
            } catch ($err$$18$$) {
              return $oj$$17$$.$Logger$.error("Error when executing canEnter callback: %s", $err$$18$$.message), $canEnter$$ = !1;
            }
            if ($result$$43$$ && $result$$43$$.then) {
              $promise$$2$$ = $result$$43$$;
            } else {
              if ($canEnter$$ = $result$$43$$, !$canEnter$$) {
                return $oj$$17$$.$Logger$.info("canEnter is false for state: %s", $newState$$.$_id$), !1;
              }
            }
          }
        }
        $allPromises$$1$$.push($promise$$2$$);
        return!0;
      });
      return!$canEnter$$ || $isTransitionCancelled$$() ? Promise.resolve({$allChanges$:[]}) : Promise.all($allPromises$$1$$).then(function($results$$10$$) {
        var $i$$251$$;
        for ($i$$251$$ = 0;$i$$251$$ < $results$$10$$.length;$i$$251$$++) {
          if (!$results$$10$$[$i$$251$$]) {
            return $oj$$17$$.$Logger$.info("CanEnter promise at position %s returned false.", String($i$$251$$)), {$allChanges$:[]};
          }
        }
        return{$allChanges$:$allChanges$$, origin:$origin$$};
      });
    }
    function $_update$$($change$$1$$, $origin$$1$$) {
      var $oldState$$ = $change$$1$$.$router$.$stateFromIdCallback$($change$$1$$.$router$.$_stateId$()), $newState$$1$$ = $change$$1$$.value ? $change$$1$$.$router$.$stateFromIdCallback$($change$$1$$.value) : void 0;
      return Promise.resolve().then(function() {
        $oj$$17$$.$Logger$.info("Updating state of %s to %s.", $getRouterFullName$$($change$$1$$.$router$), $change$$1$$.value);
      }).then($oldState$$ ? $oldState$$.$_exit$ : void 0).then(function() {
        var $rt$$1$$ = $change$$1$$.$router$, $i$$252$$, $length$$14$$, $goingBackward$$;
        if ("popState" === $origin$$1$$) {
          $length$$14$$ = $rt$$1$$.$_navHistory$.length;
          for ($i$$252$$ = $length$$14$$ - 1;0 <= $i$$252$$;$i$$252$$--) {
            if ($rt$$1$$.$_navHistory$[$i$$252$$] === $change$$1$$.value) {
              $goingBackward$$ = !0;
              $rt$$1$$.$_navHistory$.splice($i$$252$$, $length$$14$$ - $i$$252$$);
              break;
            }
          }
          1 === $length$$14$$ - $i$$252$$ && ($rt$$1$$.$_navigationType$ = "back");
        }
        $goingBackward$$ || (delete $rt$$1$$.$_navigationType$, $rt$$1$$.$_navHistory$.push($rt$$1$$.$_stateId$()));
        $rt$$1$$.$_stateId$($change$$1$$.value);
      }).then($newState$$1$$ ? $newState$$1$$.$_enter$ : void 0);
    }
    function $_updateAll$$($updateObj$$) {
      var $sequence$$;
      $sequence$$ = Promise.resolve().then(function() {
        $oj$$17$$.$Logger$.info("Entering _updateAll.");
        $oj$$17$$.$Router$.$_updating$ = !0;
      });
      $updateObj$$.$allChanges$.forEach(function($change$$2$$) {
        $sequence$$ = $sequence$$.then(function() {
          if (!$isTransitionCancelled$$()) {
            return $_update$$($change$$2$$, $updateObj$$.origin);
          }
        });
      });
      return $sequence$$.then(function() {
        var $hasChanged$$ = 0 < $updateObj$$.$allChanges$.length && !$isTransitionCancelled$$();
        $oj$$17$$.$Router$.$_updating$ = !1;
        $oj$$17$$.$Logger$.info("_updateAll returns %s.", String($hasChanged$$));
        return{hasChanged:$hasChanged$$};
      }, function($error$$32$$) {
        $oj$$17$$.$Router$.$_updating$ = !1;
        return Promise.reject($error$$32$$);
      });
    }
    function $_parseUrlAndCompare$$($reducedChanges_url$$23$$) {
      var $extra$$1$$ = {}, $name$$105$$, $search$$4_stateStr$$ = $reducedChanges_url$$23$$.split("?")[1] || "";
      $oj$$17$$.$Logger$.info("Parsing: %s", $reducedChanges_url$$23$$);
      $reducedChanges_url$$23$$ = $_urlAdapter$$.$cleanUrl$($reducedChanges_url$$23$$);
      if ($search$$4_stateStr$$ = $search$$4_stateStr$$.split("oj_Router\x3d")[1]) {
        $search$$4_stateStr$$ = $search$$4_stateStr$$.split("\x26")[0], $extra$$1$$ = $decodeStateParam$$($search$$4_stateStr$$);
      }
      if ($oj$$17$$.$Logger$.option("level") === $oj$$17$$.$Logger$.$LEVEL_INFO$) {
        for ($name$$105$$ in $oj$$17$$.$Logger$.info("Bookmarkable data: "), $extra$$1$$) {
          $oj$$17$$.$Logger$.info("   { router: %s, value: %s }", $name$$105$$, $extra$$1$$[$name$$105$$]);
        }
      }
      $reducedChanges_url$$23$$ = $_urlAdapter$$.parse($reducedChanges_url$$23$$).filter(function($change$$3$$) {
        var $ex$$1$$ = $extra$$1$$[$change$$3$$.$router$.$_name$];
        $ex$$1$$ && ($change$$3$$.$router$.$_extra$ = $ex$$1$$);
        return $change$$3$$.value !== $change$$3$$.$router$.$_stateId$();
      });
      $oj$$17$$.$Logger$.option("level") === $oj$$17$$.$Logger$.$LEVEL_INFO$ && ($oj$$17$$.$Logger$.info("Potential changes are: "), $reducedChanges_url$$23$$.forEach(function($change$$4$$) {
        $oj$$17$$.$Logger$.info("   { router: %s, value: %s }", $getRouterFullName$$($change$$4$$.$router$), $change$$4$$.value);
      }));
      return $reducedChanges_url$$23$$;
    }
    function $parseAndUpdate$$($url$$24$$, $origin$$2$$) {
      var $allChanges$$2$$;
      try {
        $allChanges$$2$$ = $_parseUrlAndCompare$$($url$$24$$);
      } catch ($error$$33$$) {
        return Promise.reject($error$$33$$);
      }
      return $_canEnter$$($allChanges$$2$$, $origin$$2$$).then($_updateAll$$);
    }
    function $_executeTransition$$($transition$$) {
      $oj$$17$$.$Logger$.info("\x3e\x3e Executing: path\x3d%s, url\x3d%s, origin\x3d%s", $transition$$.path, $transition$$.url, $transition$$.origin);
      return void 0 !== $transition$$.url ? "sync" === $transition$$.origin ? $parseAndUpdate$$($transition$$.url) : $_canExit$$($transition$$.$router$).then(function($canExit$$2$$) {
        return $canExit$$2$$ ? $parseAndUpdate$$($transition$$.url, $transition$$.origin) : {hasChanged:!1};
      }) : $transition$$.$router$.$_go$($transition$$.path || null, $transition$$.replace);
    }
    function $_resolveTransition$$() {
      var $promise$$3_transition$$1$$ = $_transitionQueue$$[0];
      $oj$$17$$.$Logger$.info("\x3e\x3e Resolving: path\x3d%s, url\x3d%s", $promise$$3_transition$$1$$.path, $promise$$3_transition$$1$$.url);
      $promise$$3_transition$$1$$.cancel ? ($oj$$17$$.$Logger$.info("\x3e\x3e Cancelled: path\x3d%s, url\x3d%s", $promise$$3_transition$$1$$.path, $promise$$3_transition$$1$$.url), $promise$$3_transition$$1$$ = Promise.resolve({hasChanged:!1})) : $promise$$3_transition$$1$$ = $_executeTransition$$($promise$$3_transition$$1$$);
      return $promise$$3_transition$$1$$.then(function($params$$18$$) {
        var $done$$ = $_transitionQueue$$.shift();
        $oj$$17$$.$Logger$.info("\x3e\x3e Done with: path\x3d%s, url\x3d%s", $done$$.path, $done$$.url);
        $oj$$17$$.$Router$.$_transitionedToState$.dispatch($params$$18$$);
        return $params$$18$$;
      }, function($error$$34$$) {
        $_transitionQueue$$ = [];
        $oj$$17$$.$Router$.$_transitionedToState$.dispatch({hasChanged:!1});
        return Promise.reject($error$$34$$);
      });
    }
    function $_queueTransition$$($lastTransition_transition$$2$$) {
      var $length$$15$$;
      $length$$15$$ = $_transitionQueue$$.push($lastTransition_transition$$2$$);
      $oj$$17$$.$Logger$.info("\x3e\x3e Queue transition for path\x3d%s, url\x3d%s", $lastTransition_transition$$2$$.path, $lastTransition_transition$$2$$.url);
      1 === $length$$15$$ ? $_queuePromise$$ = $_resolveTransition$$() : ($lastTransition_transition$$2$$ = $_transitionQueue$$[$length$$15$$ - 2], $lastTransition_transition$$2$$.url || $lastTransition_transition$$2$$.$deferredHandling$ || ($oj$$17$$.$Logger$.info("\x3e\x3e Cancelling: path\x3d%s", $lastTransition_transition$$2$$.path), $lastTransition_transition$$2$$.cancel = !0), $_queuePromise$$ = $_queuePromise$$.then($_resolveTransition$$));
      return $_queuePromise$$;
    }
    function $handlePopState$$() {
      var $i$$253$$, $sr$$1$$, $subRouter$$1$$ = null;
      $oj$$17$$.$Logger$.info("Handling popState event with URL: %s", window.location.href);
      for ($i$$253$$ = 0;$i$$253$$ < $rootRouter$$.$_childRouters$.length;$i$$253$$++) {
        if ($sr$$1$$ = $rootRouter$$.$_childRouters$[$i$$253$$], $rootRouter$$.$_stateId$() && $rootRouter$$.$_stateId$() === $sr$$1$$.$_parentState$) {
          $subRouter$$1$$ = $sr$$1$$;
          break;
        }
      }
      $_queueTransition$$({$router$:$subRouter$$1$$, url:$getShortUrl$$(), origin:"popState"}).then(null, function($error$$35$$) {
        $oj$$17$$.$Logger$.error("Error while changing state in handlePopState: %s", $error$$35$$.message);
      });
    }
    function $_initialize$$() {
      $_initialized$$ || ($_urlAdapter$$ || ($_urlAdapter$$ = new $oj$$17$$.$Router$.$urlPathAdapter$), $_ojBaseUrl$$ || ($_ojBaseUrl$$ = $removeLastSegment$$()), window.addEventListener("popstate", $handlePopState$$, !1), $oj$$17$$.$Logger$.info("Initializing rootInstance."), $oj$$17$$.$Logger$.info("Base URL is %s", $_ojBaseUrl$$), $oj$$17$$.$Logger$.info("This page is %s", $_thisPage$$), $oj$$17$$.$Logger$.info("Current URL is %s", window.location.href), $_initialized$$ = !0);
    }
    var $_ojBaseUrl$$, $_thisPage$$ = function() {
      var $result$$44$$ = "", $url$$25$$ = window.location.pathname;
      -1 !== $url$$25$$.indexOf(".html", $url$$25$$.length - 5) && ($result$$44$$ = $url$$25$$.split("/").pop());
      return $result$$44$$;
    }(), $_urlAdapter$$, $_initialized$$ = !1, $_deferredPath$$, $_transitionQueue$$ = [], $_queuePromise$$;
    $oj$$17$$.$Router$ = function $$oj$$17$$$$Router$$($key$$77$$, $parentRouter$$) {
      var $router$$9$$ = this;
      this.$_name$ = $key$$77$$;
      this.$_parentState$ = $parentRouter$$ ? $parentRouter$$.$_stateId$() : void 0;
      this.$_parentRouter$ = $parentRouter$$;
      this.$_childRouters$ = [];
      this.$_extra$ = void 0;
      this.$_stateId$ = $ko$$3$$.observable();
      this.$_stateIdComp$ = $ko$$3$$.pureComputed({read:function() {
        return this.$_stateId$();
      }, write:function($value$$224$$) {
        this.go($value$$224$$).then(null, function($error$$36$$) {
          throw $error$$36$$;
        });
      }, owner:$router$$9$$});
      this.$_states$ = null;
      this.$_defaultStateId$ = void 0;
      this.$_currentState$ = $ko$$3$$.pureComputed(function() {
        return $ko$$3$$.ignoreDependencies($router$$9$$.$stateFromIdCallback$, $router$$9$$, [$router$$9$$.$_stateId$()]);
      });
      this.$_currentValue$ = $ko$$3$$.pureComputed(function() {
        var $retValue$$2$$, $currentState$$1$$ = $ko$$3$$.ignoreDependencies($router$$9$$.$stateFromIdCallback$, $router$$9$$, [$router$$9$$.$_stateId$()]);
        $currentState$$1$$ && ($retValue$$2$$ = $currentState$$1$$.value);
        return $retValue$$2$$;
      });
      this.$_navigationType$ = void 0;
      this.$_navHistory$ = [];
      this.$_moduleConfig$ = Object.create(null, {name:{value:$ko$$3$$.pureComputed(function() {
        var $retValue$$3$$, $currentState$$2_stateId$$1$$;
        $currentState$$2_stateId$$1$$ = this.$_stateId$() || this.$_defaultStateId$ || this.$_states$[0];
        if ($currentState$$2_stateId$$1$$ = this.$stateFromIdCallback$($currentState$$2_stateId$$1$$)) {
          $retValue$$3$$ = $currentState$$2_stateId$$1$$.value, $retValue$$3$$ && "string" === typeof $retValue$$3$$ || ($retValue$$3$$ = $currentState$$2_stateId$$1$$.$_id$);
        }
        return $retValue$$3$$;
      }, $router$$9$$), enumerable:!0}, params:{value:Object.create(null, {ojRouter:{value:new function _RouterParams() {
        Object.defineProperties(this, {parentRouter:{value:$router$$9$$, enumerable:!0}, direction:{get:function() {
          return $router$$9$$.$_navigationType$;
        }, enumerable:!0}});
      }, enumerable:!0}}), enumerable:!0}, lifecycleListener:{value:Object.create(null, {attached:{value:function($params$$19$$) {
        var $state$$4$$ = $params$$19$$.valueAccessor().params.ojRouter.parentRouter.$_currentState$();
        $state$$4$$ && ($state$$4$$.$viewModel$ = $params$$19$$.viewModel);
      }}}), enumerable:!0}});
      Object.defineProperties(this, {parent:{value:this.$_parentRouter$, enumerable:!0}});
    };
    $goog$exportPath_$$("Router", $oj$$17$$.$Router$, $oj$$17$$);
    Object.defineProperties($oj$$17$$.$Router$.prototype, {name:{get:function() {
      return this.$_name$;
    }, enumerable:!0}, states:{get:function() {
      return this.$_states$;
    }, enumerable:!0}, stateId:{get:function() {
      return this.$_stateIdComp$;
    }, enumerable:!0}, currentState:{get:function() {
      return this.$_currentState$;
    }, enumerable:!0}, currentValue:{get:function() {
      return this.$_currentValue$;
    }, enumerable:!0}, defaultStateId:{get:function() {
      return this.$_defaultStateId$;
    }, set:function($newValue$$12$$) {
      this.$_defaultStateId$ = $newValue$$12$$;
    }, enumerable:!0}, moduleConfig:{get:function() {
      return this.$_moduleConfig$;
    }, enumerable:!0}});
    var $rootRouter$$ = new $oj$$17$$.$Router$("root", void 0);
    $oj$$17$$.$Router$.prototype.$getChildRouter$ = function $$oj$$17$$$$Router$$$$getChildRouter$$($name$$106$$) {
      var $childRouter$$;
      $name$$106$$ && "string" === typeof $name$$106$$ && ($name$$106$$ = $name$$106$$.trim(), 0 < $name$$106$$.length && this.$_childRouters$.every(function($sr$$2$$) {
        return $sr$$2$$.$_name$ === $name$$106$$ ? ($childRouter$$ = $sr$$2$$, !1) : !0;
      }));
      return $childRouter$$;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.getChildRouter", {$getChildRouter$:$oj$$17$$.$Router$.prototype.$getChildRouter$});
    $oj$$17$$.$Router$.prototype.$createChildRouter$ = function $$oj$$17$$$$Router$$$$createChildRouter$$($childRouter$$1_name$$107$$) {
      var $i$$254$$, $sr$$3$$;
      $oj$$17$$.$Assert$.$assertString$($childRouter$$1_name$$107$$);
      $childRouter$$1_name$$107$$ = encodeURIComponent($childRouter$$1_name$$107$$.trim());
      for ($i$$254$$ = 0;$i$$254$$ < this.$_childRouters$.length;$i$$254$$++) {
        $sr$$3$$ = this.$_childRouters$[$i$$254$$];
        if ($sr$$3$$.$_name$ === $childRouter$$1_name$$107$$) {
          throw Error('Invalid router name "' + $childRouter$$1_name$$107$$ + '", it already exists.');
        }
        if ($sr$$3$$.$_parentState$ === this.$_stateId$()) {
          throw Error('Cannot create more than one child router for parent state id "' + $sr$$3$$.$_parentState$ + '".');
        }
      }
      $childRouter$$1_name$$107$$ = new $oj$$17$$.$Router$($childRouter$$1_name$$107$$, this);
      this.$_childRouters$.push($childRouter$$1_name$$107$$);
      return $childRouter$$1_name$$107$$;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.createChildRouter", {$createChildRouter$:$oj$$17$$.$Router$.prototype.$createChildRouter$});
    $oj$$17$$.$Router$.prototype.$stateFromIdCallback$ = function $$oj$$17$$$$Router$$$$stateFromIdCallback$$($stateId$$2$$) {
      return $getStateFromId$$(this, $stateId$$2$$);
    };
    $oj$$17$$.$Router$.prototype.$configure$ = function $$oj$$17$$$$Router$$$$configure$$($option$$29$$) {
      this.$_stateId$(void 0);
      delete this.$_defaultStateId$;
      this.$_navigationType$ = void 0;
      this.$_navHistory$ = [];
      "function" === typeof $option$$29$$ ? (this.$_states$ = null, this.$stateFromIdCallback$ = $option$$29$$) : (this.$_states$ = [], delete this.$stateFromIdCallback$, Object.keys($option$$29$$).forEach(function($key$$78$$) {
        var $rsOptions$$ = $option$$29$$[$key$$78$$];
        this.$_states$.push(new $oj$$17$$.$RouterState$($key$$78$$, $rsOptions$$, this));
        "boolean" === typeof $rsOptions$$.isDefault && $rsOptions$$.isDefault && (this.$_defaultStateId$ = $key$$78$$);
      }, this));
      return this;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.configure", {$configure$:$oj$$17$$.$Router$.prototype.$configure$});
    $oj$$17$$.$Router$.prototype.$getState$ = function $$oj$$17$$$$Router$$$$getState$$($stateId$$3$$) {
      return this.$stateFromIdCallback$($stateId$$3$$);
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.getState", {$getState$:$oj$$17$$.$Router$.prototype.$getState$});
    $oj$$17$$.$Router$.prototype.go = function $$oj$$17$$$$Router$$$go$($stateIdPath$$) {
      $_initialize$$();
      return $_queueTransition$$({$router$:this, path:$stateIdPath$$, origin:"go"});
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.go", {go:$oj$$17$$.$Router$.prototype.go});
    $oj$$17$$.$Router$.prototype.$_go$ = function $$oj$$17$$$$Router$$$$_go$$($stateIdPath$$1$$, $replace$$) {
      function $_changeState$$($canExit$$3$$) {
        return $canExit$$3$$ ? $parseAndUpdate$$($newUrl$$.replace(/^\//, "")).then(function($params$$20$$) {
          if ($params$$20$$.hasChanged) {
            var $fullUrl$$ = $_ojBaseUrl$$ + $newUrl$$;
            $oj$$17$$.$Logger$.info("%s URL to %s", $replace$$ ? "Replacing" : "Pushing", $fullUrl$$);
            window.history[$replace$$ ? "replaceState" : "pushState"](null, "", $fullUrl$$);
          }
          return $params$$20$$;
        }) : {hasChanged:!1};
      }
      var $path$$16_useDefault$$, $newUrl$$, $newStates$$1_shortUrl$$1$$;
      $path$$16_useDefault$$ = !0;
      if ($stateIdPath$$1$$) {
        if ("string" === typeof $stateIdPath$$1$$) {
          0 < $stateIdPath$$1$$.length && ($path$$16_useDefault$$ = !1);
        } else {
          return Promise.reject(Error("Invalid object type for state id."));
        }
      }
      if ($path$$16_useDefault$$ && ($stateIdPath$$1$$ = this.$_defaultStateId$ || null, !$stateIdPath$$1$$)) {
        return $oj$$17$$.$Logger$.option("level") === $oj$$17$$.$Logger$.$LEVEL_INFO$ && $oj$$17$$.$Logger$.info("Undefined state id with no default id on router %s", $getRouterFullName$$(this)), Promise.resolve({hasChanged:!1});
      }
      $path$$16_useDefault$$ = "/" === $stateIdPath$$1$$.charAt(0) ? $stateIdPath$$1$$ : $getCurrentPath$$(this.$_parentRouter$) + $stateIdPath$$1$$;
      $oj$$17$$.$Logger$.info("Destination path: %s", $path$$16_useDefault$$);
      try {
        $newStates$$1_shortUrl$$1$$ = $_buildState$$(this, $path$$16_useDefault$$);
      } catch ($err$$19$$) {
        return Promise.reject($err$$19$$);
      }
      $newUrl$$ = $_urlAdapter$$.$buildUrlFromStates$($newStates$$1_shortUrl$$1$$);
      $oj$$17$$.$Logger$.option("level") === $oj$$17$$.$Logger$.$LEVEL_INFO$ && $oj$$17$$.$Logger$.info("Going to URL %s on router %s", $newUrl$$, $getRouterFullName$$(this));
      $newStates$$1_shortUrl$$1$$ = "/" + $_urlAdapter$$.$cleanUrl$($getShortUrl$$()).replace($_thisPage$$, "");
      return $_urlAdapter$$.$cleanUrl$($newUrl$$) !== $newStates$$1_shortUrl$$1$$ ? ($oj$$17$$.$Logger$.info("New URL is different."), $_canExit$$(this).then($_changeState$$)) : Promise.resolve({hasChanged:!1});
    };
    $oj$$17$$.$Router$.prototype.$store$ = function $$oj$$17$$$$Router$$$$store$$($data$$122_extraState$$2$$) {
      this.$_extra$ = $data$$122_extraState$$2$$;
      $data$$122_extraState$$2$$ = {};
      for (var $router$$10$$ = this;$router$$10$$;) {
        $router$$10$$.$_extra$ && ($data$$122_extraState$$2$$[$router$$10$$.$_name$] = $router$$10$$.$_extra$), $router$$10$$ = $router$$10$$.$_parentRouter$;
      }
      for (var $router$$10$$ = this, $nextLevel_url$$26$$, $i$$255$$, $sr$$4$$;$router$$10$$;) {
        for ($i$$255$$ = 0;$i$$255$$ < $router$$10$$.$_childRouters$.length;$i$$255$$++) {
          if ($sr$$4$$ = $router$$10$$.$_childRouters$[$i$$255$$], $router$$10$$.$_stateId$() && $router$$10$$.$_stateId$() === $sr$$4$$.$_parentState$) {
            $sr$$4$$.$_extra$ && ($data$$122_extraState$$2$$[$sr$$4$$.$_name$] = $sr$$4$$.$_extra$);
            $nextLevel_url$$26$$ = $sr$$4$$;
            break;
          }
        }
        $router$$10$$ = $nextLevel_url$$26$$;
        $nextLevel_url$$26$$ = void 0;
      }
      $nextLevel_url$$26$$ = $_ojBaseUrl$$ + "/" + $_urlAdapter$$.$cleanUrl$($getShortUrl$$());
      $nextLevel_url$$26$$ = $addStateParam$$($nextLevel_url$$26$$, $data$$122_extraState$$2$$);
      window.history.replaceState(null, "", $nextLevel_url$$26$$);
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.store", {$store$:$oj$$17$$.$Router$.prototype.$store$});
    $oj$$17$$.$Router$.prototype.$retrieve$ = function $$oj$$17$$$$Router$$$$retrieve$$() {
      return this.$_extra$;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.retrieve", {$retrieve$:$oj$$17$$.$Router$.prototype.$retrieve$});
    $oj$$17$$.$Router$.prototype.$dispose$ = function $$oj$$17$$$$Router$$$$dispose$$() {
      for (var $parentChildren$$, $i$$256$$;0 < this.$_childRouters$.length;) {
        this.$_childRouters$[0].$dispose$();
      }
      if (this.$_parentRouter$) {
        $parentChildren$$ = this.$_parentRouter$.$_childRouters$;
        for ($i$$256$$ = 0;$i$$256$$ < $parentChildren$$.length;$i$$256$$++) {
          if ($parentChildren$$[$i$$256$$].$_name$ === this.$_name$) {
            $parentChildren$$.splice($i$$256$$, 1);
            break;
          }
        }
        delete this.$_parentState$;
      } else {
        $_ojBaseUrl$$ = "", $_urlAdapter$$ = {}, this.$_name$ = "root", window.removeEventListener("popstate", $handlePopState$$), $oj$$17$$.$Router$.$_transitionedToState$.removeAll(), $_initialized$$ = !1;
      }
      delete this.$_navigationType$;
      this.$_navHistory$ = [];
      this.$_states$ = null;
      delete this.$_defaultStateId$;
      delete this.$_extra$;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("Router.prototype.dispose", {$dispose$:$oj$$17$$.$Router$.prototype.$dispose$});
    $oj$$17$$.$Router$.$_transitionedToState$ = new $signals$$1$$.Signal;
    $oj$$17$$.$Router$.$_updating$ = !1;
    Object.defineProperties($oj$$17$$.$Router$, {rootInstance:{value:$rootRouter$$, enumerable:!0}, transitionedToState:{value:$oj$$17$$.$Router$.$_transitionedToState$, enumerable:!0}});
    $oj$$17$$.$Router$.$defaults$ = {};
    $goog$exportPath_$$("Router.defaults", $oj$$17$$.$Router$.$defaults$, $oj$$17$$);
    Object.defineProperties($oj$$17$$.$Router$.$defaults$, {urlAdapter:{get:function() {
      $_urlAdapter$$ || ($_urlAdapter$$ = new $oj$$17$$.$Router$.$urlPathAdapter$);
      return $_urlAdapter$$;
    }, set:function($urlAdapter$$) {
      if ($_initialized$$) {
        throw Error("Incorrect operation. Cannot change URL adapter after calling sync() or go().");
      }
      $_urlAdapter$$ = $urlAdapter$$;
    }, enumerable:!0, $readonly$:!1}, baseUrl:{get:function() {
      $_ojBaseUrl$$ || ($_ojBaseUrl$$ = $removeLastSegment$$());
      return $_ojBaseUrl$$;
    }, set:function($baseUrl$$1$$) {
      if ($_initialized$$) {
        throw Error("Incorrect operation. Cannot change base URL after calling sync() or go().");
      }
      $_ojBaseUrl$$ = $baseUrl$$1$$.replace(/\/$/, "");
    }, enumerable:!0, $readonly$:!1}, rootInstanceName:{get:function() {
      return $rootRouter$$.$_name$;
    }, set:function($rootName$$) {
      if ($_initialized$$) {
        throw Error("Incorrect operation. Cannot change the name of the root instance after calling sync() or go().");
      }
      $oj$$17$$.$Assert$.$assertString$($rootName$$);
      $rootRouter$$.$_name$ = encodeURIComponent($rootName$$.trim());
    }, enumerable:!0, $readonly$:!1}});
    $oj$$17$$.$Router$.$sync$ = function $$oj$$17$$$$Router$$$sync$$() {
      var $transition$$3$$;
      $_initialize$$();
      $oj$$17$$.$Logger$.info("Entering sync.");
      if ($_deferredPath$$) {
        return $transition$$3$$ = {$router$:$rootRouter$$, path:$_deferredPath$$, $deferredHandling$:!0, replace:!0}, $_deferredPath$$ = void 0, $_queueTransition$$($transition$$3$$);
      }
      if ($oj$$17$$.$Router$.$_updating$) {
        return $oj$$17$$.$Logger$.info("Sync called while updating, waiting for updates to end."), new Promise(function($resolve$$29$$) {
          $oj$$17$$.$Router$.$_transitionedToState$.addOnce(function($result$$45$$) {
            $oj$$17$$.$Logger$.info("Sync updates done.");
            $resolve$$29$$($result$$45$$);
          });
        });
      }
      $transition$$3$$ = {$router$:$rootRouter$$, url:$getShortUrl$$(), origin:"sync"};
      return $_queueTransition$$($transition$$3$$);
    };
    $goog$exportPath_$$("Router.sync", $oj$$17$$.$Router$.$sync$, $oj$$17$$);
    $oj$$17$$.$Router$.$urlPathAdapter$ = function $$oj$$17$$$$Router$$$urlPathAdapter$$() {
      this.parse = function $this$parse$($segments_url$$27$$) {
        var $router$$11$$ = $rootRouter$$;
        $segments_url$$27$$ = $segments_url$$27$$.split("/");
        var $changes$$3$$ = [], $value$$225$$;
        do {
          ($value$$225$$ = $segments_url$$27$$.shift()) && (0 === $value$$225$$.length || /\.html$/i.test($value$$225$$)) && ($value$$225$$ = void 0), $value$$225$$ = $value$$225$$ || $router$$11$$.$_defaultStateId$, $changes$$3$$.push({value:$value$$225$$, $router$:$router$$11$$}), $router$$11$$ = $_getChildRouter$$($router$$11$$, $value$$225$$);
        } while ($router$$11$$);
        return $changes$$3$$;
      };
      this.$buildUrlFromStates$ = function $this$$buildUrlFromStates$$($newStates$$2$$) {
        var $newUrl$$1$$ = "", $extraState$$3$$ = {};
        $newStates$$2$$.forEach(function($ns$$) {
          $ns$$.$stateId$ && ($newUrl$$1$$ += "/" + $ns$$.$stateId$);
          $ns$$.$router$.$extra$ && ($extraState$$3$$[$ns$$.$router$.$_name$] = $ns$$.$router$.$_extra$);
        });
        "" === $newUrl$$1$$ && ($newUrl$$1$$ = "/" + $_thisPage$$);
        try {
          $newUrl$$1$$ = $addStateParam$$($newUrl$$1$$, $extraState$$3$$);
        } catch ($err$$20$$) {
          $oj$$17$$.$Logger$.error("Error while building URL: %s", $err$$20$$);
        }
        return $newUrl$$1$$;
      };
      this.$cleanUrl$ = function $this$$cleanUrl$$($url$$28$$) {
        return $url$$28$$.split("?")[0];
      };
      this.$getQueryParam$ = function $this$$getQueryParam$$($url$$29$$) {
        var $queryIndex$$ = $url$$29$$.indexOf("?"), $queryString$$3$$ = null;
        -1 !== $queryIndex$$ && ($queryString$$3$$ = $url$$29$$.substr($queryIndex$$ + 1));
        return $parseQueryParam$$($queryString$$3$$);
      };
    };
    $goog$exportPath_$$("Router.urlPathAdapter", $oj$$17$$.$Router$.$urlPathAdapter$, $oj$$17$$);
    $oj$$17$$.$Router$.$urlParamAdapter$ = function $$oj$$17$$$$Router$$$urlParamAdapter$$() {
      this.parse = function $this$parse$($params$$21_url$$30$$) {
        $params$$21_url$$30$$ = this.$getQueryParam$($params$$21_url$$30$$);
        var $router$$12$$ = $rootRouter$$, $changes$$4$$ = [], $value$$226$$;
        do {
          if ($value$$226$$ = $params$$21_url$$30$$[$router$$12$$.$_name$]) {
            $value$$226$$ = $value$$226$$[0], delete $params$$21_url$$30$$[$router$$12$$.$_name$];
          }
          $value$$226$$ = $value$$226$$ || $router$$12$$.$_defaultStateId$;
          $changes$$4$$.push({value:$value$$226$$, $router$:$router$$12$$});
          $router$$12$$ = $_getChildRouter$$($router$$12$$, $value$$226$$);
        } while ($router$$12$$);
        return $changes$$4$$;
      };
      this.$buildUrlFromStates$ = function $this$$buildUrlFromStates$$($newStates$$3$$) {
        var $newUrl$$2$$ = "/" + $_thisPage$$, $extraState$$4$$ = {}, $sep$$2$$ = "?";
        $newStates$$3$$.forEach(function($ns$$1$$) {
          $ns$$1$$.$stateId$ && ($newUrl$$2$$ += $sep$$2$$ + $ns$$1$$.$router$.$_name$ + "\x3d" + $ns$$1$$.$stateId$, $sep$$2$$ = "\x26");
          $ns$$1$$.$router$.$_extra$ && ($extraState$$4$$[$ns$$1$$.$router$.$_name$] = $ns$$1$$.$router$.$_extra$);
        });
        try {
          $newUrl$$2$$ = $addStateParam$$($newUrl$$2$$, $extraState$$4$$);
        } catch ($err$$21$$) {
          $oj$$17$$.$Logger$.error("Error while building URL: %s", $err$$21$$);
        }
        return $newUrl$$2$$;
      };
      this.$cleanUrl$ = function $this$$cleanUrl$$($url$$31$$) {
        var $index$$111$$ = $url$$31$$.indexOf("oj_Router\x3d");
        return-1 !== $index$$111$$ ? $url$$31$$.substr(0, $index$$111$$ - 1) : $url$$31$$;
      };
      this.$getQueryParam$ = function $this$$getQueryParam$$($url$$32$$) {
        var $queryIndex$$1$$ = $url$$32$$.indexOf("?"), $params$$22_queryString$$4$$ = null, $params$$22_queryString$$4$$ = {};
        -1 !== $queryIndex$$1$$ && ($params$$22_queryString$$4$$ = $url$$32$$.substr($queryIndex$$1$$ + 1), $params$$22_queryString$$4$$ = $parseQueryParam$$($params$$22_queryString$$4$$));
        return $params$$22_queryString$$4$$;
      };
    };
    $goog$exportPath_$$("Router.urlParamAdapter", $oj$$17$$.$Router$.$urlParamAdapter$, $oj$$17$$);
    return $rootRouter$$;
  })();
  (function() {
    function $_compress$$($uncompressed$$, $getCharFromInt$$) {
      if (null === $uncompressed$$) {
        return "";
      }
      var $i$$258$$, $value$$227$$, $context_dictionary$$ = {}, $context_dictionaryToCreate$$ = {}, $context_w$$ = "", $context_enlargeIn$$ = 2, $context_dictSize$$ = 3, $context_numBits$$ = 2, $context_data_string$$ = "", $context_data_val$$ = 0, $context_data_position$$ = 0, $context_c$$, $context_wc$$, $ii$$, $len$$17$$ = $uncompressed$$.length;
      for ($ii$$ = 0;$ii$$ < $len$$17$$;$ii$$++) {
        if ($context_c$$ = $uncompressed$$[$ii$$], Object.prototype.hasOwnProperty.call($context_dictionary$$, $context_c$$) || ($context_dictionary$$[$context_c$$] = $context_dictSize$$++, $context_dictionaryToCreate$$[$context_c$$] = !0), $context_wc$$ = $context_w$$ + $context_c$$, Object.prototype.hasOwnProperty.call($context_dictionary$$, $context_wc$$)) {
          $context_w$$ = $context_wc$$;
        } else {
          if (Object.prototype.hasOwnProperty.call($context_dictionaryToCreate$$, $context_w$$)) {
            if (256 > $context_w$$.charCodeAt(0)) {
              for ($i$$258$$ = $context_numBits$$;$i$$258$$--;) {
                $context_data_val$$ <<= 1, 5 == $context_data_position$$ ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++;
              }
              $value$$227$$ = $context_w$$.charCodeAt(0);
              $i$$258$$ = 8;
            } else {
              $value$$227$$ = 1;
              for ($i$$258$$ = $context_numBits$$;$i$$258$$--;) {
                $context_data_val$$ = $context_data_val$$ << 1 | $value$$227$$, 5 == $context_data_position$$ ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$227$$ = 0;
              }
              $value$$227$$ = $context_w$$.charCodeAt(0);
              $i$$258$$ = 16;
            }
            for (;$i$$258$$--;) {
              $context_data_val$$ = $context_data_val$$ << 1 | $value$$227$$ & 1, 5 == $context_data_position$$ ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$227$$ >>= 1;
            }
            $context_enlargeIn$$--;
            0 == $context_enlargeIn$$ && ($context_enlargeIn$$ = Math.pow(2, $context_numBits$$), $context_numBits$$++);
            delete $context_dictionaryToCreate$$[$context_w$$];
          } else {
            for ($value$$227$$ = $context_dictionary$$[$context_w$$], $i$$258$$ = $context_numBits$$;$i$$258$$--;) {
              $context_data_val$$ = $context_data_val$$ << 1 | $value$$227$$ & 1, 5 == $context_data_position$$ ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$227$$ >>= 1;
            }
          }
          $context_enlargeIn$$--;
          0 == $context_enlargeIn$$ && ($context_enlargeIn$$ = Math.pow(2, $context_numBits$$), $context_numBits$$++);
          $context_dictionary$$[$context_wc$$] = $context_dictSize$$++;
          $context_w$$ = String($context_c$$);
        }
      }
      if ("" !== $context_w$$) {
        if (Object.prototype.hasOwnProperty.call($context_dictionaryToCreate$$, $context_w$$)) {
          if (256 > $context_w$$.charCodeAt(0)) {
            for ($i$$258$$ = $context_numBits$$;$i$$258$$--;) {
              $context_data_val$$ <<= 1, 5 == $context_data_position$$ ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++;
            }
            $value$$227$$ = $context_w$$.charCodeAt(0);
            $i$$258$$ = 8;
          } else {
            $value$$227$$ = 1;
            for ($i$$258$$ = $context_numBits$$;$i$$258$$--;) {
              $context_data_val$$ = $context_data_val$$ << 1 | $value$$227$$, 5 == $context_data_position$$ ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$227$$ = 0;
            }
            $value$$227$$ = $context_w$$.charCodeAt(0);
            $i$$258$$ = 16;
          }
          for (;$i$$258$$--;) {
            $context_data_val$$ = $context_data_val$$ << 1 | $value$$227$$ & 1, 5 == $context_data_position$$ ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$227$$ >>= 1;
          }
          $context_enlargeIn$$--;
          0 == $context_enlargeIn$$ && ($context_enlargeIn$$ = Math.pow(2, $context_numBits$$), $context_numBits$$++);
          delete $context_dictionaryToCreate$$[$context_w$$];
        } else {
          for ($value$$227$$ = $context_dictionary$$[$context_w$$], $i$$258$$ = $context_numBits$$;$i$$258$$--;) {
            $context_data_val$$ = $context_data_val$$ << 1 | $value$$227$$ & 1, 5 == $context_data_position$$ ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$227$$ >>= 1;
          }
        }
        $context_enlargeIn$$--;
        0 == $context_enlargeIn$$ && $context_numBits$$++;
      }
      $value$$227$$ = 2;
      for ($i$$258$$ = $context_numBits$$;$i$$258$$--;) {
        $context_data_val$$ = $context_data_val$$ << 1 | $value$$227$$ & 1, 5 == $context_data_position$$ ? ($context_data_position$$ = 0, $context_data_string$$ += $getCharFromInt$$($context_data_val$$), $context_data_val$$ = 0) : $context_data_position$$++, $value$$227$$ >>= 1;
      }
      for (;;) {
        if ($context_data_val$$ <<= 1, 5 == $context_data_position$$) {
          $context_data_string$$ += $getCharFromInt$$($context_data_val$$);
          break;
        } else {
          $context_data_position$$++;
        }
      }
      return $context_data_string$$;
    }
    function $_decompress$$($length$$16$$, $getNextValue$$) {
      for (var $dictionary$$ = [], $enlargeIn$$ = 4, $dictSize$$ = 4, $numBits$$ = 3, $bits_entry$$4$$ = "", $i$$259_result$$46$$ = "", $w$$5$$, $resb$$, $maxpower$$, $power$$, $c$$39$$, $data$$123$$ = {val:$getNextValue$$(0), position:32, index:1}, $i$$259_result$$46$$ = 0;3 > $i$$259_result$$46$$;$i$$259_result$$46$$ += 1) {
        $dictionary$$[$i$$259_result$$46$$] = $i$$259_result$$46$$;
      }
      $bits_entry$$4$$ = 0;
      $maxpower$$ = Math.pow(2, 2);
      for ($power$$ = 1;$power$$ != $maxpower$$;) {
        $resb$$ = $data$$123$$.val & $data$$123$$.position, $data$$123$$.position >>= 1, 0 == $data$$123$$.position && ($data$$123$$.position = 32, $data$$123$$.val = $getNextValue$$($data$$123$$.index++)), $bits_entry$$4$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
      }
      switch($bits_entry$$4$$) {
        case 0:
          $bits_entry$$4$$ = 0;
          $maxpower$$ = Math.pow(2, 8);
          for ($power$$ = 1;$power$$ != $maxpower$$;) {
            $resb$$ = $data$$123$$.val & $data$$123$$.position, $data$$123$$.position >>= 1, 0 == $data$$123$$.position && ($data$$123$$.position = 32, $data$$123$$.val = $getNextValue$$($data$$123$$.index++)), $bits_entry$$4$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
          }
          $c$$39$$ = $_fcc$$($bits_entry$$4$$);
          break;
        case 1:
          $bits_entry$$4$$ = 0;
          $maxpower$$ = Math.pow(2, 16);
          for ($power$$ = 1;$power$$ != $maxpower$$;) {
            $resb$$ = $data$$123$$.val & $data$$123$$.position, $data$$123$$.position >>= 1, 0 == $data$$123$$.position && ($data$$123$$.position = 32, $data$$123$$.val = $getNextValue$$($data$$123$$.index++)), $bits_entry$$4$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
          }
          $c$$39$$ = $_fcc$$($bits_entry$$4$$);
          break;
        case 2:
          return "";
      }
      for ($w$$5$$ = $i$$259_result$$46$$ = $dictionary$$[3] = $c$$39$$;;) {
        if ($data$$123$$.index > $length$$16$$) {
          return "";
        }
        $bits_entry$$4$$ = 0;
        $maxpower$$ = Math.pow(2, $numBits$$);
        for ($power$$ = 1;$power$$ != $maxpower$$;) {
          $resb$$ = $data$$123$$.val & $data$$123$$.position, $data$$123$$.position >>= 1, 0 == $data$$123$$.position && ($data$$123$$.position = 32, $data$$123$$.val = $getNextValue$$($data$$123$$.index++)), $bits_entry$$4$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
        }
        switch($c$$39$$ = $bits_entry$$4$$) {
          case 0:
            $bits_entry$$4$$ = 0;
            $maxpower$$ = Math.pow(2, 8);
            for ($power$$ = 1;$power$$ != $maxpower$$;) {
              $resb$$ = $data$$123$$.val & $data$$123$$.position, $data$$123$$.position >>= 1, 0 == $data$$123$$.position && ($data$$123$$.position = 32, $data$$123$$.val = $getNextValue$$($data$$123$$.index++)), $bits_entry$$4$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
            }
            $dictionary$$[$dictSize$$++] = $_fcc$$($bits_entry$$4$$);
            $c$$39$$ = $dictSize$$ - 1;
            $enlargeIn$$--;
            break;
          case 1:
            $bits_entry$$4$$ = 0;
            $maxpower$$ = Math.pow(2, 16);
            for ($power$$ = 1;$power$$ != $maxpower$$;) {
              $resb$$ = $data$$123$$.val & $data$$123$$.position, $data$$123$$.position >>= 1, 0 == $data$$123$$.position && ($data$$123$$.position = 32, $data$$123$$.val = $getNextValue$$($data$$123$$.index++)), $bits_entry$$4$$ |= (0 < $resb$$ ? 1 : 0) * $power$$, $power$$ <<= 1;
            }
            $dictionary$$[$dictSize$$++] = $_fcc$$($bits_entry$$4$$);
            $c$$39$$ = $dictSize$$ - 1;
            $enlargeIn$$--;
            break;
          case 2:
            return $i$$259_result$$46$$;
        }
        0 == $enlargeIn$$ && ($enlargeIn$$ = Math.pow(2, $numBits$$), $numBits$$++);
        if ($dictionary$$[$c$$39$$]) {
          $bits_entry$$4$$ = $dictionary$$[$c$$39$$];
        } else {
          if ($c$$39$$ === $dictSize$$) {
            $bits_entry$$4$$ = $w$$5$$ + $w$$5$$[0];
          } else {
            return null;
          }
        }
        $i$$259_result$$46$$ += $bits_entry$$4$$;
        $dictionary$$[$dictSize$$++] = $w$$5$$ + $bits_entry$$4$$[0];
        $enlargeIn$$--;
        $w$$5$$ = $bits_entry$$4$$;
        0 == $enlargeIn$$ && ($enlargeIn$$ = Math.pow(2, $numBits$$), $numBits$$++);
      }
    }
    $oj$$17$$.$LZString$ = {$compressToEncodedURIComponent$:function $$oj$$17$$$$LZString$$$compressToEncodedURIComponent$$($input$$6$$) {
      return null === $input$$6$$ ? "" : $_compress$$($input$$6$$, function($a$$103$$) {
        return $_keyStrUriSafe$$.charAt($a$$103$$);
      });
    }, $decompressFromEncodedURIComponent$:function $$oj$$17$$$$LZString$$$decompressFromEncodedURIComponent$$($input$$7$$) {
      return null === $input$$7$$ ? "" : "" === $input$$7$$ ? null : $_decompress$$($input$$7$$.length, function($character$$inline_731_index$$112$$) {
        var $alphabet$$inline_730$$ = $_keyStrUriSafe$$;
        $character$$inline_731_index$$112$$ = $input$$7$$.charAt($character$$inline_731_index$$112$$);
        var $i$$inline_732$$;
        $_baseReverseDic$$ || ($_baseReverseDic$$ = {});
        if (!$_baseReverseDic$$[$alphabet$$inline_730$$]) {
          for ($_baseReverseDic$$[$alphabet$$inline_730$$] = {}, $i$$inline_732$$ = 0;$i$$inline_732$$ < $alphabet$$inline_730$$.length;$i$$inline_732$$++) {
            $_baseReverseDic$$[$alphabet$$inline_730$$][$alphabet$$inline_730$$[$i$$inline_732$$]] = $i$$inline_732$$;
          }
        }
        return $_baseReverseDic$$[$alphabet$$inline_730$$][$character$$inline_731_index$$112$$];
      });
    }};
    var $_fcc$$ = String.fromCharCode, $_keyStrUriSafe$$ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", $_baseReverseDic$$;
  })();
  (function() {
    $oj$$17$$.$RouterState$ = function $$oj$$17$$$$RouterState$$($id$$27$$, $options$$256$$, $router$$13$$) {
      $options$$256$$ = $options$$256$$ || {};
      $oj$$17$$.$Assert$.$assertString$($id$$27$$);
      this.$_id$ = encodeURIComponent($id$$27$$.trim());
      (this.$_canEnter$ = $options$$256$$.canEnter) && $oj$$17$$.$Assert$.$assertFunctionOrNull$(this.$_canEnter$);
      (this.$_enter$ = $options$$256$$.enter) && $oj$$17$$.$Assert$.$assertFunctionOrNull$(this.$_enter$);
      (this.$_canExit$ = $options$$256$$.canExit) && $oj$$17$$.$Assert$.$assertFunctionOrNull$(this.$_canExit$);
      (this.$_exit$ = $options$$256$$.exit) && $oj$$17$$.$Assert$.$assertFunctionOrNull$(this.$_exit$);
      this.$_value$ = $options$$256$$.value;
      this.$_label$ = $options$$256$$.label;
      this.$_router$ = $router$$13$$;
      this.$viewModel$ = void 0;
      Object.defineProperties(this, {id:{value:this.$_id$, enumerable:!0}, value:{get:function() {
        return this.$_value$;
      }, set:function($newValue$$13$$) {
        this.$_value$ = $newValue$$13$$;
      }, enumerable:!0}, label:{get:function() {
        return this.$_label$;
      }, set:function($newValue$$14$$) {
        this.$_label$ = $newValue$$14$$;
      }, enumerable:!0}, canEnter:{get:function() {
        return this.$_canEnter$;
      }, set:function($newValue$$15$$) {
        this.$_canEnter$ = $newValue$$15$$;
      }, enumerable:!0}, enter:{get:function() {
        return this.$_enter$;
      }, set:function($newValue$$16$$) {
        this.$_enter$ = $newValue$$16$$;
      }, enumerable:!0}, canExit:{get:function() {
        return this.$_canExit$;
      }, set:function($newValue$$17$$) {
        this.$_canExit$ = $newValue$$17$$;
      }, enumerable:!0}, exit:{get:function() {
        return this.$_exit$;
      }, set:function($newValue$$18$$) {
        this.$_exit$ = $newValue$$18$$;
      }, enumerable:!0}});
    };
    $goog$exportPath_$$("RouterState", $oj$$17$$.$RouterState$, $oj$$17$$);
    $oj$$17$$.$RouterState$.prototype.go = function $$oj$$17$$$$RouterState$$$go$() {
      return this.$_router$ ? this.$_router$.go(this.$_id$) : ($oj$$17$$.$Router$.$_transitionedToState$.dispatch({hasChanged:!1}), Promise.reject(Error("Router is not defined for this RouterState object.")));
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("RouterState.prototype.go", {go:$oj$$17$$.$RouterState$.prototype.go});
    $oj$$17$$.$RouterState$.prototype.$isCurrent$ = function $$oj$$17$$$$RouterState$$$$isCurrent$$() {
      if (!this.$_router$) {
        throw Error("Router is not defined for this RouterState object.");
      }
      return this.$_router$.$_stateId$() === this.$_id$;
    };
    $oj$$17$$.$Object$.$exportPrototypeSymbol$("RouterState.prototype.isCurrent", {$isCurrent$:$oj$$17$$.$RouterState$.prototype.$isCurrent$});
  })();
});
