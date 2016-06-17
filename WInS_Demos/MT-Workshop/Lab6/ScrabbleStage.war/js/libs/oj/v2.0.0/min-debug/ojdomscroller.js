/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery"], function($oj$$40$$, $$$$38$$) {
  $oj$$40$$.$DomScroller$ = function $$oj$$40$$$$DomScroller$$($element$$121$$, $datasource$$, $options$$323$$) {
    $options$$323$$ = $options$$323$$ || {};
    this.$_data$ = $datasource$$;
    this.$_element$ = $element$$121$$;
    this.$_fetchSize$ = $options$$323$$.fetchSize;
    this.$_fetchSize$ = 0 < this.$_fetchSize$ ? this.$_fetchSize$ : 25;
    this.$_maxCount$ = $options$$323$$.maxCount;
    this.$_maxCount$ = 0 < this.$_maxCount$ ? this.$_maxCount$ : 500;
    this.$_rowCount$ = 0;
    this.$_successCallback$ = $options$$323$$.success;
    this.$_errorCallback$ = $options$$323$$.error;
    this.$_registerDataSourceEventListeners$();
    $$$$38$$(this.$_element$).on("scroll.domscroller", function($event$$467_maxScrollTop$$2$$) {
      var $scrollTop$$7$$ = $$$$38$$($event$$467_maxScrollTop$$2$$.target).scrollTop();
      $event$$467_maxScrollTop$$2$$ = $$$$38$$($event$$467_maxScrollTop$$2$$.target)[0].scrollHeight - $$$$38$$($event$$467_maxScrollTop$$2$$.target)[0].clientHeight;
      0 < $event$$467_maxScrollTop$$2$$ && this.$_handleScrollerScrollTop$($scrollTop$$7$$, $event$$467_maxScrollTop$$2$$);
    }.bind(this));
  };
  $oj$$40$$.$DomScroller$.prototype.destroy = function $$oj$$40$$$$DomScroller$$$destroy$() {
    this.$_unregisterDataSourceEventListeners$();
    $$$$38$$(this.$_element$).off("scroll.domscroller");
  };
  $oj$$40$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.destroy", {destroy:$oj$$40$$.$DomScroller$.prototype.destroy});
  $oj$$40$$.$DomScroller$.prototype.checkViewport = function $$oj$$40$$$$DomScroller$$$checkViewport$() {
    return 0 < this.$_element$[0].clientHeight && !this.$_checkOverflow$() ? this.$_fetchMoreRows$() : Promise.resolve(null);
  };
  $oj$$40$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.checkViewport", {checkViewport:$oj$$40$$.$DomScroller$.prototype.checkViewport});
  $oj$$40$$.$DomScroller$.prototype.$_handleScrollerScrollTop$ = function $$oj$$40$$$$DomScroller$$$$_handleScrollerScrollTop$$($scrollTop$$8$$, $maxScrollTop$$3$$) {
    if (1 >= $maxScrollTop$$3$$ - $scrollTop$$8$$) {
      var $self$$178$$ = this;
      this.$_fetchMoreRows$().then(function($result$$68$$) {
        null != $self$$178$$.$_successCallback$ && $self$$178$$.$_successCallback$($result$$68$$);
      }, this.$_errorCallback$);
    }
  };
  $oj$$40$$.$DomScroller$.prototype.$_checkOverflow$ = function $$oj$$40$$$$DomScroller$$$$_checkOverflow$$() {
    var $element$$122$$ = this.$_element$;
    return $element$$122$$[0].scrollHeight > $element$$122$$[0].clientHeight + 1 ? !0 : !1;
  };
  $oj$$40$$.$DomScroller$.prototype.$_fetchMoreRows$ = function $$oj$$40$$$$DomScroller$$$$_fetchMoreRows$$() {
    if (this.$_fetchPromise$) {
      return this.$_fetchPromise$;
    }
    var $remainingCount$$ = this.$_maxCount$ - this.$_rowCount$;
    if (0 < $remainingCount$$) {
      var $pageSize$$6$$ = this.$_fetchSize$, $self$$179$$ = this;
      $remainingCount$$ < this.$_fetchSize$ && ($pageSize$$6$$ = $remainingCount$$);
      var $fetchPromise$$2$$ = this.$_fetchNext$({pageSize:$pageSize$$6$$});
      return this.$_fetchPromise$ = new Promise(function($resolve$$49$$) {
        $fetchPromise$$2$$.then(function($result$$69$$) {
          $self$$179$$.$_fetchPromise$ = null;
          null != $result$$69$$ && ($self$$179$$.$_rowCount$ = $result$$69$$.data.length + $result$$69$$.startIndex, $remainingCount$$ < $self$$179$$.$_fetchSize$ && ($result$$69$$.maxCount = $self$$179$$.$_maxCount$, $result$$69$$.maxCountLimit = !0));
          $resolve$$49$$($result$$69$$);
        });
      });
    }
    return Promise.resolve({maxCount:this.$_maxCount$, maxCountLimit:!0});
  };
  $oj$$40$$.$DomScroller$.prototype.$_fetchNext$ = function $$oj$$40$$$$DomScroller$$$$_fetchNext$$($options$$324$$) {
    $options$$324$$ = $options$$324$$ || {};
    var $pageSize$$7$$ = $options$$324$$.pageSize;
    this.$_currentStartIndex$ = this.$_currentStartIndex$ ? this.$_currentStartIndex$ + $pageSize$$7$$ : $pageSize$$7$$;
    if (-1 == this.$_data$.totalSize() || this.$_data$.totalSize() > this.$_currentStartIndex$) {
      var $self$$180$$ = this;
      return new Promise(function($resolve$$50$$, $reject$$47$$) {
        $self$$180$$.$_data$.fetch({startIndex:$self$$180$$.$_currentStartIndex$, pageSize:$pageSize$$7$$}).then(function($result$$70$$) {
          $resolve$$50$$($result$$70$$);
        }, function() {
          $reject$$47$$(null);
        });
      });
    }
    return Promise.resolve();
  };
  $oj$$40$$.$DomScroller$.prototype.$_handleDataReset$ = function $$oj$$40$$$$DomScroller$$$$_handleDataReset$$() {
    this.$_currentStartIndex$ = null;
    this.$_rowCount$ = 0;
  };
  $oj$$40$$.$DomScroller$.prototype.$_handleDataSync$ = function $$oj$$40$$$$DomScroller$$$$_handleDataSync$$($event$$468$$) {
    this.$_currentStartIndex$ = $event$$468$$.startIndex;
    this.$_rowCount$ = $event$$468$$.data.length + this.$_currentStartIndex$;
  };
  $oj$$40$$.$DomScroller$.prototype.$_registerDataSourceEventListeners$ = function $$oj$$40$$$$DomScroller$$$$_registerDataSourceEventListeners$$() {
    var $data$$158$$ = this.$_data$;
    if (null != $data$$158$$) {
      this.$_unregisterDataSourceEventListeners$();
      this.$_dataSourceEventHandlers$ = [];
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$40$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$40$$.$TableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$40$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$40$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataSync$.bind(this)});
      var $i$$349$$, $ev$$2$$;
      for ($i$$349$$ = 0;$i$$349$$ < this.$_dataSourceEventHandlers$.length;$i$$349$$++) {
        ($ev$$2$$ = $data$$158$$.on(this.$_dataSourceEventHandlers$[$i$$349$$].eventType, this.$_dataSourceEventHandlers$[$i$$349$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$349$$].eventHandler = $ev$$2$$);
      }
    }
  };
  $oj$$40$$.$DomScroller$.prototype.$_unregisterDataSourceEventListeners$ = function $$oj$$40$$$$DomScroller$$$$_unregisterDataSourceEventListeners$$() {
    var $data$$159$$ = this.$_data$;
    if (null != this.$_dataSourceEventHandlers$ && null != $data$$159$$) {
      var $i$$350$$;
      for ($i$$350$$ = 0;$i$$350$$ < this.$_dataSourceEventHandlers$.length;$i$$350$$++) {
        $data$$159$$.off(this.$_dataSourceEventHandlers$[$i$$350$$].eventType, this.$_dataSourceEventHandlers$[$i$$350$$].eventHandler);
      }
    }
  };
});
