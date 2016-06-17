/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$48$$, $ko$$6$$) {
  $oj$$48$$.$KnockoutUtils$ = function $$oj$$48$$$$KnockoutUtils$$() {
  };
  $goog$exportPath_$$("KnockoutUtils", $oj$$48$$.$KnockoutUtils$, $oj$$48$$);
  $oj$$48$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$48$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$48$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$48$$.$KnockoutUtils$.$subscriptionProp$ = "oj.collectionSubscription";
  $oj$$48$$.$KnockoutUtils$.$updatingCollectionFunc$ = "oj.collectionUpdatingFunc";
  $oj$$48$$.$KnockoutUtils$.map = function $$oj$$48$$$$KnockoutUtils$$map$($m$$24$$, $callback$$108$$, $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$276$$) {
        $koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] || $m$$24$$.set($argProp$$, $value$$276$$);
      };
    }
    var $koObject$$, $i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$, $converted_index$$233_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if ($m$$24$$ instanceof $oj$$48$$.$Collection$) {
      $i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$ = Array($m$$24$$.$_getLength$());
      $koObject$$ = $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$ ? $ko$$6$$.observableArray($i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$) : $i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$;
      $oj$$48$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$24$$);
      if ($array$$17_data$$165_updateObservable_updateObservableArrayRemove$$) {
        for ($i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$ = 0;$i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$ < $m$$24$$.$_modelIndices$.length;$i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$233_updateObservableArrayReset$$ = $m$$24$$.$_modelIndices$[$i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$], $koObject$$()[$converted_index$$233_updateObservableArrayReset$$] = $oj$$48$$.$KnockoutUtils$.map($m$$24$$.$_atInternal$($converted_index$$233_updateObservableArrayReset$$, null, !0, !1), $callback$$108$$);
        }
      } else {
        for ($i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$ = 0;$i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$ < $m$$24$$.$_modelIndices$.length;$i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$233_updateObservableArrayReset$$ = $m$$24$$.$_modelIndices$[$i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$], $koObject$$[$converted_index$$233_updateObservableArrayReset$$] = $oj$$48$$.$KnockoutUtils$.map($m$$24$$.$_atInternal$($converted_index$$233_updateObservableArrayReset$$, null, !0, !1), $callback$$108$$);
        }
      }
      $i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$ = function $$i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$$($changes$$7$$) {
        var $i$$385$$;
        try {
          if (!$koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$48$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for ($i$$385$$ = 0;$i$$385$$ < $changes$$7$$.length;$i$$385$$++) {
              var $index$$234$$ = $changes$$7$$[$i$$385$$].index, $model$$89$$ = $oj$$48$$.$KnockoutUtils$.$_getModel$($changes$$7$$[$i$$385$$].value), $status$$29$$ = $changes$$7$$[$i$$385$$].status;
              "added" === $status$$29$$ ? $index$$234$$ >= $m$$24$$.length - 1 ? $m$$24$$.add($model$$89$$) : $m$$24$$.add($model$$89$$, {at:$index$$234$$}) : "deleted" === $status$$29$$ && $m$$24$$.$_removeInternal$($model$$89$$, $index$$234$$);
            }
            $m$$24$$.comparator && ($koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$122$$, $b$$76$$) {
              return $oj$$48$$.$KnockoutUtils$.$_callSort$($a$$122$$, $b$$76$$, $m$$24$$.comparator, $m$$24$$, this);
            }), $koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !1);
          }
        } catch ($e$$101$$) {
          throw $e$$101$$;
        } finally {
          $koObject$$[$oj$$48$$.$KnockoutUtils$.$collUpdatingProp$] = !1;
        }
      };
      $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && ($koObject$$[$oj$$48$$.$KnockoutUtils$.$updatingCollectionFunc$] = $i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$, $koObject$$[$oj$$48$$.$KnockoutUtils$.$subscriptionProp$] = $koObject$$.subscribe($i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$, null, "arrayChange"));
      $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$ = function $$array$$17_data$$165_updateObservable_updateObservableArrayRemove$$$($model$$90$$, $collection$$59$$, $options$$353$$) {
        var $index$$235$$;
        try {
          !$koObject$$[$oj$$48$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$59$$ instanceof $oj$$48$$.$Collection$ && ($koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$235$$ = $options$$353$$.index, $koObject$$.splice($index$$235$$, 1));
        } catch ($e$$102$$) {
          throw $e$$102$$;
        } finally {
          $koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$ = function $$i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$$($model$$91$$, $collection$$60$$, $options$$354$$) {
        var $index$$236$$, $newObservable$$;
        try {
          if (!$koObject$$[$oj$$48$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$60$$ instanceof $oj$$48$$.$Collection$ && ($koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$236$$ = $collection$$60$$.$_localIndexOf$($model$$91$$), void 0 !== $index$$236$$ && -1 < $index$$236$$)) {
            if ($newObservable$$ = $oj$$48$$.$KnockoutUtils$.map($model$$91$$, $callback$$108$$), $options$$354$$.fillIn) {
              for (var $i$$386$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$386$$ < $index$$236$$;$i$$386$$++) {
                $koObject$$.splice($i$$386$$, 0, $oj$$48$$.$KnockoutUtils$.map($collection$$60$$.$_atInternal$($i$$386$$, null, !0, !1), $callback$$108$$));
              }
              $koObject$$.splice($index$$236$$, 1, $newObservable$$);
            } else {
              $koObject$$.splice($index$$236$$, 0, $newObservable$$);
            }
          }
        } catch ($e$$103$$) {
          throw $e$$103$$;
        } finally {
          $koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $converted_index$$233_updateObservableArrayReset$$ = function $$converted_index$$233_updateObservableArrayReset$$$($collection$$61$$) {
        try {
          !$koObject$$[$oj$$48$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$61$$ instanceof $oj$$48$$.$Collection$ && ($koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$6$$.isObservable($koObject$$) ? ($koObject$$[$oj$$48$$.$KnockoutUtils$.$subscriptionProp$] && $koObject$$[$oj$$48$$.$KnockoutUtils$.$subscriptionProp$].dispose(), $koObject$$.removeAll(), $koObject$$[$oj$$48$$.$KnockoutUtils$.$updatingCollectionFunc$] && $koObject$$.subscribe($koObject$$[$oj$$48$$.$KnockoutUtils$.$updatingCollectionFunc$], 
          null, "arrayChange")) : $koObject$$ = []);
        } catch ($e$$104$$) {
          throw $e$$104$$;
        } finally {
          $koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$62$$) {
        try {
          !$koObject$$[$oj$$48$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$62$$ instanceof $oj$$48$$.$Collection$ && ($koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$123$$, $b$$77$$) {
            return $oj$$48$$.$KnockoutUtils$.$_callSort$($a$$123$$, $b$$77$$, $m$$24$$.comparator, $collection$$62$$, this);
          }));
        } catch ($e$$105$$) {
          throw $e$$105$$;
        } finally {
          $koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$24$$.$OnInternal$($oj$$48$$.$Events$.$EventType$.ADD, $i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$24$$.$OnInternal$($oj$$48$$.$Events$.$EventType$.REMOVE, $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$24$$.$OnInternal$($oj$$48$$.$Events$.$EventType$.RESET, $converted_index$$233_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$24$$.$OnInternal$($oj$$48$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0);
    } else {
      if (void 0 === $m$$24$$) {
        return;
      }
      $koObject$$ = {};
      $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$ = $m$$24$$.attributes;
      $i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$ = null;
      for ($i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$ in $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$) {
        $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$) && ($converted_index$$233_updateObservableArrayReset$$ = $ko$$6$$.observable($m$$24$$.get($i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$] = $converted_index$$233_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = 
        $_makeUpdateModel$$($i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$), $updateModel_updateObservableArraySort$$.$_prop$ = $i$$384_prealloc_prop$$73_updateCollection_updateObservableArrayAdd$$, $converted_index$$233_updateObservableArrayReset$$.subscribe && $converted_index$$233_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$));
      }
      $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$ = function $$array$$17_data$$165_updateObservable_updateObservableArrayRemove$$$($model$$92$$) {
        var $attrs$$22$$, $prop$$74$$;
        try {
          for ($prop$$74$$ in $koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$22$$ = $model$$92$$.$changedAttributes$(), $attrs$$22$$) {
            if ($attrs$$22$$.hasOwnProperty($prop$$74$$)) {
              $koObject$$[$prop$$74$$]($model$$92$$.get($prop$$74$$));
            }
          }
        } catch ($e$$106$$) {
          throw $e$$106$$;
        } finally {
          $koObject$$[$oj$$48$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$24$$.$OnInternal$($oj$$48$$.$Events$.$EventType$.CHANGE, $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$48$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$24$$);
      $callback$$108$$ && $callback$$108$$($koObject$$);
    }
    return $koObject$$;
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$48$$.$KnockoutUtils$.map, $oj$$48$$);
  $oj$$48$$.$KnockoutUtils$.$_getModel$ = function $$oj$$48$$$$KnockoutUtils$$$_getModel$$($val$$55$$) {
    return $val$$55$$ instanceof $oj$$48$$.$Model$ ? $val$$55$$ : $val$$55$$.hasOwnProperty($oj$$48$$.$KnockoutUtils$.$internalObjectProperty$) ? $val$$55$$[$oj$$48$$.$KnockoutUtils$.$internalObjectProperty$] : $val$$55$$;
  };
  $oj$$48$$.$KnockoutUtils$.$_callSort$ = function $$oj$$48$$$$KnockoutUtils$$$_callSort$$($a$$124$$, $b$$78$$, $comparator$$16$$, $collection$$63$$, $caller$$8$$) {
    return $oj$$48$$.$Collection$.$SortFunc$($oj$$48$$.$KnockoutUtils$.$_getModel$($a$$124$$), $oj$$48$$.$KnockoutUtils$.$_getModel$($b$$78$$), $comparator$$16$$, $collection$$63$$, $caller$$8$$);
  };
  $oj$$48$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$48$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$6$$, $value$$277$$) {
    Object.defineProperty($object$$6$$, $oj$$48$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$277$$, enumerable:!1});
  };
});
