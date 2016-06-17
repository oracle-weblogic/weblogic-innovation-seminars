/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$52$$, $ko$$7$$) {
  $oj$$52$$.$ModuleBinding$ = {};
  $oj$$52$$.$ModuleBinding$.$defaults$ = {viewPath:"text!views/", viewSuffix:".html", modelPath:"viewModels/", initializeMethod:"initialize", disposeMethod:"dispose", activatedHandler:"handleActivated", attachedHandler:"handleAttached", detachedHandler:"handleDetached", bindingsAppliedHandler:"handleBindingsApplied", deactivatedHandler:"handleDeactivated", transitionCompletedHandler:"handleTransitionCompleted"};
  $goog$exportPath_$$("ModuleBinding.defaults", $oj$$52$$.$ModuleBinding$.$defaults$, $oj$$52$$);
  (function() {
    function $_animate$$($actx$$, $animation$$, $element$$132$$, $oldDomNodes$$, $insertAndActivateFunc$$, $removeOldDomNodes$$, $transitionComplete$$) {
      var $canAnimateFunc_settings$$4$$ = $animation$$.canAnimate;
      if (null == $canAnimateFunc_settings$$4$$ || $canAnimateFunc_settings$$4$$.call($animation$$, $actx$$)) {
        var $newViewParent$$, $oldViewParent$$;
        if ($canAnimateFunc_settings$$4$$ = $animation$$.prepareAnimation.call($animation$$, $actx$$)) {
          $newViewParent$$ = $canAnimateFunc_settings$$4$$.newViewParent, $oldViewParent$$ = $canAnimateFunc_settings$$4$$.oldViewParent;
        }
        var $targetElement$$ = $newViewParent$$ || $element$$132$$;
        $oldViewParent$$ && $oldViewParent$$ !== $element$$132$$ ? $_moveDomNodes$$($oldDomNodes$$, $oldViewParent$$) : $targetElement$$ === $element$$132$$ && $removeOldDomNodes$$(null);
        $targetElement$$ !== $element$$132$$ && $ko$$7$$.virtualElements.setDomNodeChildren($targetElement$$, []);
        $insertAndActivateFunc$$($targetElement$$);
        var $newDomNodes$$ = Array.prototype.slice.call($targetElement$$.childNodes), $viewInserted$$ = !1, $insertNewView$$ = function $$insertNewView$$$() {
          $viewInserted$$ || ($viewInserted$$ = !0, $element$$132$$ !== $targetElement$$ && $_insertNodes$$($element$$132$$, $newDomNodes$$));
        }, $removeOldView$$ = $removeOldDomNodes$$.bind(null, $oldViewParent$$);
        $actx$$.newViewParent = $newViewParent$$;
        $actx$$.oldViewParent = $oldViewParent$$;
        $actx$$.oldViewNodes = $oldDomNodes$$;
        $actx$$.removeOldView = $removeOldView$$;
        $actx$$.insertNewView = $insertNewView$$;
        var $postAnimation$$ = function $$postAnimation$$$() {
          $removeOldView$$();
          $insertNewView$$();
          $transitionComplete$$();
        };
        return $animation$$.animate.call($animation$$, $actx$$).then($postAnimation$$, function() {
          $postAnimation$$();
          $oj$$52$$.$Logger$.error("ojModule animation promise was rejected");
        });
      }
    }
    function $_detachOldView$$($element$$133$$, $oldViewParent$$1$$, $cacheHolder$$) {
      $oldViewParent$$1$$ = $oldViewParent$$1$$ || $element$$133$$;
      var $empty$$3$$ = [];
      $cacheHolder$$ && $element$$133$$ === $oldViewParent$$1$$ && ($cacheHolder$$.parentNode.removeChild($cacheHolder$$), $empty$$3$$.push($cacheHolder$$));
      $ko$$7$$.virtualElements.setDomNodeChildren($oldViewParent$$1$$, $empty$$3$$);
    }
    function $_moveDomNodes$$($nodes$$, $target$$96$$) {
      $nodes$$.forEach(function($n$$26$$) {
        $target$$96$$.appendChild($n$$26$$);
      });
    }
    function $_invokeLifecycleListener$$($listener$$40$$, $method$$7$$, $params$$23$$) {
      if ($listener$$40$$ && $listener$$40$$[$method$$7$$]) {
        var $data$$166$$ = {element:$params$$23$$[0], valueAccessor:$params$$23$$[1]};
        2 < $params$$23$$.length && ($data$$166$$.viewModel = $params$$23$$[2], 3 < $params$$23$$.length && ($data$$166$$["boolean" === typeof $params$$23$$[3] ? "fromCache" : "cachedNodes"] = $params$$23$$[3]));
        return $ko$$7$$.ignoreDependencies($listener$$40$$[$method$$7$$], $listener$$40$$, [$data$$166$$]);
      }
    }
    function $_invokeViewModelMethod$$($model$$93$$, $handler$$50_key$$169_name$$116$$, $params$$24$$) {
      if (null != $model$$93$$ && ($handler$$50_key$$169_name$$116$$ = $oj$$52$$.$ModuleBinding$.$defaults$[$handler$$50_key$$169_name$$116$$], null != $handler$$50_key$$169_name$$116$$ && $model$$93$$ && ($handler$$50_key$$169_name$$116$$ = $model$$93$$[$handler$$50_key$$169_name$$116$$], "function" === typeof $handler$$50_key$$169_name$$116$$))) {
        var $data$$167$$ = void 0;
        $params$$24$$ && ($data$$167$$ = {element:$params$$24$$[0], valueAccessor:$params$$24$$[1]}, 2 < $params$$24$$.length && ($data$$167$$["boolean" === typeof $params$$24$$[2] ? "fromCache" : "cachedNodes"] = $params$$24$$[2]));
        return $ko$$7$$.ignoreDependencies($handler$$50_key$$169_name$$116$$, $model$$93$$, [$data$$167$$]);
      }
    }
    function $_getContainedNodes$$($container$$31_node$$101$$, $cacheHolder$$1$$, $endCommentNode$$) {
      var $childList$$ = [];
      for ($container$$31_node$$101$$ = $ko$$7$$.virtualElements.firstChild($container$$31_node$$101$$);null != $container$$31_node$$101$$ && $container$$31_node$$101$$ != $endCommentNode$$;$container$$31_node$$101$$ = $container$$31_node$$101$$.nextSibling) {
        $container$$31_node$$101$$ != $cacheHolder$$1$$ && $childList$$.push($container$$31_node$$101$$);
      }
      return $childList$$;
    }
    function $_getKoNodes$$($container$$32$$, $cacheHolder$$2$$) {
      var $nodes$$1$$ = [], $firstChild$$2$$ = $ko$$7$$.virtualElements.firstChild($container$$32$$);
      $_koNodesForEach$$($firstChild$$2$$, $cacheHolder$$2$$, function($node$$102$$) {
        $nodes$$1$$.push($node$$102$$);
      });
      return $nodes$$1$$;
    }
    function $_koNodesForEach$$($first$$9_node$$103$$, $cacheHolder$$3$$, $callback$$110$$) {
      for (;null != $first$$9_node$$103$$;) {
        var $next$$9$$ = $ko$$7$$.virtualElements.nextSibling($first$$9_node$$103$$), $type$$95$$ = $first$$9_node$$103$$.nodeType;
        $first$$9_node$$103$$ === $cacheHolder$$3$$ || 1 !== $type$$95$$ && 8 !== $type$$95$$ || $callback$$110$$($first$$9_node$$103$$);
        $first$$9_node$$103$$ = $next$$9$$;
      }
    }
    function $_insertNodes$$($container$$33$$, $nodes$$2$$) {
      for (var $i$$412$$ = $nodes$$2$$.length - 1;0 <= $i$$412$$;$i$$412$$--) {
        $ko$$7$$.virtualElements.prepend($container$$33$$, $nodes$$2$$[$i$$412$$]);
      }
    }
    function $_propagateSubtreeVisibilityToComponents$$($nodeArray$$, $visible$$) {
      if (null != $oj$$52$$.Components) {
        for (var $i$$413$$ = 0;$i$$413$$ < $nodeArray$$.length;$i$$413$$++) {
          $visible$$ ? $oj$$52$$.Components.$subtreeShown$($nodeArray$$[$i$$413$$]) : $oj$$52$$.Components.$subtreeHidden$($nodeArray$$[$i$$413$$]);
        }
      }
    }
    function $_getDomNodes$$($content$$27$$) {
      if ("string" === typeof $content$$27$$) {
        $content$$27$$ = $ko$$7$$.utils.parseHtmlFragment($content$$27$$);
      } else {
        if (window.DocumentFragment ? $content$$27$$ instanceof DocumentFragment : $content$$27$$ && 11 === $content$$27$$.nodeType) {
          $content$$27$$ = $ko$$7$$.utils.arrayPushAll([], $content$$27$$.childNodes);
        } else {
          if (Array.isArray($content$$27$$)) {
            $content$$27$$ = $ko$$7$$.utils.arrayPushAll([], $content$$27$$);
          } else {
            throw "The View (" + $content$$27$$ + ") has an unsupported type";
          }
        }
      }
      return $content$$27$$;
    }
    function $_getRequirePromise$$($module$$1$$) {
      return new Promise(function($resolve$$59$$) {
        require([$module$$1$$], function($loaded$$) {
          $resolve$$59$$($loaded$$);
        }, function() {
          throw Error("ojModule failed to load " + $module$$1$$);
        });
      });
    }
    function $_createNoFailPromise$$($promise$$5$$) {
      return $promise$$5$$ ? new Promise(function($resolve$$60$$) {
        $promise$$5$$.then($resolve$$60$$, $resolve$$60$$);
      }) : $promise$$5$$;
    }
    $ko$$7$$.bindingHandlers.ojModule = {init:function $$ko$$7$$$bindingHandlers$ojModule$init$($element$$134$$, $valueAccessor$$20$$, $allBindingsAccessor$$15$$, $viewModel$$4$$, $bindingContext$$35$$) {
      function $checkPeningId$$($id$$39$$) {
        if ($id$$39$$ != $pendingViewId$$) {
          throw Error("Promise cancelled because ojModule is fetching new View and ViewModel");
        }
      }
      function $invokeModelDispose$$($model$$94$$) {
        $_invokeViewModelMethod$$($model$$94$$, "disposeMethod", [$element$$134$$, $valueAccessor$$20$$]);
      }
      var $currentViewModel$$, $currentAnimationPromise$$, $cache$$ = {}, $currentCacheKey$$, $pendingViewId$$ = -1, $cacheHolder$$4$$, $endCommentNode$$1$$;
      $ko$$7$$.utils.domNodeDisposal.addDisposeCallback($element$$134$$, function() {
        $invokeModelDispose$$($currentViewModel$$);
        for (var $keys$$42$$ = Object.keys($cache$$), $i$$414$$ = 0;$i$$414$$ < $keys$$42$$.length;$i$$414$$++) {
          $invokeModelDispose$$($cache$$[$keys$$42$$[$i$$414$$]].$model$);
        }
      });
      8 === $element$$134$$.nodeType && ($ko$$7$$.virtualElements.setDomNodeChildren($element$$134$$, []), $endCommentNode$$1$$ = $element$$134$$.nextSibling);
      $ko$$7$$.computed(function() {
        $pendingViewId$$++;
        var $isInitial$$1$$ = 0 === $pendingViewId$$, $attachPromise_unwrap$$ = $ko$$7$$.utils.unwrapObservable, $value$$281$$ = $attachPromise_unwrap$$($valueAccessor$$20$$()), $moduleName$$, $viewName$$, $params$$25$$, $modelFactory$$, $viewFunction$$, $cacheKey$$, $lifecycleListener$$, $animation$$1$$;
        "string" === typeof $value$$281$$ ? $moduleName$$ = $value$$281$$ : ($moduleName$$ = $attachPromise_unwrap$$($value$$281$$.name), $viewName$$ = $attachPromise_unwrap$$($value$$281$$.viewName), $params$$25$$ = $attachPromise_unwrap$$($value$$281$$.params), $modelFactory$$ = $attachPromise_unwrap$$($value$$281$$.viewModelFactory), $viewFunction$$ = $attachPromise_unwrap$$($value$$281$$.createViewFunction), $cacheKey$$ = $attachPromise_unwrap$$($value$$281$$.cacheKey), $lifecycleListener$$ = 
        $attachPromise_unwrap$$($value$$281$$.lifecycleListener), $animation$$1$$ = $attachPromise_unwrap$$($value$$281$$.animation));
        var $attachPromise_unwrap$$ = $_invokeLifecycleListener$$($lifecycleListener$$, "activated", [$element$$134$$, $valueAccessor$$20$$]), $viewPromise$$, $modelPromise$$, $cached$$2$$ = null == $cacheKey$$ ? null : $cache$$[$cacheKey$$];
        if (null != $cached$$2$$) {
          delete $cache$$[$cacheKey$$], $viewPromise$$ = Promise.resolve($cached$$2$$.view), $modelPromise$$ = Promise.resolve($cached$$2$$.$model$);
        } else {
          if (null != $modelFactory$$ && ($modelPromise$$ = $ko$$7$$.ignoreDependencies($modelFactory$$.createViewModel, $modelFactory$$, [$params$$25$$, $valueAccessor$$20$$])), null == $modelPromise$$ && null != $moduleName$$ && ($modelPromise$$ = $_getRequirePromise$$($oj$$52$$.$ModuleBinding$.$defaults$.modelPath + $moduleName$$)), null != $modelPromise$$ && ($modelPromise$$ = $modelPromise$$.then(function($id$$40$$, $viewModel$$5$$) {
            $checkPeningId$$($id$$40$$);
            return $viewModel$$5$$ = "function" === typeof $viewModel$$5$$ ? new $viewModel$$5$$($params$$25$$) : $_invokeViewModelMethod$$($viewModel$$5$$, "initializeMethod", [$element$$134$$, $valueAccessor$$20$$]) || $viewModel$$5$$;
          }.bind(null, $pendingViewId$$)), null != $viewFunction$$ && ($viewPromise$$ = $modelPromise$$.then(function($id$$41$$, $model$$96$$) {
            $checkPeningId$$($id$$41$$);
            if (null == $model$$96$$) {
              throw "createViewFunction option cannot be used when the ViewModel is null";
            }
            var $viewMethod$$ = $model$$96$$[$viewFunction$$];
            if (null == $viewMethod$$) {
              throw "function specified by the createViewFunction option was not found on the ViewModel";
            }
            return $viewMethod$$.call($model$$96$$);
          }.bind(null, $pendingViewId$$)))), null == $viewPromise$$) {
            if ($viewName$$ = null == $viewName$$ ? $moduleName$$ : $viewName$$, null != $viewName$$) {
              $viewPromise$$ = $_getRequirePromise$$($oj$$52$$.$ModuleBinding$.$defaults$.viewPath + $viewName$$ + $oj$$52$$.$ModuleBinding$.$defaults$.viewSuffix);
            } else {
              throw Error("View name must be specified");
            }
          }
        }
        if (null == $viewPromise$$) {
          throw Error("ojModule is missing a View");
        }
        var $modelAttachPromise$$;
        null != $modelPromise$$ && ($modelAttachPromise$$ = $modelPromise$$.then(function($id$$42$$, $viewModel$$6$$) {
          $checkPeningId$$($id$$42$$);
          return $_invokeViewModelMethod$$($viewModel$$6$$, "activatedHandler", [$element$$134$$, $valueAccessor$$20$$]);
        }.bind(null, $pendingViewId$$)));
        Promise.all([$viewPromise$$, $modelPromise$$, $attachPromise_unwrap$$, $modelAttachPromise$$, $currentAnimationPromise$$]).then(function($id$$43$$, $values$$13$$) {
          if ($id$$43$$ == $pendingViewId$$) {
            var $removeOldDomNodes$$1_view$$3$$ = $values$$13$$[0];
            if (null == $removeOldDomNodes$$1_view$$3$$) {
              throw "The module's View was resolved to null";
            }
            var $nodes$$3$$ = $_getDomNodes$$($removeOldDomNodes$$1_view$$3$$), $model$$97$$ = $values$$13$$[1], $saveInCache$$ = !1, $cachedNodeArray$$, $oldDomNodes$$1$$ = $_getContainedNodes$$($element$$134$$, $cacheHolder$$4$$, $endCommentNode$$1$$), $oldKoNodes$$ = $_getKoNodes$$($element$$134$$, $cacheHolder$$4$$);
            null != $currentCacheKey$$ && ($saveInCache$$ = !0, $cachedNodeArray$$ = $oldDomNodes$$1$$, $cacheHolder$$4$$ || ($cacheHolder$$4$$ = document.createElement("div"), $cacheHolder$$4$$.className = "oj-helper-module-cache", $ko$$7$$.virtualElements.prepend($element$$134$$, $cacheHolder$$4$$)));
            var $oldNodesRemoved$$ = !1, $removeOldDomNodes$$1_view$$3$$ = function $$removeOldDomNodes$$1_view$$3$$$($oldViewParent$$2$$) {
              $oldNodesRemoved$$ || ($oldNodesRemoved$$ = !0, $saveInCache$$ ? $_moveDomNodes$$($oldDomNodes$$1$$, $cacheHolder$$4$$) : $oldKoNodes$$.forEach(function($n$$27$$) {
                $ko$$7$$.cleanNode($n$$27$$);
              }), $_detachOldView$$($element$$134$$, $oldViewParent$$2$$ || $element$$134$$, $cacheHolder$$4$$), $isInitial$$1$$ || ($_invokeLifecycleListener$$($lifecycleListener$$, "detached", [$element$$134$$, $valueAccessor$$20$$, $currentViewModel$$, $cachedNodeArray$$]), $_invokeViewModelMethod$$($currentViewModel$$, "detachedHandler", [$element$$134$$, $valueAccessor$$20$$, $cachedNodeArray$$]), $_invokeLifecycleListener$$($lifecycleListener$$, "deactivated", [$element$$134$$, $valueAccessor$$20$$, 
              $currentViewModel$$]), $_invokeViewModelMethod$$($currentViewModel$$, "deactivatedHandler", [$element$$134$$, $valueAccessor$$20$$])), $saveInCache$$ ? ($_propagateSubtreeVisibilityToComponents$$($cachedNodeArray$$, !1), $cache$$[$currentCacheKey$$] = {$model$:$currentViewModel$$, view:$cachedNodeArray$$}) : $invokeModelDispose$$($currentViewModel$$), $currentViewModel$$ = $model$$97$$, $currentCacheKey$$ = $cacheKey$$);
            }, $insertAndActivateNewNodes$$ = function $$insertAndActivateNewNodes$$$($targetElement$$1$$) {
              $targetElement$$1$$ = $targetElement$$1$$ || $element$$134$$;
              $_insertNodes$$($targetElement$$1$$, $nodes$$3$$);
              var $fromCache$$ = null != $cached$$2$$;
              $fromCache$$ && $_propagateSubtreeVisibilityToComponents$$($nodes$$3$$, !0);
              $_invokeLifecycleListener$$($lifecycleListener$$, "attached", [$targetElement$$1$$, $valueAccessor$$20$$, $model$$97$$, $fromCache$$]);
              $_invokeViewModelMethod$$($model$$97$$, "attachedHandler", [$targetElement$$1$$, $valueAccessor$$20$$, $fromCache$$]);
              if (!$fromCache$$) {
                var $childBindingContext$$ = $bindingContext$$35$$.createChildContext($model$$97$$, void 0, function($ctx$$3$$) {
                  $ctx$$3$$.$module = $model$$97$$;
                  $ctx$$3$$.$params = $params$$25$$;
                });
                $_koNodesForEach$$($nodes$$3$$[0], $cacheHolder$$4$$, function($node$$105$$) {
                  $ko$$7$$.applyBindings($childBindingContext$$, $node$$105$$);
                });
                $_invokeLifecycleListener$$($lifecycleListener$$, "bindingsApplied", [$targetElement$$1$$, $valueAccessor$$20$$, $model$$97$$]);
                $_invokeViewModelMethod$$($model$$97$$, "bindingsAppliedHandler", [$targetElement$$1$$, $valueAccessor$$20$$]);
              }
            }, $transitionComplete$$1$$ = function $$transitionComplete$$1$$$() {
              $_invokeLifecycleListener$$($lifecycleListener$$, "transitionCompleted", [$element$$134$$, $valueAccessor$$20$$, $model$$97$$]);
              $_invokeViewModelMethod$$($model$$97$$, "transitionCompletedHandler", [$element$$134$$, $valueAccessor$$20$$]);
            };
            if (null != $animation$$1$$) {
              var $promise$$6$$ = $_animate$$({node:$element$$134$$, valueAccessor:$valueAccessor$$20$$, isInitial:$isInitial$$1$$, oldViewModel:$currentViewModel$$, newViewModel:$model$$97$$}, $animation$$1$$, $element$$134$$, $oldDomNodes$$1$$, $insertAndActivateNewNodes$$, $removeOldDomNodes$$1_view$$3$$, $transitionComplete$$1$$);
              $currentAnimationPromise$$ = $_createNoFailPromise$$($promise$$6$$);
            } else {
              $currentAnimationPromise$$ = void 0;
            }
            $currentAnimationPromise$$ || ($removeOldDomNodes$$1_view$$3$$(null), $insertAndActivateNewNodes$$(null), $transitionComplete$$1$$());
          }
        }.bind(null, $pendingViewId$$), function($id$$44$$, $reason$$7$$) {
          $id$$44$$ == $pendingViewId$$ && null != $reason$$7$$ && $oj$$52$$.$Logger$.error($reason$$7$$);
        }.bind(null, $pendingViewId$$));
      }, null, {disposeWhenNodeIsRemoved:$element$$134$$});
      return{controlsDescendantBindings:!0};
    }};
    $ko$$7$$.virtualElements.allowedBindings.ojModule = !0;
  })();
});
