/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$58$$) {
  $oj$$58$$.$PagingModel$ = function $$oj$$58$$$$PagingModel$$() {
  };
  $goog$exportPath_$$("PagingModel", $oj$$58$$.$PagingModel$, $oj$$58$$);
  $oj$$58$$.$PagingModel$.prototype.getPage = function $$oj$$58$$$$PagingModel$$$getPage$() {
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPage", {getPage:$oj$$58$$.$PagingModel$.prototype.getPage});
  $oj$$58$$.$PagingModel$.prototype.setPage = function $$oj$$58$$$$PagingModel$$$setPage$() {
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.setPage", {setPage:$oj$$58$$.$PagingModel$.prototype.setPage});
  $oj$$58$$.$PagingModel$.prototype.getStartItemIndex = function $$oj$$58$$$$PagingModel$$$getStartItemIndex$() {
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getStartItemIndex", {getStartItemIndex:$oj$$58$$.$PagingModel$.prototype.getStartItemIndex});
  $oj$$58$$.$PagingModel$.prototype.getEndItemIndex = function $$oj$$58$$$$PagingModel$$$getEndItemIndex$() {
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getEndItemIndex", {getEndItemIndex:$oj$$58$$.$PagingModel$.prototype.getEndItemIndex});
  $oj$$58$$.$PagingModel$.prototype.getPageCount = function $$oj$$58$$$$PagingModel$$$getPageCount$() {
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPageCount", {getPageCount:$oj$$58$$.$PagingModel$.prototype.getPageCount});
  $oj$$58$$.$PagingModel$.prototype.totalSize = function $$oj$$58$$$$PagingModel$$$totalSize$() {
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSize", {totalSize:$oj$$58$$.$PagingModel$.prototype.totalSize});
  $oj$$58$$.$PagingModel$.prototype.totalSizeConfidence = function $$oj$$58$$$$PagingModel$$$totalSizeConfidence$() {
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$58$$.$PagingModel$.prototype.totalSizeConfidence});
  $oj$$58$$.$PagingModel$.$EventType$ = {BEFOREPAGE:"beforePage", PAGE:"page", PAGECOUNT:"pageCount"};
  $goog$exportPath_$$("PagingModel.EventType", $oj$$58$$.$PagingModel$.$EventType$, $oj$$58$$);
  $oj$$58$$.$PagingTableDataSource$ = function $$oj$$58$$$$PagingTableDataSource$$($dataSource$$7$$) {
    if (!($dataSource$$7$$ instanceof $oj$$58$$.$TableDataSource$)) {
      throw Error($oj$$58$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$58$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$dataSource$ = $dataSource$$7$$;
    this.$_endIndex$ = this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("PagingTableDataSource", $oj$$58$$.$PagingTableDataSource$, $oj$$58$$);
  $oj$$58$$.$Object$.$createSubclass$($oj$$58$$.$PagingTableDataSource$, $oj$$58$$.$TableDataSource$, "oj.PagingTableDataSource");
  $oj$$58$$.$PagingTableDataSource$.prototype.Init = function $$oj$$58$$$$PagingTableDataSource$$$Init$() {
    $oj$$58$$.$PagingTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.Init", {Init:$oj$$58$$.$PagingTableDataSource$.prototype.Init});
  $oj$$58$$.$PagingTableDataSource$.prototype.getWrappedDataSource = function $$oj$$58$$$$PagingTableDataSource$$$getWrappedDataSource$() {
    return this.$dataSource$;
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$58$$.$PagingTableDataSource$.prototype.getWrappedDataSource});
  $oj$$58$$.$PagingTableDataSource$.prototype.getPage = function $$oj$$58$$$$PagingTableDataSource$$$getPage$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_getPageFromStartIndex$();
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPage", {getPage:$oj$$58$$.$PagingTableDataSource$.prototype.getPage});
  $oj$$58$$.$PagingTableDataSource$.prototype.setPage = function $$oj$$58$$$$PagingTableDataSource$$$setPage$($value$$285$$, $options$$375$$) {
    $options$$375$$ = $options$$375$$ || {};
    $value$$285$$ = parseInt($value$$285$$, 10);
    try {
      $oj$$58$$.$PagingTableDataSource$.$superclass$.handleEvent.call(this, $oj$$58$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$285$$, previousPage:this.$_getPageFromStartIndex$()});
    } catch ($err$$26$$) {
      return Promise.reject(null);
    }
    var $previousPage$$4$$ = this.$_getPageFromStartIndex$();
    this.$_pageSize$ = null != $options$$375$$.pageSize ? $options$$375$$.pageSize : this.$_pageSize$;
    $options$$375$$.pageSize = this.$_pageSize$;
    $options$$375$$.startIndex = $value$$285$$ * this.$_pageSize$;
    this.$_startIndex$ = null == $options$$375$$.startIndex ? this.$_startIndex$ : $options$$375$$.startIndex;
    this.$_fetchType$ = "page";
    var $self$$208$$ = this;
    return new Promise(function($resolve$$66$$, $reject$$63$$) {
      0 < $self$$208$$.$_pageSize$ ? $self$$208$$.$dataSource$.fetch($options$$375$$).then(function($result$$78$$) {
        $result$$78$$.startIndex = 0;
        $self$$208$$.$_updateEndIndex$();
        $oj$$58$$.$PagingTableDataSource$.$superclass$.handleEvent.call($self$$208$$, $oj$$58$$.$PagingModel$.$EventType$.PAGE, {page:$self$$208$$.$_getPageFromStartIndex$(), previousPage:$previousPage$$4$$});
        $resolve$$66$$(null);
      }, function() {
        $self$$208$$.$_startIndex$ = $previousPage$$4$$ * $self$$208$$.$_pageSize$;
        $reject$$63$$(null);
      }) : $resolve$$66$$(null);
    });
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.setPage", {setPage:$oj$$58$$.$PagingTableDataSource$.prototype.setPage});
  $oj$$58$$.$PagingTableDataSource$.prototype.getStartItemIndex = function $$oj$$58$$$$PagingTableDataSource$$$getStartItemIndex$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_startIndex$;
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$58$$.$PagingTableDataSource$.prototype.getStartItemIndex});
  $oj$$58$$.$PagingTableDataSource$.prototype.getEndItemIndex = function $$oj$$58$$$$PagingTableDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$58$$.$PagingTableDataSource$.prototype.getEndItemIndex});
  $oj$$58$$.$PagingTableDataSource$.prototype.getPageCount = function $$oj$$58$$$$PagingTableDataSource$$$getPageCount$() {
    var $totalSize$$9$$ = this.totalSize();
    return-1 == $totalSize$$9$$ ? -1 : Math.ceil($totalSize$$9$$ / this.$_pageSize$);
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPageCount", {getPageCount:$oj$$58$$.$PagingTableDataSource$.prototype.getPageCount});
  $oj$$58$$.$PagingTableDataSource$.prototype.at = function $$oj$$58$$$$PagingTableDataSource$$$at$($index$$252$$, $options$$376$$) {
    return this.$dataSource$.at($index$$252$$, $options$$376$$);
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.at", {at:$oj$$58$$.$PagingTableDataSource$.prototype.at});
  $oj$$58$$.$PagingTableDataSource$.prototype.fetch = function $$oj$$58$$$$PagingTableDataSource$$$fetch$($options$$377$$) {
    $options$$377$$ = $options$$377$$ || {};
    if (null == $options$$377$$.startIndex) {
      return this.setPage(this.getPage());
    }
    this.$_fetchType$ = "loadMore";
    this.$_startIndex$ = null == $options$$377$$.startIndex ? this.$_startIndex$ : $options$$377$$.startIndex;
    var $pageSize$$11$$ = null != $options$$377$$.pageSize ? $options$$377$$.pageSize : this.$_pageSize$;
    $options$$377$$.pageSize = $pageSize$$11$$;
    $options$$377$$.startIndex = this.$_startIndex$;
    var $self$$209$$ = this;
    return new Promise(function($resolve$$67$$, $reject$$64$$) {
      0 < $pageSize$$11$$ ? $self$$209$$.$dataSource$.fetch($options$$377$$).then(function($result$$79$$) {
        $self$$209$$.$_updateEndIndex$();
        $resolve$$67$$($result$$79$$);
      }, function($e$$111$$) {
        $reject$$64$$($e$$111$$);
      }) : $resolve$$67$$(null);
    });
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.fetch", {fetch:$oj$$58$$.$PagingTableDataSource$.prototype.fetch});
  $oj$$58$$.$PagingTableDataSource$.prototype.get = function $$oj$$58$$$$PagingTableDataSource$$$get$($id$$46$$, $options$$378$$) {
    return this.$dataSource$.get($id$$46$$, $options$$378$$);
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.get", {get:$oj$$58$$.$PagingTableDataSource$.prototype.get});
  $oj$$58$$.$PagingTableDataSource$.prototype.getCapability = function $$oj$$58$$$$PagingTableDataSource$$$getCapability$($feature$$17$$) {
    return this.$dataSource$.getCapability($feature$$17$$);
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getCapability", {getCapability:$oj$$58$$.$PagingTableDataSource$.prototype.getCapability});
  $oj$$58$$.$PagingTableDataSource$.prototype.on = function $$oj$$58$$$$PagingTableDataSource$$$on$($eventType$$49$$, $eventHandler$$5$$) {
    var $self$$210$$ = this, $dataSource$$8$$ = this.$dataSource$;
    if ($eventType$$49$$ == $oj$$58$$.$TableDataSource$.$EventType$.SYNC) {
      var $ev$$4$$ = function $$ev$$4$$$($event$$576$$) {
        $self$$210$$.$_handleSyncEvent$($event$$576$$, $eventHandler$$5$$);
      };
      $dataSource$$8$$.on($eventType$$49$$, $ev$$4$$);
      return $ev$$4$$;
    }
    if ($eventType$$49$$ == $oj$$58$$.$TableDataSource$.$EventType$.ADD || $eventType$$49$$ == $oj$$58$$.$TableDataSource$.$EventType$.REMOVE || $eventType$$49$$ == $oj$$58$$.$TableDataSource$.$EventType$.CHANGE) {
      return $ev$$4$$ = function $$ev$$4$$$($event$$577$$) {
        $self$$210$$.$_handleRowEvent$($event$$577$$, $eventHandler$$5$$);
      }, $dataSource$$8$$.on($eventType$$49$$, $ev$$4$$), $ev$$4$$;
    }
    if ($eventType$$49$$ == $oj$$58$$.$TableDataSource$.$EventType$.REFRESH || $eventType$$49$$ == $oj$$58$$.$TableDataSource$.$EventType$.RESET) {
      return $ev$$4$$ = function $$ev$$4$$$($event$$578$$) {
        $self$$210$$.$_startIndex$ = 0;
        $eventHandler$$5$$($event$$578$$);
      }, $dataSource$$8$$.on($eventType$$49$$, $ev$$4$$), $ev$$4$$;
    }
    if ($eventType$$49$$ == $oj$$58$$.$PagingModel$.$EventType$.PAGE || $eventType$$49$$ == $oj$$58$$.$PagingModel$.$EventType$.PAGECOUNT) {
      $oj$$58$$.$PagingTableDataSource$.$superclass$.on.call(this, $eventType$$49$$, $eventHandler$$5$$);
    } else {
      $dataSource$$8$$.on($eventType$$49$$, $eventHandler$$5$$);
    }
    return $eventHandler$$5$$;
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.on", {on:$oj$$58$$.$PagingTableDataSource$.prototype.on});
  $oj$$58$$.$PagingTableDataSource$.prototype.off = function $$oj$$58$$$$PagingTableDataSource$$$off$($eventType$$50$$, $eventHandler$$6$$) {
    return $eventType$$50$$ == $oj$$58$$.$PagingModel$.$EventType$.PAGE || $eventType$$50$$ == $oj$$58$$.$PagingModel$.$EventType$.PAGECOUNT ? ($oj$$58$$.$PagingTableDataSource$.$superclass$.off.call(this, $eventType$$50$$, $eventHandler$$6$$), $eventHandler$$6$$) : this.$dataSource$.off($eventType$$50$$, $eventHandler$$6$$);
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.off", {off:$oj$$58$$.$PagingTableDataSource$.prototype.off});
  $oj$$58$$.$PagingTableDataSource$.prototype.sort = function $$oj$$58$$$$PagingTableDataSource$$$sort$($criteria$$12$$) {
    return this.$dataSource$.sort($criteria$$12$$);
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.sort", {sort:$oj$$58$$.$PagingTableDataSource$.prototype.sort});
  $oj$$58$$.$PagingTableDataSource$.prototype.totalSize = function $$oj$$58$$$$PagingTableDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize();
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSize", {totalSize:$oj$$58$$.$PagingTableDataSource$.prototype.totalSize});
  $oj$$58$$.$PagingTableDataSource$.prototype.totalSizeConfidence = function $$oj$$58$$$$PagingTableDataSource$$$totalSizeConfidence$() {
    return this.$dataSource$.totalSizeConfidence();
  };
  $oj$$58$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$58$$.$PagingTableDataSource$.prototype.totalSizeConfidence});
  $oj$$58$$.$PagingTableDataSource$.prototype.$_getPageFromStartIndex$ = function $$oj$$58$$$$PagingTableDataSource$$$$_getPageFromStartIndex$$() {
    return 0 < this.$_pageSize$ ? Math.floor(this.$_startIndex$ / this.$_pageSize$) : 0;
  };
  $oj$$58$$.$PagingTableDataSource$.prototype.$_handleRowEvent$ = function $$oj$$58$$$$PagingTableDataSource$$$$_handleRowEvent$$($event$$579$$, $eventHandler$$7$$) {
    var $ignoreRows$$ = [], $i$$419$$;
    for ($i$$419$$ = 0;$i$$419$$ < $event$$579$$.indexes.length;$i$$419$$++) {
      var $rowIdx$$43$$ = $event$$579$$.indexes[$i$$419$$];
      void 0 !== $rowIdx$$43$$ && ($rowIdx$$43$$ -= this.$_startIndex$, (0 > $rowIdx$$43$$ || $rowIdx$$43$$ >= this.$_startIndex$ + this.$_pageSize$) && $ignoreRows$$.push($i$$419$$));
    }
    if (0 < $ignoreRows$$.length) {
      for ($ignoreRows$$.sort(function($a$$125$$, $b$$79$$) {
        return $a$$125$$ - $b$$79$$;
      }), $i$$419$$ = $ignoreRows$$.length - 1;0 <= $i$$419$$;$i$$419$$--) {
        $event$$579$$.data.splice($ignoreRows$$[$i$$419$$], 1), $event$$579$$.indexes.splice($ignoreRows$$[$i$$419$$], 1), $event$$579$$.keys.splice($ignoreRows$$[$i$$419$$], 1);
      }
    }
    this.$_updateEndIndex$();
    $event$$579$$.startIndex = this.$_startIndex$;
    $eventHandler$$7$$($event$$579$$);
  };
  $oj$$58$$.$PagingTableDataSource$.prototype.$_handleSyncEvent$ = function $$oj$$58$$$$PagingTableDataSource$$$$_handleSyncEvent$$($event$$580$$, $eventHandler$$8$$) {
    $event$$580$$.startIndex != this.$_startIndex$ && (this.$_startIndex$ = $event$$580$$.startIndex);
    this.$_updateEndIndex$();
    if ("page" == this.$_fetchType$) {
      var $clonedEvent$$ = {};
      $oj$$58$$.$CollectionUtils$.$copyInto$($clonedEvent$$, $event$$580$$);
      $clonedEvent$$.startIndex = 0;
      $eventHandler$$8$$($clonedEvent$$);
    } else {
      $eventHandler$$8$$($event$$580$$);
    }
  };
  $oj$$58$$.$PagingTableDataSource$.prototype.$_updateEndIndex$ = function $$oj$$58$$$$PagingTableDataSource$$$$_updateEndIndex$$() {
    var $totalSize$$10$$ = this.totalSize();
    this.$_endIndex$ = this.$_startIndex$ + this.$_pageSize$ - 1;
    0 < $totalSize$$10$$ && (this.$_endIndex$ = this.$_endIndex$ > $totalSize$$10$$ - 1 ? $totalSize$$10$$ - 1 : this.$_endIndex$);
  };
  $oj$$58$$.$PagingTableDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SYNC:"sync", REFRESH:"refresh", SORT:"sort"};
  $goog$exportPath_$$("PagingTableDataSource.EventType", $oj$$58$$.$PagingTableDataSource$.$EventType$, $oj$$58$$);
});
