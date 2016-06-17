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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$32$$, $$$$31$$) {
  $oj$$32$$.$CollectionTableDataSource$ = function $$oj$$32$$$$CollectionTableDataSource$$($data$$151$$, $options$$304$$) {
    this.data = {};
    if (!($data$$151$$ instanceof $oj$$32$$.$Collection$)) {
      throw Error($oj$$32$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$32$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    $oj$$32$$.$CollectionTableDataSource$.$superclass$.constructor.call(this, $data$$151$$, $options$$304$$);
    this.$_collection$ = $data$$151$$;
    this.$_addCollectionEventListeners$();
    this.Init();
    if (null != $options$$304$$ && ("enabled" == $options$$304$$.startFetch || null == $options$$304$$.startFetch) || null == $options$$304$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("CollectionTableDataSource", $oj$$32$$.$CollectionTableDataSource$, $oj$$32$$);
  $oj$$32$$.$Object$.$createSubclass$($oj$$32$$.$CollectionTableDataSource$, $oj$$32$$.$TableDataSource$, "oj.CollectionTableDataSource");
  $oj$$32$$.$CollectionTableDataSource$.prototype.Init = function $$oj$$32$$$$CollectionTableDataSource$$$Init$() {
    $oj$$32$$.$CollectionTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$32$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.Init", {Init:$oj$$32$$.$CollectionTableDataSource$.prototype.Init});
  $oj$$32$$.$CollectionTableDataSource$.prototype.at = function $$oj$$32$$$$CollectionTableDataSource$$$at$($index$$200$$, $options$$305$$) {
    $options$$305$$ = $options$$305$$ || {};
    $options$$305$$.deferred = !0;
    var $model$$69$$ = this.$_collection$.at($index$$200$$, $options$$305$$), $self$$161$$ = this;
    $self$$161$$.$_isFetchingForAt$ = !0;
    var $row$$42$$;
    return new Promise(function($resolve$$42$$, $reject$$39$$) {
      null != $model$$69$$ ? $model$$69$$.then(function($resolvedModel$$) {
        $self$$161$$.$_isFetchingForAt$ = !1;
        $row$$42$$ = {data:$resolvedModel$$.attributes, index:$index$$200$$, key:$resolvedModel$$.id};
        $resolve$$42$$($row$$42$$);
      }, function($e$$94$$) {
        $self$$161$$.$_isFetchingForAt$ = !1;
        $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call($self$$161$$, $oj$$32$$.$TableDataSource$.$EventType$.ERROR, $e$$94$$);
        $reject$$39$$($e$$94$$);
      }) : $resolve$$42$$(null);
    });
  };
  $oj$$32$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.at", {at:$oj$$32$$.$CollectionTableDataSource$.prototype.at});
  $oj$$32$$.$CollectionTableDataSource$.prototype.fetch = function $$oj$$32$$$$CollectionTableDataSource$$$fetch$($options$$306$$) {
    $options$$306$$ = $options$$306$$ || {};
    return "init" != $options$$306$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$306$$) : Promise.resolve();
  };
  $oj$$32$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.fetch", {fetch:$oj$$32$$.$CollectionTableDataSource$.prototype.fetch});
  $oj$$32$$.$CollectionTableDataSource$.prototype.get = function $$oj$$32$$$$CollectionTableDataSource$$$get$($id$$34$$, $options$$307$$) {
    $options$$307$$ = $options$$307$$ || {};
    $options$$307$$.deferred = !0;
    var $model$$70$$ = this.$_collection$.get($id$$34$$, $options$$307$$), $self$$162$$ = this, $row$$43$$;
    return new Promise(function($resolve$$43$$, $reject$$40$$) {
      null != $model$$70$$ ? $model$$70$$.then(function($resolvedModel$$1$$) {
        $row$$43$$ = {data:$resolvedModel$$1$$.attributes, index:$resolvedModel$$1$$.index, key:$resolvedModel$$1$$.id};
        $resolve$$43$$($row$$43$$);
      }, function($e$$95$$) {
        $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call($self$$162$$, $oj$$32$$.$TableDataSource$.$EventType$.ERROR, $e$$95$$);
        $reject$$40$$($e$$95$$);
      }) : $resolve$$43$$(null);
    });
  };
  $oj$$32$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.get", {get:$oj$$32$$.$CollectionTableDataSource$.prototype.get});
  $oj$$32$$.$CollectionTableDataSource$.prototype.sort = function $$oj$$32$$$$CollectionTableDataSource$$$sort$($criteria$$4$$) {
    if (null == $criteria$$4$$) {
      return Promise.resolve();
    }
    var $self$$163$$ = this;
    return new Promise(function($resolve$$44$$) {
      $self$$163$$.$_setComparator$($criteria$$4$$);
      $self$$163$$.$_collection$.sort(null);
      $resolve$$44$$({header:$criteria$$4$$.key, direction:$criteria$$4$$.direction});
    });
  };
  $oj$$32$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.sort", {sort:$oj$$32$$.$CollectionTableDataSource$.prototype.sort});
  $oj$$32$$.$CollectionTableDataSource$.prototype.totalSize = function $$oj$$32$$$$CollectionTableDataSource$$$totalSize$() {
    var $totalSize$$3$$ = 0 <= this.$_collection$.totalResults ? this.$_collection$.totalResults : -1;
    if (-1 < $totalSize$$3$$) {
      var $size$$24$$ = this.$_collection$.size();
      return $size$$24$$ > $totalSize$$3$$ ? $size$$24$$ : $totalSize$$3$$;
    }
    if (0 < this.$_fetchResultSize$) {
      $totalSize$$3$$ = this.$_fetchResultSize$;
    } else {
      if ("atLeast" == this.totalSizeConfidence()) {
        return this.$_collection$.size();
      }
    }
    return $totalSize$$3$$;
  };
  $oj$$32$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSize", {totalSize:$oj$$32$$.$CollectionTableDataSource$.prototype.totalSize});
  $oj$$32$$.$CollectionTableDataSource$.prototype.totalSizeConfidence = function $$oj$$32$$$$CollectionTableDataSource$$$totalSizeConfidence$() {
    return 0 <= this.$_collection$.totalResults ? "actual" : this.$_collection$.hasMore ? "atLeast" : "unknown";
  };
  $oj$$32$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$32$$.$CollectionTableDataSource$.prototype.totalSizeConfidence});
  $oj$$32$$.$CollectionTableDataSource$.prototype.$_addCollectionEventListeners$ = function $$oj$$32$$$$CollectionTableDataSource$$$$_addCollectionEventListeners$$() {
    var $self$$164$$ = this;
    this.$_collection$.on($oj$$32$$.$Events$.$EventType$.SYNC, function($event$$400_result$$64$$) {
      if ($event$$400_result$$64$$ instanceof $oj$$32$$.$Collection$ && !$self$$164$$.$_isFetchingForAt$ && !$self$$164$$.$_isFetching$) {
        var $startIndex$$29$$ = $event$$400_result$$64$$.offset, $pageSize$$4$$ = $event$$400_result$$64$$.lastFetchCount;
        0 < $pageSize$$4$$ ? ($self$$164$$.$_startIndex$ = $startIndex$$29$$, $self$$164$$.$_pageSize$ = $pageSize$$4$$, $self$$164$$.$_isFetchingForAt$ = !0, $event$$400_result$$64$$.$IterativeAt$($startIndex$$29$$, $startIndex$$29$$ + $pageSize$$4$$).then(function($modelArray$$2$$) {
          $self$$164$$.$_isFetchingForAt$ = !1;
          var $rowArray$$9$$ = [], $keyArray$$1$$ = [], $i$$328$$;
          for ($i$$328$$ = 0;$i$$328$$ < $modelArray$$2$$.length;$i$$328$$++) {
            null != $modelArray$$2$$[$i$$328$$] && ($rowArray$$9$$.push($modelArray$$2$$[$i$$328$$].attributes), $keyArray$$1$$.push($modelArray$$2$$[$i$$328$$].id));
          }
          $self$$164$$.$_endFetch$.call($self$$164$$, {silent:!1}, {data:$rowArray$$9$$, keys:$keyArray$$1$$, startIndex:$startIndex$$29$$}, null);
        })) : ($event$$400_result$$64$$ = $self$$164$$.$_getRowArray$(), $self$$164$$.$_endFetch$.call($self$$164$$, {silent:!1}, $event$$400_result$$64$$, null));
      }
    });
    this.$_collection$.on($oj$$32$$.$Events$.$EventType$.ALLADDED, function($event$$401$$, $modelArray$$3$$) {
      var $rowArray$$10$$ = [], $keyArray$$2$$ = [], $indexArray$$3$$ = [], $i$$329$$;
      for ($i$$329$$ = 0;$i$$329$$ < $modelArray$$3$$.length;$i$$329$$++) {
        $rowArray$$10$$.push($modelArray$$3$$[$i$$329$$].attributes), $keyArray$$2$$.push($modelArray$$3$$[$i$$329$$].id), $indexArray$$3$$.push($modelArray$$3$$[$i$$329$$].index);
      }
      $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call($self$$164$$, $oj$$32$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$10$$, keys:$keyArray$$2$$, indexes:$indexArray$$3$$});
    });
    this.$_collection$.on($oj$$32$$.$Events$.$EventType$.ALLREMOVED, function($event$$402$$, $modelArray$$4$$) {
      var $rowArray$$11$$ = [], $keyArray$$3$$ = [], $indexArray$$4$$ = [], $i$$330$$;
      for ($i$$330$$ = 0;$i$$330$$ < $modelArray$$4$$.length;$i$$330$$++) {
        $rowArray$$11$$.push($modelArray$$4$$[$i$$330$$].attributes), $keyArray$$3$$.push($modelArray$$4$$[$i$$330$$].id), $indexArray$$4$$.push($modelArray$$4$$[$i$$330$$].index);
      }
      $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call($self$$164$$, $oj$$32$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$11$$, keys:$keyArray$$3$$, indexes:$indexArray$$4$$});
    });
    this.$_collection$.on($oj$$32$$.$Events$.$EventType$.RESET, function($event$$403$$) {
      $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call($self$$164$$, $oj$$32$$.$TableDataSource$.$EventType$.RESET, $event$$403$$);
    });
    this.$_collection$.on($oj$$32$$.$Events$.$EventType$.SORT, function($event$$404$$, $eventOpts$$2$$) {
      null != $eventOpts$$2$$ && $eventOpts$$2$$.add || $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call($self$$164$$, $oj$$32$$.$TableDataSource$.$EventType$.SORT, $event$$404$$);
    });
    this.$_collection$.on($oj$$32$$.$Events$.$EventType$.CHANGE, function($event$$405$$) {
      $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call($self$$164$$, $oj$$32$$.$TableDataSource$.$EventType$.CHANGE, {data:[$event$$405$$.attributes], keys:[$event$$405$$.id], indexes:[$event$$405$$.index]});
    });
    this.$_collection$.on($oj$$32$$.$Events$.$EventType$.DESTROY, function($event$$406$$) {
      $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call($self$$164$$, $oj$$32$$.$TableDataSource$.$EventType$.DESTROY, $event$$406$$);
    });
    this.$_collection$.on($oj$$32$$.$Events$.$EventType$.REFRESH, function($event$$407$$) {
      $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call($self$$164$$, $oj$$32$$.$TableDataSource$.$EventType$.REFRESH, $event$$407$$);
    });
    this.$_collection$.on($oj$$32$$.$Events$.$EventType$.ERROR, function($collection$$36$$, $xhr$$21$$, $options$$308$$) {
      $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call($self$$164$$, $oj$$32$$.$TableDataSource$.$EventType$.ERROR, $collection$$36$$, $xhr$$21$$, $options$$308$$);
    });
  };
  $oj$$32$$.$CollectionTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$32$$$$CollectionTableDataSource$$$$_fetchInternal$$($options$$309$$) {
    this.$_startFetch$($options$$309$$);
    $options$$309$$ = $options$$309$$ || {};
    var $self$$165$$ = this;
    this.$_isPaged$ = 0 < $options$$309$$.pageSize ? !0 : !1;
    this.$_startIndex$ = null == $options$$309$$.startIndex ? this.$_startIndex$ : $options$$309$$.startIndex;
    this.$_pageSize$ = 0 < $options$$309$$.pageSize ? $options$$309$$.pageSize : -1;
    $options$$309$$.pageSize = this.$_pageSize$;
    $options$$309$$.startIndex = this.$_startIndex$;
    $options$$309$$.refresh = !0;
    return new Promise(function($resolve$$45$$, $reject$$42$$) {
      var $pageSize$$5$$ = $self$$165$$.$_pageSize$;
      $self$$165$$.$_isPaged$ || ($pageSize$$5$$ = 25);
      $self$$165$$.$_collection$.$setRangeLocal$($self$$165$$.$_startIndex$, $pageSize$$5$$).then(function($actual$$6$$) {
        var $result$$66_rowArray$$12$$;
        if ($self$$165$$.$_isPaged$) {
          $result$$66_rowArray$$12$$ = [];
          var $keyArray$$4$$ = [], $i$$331$$;
          for ($i$$331$$ = 0;$i$$331$$ < $actual$$6$$.models.length;$i$$331$$++) {
            $result$$66_rowArray$$12$$[$i$$331$$] = $actual$$6$$.models[$i$$331$$].attributes, $keyArray$$4$$[$i$$331$$] = $actual$$6$$.models[$i$$331$$].id;
          }
          $result$$66_rowArray$$12$$ = {data:$result$$66_rowArray$$12$$, keys:$keyArray$$4$$, startIndex:$self$$165$$.$_startIndex$};
          $actual$$6$$.models.length < $self$$165$$.$_pageSize$ ? 0 > $self$$165$$.totalSize() && ($self$$165$$.$_fetchResultSize$ = $self$$165$$.$_startIndex$ + $actual$$6$$.models.length) : $self$$165$$.$_fetchResultSize$ = null;
        } else {
          $result$$66_rowArray$$12$$ = $self$$165$$.$_getRowArray$();
        }
        $self$$165$$.$_endFetch$.call($self$$165$$, $options$$309$$, $result$$66_rowArray$$12$$, null);
        $resolve$$45$$($result$$66_rowArray$$12$$);
      }, function($error$$43$$) {
        $self$$165$$.$_endFetch$.call($self$$165$$, $options$$309$$, null, $error$$43$$);
        $reject$$42$$($error$$43$$);
      });
    });
  };
  $oj$$32$$.$CollectionTableDataSource$.prototype.$_startFetch$ = function $$oj$$32$$$$CollectionTableDataSource$$$$_startFetch$$($options$$310$$) {
    this.$_isFetching$ = !0;
    $options$$310$$.silent || $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$32$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$310$$.startIndex});
  };
  $oj$$32$$.$CollectionTableDataSource$.prototype.$_endFetch$ = function $$oj$$32$$$$CollectionTableDataSource$$$$_endFetch$$($options$$311$$, $result$$67$$, $error$$44$$) {
    this.$_isFetching$ = !1;
    null != $error$$44$$ ? $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$32$$.$TableDataSource$.$EventType$.ERROR, $error$$44$$) : $options$$311$$.silent || $oj$$32$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$32$$.$TableDataSource$.$EventType$.SYNC, $result$$67$$);
  };
  $oj$$32$$.$CollectionTableDataSource$.prototype.$_setComparator$ = function $$oj$$32$$$$CollectionTableDataSource$$$$_setComparator$$($criteria$$5_direction$$11$$) {
    if (null == $criteria$$5_direction$$11$$) {
      this.$_collection$.comparator = null;
    } else {
      var $key$$145$$ = $criteria$$5_direction$$11$$.key;
      $criteria$$5_direction$$11$$ = $criteria$$5_direction$$11$$.direction;
      var $comparator$$15$$ = null;
      this.$_collection$.$IsVirtual$() ? (this.$_collection$.comparator = $key$$145$$, this.$_collection$.sortDirection = "ascending" === $criteria$$5_direction$$11$$ ? 1 : -1) : ("ascending" == $criteria$$5_direction$$11$$ ? $comparator$$15$$ = function $$comparator$$15$$$($row$$44$$) {
        return $$$$31$$.isFunction($row$$44$$.get) ? $row$$44$$.get($key$$145$$) : $row$$44$$[$key$$145$$]();
      } : "descending" == $criteria$$5_direction$$11$$ && ($comparator$$15$$ = function $$comparator$$15$$$($rowA$$1$$, $rowB$$1$$) {
        var $a$$115$$, $b$$72$$;
        $$$$31$$.isFunction($rowA$$1$$.get) ? ($a$$115$$ = $rowA$$1$$.get($key$$145$$), $b$$72$$ = $rowB$$1$$.get($key$$145$$)) : ($a$$115$$ = $rowA$$1$$[$key$$145$$](), $b$$72$$ = $rowB$$1$$[$key$$145$$]());
        return $a$$115$$ === $b$$72$$ ? 0 : $a$$115$$ > $b$$72$$ ? -1 : 1;
      }), this.$_collection$.comparator = $comparator$$15$$);
    }
  };
  $oj$$32$$.$CollectionTableDataSource$.prototype.$_getRowArray$ = function $$oj$$32$$$$CollectionTableDataSource$$$$_getRowArray$$() {
    var $endIndex$$7$$ = this.$_collection$.size() - 1, $rowArray$$13$$ = [], $keyArray$$5$$ = [], $i$$332$$;
    for ($i$$332$$ = 0;$i$$332$$ <= $endIndex$$7$$;$i$$332$$++) {
      $rowArray$$13$$[$i$$332$$] = this.$_collection$.at($i$$332$$).attributes, $keyArray$$5$$[$i$$332$$] = this.$_collection$.at($i$$332$$).id;
    }
    return{data:$rowArray$$13$$, keys:$keyArray$$5$$, startIndex:this.$_startIndex$};
  };
  $oj$$32$$.$CollectionTableDataSource$.prototype.getCapability = function $$oj$$32$$$$CollectionTableDataSource$$$getCapability$() {
    return null;
  };
  $oj$$32$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.getCapability", {getCapability:$oj$$32$$.$CollectionTableDataSource$.prototype.getCapability});
});
