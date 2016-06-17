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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$43$$) {
  $oj$$43$$.$FlattenedTreeTableDataSource$ = function $$oj$$43$$$$FlattenedTreeTableDataSource$$($data$$161$$, $options$$340$$) {
    $options$$340$$ = $options$$340$$ || {};
    if (!($data$$161$$ instanceof $oj$$43$$.$FlattenedTreeDataSource$)) {
      throw Error($oj$$43$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$43$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$_data$ = $data$$161$$;
    this.$_eventHandlers$ = [];
    this.$_startIndex$ = 0;
    this.$_nodeSetList$ = [];
    null == this.$_data$.$getOption$("fetchSize") && (this.$_data$.$getFetchSize$ = function $this$$_data$$$getFetchSize$$() {
      return-1;
    });
    var $self$$187$$ = this;
    this.$_data$.$insertRows$ = function $this$$_data$$$insertRows$$($insertAtIndex$$2$$, $i$$361_insertAtKey$$1$$, $nodeSet$$33$$) {
      var $row$$48$$, $rowIdx$$40$$, $rowKey$$41$$, $rowArray$$14$$ = [], $keyArray$$6$$ = [], $indexArray$$5$$ = [];
      for ($i$$361_insertAtKey$$1$$ = 0;$i$$361_insertAtKey$$1$$ < $nodeSet$$33$$.$getCount$();$i$$361_insertAtKey$$1$$++) {
        $row$$48$$ = $nodeSet$$33$$.getData($i$$361_insertAtKey$$1$$), $rowKey$$41$$ = $nodeSet$$33$$.getMetadata($i$$361_insertAtKey$$1$$).key, $rowIdx$$40$$ = $insertAtIndex$$2$$ + $i$$361_insertAtKey$$1$$, $self$$187$$.$_nodeSetList$[$rowIdx$$40$$] = {}, $self$$187$$.$_nodeSetList$[$rowIdx$$40$$].nodeSet = $nodeSet$$33$$, $self$$187$$.$_nodeSetList$[$rowIdx$$40$$].startIndex = $insertAtIndex$$2$$, $rowArray$$14$$.push($row$$48$$), $keyArray$$6$$.push($rowKey$$41$$), $indexArray$$5$$.push($rowIdx$$40$$), 
        $self$$187$$.$_rows$.data.splice($rowIdx$$40$$, 0, $row$$48$$), $self$$187$$.$_rows$.keys.splice($rowIdx$$40$$, 0, $rowKey$$41$$), $self$$187$$.$_rows$.indexes.splice($rowIdx$$40$$, 0, $rowIdx$$40$$);
      }
      $self$$187$$.$_pageSize$ || $oj$$43$$.$TableDataSource$.$superclass$.handleEvent.call($self$$187$$, $oj$$43$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$14$$, keys:$keyArray$$6$$, indexes:$indexArray$$5$$});
      $self$$187$$.$_realignRowIndices$();
      $self$$187$$.$_pageSize$ && setTimeout(function() {
        $self$$187$$.fetch();
      }, 0);
    };
    this.$_data$.$removeRows$ = function $this$$_data$$$removeRows$$($rowKeys$$2$$) {
      var $i$$362$$, $rowIdx$$41$$, $rowArray$$15$$ = [], $keyArray$$7$$ = [], $indexArray$$6$$ = [];
      for ($i$$362$$ = 0;$i$$362$$ < $rowKeys$$2$$.length;$i$$362$$++) {
        $rowIdx$$41$$ = $rowKeys$$2$$[$i$$362$$].index - $i$$362$$, $rowArray$$15$$.push(""), $keyArray$$7$$.push(""), $indexArray$$6$$.push($rowIdx$$41$$), $self$$187$$.$_rows$.data.splice($rowIdx$$41$$, 1), $self$$187$$.$_rows$.keys.splice($rowIdx$$41$$, 1), $self$$187$$.$_rows$.indexes.splice($rowIdx$$41$$, 1);
      }
      $self$$187$$.$_pageSize$ || $oj$$43$$.$TableDataSource$.$superclass$.handleEvent.call($self$$187$$, $oj$$43$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$15$$, keys:$keyArray$$7$$, indexes:$indexArray$$6$$});
      $self$$187$$.$_realignRowIndices$();
      $self$$187$$.$_pageSize$ && setTimeout(function() {
        $self$$187$$.fetch();
      }, 0);
    };
    this.Init();
    if (null != $options$$340$$ && ("enabled" == $options$$340$$.startFetch || null == $options$$340$$.startFetch) || null == $options$$340$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("FlattenedTreeTableDataSource", $oj$$43$$.$FlattenedTreeTableDataSource$, $oj$$43$$);
  $oj$$43$$.$Object$.$createSubclass$($oj$$43$$.$FlattenedTreeTableDataSource$, $oj$$43$$.$TableDataSource$, "oj.FlattenedTreeTableDataSource");
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.Init = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$Init$() {
    $oj$$43$$.$FlattenedTreeTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.Init", {Init:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.Init});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.getCapability = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getCapability", {getCapability:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.getCapability});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$getWrappedDataSource$() {
    return this.$_data$;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.fetch = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$fetch$($options$$341$$) {
    $options$$341$$ = $options$$341$$ || {};
    return "init" != $options$$341$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$341$$) : Promise.resolve();
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.fetch", {fetch:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.fetch});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.at = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$at$($index$$221$$) {
    var $row$$50$$;
    $row$$50$$ = 0 > $index$$221$$ || $index$$221$$ >= this.$_rows$.length ? null : {data:this.$_rows$.data[$index$$221$$], index:$index$$221$$, key:this.$_rows$.keys[$index$$221$$]};
    return new Promise(function($resolve$$54$$) {
      $resolve$$54$$($row$$50$$);
    });
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.at", {at:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.at});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.collapse = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$collapse$($rowKey$$42$$) {
    this.$_data$.collapse($rowKey$$42$$);
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.collapse", {collapse:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.collapse});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.expand = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$expand$($rowKey$$43$$) {
    this.$_data$.expand($rowKey$$43$$);
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.expand", {expand:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.expand});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.get = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$get$() {
    $oj$$43$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.get", {get:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.get});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.on = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$on$($eventType$$46$$, $eventHandler$$3$$) {
    if ("expand" == $eventType$$46$$ || "collapse" == $eventType$$46$$) {
      this.$_data$.on($eventType$$46$$, $eventHandler$$3$$);
    } else {
      $oj$$43$$.$FlattenedTreeTableDataSource$.$superclass$.on.call(this, $eventType$$46$$, $eventHandler$$3$$);
    }
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.on", {on:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.on});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.off = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$off$($eventType$$47$$, $eventHandler$$4$$) {
    "expand" == $eventType$$47$$ || "collapse" == $eventType$$47$$ ? this.$_data$.off($eventType$$47$$, $eventHandler$$4$$) : $oj$$43$$.$FlattenedTreeTableDataSource$.$superclass$.off.call(this, $eventType$$47$$, $eventHandler$$4$$);
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.off", {off:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.off});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.sort = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$sort$($criteria$$8$$) {
    if (null == $criteria$$8$$) {
      return Promise.resolve();
    }
    var $self$$189$$ = this;
    $criteria$$8$$.axis = "column";
    return new Promise(function($resolve$$55$$, $reject$$52$$) {
      $self$$189$$.$_data$.getWrappedDataSource().sort($criteria$$8$$, {success:function() {
        setTimeout(function() {
          $self$$189$$.$_data$.refresh();
          $self$$189$$.$_rows$ = null;
          var $result$$71$$ = {header:$criteria$$8$$.key, direction:$criteria$$8$$.direction};
          $oj$$43$$.$TableDataSource$.$superclass$.handleEvent.call($self$$189$$, $oj$$43$$.$TableDataSource$.$EventType$.SORT, $result$$71$$);
          $resolve$$55$$($result$$71$$);
        }, 0);
      }.bind(this), error:function($status$$28$$) {
        $reject$$52$$($status$$28$$);
      }.bind(this)});
    });
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.sort", {sort:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.sort});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.totalSize = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$totalSize$() {
    return-1;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSize", {totalSize:$oj$$43$$.$FlattenedTreeTableDataSource$.prototype.totalSize});
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.$_getMetadata$ = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$$_getMetadata$$($index$$222$$) {
    return this.$_nodeSetList$[$index$$222$$].nodeSet.getMetadata($index$$222$$ - this.$_nodeSetList$[$index$$222$$].startIndex);
  };
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$$_fetchInternal$$($options$$344$$) {
    $options$$344$$ = $options$$344$$ || {};
    this.$_startFetch$($options$$344$$);
    this.$_startIndex$ = null == $options$$344$$.startIndex ? this.$_startIndex$ : $options$$344$$.startIndex;
    var $rangeCount$$1_rowArray$$16$$ = Number.MAX_VALUE;
    this.$_pageSize$ = null == $options$$344$$.pageSize ? this.$_pageSize$ : $options$$344$$.pageSize;
    null != this.$_pageSize$ && ($rangeCount$$1_rowArray$$16$$ = this.$_pageSize$);
    var $keyArray$$8_startIndex$$30$$ = this.$_startIndex$;
    if (null != this.$_rows$) {
      if (null != this.$_pageSize$) {
        var $endIndex$$8_result$$72$$ = this.$_rows$.data.length - 1;
        if (this.$_startIndex$ + this.$_pageSize$ - 1 <= $endIndex$$8_result$$72$$) {
          var $endIndex$$8_result$$72$$ = $oj$$43$$.$FlattenedTreeTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, this.$_pageSize$), $rangeCount$$1_rowArray$$16$$ = [], $keyArray$$8_startIndex$$30$$ = [], $i$$363$$;
          for ($i$$363$$ = this.$_startIndex$;$i$$363$$ <= $endIndex$$8_result$$72$$;$i$$363$$++) {
            $rangeCount$$1_rowArray$$16$$[$i$$363$$ - this.$_startIndex$] = this.$_rows$.data[$i$$363$$], $keyArray$$8_startIndex$$30$$[$i$$363$$ - this.$_startIndex$] = "";
          }
          $endIndex$$8_result$$72$$ = {data:$rangeCount$$1_rowArray$$16$$, keys:$keyArray$$8_startIndex$$30$$, startIndex:this.$_startIndex$};
          this.$_endFetch$($options$$344$$, $endIndex$$8_result$$72$$, null);
          return Promise.resolve($endIndex$$8_result$$72$$);
        }
        this.$_startIndex$ <= $endIndex$$8_result$$72$$ && ($keyArray$$8_startIndex$$30$$ = $endIndex$$8_result$$72$$ + 1);
      } else {
        this.$_data$.refresh(), this.$_rows$ = null;
      }
    }
    var $rangeOption$$ = {start:$keyArray$$8_startIndex$$30$$, count:$rangeCount$$1_rowArray$$16$$}, $self$$190$$ = this;
    return new Promise(function($resolve$$56$$, $reject$$53$$) {
      $self$$190$$.$_data$.$fetchRows$($rangeOption$$, {success:function($nodeSet$$35_result$$73$$) {
        $self$$190$$.$_handleFetchRowsSuccess$($nodeSet$$35_result$$73$$);
        $options$$344$$.refresh = !0;
        var $endIndex$$9$$ = $oj$$43$$.$FlattenedTreeTableDataSource$.$_getEndIndex$($self$$190$$.$_rows$, $self$$190$$.$_startIndex$, $self$$190$$.$_pageSize$), $rowArray$$17$$ = [], $keyArray$$9$$ = [], $i$$364$$;
        for ($i$$364$$ = $self$$190$$.$_startIndex$;$i$$364$$ <= $endIndex$$9$$;$i$$364$$++) {
          $rowArray$$17$$[$i$$364$$ - $self$$190$$.$_startIndex$] = $self$$190$$.$_rows$.data[$i$$364$$], $keyArray$$9$$[$i$$364$$ - $self$$190$$.$_startIndex$] = $nodeSet$$35_result$$73$$.getMetadata($i$$364$$).key;
        }
        $nodeSet$$35_result$$73$$ = {data:$rowArray$$17$$, keys:$keyArray$$9$$, startIndex:$self$$190$$.$_startIndex$};
        $self$$190$$.$_endFetch$($options$$344$$, $nodeSet$$35_result$$73$$, null);
        $resolve$$56$$($nodeSet$$35_result$$73$$);
      }.bind(this), error:function($error$$48$$) {
        $self$$190$$.$_endFetch$($options$$344$$, null, $error$$48$$);
        $reject$$53$$($error$$48$$);
      }.bind(this)});
    });
  };
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$$_handleFetchRowsSuccess$$($nodeSet$$36$$) {
    var $i$$365$$, $rowIdx$$42$$;
    for ($i$$365$$ = 0;$i$$365$$ < $nodeSet$$36$$.$getCount$();$i$$365$$++) {
      $rowIdx$$42$$ = this.$_startIndex$ + $i$$365$$, this.$_nodeSetList$[$rowIdx$$42$$] = {}, this.$_nodeSetList$[$rowIdx$$42$$].nodeSet = $nodeSet$$36$$, this.$_nodeSetList$[$rowIdx$$42$$].startIndex = this.$_startIndex$;
    }
    this.$_rows$ || (this.$_rows$ = {}, this.$_rows$.data = [], this.$_rows$.keys = [], this.$_rows$.indexes = []);
    $oj$$43$$.$FlattenedTreeTableDataSource$.$_getRowArray$($nodeSet$$36$$, this, this.$_rows$);
  };
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.$_startFetch$ = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$$_startFetch$$($options$$345$$) {
    $options$$345$$.silent || $oj$$43$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$43$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$345$$.startIndex});
  };
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.$_endFetch$ = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$$_endFetch$$($options$$346$$, $result$$74$$, $error$$49$$) {
    null != $error$$49$$ ? $oj$$43$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$43$$.$TableDataSource$.$EventType$.ERROR, $error$$49$$) : $options$$346$$.silent || $oj$$43$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$43$$.$TableDataSource$.$EventType$.SYNC, $result$$74$$);
  };
  $oj$$43$$.$FlattenedTreeTableDataSource$.$_getEndIndex$ = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$_getEndIndex$$($rows$$7$$, $startIndex$$31$$, $pageSize$$10$$) {
    var $endIndex$$10$$ = $rows$$7$$.data.length - 1;
    0 < $pageSize$$10$$ && ($endIndex$$10$$ = $startIndex$$31$$ + $pageSize$$10$$ - 1, $endIndex$$10$$ = $endIndex$$10$$ > $rows$$7$$.data.length - 1 ? $rows$$7$$.data.length - 1 : $endIndex$$10$$);
    return $endIndex$$10$$;
  };
  $oj$$43$$.$FlattenedTreeTableDataSource$.$_getRowArray$ = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$_getRowArray$$($nodeSet$$37$$, $endIndex$$11_rowSet$$, $rows$$8$$) {
    $endIndex$$11_rowSet$$ = $nodeSet$$37$$.$getCount$() - 1;
    var $i$$366$$;
    for ($i$$366$$ = $nodeSet$$37$$.$getStart$();$i$$366$$ <= $endIndex$$11_rowSet$$;$i$$366$$++) {
      var $row$$51$$ = $nodeSet$$37$$.getData($i$$366$$);
      $rows$$8$$.data[$i$$366$$] = $row$$51$$;
      $rows$$8$$.keys[$i$$366$$] = "";
      $rows$$8$$.indexes[$i$$366$$] = $i$$366$$;
    }
  };
  $oj$$43$$.$FlattenedTreeTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$43$$$$FlattenedTreeTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$367$$ = 0;$i$$367$$ < this.$_rows$.data.length;$i$$367$$++) {
      this.$_rows$.indexes[$i$$367$$] = $i$$367$$;
    }
  };
});
