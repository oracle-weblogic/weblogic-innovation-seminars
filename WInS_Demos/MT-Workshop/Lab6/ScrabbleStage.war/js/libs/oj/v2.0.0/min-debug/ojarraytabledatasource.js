/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$25$$, $$$$24$$) {
  $oj$$25$$.$ArrayTableDataSource$ = function $$oj$$25$$$$ArrayTableDataSource$$($data$$147$$, $options$$281$$) {
    this.data = {};
    if (!($data$$147$$ instanceof Array) && "function" != typeof $data$$147$$ && "function" != typeof $data$$147$$.$subscribe$) {
      throw Error($oj$$25$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$25$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    null != $options$$281$$ && null != $options$$281$$.idAttribute || $oj$$25$$.$Logger$.info($oj$$25$$.$ArrayTableDataSource$.$_LOGGER_MSG$._INFO_ARRAY_TABLE_DATASOURCE_IDATTR);
    $oj$$25$$.$ArrayTableDataSource$.$superclass$.constructor.call(this, $data$$147$$, $options$$281$$);
    this.$_eventHandlers$ = [];
    this.$_rows$ = {};
    if (null != $data$$147$$ && void 0 !== $data$$147$$ && (this.$_idAttribute$ = null, null != $options$$281$$ && null != $options$$281$$.idAttribute && (this.$_idAttribute$ = $options$$281$$.idAttribute), this.$_data$ = $data$$147$$ instanceof Array ? $data$$147$$ : $data$$147$$(), this.$_totalSize$ = this.$_data$.length, !($data$$147$$ instanceof Array))) {
      var $self$$144$$ = this;
      $data$$147$$.subscribe(function($changes$$6$$) {
        if ($self$$144$$.$_isDataLoaded$()) {
          var $i$$310$$, $rowArray$$3$$ = [], $indexArray$$2$$ = [];
          for ($i$$310$$ = 0;$i$$310$$ < $changes$$6$$.length;$i$$310$$++) {
            "deleted" === $changes$$6$$[$i$$310$$].status && $rowArray$$3$$.push($changes$$6$$[$i$$310$$].value);
          }
          $self$$144$$.remove($rowArray$$3$$, null);
          $rowArray$$3$$ = [];
          $indexArray$$2$$ = [];
          for ($i$$310$$ = 0;$i$$310$$ < $changes$$6$$.length;$i$$310$$++) {
            "added" === $changes$$6$$[$i$$310$$].status && ($rowArray$$3$$.push($changes$$6$$[$i$$310$$].value), $indexArray$$2$$.push($changes$$6$$[$i$$310$$].index));
          }
          $self$$144$$.add($rowArray$$3$$, {at:$indexArray$$2$$});
        }
      }, null, "arrayChange");
    }
    if (null != $options$$281$$ && ("enabled" == $options$$281$$.startFetch || null == $options$$281$$.startFetch) || null == $options$$281$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("ArrayTableDataSource", $oj$$25$$.$ArrayTableDataSource$, $oj$$25$$);
  $oj$$25$$.$Object$.$createSubclass$($oj$$25$$.$ArrayTableDataSource$, $oj$$25$$.$TableDataSource$, "oj.ArrayTableDataSource");
  $oj$$25$$.$ArrayTableDataSource$.prototype.Init = function $$oj$$25$$$$ArrayTableDataSource$$$Init$() {
    $oj$$25$$.$ArrayTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.Init", {Init:$oj$$25$$.$ArrayTableDataSource$.prototype.Init});
  $oj$$25$$.$ArrayTableDataSource$.prototype.add = function $$oj$$25$$$$ArrayTableDataSource$$$add$($m$$19$$, $options$$282$$) {
    $options$$282$$ = $options$$282$$ || {};
    this.$_checkDataLoaded$();
    return this.$_addToRowSet$($m$$19$$, $options$$282$$.at, $options$$282$$);
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.add", {add:$oj$$25$$.$ArrayTableDataSource$.prototype.add});
  $oj$$25$$.$ArrayTableDataSource$.prototype.at = function $$oj$$25$$$$ArrayTableDataSource$$$at$($index$$188$$) {
    this.$_checkDataLoaded$();
    var $row$$32$$;
    $row$$32$$ = 0 > $index$$188$$ || $index$$188$$ >= this.$_rows$.data.length ? null : {data:this.$_rows$.data[$index$$188$$], index:$index$$188$$, key:this.$_getId$(this.$_rows$.data[$index$$188$$])};
    return new Promise(function($resolve$$36$$) {
      $resolve$$36$$($row$$32$$);
    });
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.at", {at:$oj$$25$$.$ArrayTableDataSource$.prototype.at});
  $oj$$25$$.$ArrayTableDataSource$.prototype.change = function $$oj$$25$$$$ArrayTableDataSource$$$change$($m$$20$$, $options$$284$$) {
    $options$$284$$ = $options$$284$$ || {};
    this.$_checkDataLoaded$();
    var $silent$$23$$ = $options$$284$$.silent, $i$$311$$, $row$$33$$, $key$$133$$, $changedRow$$, $rowArray$$4$$ = {data:[], keys:[], indexes:[]};
    $m$$20$$ instanceof Array || ($m$$20$$ = [$m$$20$$]);
    for ($i$$311$$ = 0;$i$$311$$ < $m$$20$$.length;$i$$311$$++) {
      $row$$33$$ = $m$$20$$[$i$$311$$], null != $row$$33$$ && ($key$$133$$ = this.$_getId$($row$$33$$), $changedRow$$ = this.$_getInternal$($key$$133$$, null), $rowArray$$4$$.data.push($row$$33$$), $rowArray$$4$$.keys.push($key$$133$$), $rowArray$$4$$.indexes.push($changedRow$$.index), this.$_rows$.data[$changedRow$$.index] = $row$$33$$);
    }
    !$silent$$23$$ && 0 < $rowArray$$4$$.data.length && $oj$$25$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$25$$.$TableDataSource$.$EventType$.CHANGE, $rowArray$$4$$);
    return Promise.resolve($rowArray$$4$$);
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.change", {change:$oj$$25$$.$ArrayTableDataSource$.prototype.change});
  $oj$$25$$.$ArrayTableDataSource$.prototype.fetch = function $$oj$$25$$$$ArrayTableDataSource$$$fetch$($options$$285$$) {
    $options$$285$$ = $options$$285$$ || {};
    return "init" != $options$$285$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$285$$) : Promise.resolve();
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.fetch", {fetch:$oj$$25$$.$ArrayTableDataSource$.prototype.fetch});
  $oj$$25$$.$ArrayTableDataSource$.prototype.get = function $$oj$$25$$$$ArrayTableDataSource$$$get$($id$$31$$, $options$$286$$) {
    $options$$286$$ = $options$$286$$ || {};
    this.$_checkDataLoaded$();
    return Promise.resolve(this.$_getInternal$($id$$31$$, $options$$286$$));
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.get", {get:$oj$$25$$.$ArrayTableDataSource$.prototype.get});
  $oj$$25$$.$ArrayTableDataSource$.prototype.getCapability = function $$oj$$25$$$$ArrayTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.getCapability", {getCapability:$oj$$25$$.$ArrayTableDataSource$.prototype.getCapability});
  $oj$$25$$.$ArrayTableDataSource$.prototype.remove = function $$oj$$25$$$$ArrayTableDataSource$$$remove$($m$$21$$, $options$$287$$) {
    $options$$287$$ = $options$$287$$ || {};
    this.$_checkDataLoaded$();
    return this.$_removeInternal$($m$$21$$, $options$$287$$);
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.remove", {remove:$oj$$25$$.$ArrayTableDataSource$.prototype.remove});
  $oj$$25$$.$ArrayTableDataSource$.prototype.reset = function $$oj$$25$$$$ArrayTableDataSource$$$reset$($data$$148$$, $options$$288$$) {
    $options$$288$$ = $options$$288$$ || {};
    $options$$288$$.previousRows = this.$_rows$;
    var $silent$$24$$ = $options$$288$$.silent;
    null != $data$$148$$ && (this.$_data$ = $data$$148$$);
    this.$_rows$ = {};
    this.$_totalSize$ = 0;
    $silent$$24$$ || $oj$$25$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$25$$.$TableDataSource$.$EventType$.RESET, null);
    return Promise.resolve();
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.reset", {reset:$oj$$25$$.$ArrayTableDataSource$.prototype.reset});
  $oj$$25$$.$ArrayTableDataSource$.prototype.sort = function $$oj$$25$$$$ArrayTableDataSource$$$sort$($criteria$$2$$) {
    if (null == $criteria$$2$$) {
      return this.comparator = null, Promise.resolve();
    }
    this.$_checkDataLoaded$();
    var $key$$134$$ = $criteria$$2$$.key, $direction$$7$$ = $criteria$$2$$.direction, $comparator$$9$$ = null;
    "ascending" == $direction$$7$$ ? $comparator$$9$$ = function $$comparator$$9$$$($row$$34$$) {
      return $$$$24$$.isFunction($row$$34$$[$key$$134$$]) ? $row$$34$$[$key$$134$$]() : $row$$34$$[$key$$134$$];
    } : "descending" == $direction$$7$$ && ($comparator$$9$$ = function $$comparator$$9$$$($rowA$$, $rowB$$) {
      var $a$$109$$, $b$$66$$;
      $$$$24$$.isFunction($rowA$$[$key$$134$$]) ? ($a$$109$$ = $rowA$$[$key$$134$$](), $b$$66$$ = $rowB$$[$key$$134$$]()) : ($a$$109$$ = $rowA$$[$key$$134$$], $b$$66$$ = $rowB$$[$key$$134$$]);
      return $a$$109$$ === $b$$66$$ ? 0 : $a$$109$$ > $b$$66$$ ? -1 : 1;
    });
    this.comparator = $comparator$$9$$;
    this.direction = $direction$$7$$;
    var $self$$145$$ = this;
    return new Promise(function($resolve$$37$$) {
      $criteria$$2$$ = $criteria$$2$$ || {};
      if ($self$$145$$.$_hasComparator$()) {
        var $comparator$$10$$ = $self$$145$$.comparator;
        $self$$145$$.$_rows$.data.sort(function($a$$110$$, $b$$67$$) {
          return $oj$$25$$.$ArrayTableDataSource$.$_sortFunc$($a$$110$$, $b$$67$$, $comparator$$10$$, $self$$145$$);
        });
        $self$$145$$.$_sorted$ = !0;
        var $result$$58$$ = {header:$criteria$$2$$.key, direction:$criteria$$2$$.direction};
        $oj$$25$$.$TableDataSource$.$superclass$.handleEvent.call($self$$145$$, $oj$$25$$.$TableDataSource$.$EventType$.SORT, $result$$58$$);
        $resolve$$37$$($result$$58$$);
      }
    });
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.sort", {sort:$oj$$25$$.$ArrayTableDataSource$.prototype.sort});
  $oj$$25$$.$ArrayTableDataSource$.prototype.totalSize = function $$oj$$25$$$$ArrayTableDataSource$$$totalSize$() {
    return this.$_totalSize$;
  };
  $oj$$25$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.totalSize", {totalSize:$oj$$25$$.$ArrayTableDataSource$.prototype.totalSize});
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_addToRowSet$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_addToRowSet$$($m$$22$$, $index$$189$$, $i$$313_options$$289$$) {
    var $j$$40_key$$135$$, $row$$35$$;
    $i$$313_options$$289$$ = $i$$313_options$$289$$ || {};
    var $silent$$25$$ = $i$$313_options$$289$$.silent, $rowArray$$5$$ = {data:[], keys:[], indexes:[]};
    $m$$22$$ instanceof Array || ($m$$22$$ = [$m$$22$$]);
    null == $index$$189$$ || $index$$189$$ instanceof Array || ($index$$189$$ = [$index$$189$$]);
    for ($i$$313_options$$289$$ = 0;$i$$313_options$$289$$ < $m$$22$$.length;$i$$313_options$$289$$++) {
      if ($row$$35$$ = $m$$22$$[$i$$313_options$$289$$], null != $row$$35$$) {
        $j$$40_key$$135$$ = this.$_getId$($row$$35$$);
        $rowArray$$5$$.data.push($row$$35$$);
        $rowArray$$5$$.keys.push($j$$40_key$$135$$);
        if (!0 == this.$_sorted$ && 0 < this.$_rows$.data.length) {
          for ($j$$40_key$$135$$ = 0;$j$$40_key$$135$$ < this.$_rows$.data.length;$j$$40_key$$135$$++) {
            if (0 > $oj$$25$$.$ArrayTableDataSource$.$_sortFunc$($row$$35$$, this.$_rows$.data[$j$$40_key$$135$$], this.comparator, this)) {
              this.$_rows$.data.splice($j$$40_key$$135$$, 0, $row$$35$$);
              $rowArray$$5$$.indexes.push($j$$40_key$$135$$);
              break;
            } else {
              if ($j$$40_key$$135$$ == this.$_rows$.data.length - 1) {
                this.$_rows$.data.push($row$$35$$);
                $rowArray$$5$$.indexes.push($j$$40_key$$135$$ + 1);
                break;
              }
            }
          }
        } else {
          null == $index$$189$$ ? (this.$_rows$.data.push($row$$35$$), $rowArray$$5$$.indexes.push(this.$_rows$.data.length - 1)) : (this.$_rows$.data.splice($index$$189$$[$i$$313_options$$289$$], 0, $row$$35$$), $rowArray$$5$$.indexes.push($index$$189$$[$i$$313_options$$289$$]));
        }
        this.$_totalSize$++;
        this.$_realignRowIndices$();
      }
    }
    !$silent$$25$$ && 0 < $rowArray$$5$$.data.length && $oj$$25$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$25$$.$TableDataSource$.$EventType$.ADD, $rowArray$$5$$);
    return Promise.resolve($rowArray$$5$$);
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_checkDataLoaded$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_checkDataLoaded$$() {
    this.$_isDataLoaded$() || (this.$_rows$ = this.$_getRowArray$(this.$_data$), this.$_totalSize$ = this.$_data$.length);
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_isDataLoaded$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_isDataLoaded$$() {
    return null == this.$_rows$ || null == this.$_rows$.data ? !1 : !0;
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_fetchInternal$$($options$$290$$) {
    $options$$290$$ = $options$$290$$ || {};
    this.$_startFetch$($options$$290$$);
    this.$_checkDataLoaded$();
    var $pageSize$$2_result$$59$$;
    try {
      $pageSize$$2_result$$59$$ = 0 < $options$$290$$.pageSize ? $options$$290$$.pageSize : -1;
      this.$_startIndex$ || (this.$_startIndex$ = 0);
      this.$_startIndex$ = null == $options$$290$$.startIndex ? this.$_startIndex$ : $options$$290$$.startIndex;
      var $endIndex$$4$$ = $oj$$25$$.$ArrayTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, $pageSize$$2_result$$59$$), $rowArray$$6$$ = [], $keyArray$$ = [], $i$$314$$;
      for ($i$$314$$ = this.$_startIndex$;$i$$314$$ <= $endIndex$$4$$;$i$$314$$++) {
        $rowArray$$6$$[$i$$314$$ - this.$_startIndex$] = this.$_rows$.data[$i$$314$$], $keyArray$$[$i$$314$$ - this.$_startIndex$] = this.$_getId$(this.$_rows$.data[$i$$314$$]);
      }
    } catch ($err$$23$$) {
      return this.$_endFetch$($options$$290$$, null, $err$$23$$), Promise.reject($err$$23$$);
    }
    $endIndex$$4$$ < this.$_startIndex$ && (this.$_startIndex$ = $endIndex$$4$$ + 1);
    $options$$290$$.pageSize = $pageSize$$2_result$$59$$;
    $options$$290$$.startIndex = this.$_startIndex$;
    $options$$290$$.refresh = !0;
    $pageSize$$2_result$$59$$ = {data:$rowArray$$6$$, keys:$keyArray$$, startIndex:this.$_startIndex$};
    this.$_endFetch$($options$$290$$, $pageSize$$2_result$$59$$, null);
    return Promise.resolve($pageSize$$2_result$$59$$);
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_getInternal$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_getInternal$$($id$$32$$) {
    var $i$$315$$, $j$$41$$, $row$$36$$, $key$$136$$, $result$$60$$ = null;
    for ($i$$315$$ = 0;$i$$315$$ < this.$_rows$.data.length;$i$$315$$++) {
      if ($row$$36$$ = this.$_rows$.data[$i$$315$$], void 0 !== $row$$36$$) {
        if ($key$$136$$ = this.$_getId$($row$$36$$), $$$$24$$.isArray($key$$136$$) && $$$$24$$.isArray($id$$32$$)) {
          if ($key$$136$$.length == $id$$32$$.length) {
            var $equal$$ = !0;
            for ($j$$41$$ = 0;$j$$41$$ < $id$$32$$.length;$j$$41$$++) {
              if ($key$$136$$[$j$$41$$] != $id$$32$$[$j$$41$$]) {
                $equal$$ = !1;
                break;
              }
            }
            $equal$$ && ($result$$60$$ = {data:$row$$36$$, key:$key$$136$$, index:this.$_rows$.indexes[$i$$315$$]});
          }
        } else {
          $key$$136$$ == $id$$32$$ && ($result$$60$$ = {data:$row$$36$$, key:$key$$136$$, index:this.$_rows$.indexes[$i$$315$$]});
        }
      }
    }
    return $result$$60$$;
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_hasComparator$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_hasComparator$$() {
    var $comparator$$11$$ = this.comparator;
    return void 0 !== $comparator$$11$$ && null !== $comparator$$11$$;
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$316$$ = 0;$i$$316$$ < this.$_rows$.data.length;$i$$316$$++) {
      this.$_rows$.indexes[$i$$316$$] = $i$$316$$;
    }
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_removeInternal$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_removeInternal$$($m$$23$$, $options$$292$$) {
    var $i$$317$$, $deletedRow_key$$137_row$$37$$;
    $options$$292$$ = $options$$292$$ || {};
    var $silent$$26$$ = $options$$292$$.silent, $rowArray$$7$$ = {data:[], keys:[], indexes:[]};
    $m$$23$$ instanceof Array || ($m$$23$$ = [$m$$23$$]);
    var $sortedRowArray$$ = [];
    for ($i$$317$$ = 0;$i$$317$$ < $m$$23$$.length;$i$$317$$++) {
      $deletedRow_key$$137_row$$37$$ = $m$$23$$[$i$$317$$], null != $deletedRow_key$$137_row$$37$$ && ($deletedRow_key$$137_row$$37$$ = this.$_getId$($deletedRow_key$$137_row$$37$$), $deletedRow_key$$137_row$$37$$ = this.$_getInternal$($deletedRow_key$$137_row$$37$$, null), null != $deletedRow_key$$137_row$$37$$ && $sortedRowArray$$.push({data:$deletedRow_key$$137_row$$37$$.data, key:$deletedRow_key$$137_row$$37$$.key, index:$deletedRow_key$$137_row$$37$$.index}));
    }
    $sortedRowArray$$.sort(function($a$$111$$, $b$$68$$) {
      return $a$$111$$.index - $b$$68$$.index;
    });
    for ($i$$317$$ = 0;$i$$317$$ < $sortedRowArray$$.length;$i$$317$$++) {
      $rowArray$$7$$.data.push($sortedRowArray$$[$i$$317$$].data), $rowArray$$7$$.keys.push($sortedRowArray$$[$i$$317$$].key), $rowArray$$7$$.indexes.push($sortedRowArray$$[$i$$317$$].index);
    }
    for ($i$$317$$ = $rowArray$$7$$.indexes.length - 1;0 <= $i$$317$$;$i$$317$$--) {
      this.$_rows$.data.splice($rowArray$$7$$.indexes[$i$$317$$], 1), this.$_rows$.indexes.splice($rowArray$$7$$.indexes[$i$$317$$], 1), this.$_totalSize$--, this.$_realignRowIndices$();
    }
    !$silent$$26$$ && 0 < $rowArray$$7$$.data.length && $oj$$25$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$25$$.$TableDataSource$.$EventType$.REMOVE, $rowArray$$7$$);
    return Promise.resolve($rowArray$$7$$);
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_startFetch$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_startFetch$$($options$$293$$) {
    $options$$293$$.silent || $oj$$25$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$25$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$293$$.startIndex});
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_endFetch$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_endFetch$$($options$$294$$, $result$$61$$, $error$$38$$) {
    null != $error$$38$$ ? $oj$$25$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$25$$.$TableDataSource$.$EventType$.ERROR, $error$$38$$) : $options$$294$$.silent || $oj$$25$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$25$$.$TableDataSource$.$EventType$.SYNC, $result$$61$$);
  };
  $oj$$25$$.$ArrayTableDataSource$.$_compareKeys$ = function $$oj$$25$$$$ArrayTableDataSource$$$_compareKeys$$($keyA$$4$$, $keyB$$4$$, $direction$$8$$) {
    if ("descending" == $direction$$8$$) {
      if ($keyA$$4$$ < $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ < $keyA$$4$$) {
        return-1;
      }
    } else {
      if ($keyA$$4$$ > $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ > $keyA$$4$$) {
        return-1;
      }
    }
    return 0;
  };
  $oj$$25$$.$ArrayTableDataSource$.$_getEndIndex$ = function $$oj$$25$$$$ArrayTableDataSource$$$_getEndIndex$$($rows$$6$$, $startIndex$$28$$, $pageSize$$3$$) {
    var $endIndex$$5$$ = $rows$$6$$.data.length - 1;
    0 < $pageSize$$3$$ && ($endIndex$$5$$ = $startIndex$$28$$ + $pageSize$$3$$ - 1, $endIndex$$5$$ = $endIndex$$5$$ > $rows$$6$$.data.length - 1 ? $rows$$6$$.data.length - 1 : $endIndex$$5$$);
    return $endIndex$$5$$;
  };
  $oj$$25$$.$ArrayTableDataSource$.$_getKey$ = function $$oj$$25$$$$ArrayTableDataSource$$$_getKey$$($val$$48$$, $attr$$17$$) {
    return $$$$24$$.isFunction($val$$48$$[$attr$$17$$]) ? $val$$48$$[$attr$$17$$]() : $val$$48$$[$attr$$17$$];
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_getRowArray$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_getRowArray$$($values$$12$$) {
    var $endIndex$$6$$ = $values$$12$$.length - 1, $rowArray$$8$$ = {}, $i$$318$$, $prop$$64$$;
    $rowArray$$8$$.data = [];
    $rowArray$$8$$.indexes = [];
    this.$_attributes$ = null;
    for ($i$$318$$ = 0;$i$$318$$ <= $endIndex$$6$$;$i$$318$$++) {
      var $clonedRowValues$$ = {}, $rowValues$$ = $values$$12$$[$i$$318$$];
      for ($prop$$64$$ in $rowValues$$) {
        $rowValues$$.hasOwnProperty($prop$$64$$) && ($clonedRowValues$$[$prop$$64$$] = $rowValues$$[$prop$$64$$], 0 == $i$$318$$ && (null == this.$_attributes$ && (this.$_attributes$ = []), this.$_attributes$.push($prop$$64$$)));
      }
      $rowArray$$8$$.data[$i$$318$$] = $clonedRowValues$$;
      $rowArray$$8$$.indexes[$i$$318$$] = $i$$318$$;
    }
    return $rowArray$$8$$;
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_getId$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_getId$$($errDetail$$9_row$$39$$) {
    var $id$$33$$, $idAttribute$$ = this.$_getIdAttr$($errDetail$$9_row$$39$$);
    if ($$$$24$$.isArray($idAttribute$$)) {
      var $i$$319$$;
      $id$$33$$ = [];
      for ($i$$319$$ = 0;$i$$319$$ < $idAttribute$$.length;$i$$319$$++) {
        if ($idAttribute$$[$i$$319$$] in $errDetail$$9_row$$39$$) {
          $id$$33$$[$i$$319$$] = $errDetail$$9_row$$39$$[$idAttribute$$[$i$$319$$]];
        } else {
          throw $errDetail$$9_row$$39$$ = $oj$$25$$.$Translations$.$applyParameters$($oj$$25$$.$ArrayTableDataSource$.$_LOGGER_MSG$._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW, [$idAttribute$$[$i$$319$$]]), Error($errDetail$$9_row$$39$$);
        }
      }
    } else {
      if ($idAttribute$$ in $errDetail$$9_row$$39$$) {
        $id$$33$$ = $errDetail$$9_row$$39$$[$idAttribute$$];
      } else {
        throw $errDetail$$9_row$$39$$ = $oj$$25$$.$Translations$.$applyParameters$($oj$$25$$.$ArrayTableDataSource$.$_LOGGER_MSG$._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW, [$idAttribute$$]), Error($errDetail$$9_row$$39$$);
      }
    }
    return $id$$33$$;
  };
  $oj$$25$$.$ArrayTableDataSource$.prototype.$_getIdAttr$ = function $$oj$$25$$$$ArrayTableDataSource$$$$_getIdAttr$$($row$$40$$) {
    if (null != this.$_idAttribute$) {
      return this.$_idAttribute$;
    }
    if (null == this.$_attributes$) {
      this.$_attributes$ = [];
      for (var $prop$$65$$ in $row$$40$$) {
        $row$$40$$.hasOwnProperty($prop$$65$$) && this.$_attributes$.push($prop$$65$$);
      }
    }
    return this.$_attributes$.hasOwnProperty("id") ? "id" : this.$_attributes$;
  };
  $oj$$25$$.$ArrayTableDataSource$.$_sortFunc$ = function $$oj$$25$$$$ArrayTableDataSource$$$_sortFunc$$($a$$112_attrs1$$2$$, $attrs2$$2_b$$69$$, $comparator$$12_i$$320$$, $self$$148$$) {
    var $keyA$$5_retVal$$15$$, $keyB$$5$$;
    if ($$$$24$$.isFunction($comparator$$12_i$$320$$)) {
      if (1 === $comparator$$12_i$$320$$.length) {
        $keyA$$5_retVal$$15$$ = $comparator$$12_i$$320$$.call($self$$148$$, $a$$112_attrs1$$2$$);
        $keyB$$5$$ = $comparator$$12_i$$320$$.call($self$$148$$, $attrs2$$2_b$$69$$);
        $a$$112_attrs1$$2$$ = $oj$$25$$.$StringUtils$.$isString$($keyA$$5_retVal$$15$$) ? $keyA$$5_retVal$$15$$.split(",") : [$keyA$$5_retVal$$15$$];
        $attrs2$$2_b$$69$$ = $oj$$25$$.$StringUtils$.$isString$($keyB$$5$$) ? $keyB$$5$$.split(",") : [$keyB$$5$$];
        for ($comparator$$12_i$$320$$ = 0;$comparator$$12_i$$320$$ < $a$$112_attrs1$$2$$.length;$comparator$$12_i$$320$$++) {
          if ($keyA$$5_retVal$$15$$ = $oj$$25$$.$ArrayTableDataSource$.$_compareKeys$($a$$112_attrs1$$2$$[$comparator$$12_i$$320$$], $attrs2$$2_b$$69$$[$comparator$$12_i$$320$$], $self$$148$$.direction), 0 !== $keyA$$5_retVal$$15$$) {
            return $keyA$$5_retVal$$15$$;
          }
        }
        return 0;
      }
      return $comparator$$12_i$$320$$.call($self$$148$$, $a$$112_attrs1$$2$$, $attrs2$$2_b$$69$$);
    }
    if ($oj$$25$$.$StringUtils$.$isString$($comparator$$12_i$$320$$)) {
      var $attrs$$21$$ = $comparator$$12_i$$320$$.split(",");
      for ($comparator$$12_i$$320$$ = 0;$comparator$$12_i$$320$$ < $attrs$$21$$.length;$comparator$$12_i$$320$$++) {
        if ($keyA$$5_retVal$$15$$ = $oj$$25$$.$ArrayTableDataSource$.$_getKey$($a$$112_attrs1$$2$$, $attrs$$21$$[$comparator$$12_i$$320$$]), $keyB$$5$$ = $oj$$25$$.$ArrayTableDataSource$.$_getKey$($attrs2$$2_b$$69$$, $attrs$$21$$[$comparator$$12_i$$320$$]), $keyA$$5_retVal$$15$$ = $oj$$25$$.$ArrayTableDataSource$.$_compareKeys$($keyA$$5_retVal$$15$$, $keyB$$5$$, $self$$148$$.direction), 0 !== $keyA$$5_retVal$$15$$) {
          return $keyA$$5_retVal$$15$$;
        }
      }
    }
    return 0;
  };
  $oj$$25$$.$ArrayTableDataSource$.$_LOGGER_MSG$ = {_INFO_ARRAY_TABLE_DATASOURCE_IDATTR:"idAttribute option has not been specified. Will default to using 'id' if the field exists. If not, will use all the fields.", _ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW:"Specified idAttribute {0} not in row data. Please ensure all specified idAttribute fields are in the row data or do not specify idAttribute and all fields will be used as id."};
});
