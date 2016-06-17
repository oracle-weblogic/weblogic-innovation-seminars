/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdomscroller"], function($oj$$19$$, $$$$18$$) {
  $oj$$19$$.$DataSourceContentHandler$ = function $$oj$$19$$$$DataSourceContentHandler$$($widget$$5$$, $root$$3$$, $data$$124$$) {
    this.$m_root$ = $root$$3$$;
    this.$m_widget$ = $widget$$5$$;
    this.$m_fetching$ = !1;
    this.$setDataSource$($data$$124$$);
    this.Init();
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$DataSourceContentHandler$, $oj$$19$$.$Object$, "oj.DataSourceContentHandler");
  $oj$$19$$.$DataSourceContentHandler$.prototype.Init = function $$oj$$19$$$$DataSourceContentHandler$$$Init$() {
    $oj$$19$$.$DataSourceContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("DataSourceContentHandler.prototype.Init", {Init:$oj$$19$$.$DataSourceContentHandler$.prototype.Init});
  $oj$$19$$.$DataSourceContentHandler$.prototype.HandleResize = function $$oj$$19$$$$DataSourceContentHandler$$$HandleResize$() {
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$DataSourceContentHandler$$$$Destroy$$() {
    $$$$18$$(this.$m_root$).empty();
    this.$m_root$ = this.$m_widget$ = null;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$IsReady$ = function $$oj$$19$$$$DataSourceContentHandler$$$$IsReady$$() {
    return!this.$m_fetching$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$setRootAriaProperties$ = function $$oj$$19$$$$DataSourceContentHandler$$$$setRootAriaProperties$$() {
    this.$IsHierarchical$() ? this.$m_root$.setAttribute("role", "tree") : this.$m_root$.setAttribute("role", "listbox");
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$RenderContent$ = function $$oj$$19$$$$DataSourceContentHandler$$$$RenderContent$$() {
    this.$signalTaskStart$();
    this.$fetchRows$(!1);
    this.$setRootAriaProperties$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$GetKey$ = function $$oj$$19$$$$DataSourceContentHandler$$$$GetKey$$($element$$106$$) {
    return $element$$106$$.key;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$FindElementByKey$ = function $$oj$$19$$$$DataSourceContentHandler$$$$FindElementByKey$$($key$$83$$) {
    var $children$$7$$, $i$$271$$, $elem$$20$$;
    $children$$7$$ = $$$$18$$(this.$m_root$).find("." + this.$m_widget$.$getItemElementStyleClass$());
    for ($i$$271$$ = 0;$i$$271$$ < $children$$7$$.length;$i$$271$$++) {
      if ($elem$$20$$ = $children$$7$$[$i$$271$$], $key$$83$$ == this.$GetKey$($elem$$20$$)) {
        return $elem$$20$$;
      }
    }
    return null;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.getDataSource = function $$oj$$19$$$$DataSourceContentHandler$$$getDataSource$() {
    return this.$m_dataSource$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$setDataSource$ = function $$oj$$19$$$$DataSourceContentHandler$$$$setDataSource$$($dataSource$$1$$) {
    this.$m_dataSource$ = $dataSource$$1$$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$DataSourceContentHandler$$$$fetchRows$$() {
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$addItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$addItem$$($parentElement$$5$$, $index$$125$$, $data$$125$$, $metadata$$1$$, $callback$$98$$) {
    var $item$$15$$;
    $item$$15$$ = document.createElement("li");
    $$$$18$$($item$$15$$).uniqueId();
    $parentElement$$5$$.insertBefore($item$$15$$, $index$$125$$ === $parentElement$$5$$.childElementCount ? null : $parentElement$$5$$.children[$index$$125$$]);
    this.$_addOrReplaceItem$($item$$15$$, $index$$125$$, $parentElement$$5$$, $index$$125$$, $data$$125$$, $metadata$$1$$, $callback$$98$$);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$_handleBeforeReplaceTransitionEnd$ = function $$oj$$19$$$$DataSourceContentHandler$$$$_handleBeforeReplaceTransitionEnd$$($event$$250_item$$16$$) {
    var $ctx$$2$$, $parentElement$$6$$, $position$$11$$;
    $event$$250_item$$16$$ = $event$$250_item$$16$$.target;
    $$$$18$$($event$$250_item$$16$$).empty().removeClass("oj-listview-item-add-remove-transition").off("transitionend", this.$m_beforeReplaceTransitionEndListener$);
    $ctx$$2$$ = $$$$18$$.data($event$$250_item$$16$$, "ctx");
    $$$$18$$.removeData($event$$250_item$$16$$, "ctx");
    $parentElement$$6$$ = $event$$250_item$$16$$.parentNode;
    $position$$11$$ = $$$$18$$($parentElement$$6$$).children().index($event$$250_item$$16$$);
    this.$_addOrReplaceItem$($event$$250_item$$16$$, $position$$11$$, $parentElement$$6$$, $ctx$$2$$.index, $ctx$$2$$.data, $ctx$$2$$.$metadata$, $ctx$$2$$.$callback$);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$replaceItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$replaceItem$$($item$$17$$, $index$$126$$, $data$$126$$, $metadata$$2$$, $callback$$99$$) {
    null == this.$m_beforeReplaceTransitionEndListener$ && (this.$m_beforeReplaceTransitionEndListener$ = this.$_handleBeforeReplaceTransitionEnd$.bind(this));
    $$$$18$$.data($item$$17$$, "ctx", {index:$index$$126$$, data:$data$$126$$, $metadata$:$metadata$$2$$, $callback$:$callback$$99$$});
    this.$signalTaskStart$();
    $$$$18$$($item$$17$$).addClass("oj-listview-item-add-remove-transition").on("transitionend", this.$m_beforeReplaceTransitionEndListener$).css("opacity", 0);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$_addOrReplaceItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$_addOrReplaceItem$$($item$$18$$, $position$$12$$, $parentElement$$7$$, $context$$76_index$$127$$, $content$$16_data$$127$$, $metadata$$3_renderer_textWrapper$$, $callback$$100$$) {
    void 0 == $callback$$100$$ && ($callback$$100$$ = this.$afterRenderItem$.bind(this));
    $context$$76_index$$127$$ = this.$createContext$($context$$76_index$$127$$, $content$$16_data$$127$$, $metadata$$3_renderer_textWrapper$$, $item$$18$$);
    $metadata$$3_renderer_textWrapper$$ = this.$m_widget$.$_getItemRenderer$();
    null != $metadata$$3_renderer_textWrapper$$ ? ($content$$16_data$$127$$ = $metadata$$3_renderer_textWrapper$$.call(this, $context$$76_index$$127$$), null != $content$$16_data$$127$$ && (null === $content$$16_data$$127$$.parentNode || $content$$16_data$$127$$.parentNode instanceof DocumentFragment ? $item$$18$$.appendChild($content$$16_data$$127$$) : null == $content$$16_data$$127$$.parentNode && $content$$16_data$$127$$.toString && ($metadata$$3_renderer_textWrapper$$ = document.createElement("span"), 
    $metadata$$3_renderer_textWrapper$$.appendChild(document.createTextNode($content$$16_data$$127$$.toString())), $item$$18$$.appendChild($metadata$$3_renderer_textWrapper$$)))) : ($metadata$$3_renderer_textWrapper$$ = document.createElement("span"), $metadata$$3_renderer_textWrapper$$.appendChild(document.createTextNode(null == $content$$16_data$$127$$ ? "" : $content$$16_data$$127$$.toString())), $item$$18$$.appendChild($metadata$$3_renderer_textWrapper$$));
    $item$$18$$ = $parentElement$$7$$.children[$position$$12$$];
    $context$$76_index$$127$$.parentElement = $item$$18$$;
    $callback$$100$$($item$$18$$, $context$$76_index$$127$$);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$afterRenderItem$$($item$$19$$, $context$$77$$) {
    var $elem$$21$$;
    $item$$19$$.key = $context$$77$$.key;
    $item$$19$$ = $$$$18$$($item$$19$$);
    $item$$19$$.uniqueId();
    $elem$$21$$ = this.$m_widget$.$getSingleFocusableElement$($item$$19$$);
    $elem$$21$$.attr("role", this.$IsHierarchical$() ? "treeitem" : "option");
    $elem$$21$$ != $item$$19$$ && $item$$19$$.attr("role", "presentation");
    $elem$$21$$.addClass(this.$m_widget$.$getFocusedElementStyleClass$());
    this.$isFocusable$($context$$77$$) || $item$$19$$.addClass("oj-skipfocus");
    $item$$19$$.addClass(this.$m_widget$.$getItemElementStyleClass$());
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$createContext$ = function $$oj$$19$$$$DataSourceContentHandler$$$$createContext$$($index$$128$$, $data$$128$$, $metadata$$4$$, $elem$$22$$) {
    var $context$$78$$, $prop$$62$$;
    $context$$78$$ = {};
    $context$$78$$.parentElement = $elem$$22$$;
    $context$$78$$.index = $index$$128$$;
    $context$$78$$.data = $data$$128$$;
    $context$$78$$.component = this.$m_widget$.$getWidgetConstructor$();
    $context$$78$$.datasource = this.getDataSource();
    for ($prop$$62$$ in $metadata$$4$$) {
      $metadata$$4$$.hasOwnProperty($prop$$62$$) && ($context$$78$$[$prop$$62$$] = $metadata$$4$$[$prop$$62$$]);
    }
    return $context$$78$$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$isFocusable$ = function $$oj$$19$$$$DataSourceContentHandler$$$$isFocusable$$($context$$79$$) {
    return this.$m_widget$.$_getItemOption$("focusable", $context$$79$$, !0);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$isSelectable$ = function $$oj$$19$$$$DataSourceContentHandler$$$$isSelectable$$($context$$80$$) {
    return this.$m_widget$.$_getItemOption$("selectable", $context$$80$$, !0);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$signalTaskStart$ = function $$oj$$19$$$$DataSourceContentHandler$$$$signalTaskStart$$() {
    this.$m_widget$ && this.$m_widget$.$signalTaskStart$();
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$signalTaskEnd$ = function $$oj$$19$$$$DataSourceContentHandler$$$$signalTaskEnd$$() {
    this.$m_widget$ && this.$m_widget$.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$ = function $$oj$$19$$$$TableDataSourceContentHandler$$($widget$$6$$, $root$$4$$, $data$$129$$) {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.constructor.call(this, $widget$$6$$, $root$$4$$, $data$$129$$);
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$TableDataSourceContentHandler$, $oj$$19$$.$DataSourceContentHandler$, "oj.TableDataSourceContentHandler");
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.Init = function $$oj$$19$$$$TableDataSourceContentHandler$$$Init$() {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$IsHierarchical$$() {
    return!1;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$Destroy$$() {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.$Destroy$.call(this);
    this.$_removeDataSourceEventListeners$();
    null != this.$m_domScroller$ && (this.$m_domScroller$.destroy(), this.$m_domScrollerMaxCountFunc$ = this.$m_domScroller$ = null);
    this.$m_loadingIndicator$ = null;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.HandleResize = function $$oj$$19$$$$TableDataSourceContentHandler$$$HandleResize$($width$$23$$, $height$$19$$) {
    this.$_isLoadMoreOnScroll$() && void 0 != this.$m_height$ && this.$m_height$ != $height$$19$$ && (this.$m_height$ = $height$$19$$, this.checkViewport());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_isLoadMoreOnScroll$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_isLoadMoreOnScroll$$() {
    return "loadMoreOnScroll" == this.$m_widget$.options.scrollPolicy ? !0 : !1;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_getFetchSize$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_getFetchSize$$() {
    return Math.max(0, this.$m_widget$.options.scrollPolicyOptions.fetchSize);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_getMaxCount$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_getMaxCount$$() {
    return this.$m_widget$.options.scrollPolicyOptions.maxCount;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$setDataSource$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$setDataSource$$($dataSource$$2$$) {
    var $self$$115$$;
    this.$_removeDataSourceEventListeners$();
    if (null != $dataSource$$2$$) {
      this.$_isLoadMoreOnScroll$() && ($self$$115$$ = this, this.$m_domScrollerMaxCountFunc$ = function $this$$m_domScrollerMaxCountFunc$$($result$$47$$) {
        null != $result$$47$$ ? ($self$$115$$.$signalTaskStart$(), $self$$115$$.$_removeLoadingIndicator$(), $self$$115$$.$IsReady$() && $self$$115$$.$signalTaskStart$(), $self$$115$$.$_handleFetchedData$($result$$47$$), $result$$47$$.maxCountLimit ? $self$$115$$.$_handleScrollerMaxRowCount$() : $self$$115$$.$_appendLoadingIndicator$(), $self$$115$$.$signalTaskEnd$(), $self$$115$$.$signalTaskEnd$()) : void 0 === $result$$47$$ && ($self$$115$$.$_removeLoadingIndicator$(), $self$$115$$.$signalTaskEnd$());
      }, this.$m_domScroller$ = new $oj$$19$$.$DomScroller$(this.$m_widget$.$getRootElement$(), $dataSource$$2$$, {fetchSize:this.$_getFetchSize$(), maxCount:this.$_getMaxCount$(), success:this.$m_domScrollerMaxCountFunc$, error:this.$signalTaskEnd$}), this.$m_domScroller$.$_handleScrollerScrollTop$ = function $this$$m_domScroller$$$_handleScrollerScrollTop$$($scrollTop$$3$$, $maxScrollTop$$1$$) {
        1 >= $maxScrollTop$$1$$ - $scrollTop$$3$$ && $self$$115$$.$signalTaskStart$();
        $oj$$19$$.$DomScroller$.prototype.$_handleScrollerScrollTop$.call(this, $scrollTop$$3$$, $maxScrollTop$$1$$);
      });
      this.$m_handleModelSyncEventListener$ = this.$handleModelSyncEvent$.bind(this);
      this.$m_handleModelSortEventListener$ = this.$handleModelSortEvent$.bind(this);
      this.$m_handleModelAddEventListener$ = this.$handleModelAddEvent$.bind(this);
      this.$m_handleModelRemoveEventListener$ = this.$handleModelRemoveEvent$.bind(this);
      this.$m_handleModelChangeEventListener$ = this.$handleModelChangeEvent$.bind(this);
      this.$m_handleModelResetEventListener$ = this.$handleModelResetEvent$.bind(this);
      if ($oj$$19$$.$PagingTableDataSource$ && $dataSource$$2$$ instanceof $oj$$19$$.$PagingTableDataSource$) {
        $dataSource$$2$$.on("sync", this.$m_handleModelSyncEventListener$);
      }
      $dataSource$$2$$.on("sort", this.$m_handleModelSortEventListener$);
      $dataSource$$2$$.on("add", this.$m_handleModelAddEventListener$);
      $dataSource$$2$$.on("remove", this.$m_handleModelRemoveEventListener$);
      $dataSource$$2$$.on("change", this.$m_handleModelChangeEventListener$);
      $dataSource$$2$$.on("reset", this.$m_handleModelResetEventListener$);
    }
    this.$m_dataSource$ = $dataSource$$2$$;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_appendLoadingIndicator$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_appendLoadingIndicator$$() {
    var $item$$20$$, $icon$$;
    null == this.$m_loadingIndicator$ && ($item$$20$$ = $$$$18$$(document.createElement("li")), $item$$20$$.uniqueId().attr("role", "presentation").addClass(this.$m_widget$.$getItemStyleClass$()), $icon$$ = $$$$18$$(document.createElement("div")), $icon$$.addClass("oj-listview-loading-icon"), $item$$20$$.append($icon$$), $$$$18$$(this.$m_root$).append($item$$20$$), this.$m_loadingIndicator$ = $item$$20$$);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeLoadingIndicator$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeLoadingIndicator$$() {
    null != this.$m_loadingIndicator$ && this.$m_loadingIndicator$.remove();
    this.$m_loadingIndicator$ = null;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItem$$($item$$21$$, $context$$81$$) {
    var $size$$23$$;
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.$afterRenderItem$.call(this, $item$$21$$, $context$$81$$);
    $$$$18$$($item$$21$$).addClass(this.$m_widget$.$getItemStyleClass$());
    this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$81$$) && this.$m_widget$.$getFocusItem$($$$$18$$($item$$21$$)).attr("aria-selected", !1);
    this.$_isLoadMoreOnScroll$() && ($size$$23$$ = Math.min(this.$m_dataSource$.totalSize(), this.$_getMaxCount$()), -1 === $size$$23$$ && ($size$$23$$ = this.$_getMaxCount$()), 0 < $size$$23$$ && $$$$18$$($item$$21$$).attr("aria-setsize", $size$$23$$).attr("aria-posinset", $context$$81$$.index + 1));
    this.$m_widget$.$itemRenderComplete$($item$$21$$, $context$$81$$);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItemForInsertEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItemForInsertEvent$$($item$$22$$, $context$$82$$) {
    var $elem$$23$$, $height$$20$$, $itemStyleClass$$;
    this.$signalTaskStart$();
    this.$afterRenderItem$($item$$22$$, $context$$82$$);
    $elem$$23$$ = $$$$18$$($item$$22$$);
    $height$$20$$ = $elem$$23$$.outerHeight();
    $elem$$23$$.css("opacity", "0");
    $elem$$23$$.css("maxHeight", "0");
    $itemStyleClass$$ = this.$m_widget$.$getItemStyleClass$();
    $elem$$23$$.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e");
    $elem$$23$$.removeClass($itemStyleClass$$).addClass("oj-listview-item-add-remove-transition");
    $elem$$23$$.children().first().addClass($itemStyleClass$$);
    null == this.$m_addTransitionEndListener$ && (this.$m_addTransitionEndListener$ = this.$_handleAddTransitionEnd$.bind(this));
    $$$$18$$.data($item$$22$$, "ctx", $context$$82$$);
    $elem$$23$$.on("transitionend", this.$m_addTransitionEndListener$);
    this.$signalTaskStart$();
    requestAnimationFrame(function() {
      $elem$$23$$.css("opacity", "1");
      $elem$$23$$.css("maxHeight", $height$$20$$ + "px");
    });
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleScrollerMaxRowCount$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleScrollerMaxRowCount$$() {
    $oj$$19$$.$Logger$.error("max count reached");
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeDataSourceEventListeners$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeDataSourceEventListeners$$() {
    null != this.$m_dataSource$ && (this.$m_dataSource$.off("sync", this.$m_handleModelSyncEventListener$), this.$m_dataSource$.off("sort", this.$m_handleModelSortEventListener$), this.$m_dataSource$.off("add", this.$m_handleModelAddEventListener$), this.$m_dataSource$.off("remove", this.$m_handleModelRemoveEventListener$), this.$m_dataSource$.off("change", this.$m_handleModelChangeEventListener$), this.$m_dataSource$.off("reset", this.$m_handleModelResetEventListener$));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$fetchRows$$($forceFetch$$1_options$$257_promise$$4$$) {
    var $initFetch$$2$$ = !0, $self$$116$$;
    this.$signalTaskStart$();
    if (this.$IsReady$() && (this.$m_fetching$ = !0, $oj$$19$$.$PagingTableDataSource$ && this.$m_dataSource$ instanceof $oj$$19$$.$PagingTableDataSource$ && ($initFetch$$2$$ = !1, this.$signalTaskStart$()), $initFetch$$2$$ || $forceFetch$$1_options$$257_promise$$4$$)) {
      $initFetch$$2$$ && this.$signalTaskStart$();
      $forceFetch$$1_options$$257_promise$$4$$ = {fetchType:"init", startIndex:0};
      this.$_isLoadMoreOnScroll$() && ($forceFetch$$1_options$$257_promise$$4$$.pageSize = this.$_getFetchSize$());
      $self$$116$$ = this;
      $forceFetch$$1_options$$257_promise$$4$$ = this.$m_dataSource$.fetch($forceFetch$$1_options$$257_promise$$4$$);
      $forceFetch$$1_options$$257_promise$$4$$.then(function($value$$238$$) {
        null != $self$$116$$.$m_widget$ && $initFetch$$2$$ && ($self$$116$$.$_handleFetchedData$($value$$238$$), $self$$116$$.$_isLoadMoreOnScroll$() && null != $value$$238$$ && $value$$238$$.keys && 0 < $value$$238$$.keys.length && $self$$116$$.$_appendLoadingIndicator$());
      }, function($reason$$5$$) {
        $self$$116$$.$_handleFetchError$($reason$$5$$);
        $self$$116$$.$signalTaskEnd$();
      });
      this.$signalTaskEnd$();
      return;
    }
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchError$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchError$$($msg$$22$$) {
    $oj$$19$$.$Logger$.error($msg$$22$$);
    this.$_isLoadMoreOnScroll$() && this.$_removeLoadingIndicator$();
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchSuccess$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchSuccess$$($data$$130$$, $keys$$26$$) {
    var $index$$129$$, $i$$272$$, $row$$29$$;
    $index$$129$$ = this.$m_root$.childElementCount;
    for ($i$$272$$ = 0;$i$$272$$ < $data$$130$$.length;$i$$272$$++) {
      $row$$29$$ = $data$$130$$[$i$$272$$], this.$addItem$(this.$m_root$, $index$$129$$, $row$$29$$, this.getMetadata($index$$129$$, $keys$$26$$[$i$$272$$], $row$$29$$)), $index$$129$$ += 1;
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelAddEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelAddEvent$$($event$$251_indexes$$6$$) {
    var $data$$131$$, $keys$$27$$, $i$$273$$;
    if (null != this.$m_root$) {
      this.$signalTaskStart$();
      $data$$131$$ = $event$$251_indexes$$6$$.data;
      $keys$$27$$ = $event$$251_indexes$$6$$.keys;
      $event$$251_indexes$$6$$ = $event$$251_indexes$$6$$.indexes;
      if (null != $data$$131$$ && null != $keys$$27$$ && 0 < $keys$$27$$.length && 0 < $data$$131$$.length && $keys$$27$$.length == $data$$131$$.length && null != $event$$251_indexes$$6$$ && $keys$$27$$.length == $event$$251_indexes$$6$$.length) {
        for ($i$$273$$ = 0;$i$$273$$ < $data$$131$$.length;$i$$273$$++) {
          this.$signalTaskStart$(), this.$addItem$(this.$m_root$, $event$$251_indexes$$6$$[$i$$273$$], $data$$131$$[$i$$273$$], this.getMetadata($event$$251_indexes$$6$$[$i$$273$$], $keys$$27$$[$i$$273$$], $data$$131$$[$i$$273$$]), this.$afterRenderItemForInsertEvent$.bind(this)), this.$signalTaskEnd$();
        }
        this.$IsReady$() && this.$signalTaskStart$();
        this.$fetchEnd$();
      }
      this.$signalTaskEnd$();
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleAddTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleAddTransitionEnd$$($elem$$24_event$$252$$) {
    var $context$$83$$;
    $elem$$24_event$$252$$ = $elem$$24_event$$252$$.target;
    $context$$83$$ = $$$$18$$.data($elem$$24_event$$252$$, "ctx");
    $$$$18$$.removeData($elem$$24_event$$252$$, "ctx");
    $$$$18$$($elem$$24_event$$252$$).removeClass("oj-listview-item-add-remove-transition").addClass(this.$m_widget$.$getItemStyleClass$()).off("transitionend", this.$m_addTransitionEndListener$).children().children().unwrap();
    this.$m_widget$.$itemInsertComplete$($elem$$24_event$$252$$, $context$$83$$);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelRemoveEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelRemoveEvent$$($event$$253_keys$$28$$) {
    var $i$$274$$, $elem$$25$$;
    $event$$253_keys$$28$$ = $event$$253_keys$$28$$.keys;
    if (null != this.$m_root$ && null != $event$$253_keys$$28$$ && 0 != $event$$253_keys$$28$$.length) {
      this.$signalTaskStart$();
      for ($i$$274$$ = 0;$i$$274$$ < $event$$253_keys$$28$$.length;$i$$274$$++) {
        $elem$$25$$ = this.$FindElementByKey$($event$$253_keys$$28$$[$i$$274$$]), null != $elem$$25$$ && (this.$signalTaskStart$(), this.$_removeItem$($elem$$25$$), this.$signalTaskEnd$());
      }
      this.$m_widget$.$ClearCache$();
      this.$signalTaskEnd$();
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeItem$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeItem$$($elem$$26$$) {
    var $itemStyleClass$$2$$, $self$$117$$ = this;
    this.$signalTaskStart$();
    null == this.$m_removeTransitionEndListener$ && (this.$m_removeTransitionEndListener$ = this.$_handleRemoveTransitionEnd$.bind(this));
    $itemStyleClass$$2$$ = this.$m_widget$.$getItemStyleClass$();
    $elem$$26$$ = $$$$18$$($elem$$26$$);
    $elem$$26$$.children().wrapAll("\x3cdiv class\x3d'" + $itemStyleClass$$2$$ + "'\x3e\x3c/div\x3e");
    $elem$$26$$.removeClass($itemStyleClass$$2$$).css("maxHeight", $elem$$26$$.outerHeight() + "px").addClass("oj-listview-item-add-remove-transition").on("transitionend", this.$m_removeTransitionEndListener$);
    setTimeout(function() {
      $self$$117$$.$signalTaskStart$();
      $elem$$26$$.css("opacity", "0");
      $elem$$26$$.css("maxHeight", "0px");
      $self$$117$$.$signalTaskEnd$();
    }, 10);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleRemoveTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleRemoveTransitionEnd$$($elem$$27_event$$254$$) {
    var $parent$$14$$;
    $elem$$27_event$$254$$ = $$$$18$$($elem$$27_event$$254$$.target);
    $parent$$14$$ = $elem$$27_event$$254$$.parent();
    $elem$$27_event$$254$$.off("transitionend", this.$m_removeTransitionEndListener$);
    this.$m_widget$.$itemRemoveComplete$($elem$$27_event$$254$$.get(0));
    $elem$$27_event$$254$$.remove();
    0 == $parent$$14$$.get(0).childElementCount && this.$m_widget$.$renderComplete$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelChangeEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelChangeEvent$$($event$$255_indexes$$7$$) {
    var $keys$$29$$, $data$$132$$, $i$$275$$, $elem$$28$$;
    $keys$$29$$ = $event$$255_indexes$$7$$.keys;
    if (null != this.$m_root$ && null != $keys$$29$$ && 0 != $keys$$29$$.length) {
      this.$signalTaskStart$();
      $data$$132$$ = $event$$255_indexes$$7$$.data;
      $event$$255_indexes$$7$$ = $event$$255_indexes$$7$$.indexes;
      for ($i$$275$$ = 0;$i$$275$$ < $keys$$29$$.length;$i$$275$$++) {
        $elem$$28$$ = this.$FindElementByKey$($keys$$29$$[$i$$275$$]), null != $elem$$28$$ && (this.$signalTaskStart$(), this.$replaceItem$($elem$$28$$, $event$$255_indexes$$7$$[$i$$275$$], $data$$132$$[$i$$275$$], this.getMetadata($event$$255_indexes$$7$$[$i$$275$$], $keys$$29$$[$i$$275$$], $data$$132$$[$i$$275$$]), this.$afterRenderItemForChangeEvent$.bind(this)), this.$signalTaskEnd$());
      }
      this.$m_widget$.$ClearCache$();
      this.$signalTaskEnd$();
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItemForChangeEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItemForChangeEvent$$($item$$23$$, $context$$84$$) {
    var $self$$118$$ = this;
    this.$signalTaskStart$();
    $$$$18$$($item$$23$$).css("opacity", 0);
    this.$afterRenderItem$($item$$23$$, $context$$84$$);
    null == this.$m_afterReplaceTransitionEndListener$ && (this.$m_afterReplaceTransitionEndListener$ = this.$_handleAfterReplaceTransitionEnd$.bind(this));
    $$$$18$$($item$$23$$).on("transitionend", this.$m_afterReplaceTransitionEndListener$);
    setTimeout(function() {
      $$$$18$$($item$$23$$).addClass("oj-listview-item-add-remove-transition").css("opacity", 1);
      $self$$118$$.$signalTaskEnd$();
    }, 10);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleAfterReplaceTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleAfterReplaceTransitionEnd$$($event$$256$$) {
    $$$$18$$($event$$256$$.target).removeClass("oj-listview-item-add-remove-transition").off("transitionend", this.$m_afterReplaceTransitionEndListener$);
    this.$m_widget$.$restoreCurrentItem$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelResetEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelResetEvent$$() {
    null != this.$m_root$ && (this.$signalTaskStart$(), $$$$18$$(this.$m_root$).empty(), this.$m_widget$.$ClearCache$(), this.$fetchRows$(!0), this.$signalTaskEnd$());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchedData$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchedData$$($dataObj_keys$$30$$) {
    var $data$$133$$;
    null != this.$m_root$ && ($data$$133$$ = $dataObj_keys$$30$$.data, $dataObj_keys$$30$$ = $dataObj_keys$$30$$.keys, Array.isArray($data$$133$$) && Array.isArray($dataObj_keys$$30$$) && $data$$133$$.length == $dataObj_keys$$30$$.length && (this.$_handleFetchSuccess$($data$$133$$, $dataObj_keys$$30$$), this.$fetchEnd$()));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelSyncEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelSyncEvent$$($event$$258$$) {
    null != this.$m_root$ && (this.$signalTaskStart$(), 0 === $event$$258$$.startIndex && $$$$18$$(this.$m_root$).empty(), this.$m_widget$.$ClearCache$(), this.$_handleFetchedData$($event$$258$$), this.$signalTaskEnd$());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelSortEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelSortEvent$$() {
    null != this.$m_root$ && (this.$signalTaskStart$(), $$$$18$$(this.$m_root$).empty(), this.$m_widget$.$ClearCache$(), this.$m_widget$.$_isMultipleSelection$() && this.$m_widget$.$_clearSelection$(!0), this.$fetchRows$(!0), this.$signalTaskEnd$());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$fetchEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$fetchEnd$$() {
    this.$m_fetching$ = !1;
    this.$m_widget$.$renderComplete$();
    this.checkViewport();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.checkViewport = function $$oj$$19$$$$TableDataSourceContentHandler$$$checkViewport$() {
    var $self$$119$$ = this, $fetchPromise$$1$$;
    this.$signalTaskStart$();
    null != this.$m_domScroller$ && 0 < this.$m_dataSource$.totalSize() && this.$IsReady$() && ($fetchPromise$$1$$ = this.$m_domScroller$.checkViewport(), null != $fetchPromise$$1$$ && (this.$signalTaskStart$(), $fetchPromise$$1$$.then(function($result$$48$$) {
      $self$$119$$.$m_domScrollerMaxCountFunc$($result$$48$$);
      $self$$119$$.$signalTaskEnd$();
    }, null)));
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.getMetadata = function $$oj$$19$$$$TableDataSourceContentHandler$$$getMetadata$($index$$130$$, $key$$84$$, $context$$85_data$$134$$) {
    $context$$85_data$$134$$ = $context$$85_data$$134$$.context;
    null == $context$$85_data$$134$$ && ($context$$85_data$$134$$ = {});
    null == $context$$85_data$$134$$.index && ($context$$85_data$$134$$.index = $index$$130$$);
    null == $context$$85_data$$134$$.key && ($context$$85_data$$134$$.key = $key$$84$$);
    return $context$$85_data$$134$$;
  };
  $oj$$19$$.$TreeDataSourceContentHandler$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$($widget$$7$$, $root$$5$$, $data$$135$$) {
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.constructor.call(this, $widget$$7$$, $root$$5$$, $data$$135$$);
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$TreeDataSourceContentHandler$, $oj$$19$$.$DataSourceContentHandler$, "oj.TreeDataSourceContentHandler");
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.Init = function $$oj$$19$$$$TreeDataSourceContentHandler$$$Init$() {
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$IsHierarchical$$() {
    return!0;
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$fetchRows$$() {
    this.$signalTaskStart$();
    this.$fetchChildren$(0, null, this.$m_root$, null);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$fetchChildren$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$fetchChildren$$($range$$7_start$$37$$, $parent$$15$$, $parentElem$$, $successCallback$$25$$) {
    this.$signalTaskStart$();
    this.$m_fetching$ = !0;
    $range$$7_start$$37$$ = {start:$range$$7_start$$37$$, count:this.$m_dataSource$.$getChildCount$($parent$$15$$)};
    this.$m_dataSource$.$fetchChildren$($parent$$15$$, $range$$7_start$$37$$, {success:function($nodeSet$$) {
      this.$_handleFetchSuccess$($nodeSet$$, $parent$$15$$, $parentElem$$, $successCallback$$25$$);
    }.bind(this), error:function($status$$15$$) {
      this.$_handleFetchError$($status$$15$$);
    }.bind(this)});
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$_handleFetchSuccess$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$_handleFetchSuccess$$($nodeSet$$1$$, $parent$$16_start$$38$$, $parentElem$$1$$, $successCallback$$26$$) {
    var $count$$36$$, $i$$276$$, $data$$136$$, $metadata$$5$$;
    this.$signalTaskStart$();
    $parent$$16_start$$38$$ = $nodeSet$$1$$.$getStart$();
    $count$$36$$ = $nodeSet$$1$$.$getCount$();
    for ($i$$276$$ = 0;$i$$276$$ < $count$$36$$;$i$$276$$++) {
      $data$$136$$ = $nodeSet$$1$$.getData($parent$$16_start$$38$$ + $i$$276$$), $metadata$$5$$ = $nodeSet$$1$$.getMetadata($parent$$16_start$$38$$ + $i$$276$$), this.$addItem$($parentElem$$1$$, $parent$$16_start$$38$$ + $i$$276$$, $data$$136$$, $metadata$$5$$);
    }
    this.$m_fetching$ = !1;
    null != $successCallback$$26$$ && $successCallback$$26$$.call(null, $parentElem$$1$$);
    this.$m_widget$.$renderComplete$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$afterRenderItem$$($item$$26$$, $context$$86$$) {
    var $groupStyleClass$$, $content$$19_itemStyleClass$$3$$, $groupItemStyleClass_icon$$1$$, $groupCollapseStyleClass$$, $focusedStyleClass$$, $collapseClass_groupItem$$;
    this.$signalTaskStart$();
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.$afterRenderItem$.call(this, $item$$26$$, $context$$86$$);
    $groupStyleClass$$ = this.$m_widget$.$getGroupStyleClass$();
    $content$$19_itemStyleClass$$3$$ = this.$m_widget$.$getItemStyleClass$();
    $groupItemStyleClass_icon$$1$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $groupCollapseStyleClass$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $collapseClass_groupItem$$ = this.$m_widget$.$getCollapseIconStyleClass$();
    $focusedStyleClass$$ = this.$m_widget$.$getFocusedElementStyleClass$();
    $item$$26$$ = $$$$18$$($item$$26$$);
    !1 == $context$$86$$.leaf ? ($item$$26$$.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e"), $item$$26$$.hasClass($focusedStyleClass$$) ? $item$$26$$.removeClass($focusedStyleClass$$).children().first().addClass($focusedStyleClass$$).attr("aria-expanded", "false") : $item$$26$$.children().first().attr("role", "presentation").find("." + $focusedStyleClass$$).attr("aria-expanded", "false"), $content$$19_itemStyleClass$$3$$ = $item$$26$$.children().first(), $content$$19_itemStyleClass$$3$$.uniqueId().addClass($groupItemStyleClass_icon$$1$$), 
    this.$m_widget$.$isExpandable$() && ($item$$26$$.addClass("oj-collapsed"), $groupItemStyleClass_icon$$1$$ = document.createElement("a"), $$$$18$$($groupItemStyleClass_icon$$1$$).attr("href", "#").attr("aria-labelledby", $content$$19_itemStyleClass$$3$$.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass($collapseClass_groupItem$$), $content$$19_itemStyleClass$$3$$.prepend($groupItemStyleClass_icon$$1$$)), $collapseClass_groupItem$$ = document.createElement("ul"), $$$$18$$($collapseClass_groupItem$$).addClass($groupStyleClass$$).addClass($groupCollapseStyleClass$$).attr("role", 
    "group"), $item$$26$$.append($collapseClass_groupItem$$)) : !0 == $context$$86$$.leaf && $item$$26$$.addClass($content$$19_itemStyleClass$$3$$);
    this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$86$$) && this.$m_widget$.$getFocusItem$($item$$26$$).attr("aria-selected", !1);
    this.$m_widget$.$itemRenderComplete$($item$$26$$[0], $context$$86$$);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$_handleFetchError$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$_handleFetchError$$($status$$16$$) {
    this.$signalTaskStart$();
    $oj$$19$$.$Logger$.error($status$$16$$);
    this.$m_widget$.$renderComplete$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$Expand$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$Expand$$($item$$27$$, $successCallback$$27$$) {
    var $parentKey$$, $parentElem$$2$$;
    this.$signalTaskStart$();
    $parentKey$$ = this.$GetKey$($item$$27$$[0]);
    $parentElem$$2$$ = $item$$27$$.children("ul")[0];
    this.$fetchChildren$(0, $parentKey$$, $parentElem$$2$$, $successCallback$$27$$);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$Collapse$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$Collapse$$($item$$28$$) {
    $item$$28$$.empty();
  };
  $oj$$19$$.$StaticContentHandler$ = function $$oj$$19$$$$StaticContentHandler$$($widget$$8$$, $root$$6$$) {
    this.$m_widget$ = $widget$$8$$;
    this.$m_root$ = $root$$6$$;
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$StaticContentHandler$, $oj$$19$$.$Object$, "oj.StaticContentHandler");
  $oj$$19$$.$StaticContentHandler$.prototype.Init = function $$oj$$19$$$$StaticContentHandler$$$Init$() {
    $oj$$19$$.$StaticContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$StaticContentHandler$$$$Destroy$$() {
    this.$restoreContent$(this.$m_root$, 0);
    this.$unsetRootAriaProperties$();
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$IsReady$ = function $$oj$$19$$$$StaticContentHandler$$$$IsReady$$() {
    return!0;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.HandleResize = function $$oj$$19$$$$StaticContentHandler$$$HandleResize$() {
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$RenderContent$ = function $$oj$$19$$$$StaticContentHandler$$$$RenderContent$$() {
    this.$modifyContent$(this.$m_root$, 0);
    this.$setRootAriaProperties$();
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Expand$ = function $$oj$$19$$$$StaticContentHandler$$$$Expand$$($item$$29$$, $successCallback$$28$$) {
    var $groupItem$$1_selector$$25$$;
    $groupItem$$1_selector$$25$$ = "." + this.$m_widget$.$getGroupStyleClass$();
    $groupItem$$1_selector$$25$$ = $$$$18$$($item$$29$$).children($groupItem$$1_selector$$25$$)[0];
    $$$$18$$($groupItem$$1_selector$$25$$).css("display", "block");
    $successCallback$$28$$.call(null, $groupItem$$1_selector$$25$$);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Collapse$ = function $$oj$$19$$$$StaticContentHandler$$$$Collapse$$() {
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$StaticContentHandler$$$$IsHierarchical$$() {
    null == this.$m_hier$ && (this.$m_hier$ = 0 < $$$$18$$(this.$m_root$).children("li").children("ul").length);
    return this.$m_hier$;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$restoreContent$ = function $$oj$$19$$$$StaticContentHandler$$$$restoreContent$$($elem$$29$$, $depth$$9$$) {
    var $groupStyleClass$$1$$, $groupCollapseStyleClass$$1$$, $groupExpandStyleClass$$, $groupItemStyleClass$$1$$, $itemStyleClass$$4$$, $itemElementStyleClass$$, $items$$, $i$$277$$, $groupItem$$2_item$$31$$, $groupItems$$;
    $groupStyleClass$$1$$ = this.$m_widget$.$getGroupStyleClass$();
    $groupCollapseStyleClass$$1$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $groupExpandStyleClass$$ = this.$m_widget$.$getGroupExpandStyleClass$();
    $groupItemStyleClass$$1$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $itemStyleClass$$4$$ = this.$m_widget$.$getItemStyleClass$();
    $itemElementStyleClass$$ = this.$m_widget$.$getItemElementStyleClass$();
    $items$$ = $elem$$29$$.children;
    for ($i$$277$$ = 0;$i$$277$$ < $items$$.length;$i$$277$$++) {
      $groupItem$$2_item$$31$$ = $items$$[$i$$277$$], this.$unsetAriaProperties$($groupItem$$2_item$$31$$), $groupItem$$2_item$$31$$ = $$$$18$$($groupItem$$2_item$$31$$), $groupItem$$2_item$$31$$.removeClass($itemElementStyleClass$$).removeClass($itemStyleClass$$4$$).removeClass(this.$m_widget$.$getDepthStyleClass$($depth$$9$$)).removeClass("oj-skipfocus").removeClass("oj-focus").removeClass("oj-hover").removeClass("oj-expanded").removeClass("oj-collapsed").removeClass("oj-selected"), $groupItems$$ = 
      $groupItem$$2_item$$31$$.children("ul"), 0 < $groupItems$$.length && ($groupItem$$2_item$$31$$.children("." + $groupItemStyleClass$$1$$).children().unwrap(), $groupItem$$2_item$$31$$.children(".oj-component-icon").remove(), $groupItem$$2_item$$31$$ = $$$$18$$($groupItems$$[0]), $groupItem$$2_item$$31$$.removeClass($groupStyleClass$$1$$).removeClass($groupExpandStyleClass$$).removeClass($groupCollapseStyleClass$$1$$).removeAttr("role"), this.$restoreContent$($groupItem$$2_item$$31$$[0], $depth$$9$$ + 
      1));
    }
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$modifyContent$ = function $$oj$$19$$$$StaticContentHandler$$$$modifyContent$$($elem$$30$$, $depth$$10$$) {
    var $itemStyleClass$$5$$, $itemElementStyleClass$$1$$, $groupStyleClass$$2$$, $groupItemStyleClass$$2$$, $groupCollapseStyleClass$$2$$, $collapseClass$$1$$, $focusedElementStyleClass$$, $items$$1$$, $expandable$$, $i$$278$$, $item$$32$$, $context$$87$$, $groupItem$$3_groupItems$$1$$, $content$$20$$, $icon$$2$$;
    $itemStyleClass$$5$$ = this.$m_widget$.$getItemStyleClass$();
    $itemElementStyleClass$$1$$ = this.$m_widget$.$getItemElementStyleClass$();
    $groupStyleClass$$2$$ = this.$m_widget$.$getGroupStyleClass$();
    $groupItemStyleClass$$2$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $groupCollapseStyleClass$$2$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $collapseClass$$1$$ = this.$m_widget$.$getCollapseIconStyleClass$();
    $focusedElementStyleClass$$ = this.$m_widget$.$getFocusedElementStyleClass$();
    $items$$1$$ = $elem$$30$$.children;
    $expandable$$ = this.$m_widget$.$isExpandable$();
    for ($i$$278$$ = 0;$i$$278$$ < $items$$1$$.length;$i$$278$$++) {
      $item$$32$$ = $$$$18$$($items$$1$$[$i$$278$$]), $context$$87$$ = this.$createContext$($item$$32$$), this.$setAriaProperties$($item$$32$$), $item$$32$$.uniqueId().addClass($itemElementStyleClass$$1$$), 0 < $depth$$10$$ && $item$$32$$.addClass(this.$m_widget$.$getDepthStyleClass$($depth$$10$$)), this.$isFocusable$($context$$87$$) || $item$$32$$.addClass("oj-skipfocus"), $groupItem$$3_groupItems$$1$$ = $item$$32$$.children("ul"), 0 < $groupItem$$3_groupItems$$1$$.length ? (this.$m_hier$ = !0, 
      $item$$32$$.children(":not(ul)").wrapAll("\x3cdiv\x3e\x3c/div\x3e"), $content$$20$$ = $item$$32$$.children().first(), $content$$20$$.addClass($groupItemStyleClass$$2$$), this.$hasChildren$($groupItem$$3_groupItems$$1$$[0]) && ($item$$32$$.hasClass($focusedElementStyleClass$$) ? ($item$$32$$.removeClass($focusedElementStyleClass$$), $content$$20$$.addClass($focusedElementStyleClass$$).attr("aria-expanded", "false")) : ($content$$20$$.attr("role", "presentation"), $content$$20$$.find("." + $focusedElementStyleClass$$).attr("aria-expanded", 
      "false")), $expandable$$ && ($item$$32$$.addClass("oj-collapsed"), $content$$20$$.uniqueId(), $icon$$2$$ = document.createElement("a"), $$$$18$$($icon$$2$$).attr("href", "#").attr("role", "button").attr("aria-labelledby", $content$$20$$.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass($collapseClass$$1$$), $content$$20$$.prepend($icon$$2$$))), $groupItem$$3_groupItems$$1$$ = $$$$18$$($groupItem$$3_groupItems$$1$$[0]), $groupItem$$3_groupItems$$1$$.addClass($groupStyleClass$$2$$).addClass($groupCollapseStyleClass$$2$$).attr("role", 
      "group").css("display", "none"), this.$modifyContent$($groupItem$$3_groupItems$$1$$[0], $depth$$10$$ + 1)) : $item$$32$$.addClass($itemStyleClass$$5$$), this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$87$$) && this.$m_widget$.$getFocusItem$($item$$32$$).attr("aria-selected", !1), this.$m_widget$.$itemRenderComplete$($item$$32$$[0], $context$$87$$);
    }
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$setRootAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$setRootAriaProperties$$() {
    this.$IsHierarchical$() ? this.$m_root$.setAttribute("role", "tree") : this.$m_root$.setAttribute("role", "listbox");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$unsetRootAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$unsetRootAriaProperties$$() {
    this.$m_root$.removeAttribute("role");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$hasChildren$ = function $$oj$$19$$$$StaticContentHandler$$$$hasChildren$$($item$$33$$) {
    return 0 < $$$$18$$($item$$33$$).children("li").length;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$createContext$ = function $$oj$$19$$$$StaticContentHandler$$$$createContext$$($item$$34_parents$$3$$) {
    var $context$$88$$;
    $context$$88$$ = {};
    $context$$88$$.key = $item$$34_parents$$3$$.attr("id");
    $context$$88$$.parentElement = $item$$34_parents$$3$$.children().first()[0];
    $context$$88$$.index = $item$$34_parents$$3$$.index();
    $context$$88$$.data = $item$$34_parents$$3$$[0];
    $context$$88$$.component = this.$m_widget$.$getWidgetConstructor$();
    this.$IsHierarchical$() && ($context$$88$$.leaf = 0 == $item$$34_parents$$3$$.children("ul").length, $item$$34_parents$$3$$ = $item$$34_parents$$3$$.parents("li." + this.$m_widget$.$getItemElementStyleClass$()), $context$$88$$.depth = $item$$34_parents$$3$$.length, $context$$88$$.parentKey = 0 == $item$$34_parents$$3$$.length ? null : $item$$34_parents$$3$$.first().attr("id"));
    return $context$$88$$;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$setAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$setAriaProperties$$($item$$35$$) {
    var $elem$$31$$ = this.$m_widget$.$getSingleFocusableElement$($item$$35$$);
    $elem$$31$$.attr("role", this.$IsHierarchical$() ? "treeitem" : "option");
    $elem$$31$$ != $item$$35$$ && $item$$35$$.attr("role", "presentation");
    $elem$$31$$.addClass(this.$m_widget$.$getFocusedElementStyleClass$());
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$unsetAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$unsetAriaProperties$$($elem$$32_item$$36$$) {
    $elem$$32_item$$36$$ = this.$m_widget$.$getSingleFocusableElement$($$$$18$$($elem$$32_item$$36$$));
    $elem$$32_item$$36$$.removeAttr("role");
    $elem$$32_item$$36$$.removeAttr("aria-selected");
    $elem$$32_item$$36$$.removeAttr("aria-expanded");
    $elem$$32_item$$36$$.removeClass(this.$m_widget$.$getFocusedElementStyleClass$());
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$GetKey$ = function $$oj$$19$$$$StaticContentHandler$$$$GetKey$$($element$$107$$) {
    return $$$$18$$($element$$107$$).attr("id");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$FindElementByKey$ = function $$oj$$19$$$$StaticContentHandler$$$$FindElementByKey$$($key$$85$$) {
    return document.getElementById($key$$85$$);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$isFocusable$ = function $$oj$$19$$$$StaticContentHandler$$$$isFocusable$$($context$$90$$) {
    return this.$m_widget$.$_getItemOption$("focusable", $context$$90$$, !0);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$isSelectable$ = function $$oj$$19$$$$StaticContentHandler$$$$isSelectable$$($context$$91$$) {
    return this.$m_widget$.$_getItemOption$("selectable", $context$$91$$, !0);
  };
  $oj$$19$$.$_ojListView$ = function($SuperClass$$1$$, $methods$$2$$) {
    function $constructor$$2$$() {
    }
    $oj$$19$$.$Object$.$createSubclass$($constructor$$2$$, $SuperClass$$1$$, "");
    $constructor$$2$$.prototype = $$$$18$$.extend($constructor$$2$$.prototype, $methods$$2$$);
    return $constructor$$2$$;
  }(Object, {$LEFT_KEY$:37, $RIGHT_KEY$:39, $DOWN_KEY$:40, $UP_KEY$:38, $TAB_KEY$:9, $ENTER_KEY$:13, $ESC_KEY$:27, $F2_KEY$:113, $SPACE_KEY$:32, $STATE_EXPANDED$:0, $STATE_COLLAPSED$:1, $STATE_NONE$:2, $FOCUS_MODE_LIST$:0, $FOCUS_MODE_ITEM$:1, $init$:function($opts$$19$$) {
    var $self$$120$$ = this;
    this.$readinessStack$ = [];
    this.$signalTaskStart$();
    this.$ojContext$ = $opts$$19$$.$ojContext$;
    this.element = $opts$$19$$.element;
    this.options = $opts$$19$$;
    this.element.uniqueId().addClass(this.$GetStyleClass$() + " oj-component-initnode").attr("tabIndex", 0);
    this.$ojContext$._on(this.element, {click:function($event$$260$$) {
      $self$$120$$.$HandleMouseClick$($event$$260$$);
    }, touchstart:function($event$$261$$) {
      $self$$120$$.$HandleMouseDownOrTouchStart$($event$$261$$);
    }, touchend:function($event$$262$$) {
      $self$$120$$.$HandleTouchEndOrCancel$($event$$262$$);
    }, touchcancel:function($event$$263$$) {
      $self$$120$$.$HandleTouchEndOrCancel$($event$$263$$);
    }, mousedown:function($event$$264$$) {
      0 !== $event$$264$$.button || $self$$120$$.$_recentTouch$() || $self$$120$$.$HandleMouseDownOrTouchStart$($event$$264$$);
    }, mouseup:function($event$$265$$) {
      $self$$120$$.$_handleMouseUpOrPanMove$($event$$265$$);
      $self$$120$$.$m_preActive$ = !1;
    }, mouseout:function($event$$266$$) {
      $self$$120$$.$_handleMouseOut$($event$$266$$);
    }, mouseover:function($event$$267$$) {
      $self$$120$$.$_handleMouseOver$($event$$267$$);
    }, keydown:function($event$$268$$) {
      $self$$120$$.$HandleKeyDown$($event$$268$$);
    }, focus:function($event$$269$$) {
      $self$$120$$.$HandleFocus$($event$$269$$);
    }, blur:function($event$$270$$) {
      $self$$120$$.$HandleBlur$($event$$270$$);
    }, ojpanmove:function($event$$271$$) {
      $self$$120$$.$_handleMouseUpOrPanMove$($event$$271$$);
    }});
    $oj$$19$$.$AgentUtils$.$getAgentInfo$().browser === $oj$$19$$.$AgentUtils$.$BROWSER$.$FIREFOX$ && this.$ojContext$._on(this.$_getListContainer$(), {focus:function() {
      $self$$120$$.element.focus();
    }});
    this.$FOCUS_MODE_ITEM$ === this.$FOCUS_MODE_ITEM$ ? this.$ojContext$._on(this.element, {focusin:function($event$$273$$) {
      $self$$120$$.$HandleFocus$($event$$273$$);
    }, focusout:function($event$$274$$) {
      $self$$120$$.$HandleFocusOut$($event$$274$$);
    }}) : this.$ojContext$._on(this.element, {focus:function($event$$275$$) {
      $self$$120$$.$HandleFocus$($event$$275$$);
    }, blur:function($event$$276$$) {
      $self$$120$$.$HandleBlur$($event$$276$$);
    }});
    this.$ojContext$.document.bind("touchend.ojlistview touchcancel.ojlistview", this.$HandleTouchEndOrCancel$.bind(this));
    this.$_registerScrollHandler$();
  }, $afterCreate$:function() {
    var $container$$20$$;
    this.$_buildList$();
    this.$_initContentHandler$();
    $container$$20$$ = this.$_getListContainer$();
    this.$_registerResizeListener$($container$$20$$[0]);
    this.$signalTaskEnd$();
  }, refresh:function() {
    this.$_resetInternal$();
    this.$signalTaskStart$();
    this.$SetAriaProperties$();
    this.$_initContentHandler$();
    this.$_registerScrollHandler$();
    this.$signalTaskEnd$();
  }, whenReady:function() {
    return this.$readyPromise$;
  }, destroy:function() {
    this.element.removeClass(this.$GetStyleClass$() + " oj-component-initnode");
    this.$_unregisterResizeListener$(this.$_getListContainer$());
    this.$_resetInternal$();
    $oj$$19$$.$DomUtils$.unwrap(this.element, this.$_getListContainer$());
    this.$ojContext$.document.off(".ojlistview");
  }, $_resetInternal$:function() {
    var $self$$121$$ = this;
    this.$UnsetAriaProperties$();
    this.$_cleanupTabbableElementProperties$(this.element);
    null != this.$m_contentHandler$ && (this.$m_contentHandler$.$Destroy$(), this.$m_contentHandler$ = null);
    this.$m_active$ = null;
    this.$readinessStack$ = [];
    this.$readyPromise$ = new Promise(function($resolve$$30$$) {
      $self$$121$$.$readyResolve$ = $resolve$$30$$;
    });
    this.$ClearCache$();
  }, $notifyDetached$:function() {
    this.$_getListContainer$().removeClass("oj-focus-ancestor");
    null != this.$m_active$ && $$$$18$$(this.$m_active$.elem).removeClass("oj-focus");
    null != this.$m_hoverItem$ && this.$_unhighlightElem$(this.$m_hoverItem$, "oj-hover");
  }, $notifyShown$:function() {
  }, getNodeBySubId:function($anchor$$1_item$$37_key$$86_locator$$26$$) {
    var $subId$$31$$;
    if (null == $anchor$$1_item$$37_key$$86_locator$$26$$) {
      return this.element ? this.element[0] : null;
    }
    $subId$$31$$ = $anchor$$1_item$$37_key$$86_locator$$26$$.subId;
    if ("oj-listview-disclosure" === $subId$$31$$ || "oj-listview-icon" === $subId$$31$$) {
      if ($anchor$$1_item$$37_key$$86_locator$$26$$ = $anchor$$1_item$$37_key$$86_locator$$26$$.key, $anchor$$1_item$$37_key$$86_locator$$26$$ = this.$FindElementByKey$($anchor$$1_item$$37_key$$86_locator$$26$$), null != $anchor$$1_item$$37_key$$86_locator$$26$$ && $anchor$$1_item$$37_key$$86_locator$$26$$.firstElementChild && ($anchor$$1_item$$37_key$$86_locator$$26$$ = $anchor$$1_item$$37_key$$86_locator$$26$$.firstElementChild.firstElementChild, null != $anchor$$1_item$$37_key$$86_locator$$26$$ && 
      ($$$$18$$($anchor$$1_item$$37_key$$86_locator$$26$$).hasClass(this.$getExpandIconStyleClass$()) || $$$$18$$($anchor$$1_item$$37_key$$86_locator$$26$$).hasClass(this.$getCollapseIconStyleClass$())))) {
        return $anchor$$1_item$$37_key$$86_locator$$26$$;
      }
    }
    return null;
  }, getSubIdByNode:function($item$$38_key$$87_node$$68$$) {
    if (null != $item$$38_key$$87_node$$68$$ && $$$$18$$($item$$38_key$$87_node$$68$$).hasClass(this.$getExpandIconStyleClass$()) || $$$$18$$($item$$38_key$$87_node$$68$$).hasClass(this.$getCollapseIconStyleClass$())) {
      if ($item$$38_key$$87_node$$68$$ = this.$FindItem$($item$$38_key$$87_node$$68$$), null != $item$$38_key$$87_node$$68$$ && 0 < $item$$38_key$$87_node$$68$$.length && ($item$$38_key$$87_node$$68$$ = this.$GetKey$($item$$38_key$$87_node$$68$$[0]), null != $item$$38_key$$87_node$$68$$)) {
        return{subId:"oj-listview-disclosure", key:$item$$38_key$$87_node$$68$$};
      }
    }
    return null;
  }, getContextByNode:function($item$$39_node$$69$$) {
    var $context$$92_key$$88$$, $parent$$17$$, $index$$131$$;
    $item$$39_node$$69$$ = this.$FindItem$($item$$39_node$$69$$);
    return null != $item$$39_node$$69$$ && 0 < $item$$39_node$$69$$.length && ($context$$92_key$$88$$ = this.$GetKey$($item$$39_node$$69$$[0]), null != $context$$92_key$$88$$) ? ($parent$$17$$ = $item$$39_node$$69$$.parent(), $index$$131$$ = $parent$$17$$.children("li").index($item$$39_node$$69$$), $context$$92_key$$88$$ = {subId:"oj-listview-item", key:$context$$92_key$$88$$, index:$index$$131$$}, $parent$$17$$.get(0) != this.element.get(0) && ($context$$92_key$$88$$.parent = $parent$$17$$.parent().get(0)), 
    $item$$39_node$$69$$.children().first().hasClass(this.$getGroupItemStyleClass$()) ? $context$$92_key$$88$$.group = !0 : $context$$92_key$$88$$.group = !1, $context$$92_key$$88$$) : null;
  }, $_unregisterResizeListener$:function($element$$108$$) {
    $element$$108$$ && this.$_resizeHandler$ && $oj$$19$$.$DomUtils$.$removeResizeListener$($element$$108$$, this.$_resizeHandler$);
  }, $_registerResizeListener$:function($element$$109$$) {
    $element$$109$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$19$$.$DomUtils$.$addResizeListener$($element$$109$$, this.$_resizeHandler$));
  }, $_handleResize$:function($width$$25$$, $height$$22$$) {
    0 < $width$$25$$ && 0 < $height$$22$$ && null != this.$m_contentHandler$ && this.$m_contentHandler$.HandleResize($width$$25$$, $height$$22$$);
  }, $ShouldRefresh$:function($options$$258$$) {
    return null != $options$$258$$.data || null != $options$$258$$.drillMode || null != $options$$258$$.groupHeaderPosition || null != $options$$258$$.item || null != $options$$258$$.scrollPolicy || null != $options$$258$$.scrollPolicyOptions;
  }, $setOptions$:function($options$$259$$) {
    var $self$$122$$, $elem$$33_expanded$$1$$, $selection$$6$$, $i$$279$$;
    if (this.$ShouldRefresh$($options$$259$$)) {
      return null != $options$$259$$.data && (null == $options$$259$$.currentItem && this.$SetOption$("currentItem", null), null == $options$$259$$.selection && this.$_clearSelection$(!0)), !0;
    }
    null != $options$$259$$.currentItem ? ($elem$$33_expanded$$1$$ = this.$FindElementByKey$($options$$259$$.currentItem), null != $elem$$33_expanded$$1$$ && ($elem$$33_expanded$$1$$ = $$$$18$$($elem$$33_expanded$$1$$), this.$SkipFocus$($elem$$33_expanded$$1$$) || this.$_activeAndFocus$($elem$$33_expanded$$1$$, null))) : null === $options$$259$$.currentItem && (this.$UnhighlightActive$(), this.$m_active$ = null);
    null != $options$$259$$.expanded && this.$m_contentHandler$.$IsHierarchical$() && ($elem$$33_expanded$$1$$ = $options$$259$$.expanded, Array.isArray($elem$$33_expanded$$1$$) && (this.$signalTaskStart$(), this.$_collapseAll$(), $self$$122$$ = this, $$$$18$$.each($elem$$33_expanded$$1$$, function($index$$132$$, $value$$239$$) {
      $self$$122$$.$expandKey$($value$$239$$, !0, !0, !0);
    }), this.$signalTaskEnd$()));
    if (null != $options$$259$$.selection && this.$_isSelectionEnabled$()) {
      for ($options$$259$$.selection = this.$_filterSelection$($options$$259$$.selection), $selection$$6$$ = $options$$259$$.selection, this.$_clearSelection$(!1), $i$$279$$ = 0;$i$$279$$ < $selection$$6$$.length;$i$$279$$++) {
        $elem$$33_expanded$$1$$ = this.$FindElementByKey$($selection$$6$$[$i$$279$$]), null != $elem$$33_expanded$$1$$ && this.$_applySelection$($elem$$33_expanded$$1$$, $selection$$6$$[$i$$279$$]);
      }
    }
    null != $options$$259$$.selectionMode && (this.$_clearSelection$(!0), this.$SetAriaProperties$());
    return!1;
  }, $Trigger$:function($type$$84$$, $event$$277$$, $ui$$9$$) {
    return this.$ojContext$._trigger($type$$84$$, $event$$277$$, $ui$$9$$);
  }, $SetOption$:function($key$$89$$, $value$$240$$, $flags$$27$$) {
    this.$ojContext$.option($key$$89$$, $value$$240$$, $flags$$27$$);
  }, $GetOption$:function($key$$90$$) {
    return this.$ojContext$.option($key$$90$$);
  }, $signalTaskStart$:function() {
    var $self$$123$$ = this;
    this.$readinessStack$ && (0 == this.$readinessStack$.length && (this.$readyPromise$ = new Promise(function($resolve$$31$$) {
      $self$$123$$.$readyResolve$ = $resolve$$31$$;
    })), this.$readinessStack$.push(1));
  }, $signalTaskEnd$:function() {
    this.$readinessStack$ && 0 < this.$readinessStack$.length && (this.$readinessStack$.pop(), 0 == this.$readinessStack$.length && this.$readyResolve$(null));
  }, $_initContentHandler$:function() {
    var $data$$137$$;
    this.$signalTaskStart$();
    $data$$137$$ = this.$GetOption$("data");
    if (null != $data$$137$$) {
      if ("undefined" === typeof $oj$$19$$.$TableDataSource$ || "undefined" === typeof $oj$$19$$.$TreeDataSource$) {
        throw "oj.TableDataSource or oj.TreeDataSource not found. Ensure the required modules are imported";
      }
      if ($data$$137$$ instanceof $oj$$19$$.$TableDataSource$) {
        this.$m_contentHandler$ = new $oj$$19$$.$TableDataSourceContentHandler$(this, this.element[0], $data$$137$$);
      } else {
        if ($data$$137$$ instanceof $oj$$19$$.$TreeDataSource$) {
          this.$m_contentHandler$ = new $oj$$19$$.$TreeDataSourceContentHandler$(this, this.element[0], $data$$137$$);
        } else {
          throw "Invalid data";
        }
      }
    } else {
      this.$m_contentHandler$ = new $oj$$19$$.$StaticContentHandler$(this, this.element[0]);
    }
    this.$_showStatusText$();
    this.$m_contentHandler$.$RenderContent$();
    this.$signalTaskEnd$();
  }, $UpdateActiveDescendant$:function($elem$$34$$) {
    this.element.attr("aria-activedescendant", $elem$$34$$.attr("id"));
  }, $SetAriaProperties$:function() {
    this.element.attr("aria-activedescendant", "");
    this.$_isMultipleSelection$() ? this.element.attr("aria-multiselectable", !0) : this.$_isSelectionEnabled$() && this.element.attr("aria-multiselectable", !1);
  }, $UnsetAriaProperties$:function() {
    this.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable");
  }, $_buildList$:function() {
    var $container$$21$$, $status$$17$$;
    $container$$21$$ = this.$_getListContainer$();
    this.$SetAriaProperties$();
    $status$$17$$ = this.$_buildStatus$();
    $container$$21$$.append($status$$17$$);
    this.$m_status$ = $status$$17$$;
  }, $_buildStatus$:function() {
    var $root$$8$$ = $$$$18$$(document.createElement("div"));
    $root$$8$$.addClass("oj-listview-status").attr({id:this.$_createSubId$("status"), role:"status"});
    return $root$$8$$;
  }, $_showStatusText$:function() {
    var $msg$$23$$ = this.$ojContext$.$getTranslatedString$("msgFetchingData");
    this.$m_status$.text($msg$$23$$).show();
  }, $_hideStatusText$:function() {
    this.$m_status$.hide();
  }, $getRootElement$:function() {
    return this.$_getListContainer$();
  }, $_getListContainer$:function() {
    null == this.$m_container$ && (this.$m_container$ = this.$_createListContainer$());
    return this.$m_container$;
  }, $_createListContainer$:function() {
    var $listContainer$$ = $$$$18$$(document.createElement("div"));
    $listContainer$$.addClass(this.$GetContainerStyleClass$()).addClass("oj-component");
    this.element.parent()[0].replaceChild($listContainer$$[0], this.element[0]);
    $listContainer$$.prepend(this.element);
    return $listContainer$$;
  }, $_getEmptyText$:function() {
    return this.$ojContext$.$getTranslatedString$("msgNoData");
  }, $_buildEmptyText$:function() {
    var $emptyText$$, $empty$$;
    $emptyText$$ = this.$_getEmptyText$();
    $empty$$ = document.createElement("li");
    $empty$$.id = this.$_createSubId$("empty");
    $empty$$.className = "oj-listview-empty-text";
    $empty$$.textContent = $emptyText$$;
    return $empty$$;
  }, $GetState$:function($expanded$$2_item$$40$$) {
    $expanded$$2_item$$40$$ = this.$getFocusItem$($expanded$$2_item$$40$$).attr("aria-expanded");
    return "true" == $expanded$$2_item$$40$$ ? this.$STATE_EXPANDED$ : "false" == $expanded$$2_item$$40$$ ? this.$STATE_COLLAPSED$ : this.$STATE_NONE$;
  }, $SetState$:function($item$$41$$, $state$$5$$) {
    var $expandable$$1$$ = this.$isExpandable$();
    $state$$5$$ == this.$STATE_EXPANDED$ ? (this.$getFocusItem$($item$$41$$).attr("aria-expanded", "true"), $expandable$$1$$ && $item$$41$$.removeClass("oj-collapsed").addClass("oj-expanded")) : $state$$5$$ == this.$STATE_COLLAPSED$ && (this.$getFocusItem$($item$$41$$).attr("aria-expanded", "false"), $expandable$$1$$ && $item$$41$$.removeClass("oj-expanded").addClass("oj-collapsed"));
  }, $_getItemOption$:function($name$$109_value$$241$$, $context$$93$$, $resolve$$32$$) {
    $name$$109_value$$241$$ = this.options.item[$name$$109_value$$241$$];
    return "function" == typeof $name$$109_value$$241$$ && $resolve$$32$$ ? $name$$109_value$$241$$.call(this, $context$$93$$) : $name$$109_value$$241$$;
  }, $_getItemRenderer$:function() {
    var $renderer$$1$$ = this.$_getItemOption$("renderer", null, !1);
    return "function" != typeof $renderer$$1$$ ? null : $renderer$$1$$;
  }, $itemInsertComplete$:function() {
  }, $itemRemoveComplete$:function($elem$$36$$) {
    var $prop$$63$$;
    if (null != $elem$$36$$ && $elem$$36$$.id && null != this.$m_keyElemMap$) {
      for ($prop$$63$$ in this.$m_keyElemMap$) {
        if (this.$m_keyElemMap$.hasOwnProperty($prop$$63$$) && this.$m_keyElemMap$[$prop$$63$$] === $elem$$36$$.id) {
          delete this.$m_keyElemMap$[$prop$$63$$];
          break;
        }
      }
    }
  }, $itemRenderComplete$:function($elem$$37$$, $context$$95$$) {
    var $clone$$2_selection$$7$$, $selectedItems$$2$$, $expanded$$3_i$$280_index$$133$$, $self$$125$$;
    this.$_disableAllTabbableElements$($elem$$37$$);
    if (this.$_isSelectionEnabled$()) {
      if ($clone$$2_selection$$7$$ = this.$GetOption$("selection"), this.$IsSelectable$($elem$$37$$)) {
        for ($expanded$$3_i$$280_index$$133$$ = 0;$expanded$$3_i$$280_index$$133$$ < $clone$$2_selection$$7$$.length;$expanded$$3_i$$280_index$$133$$++) {
          if ($clone$$2_selection$$7$$[$expanded$$3_i$$280_index$$133$$] == $context$$95$$.key && (this.$_applySelection$($elem$$37$$, $clone$$2_selection$$7$$[$expanded$$3_i$$280_index$$133$$]), !this.$_isMultipleSelection$())) {
            1 < $clone$$2_selection$$7$$.length && ($selectedItems$$2$$ = $$$$18$$(this.$FindElementByKey$($context$$95$$.key)), this.$SetOption$("selection", [$context$$95$$.key], {_context:{originalEvent:null, $internalSet$:!0, $extraData$:{items:$selectedItems$$2$$}}, changed:!0}));
            break;
          }
        }
      } else {
        if ($expanded$$3_i$$280_index$$133$$ = $clone$$2_selection$$7$$.indexOf($context$$95$$.key), -1 < $expanded$$3_i$$280_index$$133$$) {
          $clone$$2_selection$$7$$ = $clone$$2_selection$$7$$.slice(0);
          $clone$$2_selection$$7$$.splice($expanded$$3_i$$280_index$$133$$, 1);
          $selectedItems$$2$$ = Array($clone$$2_selection$$7$$.length);
          for ($expanded$$3_i$$280_index$$133$$ = 0;$expanded$$3_i$$280_index$$133$$ < $clone$$2_selection$$7$$.length;$expanded$$3_i$$280_index$$133$$++) {
            $selectedItems$$2$$[$expanded$$3_i$$280_index$$133$$] = this.$FindElementByKey$($clone$$2_selection$$7$$[$expanded$$3_i$$280_index$$133$$]);
          }
          this.$SetOption$("selection", $clone$$2_selection$$7$$, {_context:{originalEvent:null, $internalSet$:!0, $extraData$:{items:$$$$18$$($selectedItems$$2$$)}}, changed:!0});
        }
      }
    }
    this.$m_contentHandler$.$IsHierarchical$() && this.$GetState$($$$$18$$($elem$$37$$)) == this.$STATE_COLLAPSED$ && ($expanded$$3_i$$280_index$$133$$ = this.$GetOption$("expanded"), this.$_isExpandAll$() ? this.$ExpandItem$($$$$18$$($elem$$37$$), null, !1, null, !1, !1, !1) : Array.isArray($expanded$$3_i$$280_index$$133$$) && ($self$$125$$ = this, $$$$18$$.each($expanded$$3_i$$280_index$$133$$, function($index$$134$$, $value$$242$$) {
      $value$$242$$ == $context$$95$$.key && $self$$125$$.$ExpandItem$($$$$18$$($elem$$37$$), null, !1, null, !1, !1, !1);
    })));
    null != this.$m_active$ && $context$$95$$.key == this.$m_active$.key && null != this.$m_active$.elem && $elem$$37$$ != this.$m_active$.elem.get(0) && (this.$m_active$.elem = $$$$18$$($elem$$37$$));
  }, $renderComplete$:function() {
    var $current$$5_elem$$38_empty$$1$$;
    this.$_hideStatusText$();
    $$$$18$$(document.getElementById(this.$_createSubId$("empty"))).remove();
    0 == this.element[0].childElementCount ? ($current$$5_elem$$38_empty$$1$$ = this.$_buildEmptyText$(), this.element.append($current$$5_elem$$38_empty$$1$$)) : (this.$m_items$ = null, $current$$5_elem$$38_empty$$1$$ = this.$GetOption$("currentItem"), null == this.$m_active$ && null != $current$$5_elem$$38_empty$$1$$ && ($current$$5_elem$$38_empty$$1$$ = this.$FindElementByKey$($current$$5_elem$$38_empty$$1$$), null == $current$$5_elem$$38_empty$$1$$ || this.$SkipFocus$($$$$18$$($current$$5_elem$$38_empty$$1$$)) || 
    this.$_activeAndFocus$($$$$18$$($current$$5_elem$$38_empty$$1$$), null)), this.$_getListContainer$().hasClass("oj-focus-ancestor") && null == this.$m_active$ && this.$_initFocus$());
    this.$Trigger$("ready", null, {});
  }, $restoreCurrentItem$:function() {
    var $current$$6_elem$$39$$ = this.$GetOption$("currentItem");
    null != $current$$6_elem$$39$$ && ($current$$6_elem$$39$$ = this.$FindElementByKey$($current$$6_elem$$39$$), null == $current$$6_elem$$39$$ || this.$SkipFocus$($$$$18$$($current$$6_elem$$39$$)) || this.$_activeAndFocus$($$$$18$$($current$$6_elem$$39$$), null));
  }, $ClearCache$:function() {
    this.$m_groupItems$ = this.$m_items$ = null;
  }, $notifyContextMenuGesture$:function($menu$$6_openOptions$$4_parent$$18$$, $event$$278$$, $eventType$$35$$) {
    if (this.$IsNodeEditableOrClickable$($$$$18$$($event$$278$$.target))) {
      return!1;
    }
    $menu$$6_openOptions$$4_parent$$18$$ = $$$$18$$($event$$278$$.target).closest("." + this.$getItemElementStyleClass$());
    0 < $menu$$6_openOptions$$4_parent$$18$$.length && !this.$SkipFocus$($$$$18$$($menu$$6_openOptions$$4_parent$$18$$[0])) && this.$_activeAndFocus$($$$$18$$($menu$$6_openOptions$$4_parent$$18$$[0]), null);
    $menu$$6_openOptions$$4_parent$$18$$ = {launcher:this.element, initialFocus:"menu"};
    "keyboard" === $eventType$$35$$ && ($menu$$6_openOptions$$4_parent$$18$$.position = {my:"start top", at:"start bottom", of:this.$m_active$.elem});
    this.$ojContext$.$_OpenContextMenu$($event$$278$$, $eventType$$35$$, $menu$$6_openOptions$$4_parent$$18$$);
  }, $IsElementEditableOrClickable$:function($node$$70$$) {
    return null != $node$$70$$.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/);
  }, $IsNodeEditableOrClickable$:function($node$$71$$) {
    for (;null != $node$$71$$ && $node$$71$$[0] != this.element[0] && "LI" != $node$$71$$.prop("nodeName");) {
      if (3 != $node$$71$$[0].nodeType) {
        var $tabIndex$$1$$ = $node$$71$$.attr("tabIndex"), $origTabIndex$$ = $node$$71$$.attr("data-oj-tabindex");
        if (null != $tabIndex$$1$$ && 0 <= $tabIndex$$1$$ && !$node$$71$$.hasClass(this.$getFocusedElementStyleClass$()) || this.$IsElementEditableOrClickable$($node$$71$$) && (-1 != $tabIndex$$1$$ || -1 != $origTabIndex$$)) {
          return!0;
        }
      }
      $node$$71$$ = $node$$71$$.parent();
    }
    return!1;
  }, $_disableAllTabbableElements$:function($element$$110$$) {
    var $tabIndex$$2$$;
    $$$$18$$($element$$110$$).find("a, input, select, textarea, button, object, .oj-component-initnode").each(function() {
      $$$$18$$(this).removeAttr("data-first").removeAttr("data-last");
      $tabIndex$$2$$ = parseInt($$$$18$$(this).attr("tabIndex"), 10);
      (isNaN($tabIndex$$2$$) || 0 <= $tabIndex$$2$$) && $$$$18$$(this).attr("tabIndex", -1).attr("data-tabmod", isNaN($tabIndex$$2$$) ? -1 : $tabIndex$$2$$);
    });
  }, $_enableAllTabbableElements$:function($elem$$40_elems$$) {
    var $tabIndex$$3$$;
    $elem$$40_elems$$ = $$$$18$$($elem$$40_elems$$).find("[data-tabmod]").each(function() {
      $tabIndex$$3$$ = parseInt($$$$18$$(this).attr("data-tabmod"), 10);
      $$$$18$$(this).removeAttr("data-tabmod");
      -1 == $tabIndex$$3$$ ? $$$$18$$(this).removeAttr("tabIndex") : $$$$18$$(this).attr("tabIndex", $tabIndex$$3$$);
    });
    $elem$$40_elems$$.first().attr("data-first", "true");
    $elem$$40_elems$$.last().attr("data-last", "true");
  }, $_cleanupTabbableElementProperties$:function($elem$$41$$) {
    $$$$18$$($elem$$41$$).find("[data-tabmod]").removeAttr("tabIndex").removeAttr("data-tabmod").removeAttr("data-first").removeAttr("data-last");
  }, $SkipFocus$:function($item$$42$$) {
    return $item$$42$$.hasClass("oj-skipfocus");
  }, $HandleFocus$:function($event$$279$$) {
    this.$_getListContainer$().addClass("oj-focus-ancestor");
    null == this.$m_active$ ? this.$_isTouchSupport$() || this.$m_preActive$ || this.$_initFocus$($event$$279$$) : this.$m_preActive$ || this.$HighlightActive$();
  }, $_initFocus$:function($event$$280$$) {
    var $items$$2$$, $i$$281$$, $item$$44$$;
    $items$$2$$ = this.$_getItemsCache$();
    for ($i$$281$$ = 0;$i$$281$$ < $items$$2$$.length;$i$$281$$++) {
      if ($item$$44$$ = $$$$18$$($items$$2$$[$i$$281$$]), !this.$SkipFocus$($item$$44$$)) {
        this.$_activeAndFocus$($item$$44$$, $event$$280$$);
        break;
      }
    }
  }, $HandleFocusOut$:function($event$$281$$) {
    this.$HandleBlur$($event$$281$$);
  }, $HandleBlur$:function($event$$282$$) {
    null != $event$$282$$.relatedTarget && $$$$18$$.contains(this.element.get(0), $event$$282$$.relatedTarget) || (this.$_getListContainer$().removeClass("oj-focus-ancestor"), this.$UnhighlightActive$());
  }, $_handleMouseOut$:function($event$$283_item$$45$$) {
    $event$$283_item$$45$$ = this.$FindItem$($event$$283_item$$45$$.target);
    null != $event$$283_item$$45$$ && (this.$m_hoverItem$ = null, this.$_unhighlightElem$($event$$283_item$$45$$, "oj-hover"));
  }, $_handleMouseOver$:function($event$$284_item$$46$$) {
    this.$_recentTouch$() || ($event$$284_item$$46$$ = this.$FindItem$($event$$284_item$$46$$.target), null == $event$$284_item$$46$$ || this.$SkipFocus$($event$$284_item$$46$$) || (this.$m_hoverItem$ = $event$$284_item$$46$$, this.$_highlightElem$($event$$284_item$$46$$, "oj-hover")));
  }, $_recentTouch$:function() {
    return 500 > Date.now() - this.$_lastTouch$;
  }, $HandleKeyDown$:function($event$$285$$) {
    var $keyCode$$4$$, $current$$7$$;
    if (this.$isExpandable$() && ($keyCode$$4$$ = $event$$285$$.keyCode, $keyCode$$4$$ === this.$LEFT_KEY$ || $keyCode$$4$$ === this.$RIGHT_KEY$)) {
      if ($current$$7$$ = this.$m_active$.elem, $keyCode$$4$$ === this.$LEFT_KEY$) {
        if (this.$GetState$($current$$7$$) == this.$STATE_EXPANDED$) {
          this.$CollapseItem$($current$$7$$, $event$$285$$, !0, this.$m_active$.key, !0, !0);
          return;
        }
      } else {
        if (this.$GetState$($current$$7$$) == this.$STATE_COLLAPSED$) {
          this.$ExpandItem$($current$$7$$, $event$$285$$, !0, this.$m_active$.key, !0, !0, !0);
          return;
        }
      }
    }
    !0 === this.$HandleSelectionOrActiveKeyDown$($event$$285$$) && $event$$285$$.preventDefault();
  }, $_handleMouseUpOrPanMove$:function() {
    this.$m_preActiveItem$ && this.$_unhighlightElem$(this.$m_preActiveItem$, "oj-focus");
  }, $HandleMouseDownOrTouchStart$:function($event$$287_item$$47$$) {
    this.$m_preActive$ = !0;
    $event$$287_item$$47$$ = this.$_findItem$($$$$18$$($event$$287_item$$47$$.target));
    null == $event$$287_item$$47$$ || 0 == $event$$287_item$$47$$.length || this.$SkipFocus$($event$$287_item$$47$$) || (this.$_getListContainer$().hasClass("oj-focus-ancestor") || this.$_getListContainer$().addClass("oj-focus-ancestor"), this.$m_preActiveItem$ = $event$$287_item$$47$$, this.$_highlightElem$($event$$287_item$$47$$, "oj-focus"));
  }, $HandleTouchEndOrCancel$:function($event$$288$$) {
    null != this.$m_preActiveItem$ && this.$_unhighlightElem$(this.$m_preActiveItem$, "oj-focus");
    this.$_lastTouch$ = Date.now();
    this.$_handleMouseOut$($event$$288$$);
  }, $HandleMouseClick$:function($event$$289$$) {
    var $collapseIconClass_item$$48$$, $expandIconClass$$, $groupItemClass$$, $target$$81$$;
    0 === $event$$289$$.button && ($collapseIconClass_item$$48$$ = this.$getCollapseIconStyleClass$(), $expandIconClass$$ = this.$getExpandIconStyleClass$(), $groupItemClass$$ = this.$getGroupItemStyleClass$(), $target$$81$$ = $$$$18$$($event$$289$$.target), $target$$81$$.hasClass($expandIconClass$$) ? (this.$_collapse$($event$$289$$), $event$$289$$.preventDefault()) : $target$$81$$.hasClass($collapseIconClass_item$$48$$) ? (this.$_expand$($event$$289$$), $event$$289$$.preventDefault()) : (this.$_isActionableMode$() && 
    null != this.$m_active$ && (this.$_setActionableMode$(!1), this.$_disableAllTabbableElements$(this.$m_active$.elem)), $collapseIconClass_item$$48$$ = this.$_findItem$($target$$81$$), null == $collapseIconClass_item$$48$$ || 0 == $collapseIconClass_item$$48$$.length || this.$SkipFocus$($collapseIconClass_item$$48$$) || (this.$_getListContainer$().hasClass("oj-focus-ancestor") || this.$_getListContainer$().addClass("oj-focus-ancestor"), this.$_isSelectionEnabled$() && this.$IsSelectable$($collapseIconClass_item$$48$$[0]) ? 
    this.$_isTouchSupport$() ? this.$_handleTouchSelection$($collapseIconClass_item$$48$$, $event$$289$$) : this.$HandleClickSelection$($collapseIconClass_item$$48$$, $event$$289$$) : this.$_handleClickActive$($collapseIconClass_item$$48$$, $event$$289$$), this.$isExpandable$() && $target$$81$$.closest("." + $groupItemClass$$) && (this.$GetState$($collapseIconClass_item$$48$$) == this.$STATE_COLLAPSED$ ? this.$_expand$($event$$289$$) : this.$GetState$($collapseIconClass_item$$48$$) == this.$STATE_EXPANDED$ && 
    this.$_collapse$($event$$289$$)))));
  }, $_isTouchSupport$:function() {
    return $oj$$19$$.$DomUtils$.$isTouchSupported$();
  }, $_ctrlEquivalent$:function($event$$290$$) {
    return $oj$$19$$.$DomUtils$.$isMetaKeyPressed$($event$$290$$);
  }, $_createSubId$:function($subId$$32$$) {
    return[this.element.attr("id"), $subId$$32$$].join(":");
  }, $FindItem$:function($elem$$42$$) {
    return $$$$18$$($elem$$42$$).closest("." + this.$getItemElementStyleClass$());
  }, $_isClickthroughDisabled$:function($elem$$43$$) {
    return $elem$$43$$.hasClass("oj-clickthrough-disabled") || $elem$$43$$.hasClass("oj-component-initnode") || $elem$$43$$.hasClass("oj-component");
  }, $_findItem$:function($current$$8_target$$82$$) {
    for (;0 < $current$$8_target$$82$$.length && !this.$_isClickthroughDisabled$($current$$8_target$$82$$);) {
      if ($current$$8_target$$82$$.hasClass(this.$getItemElementStyleClass$())) {
        return $current$$8_target$$82$$;
      }
      $current$$8_target$$82$$ = $current$$8_target$$82$$.parent();
    }
    return null;
  }, $_getListContainerBorderWidth$:function() {
    null == this.$m_borderWidth$ && (this.$m_borderWidth$ = parseInt(this.$_getListContainer$().css("border-top-width"), 10) + parseInt(this.$_getListContainer$().css("border-bottom-width"), 10));
    return this.$m_borderWidth$;
  }, $_scrollToVisible$:function($container$$22_elem$$44$$) {
    var $scrollTop$$4_top$$2$$, $height$$23$$, $containerScrollTop$$, $containerHeight$$, $headerTop$$, $headerHeight$$, $offset$$24$$ = 0;
    $scrollTop$$4_top$$2$$ = $container$$22_elem$$44$$.offsetTop;
    $height$$23$$ = $container$$22_elem$$44$$.offsetHeight;
    $container$$22_elem$$44$$ = this.$_getListContainer$()[0];
    $containerScrollTop$$ = $container$$22_elem$$44$$.scrollTop;
    $containerHeight$$ = $container$$22_elem$$44$$.offsetHeight;
    null != this.$m_groupItemToPin$ && ($headerTop$$ = parseInt(this.$m_groupItemToPin$.style.top, 10), $headerHeight$$ = $$$$18$$(this.$m_groupItemToPin$).outerHeight(), $scrollTop$$4_top$$2$$ <= $headerTop$$ && $headerTop$$ < $scrollTop$$4_top$$2$$ + $height$$23$$ ? $offset$$24$$ = ($height$$23$$ + $scrollTop$$4_top$$2$$ - $headerTop$$) / 2 : $scrollTop$$4_top$$2$$ >= $headerTop$$ && $scrollTop$$4_top$$2$$ < $headerTop$$ + $headerHeight$$ && ($offset$$24$$ = ($headerTop$$ + $headerHeight$$ - $scrollTop$$4_top$$2$$) / 
    2));
    $scrollTop$$4_top$$2$$ >= $containerScrollTop$$ && $scrollTop$$4_top$$2$$ + $height$$23$$ <= $containerScrollTop$$ + $containerHeight$$ ? 0 < $offset$$24$$ && ($container$$22_elem$$44$$.scrollTop = $containerScrollTop$$ - $offset$$24$$) : ($scrollTop$$4_top$$2$$ = Math.max(0, Math.min($scrollTop$$4_top$$2$$ - $offset$$24$$, Math.abs($scrollTop$$4_top$$2$$ + $height$$23$$ - $containerHeight$$))), $scrollTop$$4_top$$2$$ > $containerScrollTop$$ && ($scrollTop$$4_top$$2$$ += this.$_getListContainerBorderWidth$()), 
    $container$$22_elem$$44$$.scrollTop = $scrollTop$$4_top$$2$$);
  }, $GetKey$:function($elem$$45$$) {
    return this.$m_contentHandler$.$GetKey$($elem$$45$$);
  }, $FindElementByKey$:function($key$$91$$) {
    var $id$$29$$;
    return null != this.$m_keyElemMap$ && ($id$$29$$ = this.$m_keyElemMap$[$key$$91$$], null != $id$$29$$) ? document.getElementById($id$$29$$) : this.$m_contentHandler$.$FindElementByKey$($key$$91$$);
  }, $IsArrowKey$:function($keyCode$$5$$) {
    return $keyCode$$5$$ == this.$UP_KEY$ || $keyCode$$5$$ == this.$DOWN_KEY$;
  }, $_getItemsCache$:function() {
    var $disclosureStyleClass$$, $selector$$27$$, $isGroup$$1$$;
    null == this.$m_items$ && ($disclosureStyleClass$$ = this.$getGroupCollapseStyleClass$(), $selector$$27$$ = "." + this.$getItemElementStyleClass$() + ":visible", this.$m_items$ = this.element.find($selector$$27$$).filter(function() {
      return($isGroup$$1$$ = $$$$18$$(this).parent().hasClass($disclosureStyleClass$$)) ? !$$$$18$$(this).parent().parent().hasClass("oj-collapsed") : !0;
    }));
    return this.$m_items$;
  }, $HandleArrowKeys$:function($keyCode$$6_next$$3$$, $isExtend$$, $event$$291$$) {
    var $current$$9_currentIndex$$1$$, $processed$$1$$, $items$$3$$;
    if (!this.$m_contentHandler$.$IsReady$()) {
      return!0;
    }
    $current$$9_currentIndex$$1$$ = !$isExtend$$ || this.$m_isNavigate$ ? this.$m_active$.elem : this.$m_selectionFrontier$;
    $processed$$1$$ = !1;
    $items$$3$$ = this.$_getItemsCache$();
    $current$$9_currentIndex$$1$$ = $items$$3$$.index($current$$9_currentIndex$$1$$);
    switch($keyCode$$6_next$$3$$) {
      case this.$UP_KEY$:
        $current$$9_currentIndex$$1$$--;
        if (0 <= $current$$9_currentIndex$$1$$) {
          for ($keyCode$$6_next$$3$$ = $$$$18$$($items$$3$$[$current$$9_currentIndex$$1$$]);this.$SkipFocus$($keyCode$$6_next$$3$$);) {
            $current$$9_currentIndex$$1$$--;
            if (0 > $current$$9_currentIndex$$1$$) {
              return!1;
            }
            $keyCode$$6_next$$3$$ = $$$$18$$($items$$3$$[$current$$9_currentIndex$$1$$]);
          }
          $isExtend$$ ? (this.$_extendSelection$($keyCode$$6_next$$3$$, $event$$291$$), this.$m_isNavigate$ = !1) : (this.$_activeAndFocus$($keyCode$$6_next$$3$$, $event$$291$$), this.$m_isNavigate$ = !0);
        }
        $processed$$1$$ = !0;
        break;
      case this.$DOWN_KEY$:
        $current$$9_currentIndex$$1$$++;
        if ($current$$9_currentIndex$$1$$ < $items$$3$$.length) {
          for ($keyCode$$6_next$$3$$ = $$$$18$$($items$$3$$[$current$$9_currentIndex$$1$$]);this.$SkipFocus$($keyCode$$6_next$$3$$);) {
            $current$$9_currentIndex$$1$$++;
            if ($current$$9_currentIndex$$1$$ == $items$$3$$.length) {
              return!1;
            }
            $keyCode$$6_next$$3$$ = $$$$18$$($items$$3$$[$current$$9_currentIndex$$1$$]);
          }
          $isExtend$$ ? (this.$_extendSelection$($keyCode$$6_next$$3$$, $event$$291$$), this.$m_isNavigate$ = !1) : (this.$_activeAndFocus$($keyCode$$6_next$$3$$, $event$$291$$), this.$m_isNavigate$ = !0);
        }
        $processed$$1$$ = !0;
    }
    return $processed$$1$$;
  }, $_isActionableMode$:function() {
    return "actionable" == this.$m_keyMode$;
  }, $_setActionableMode$:function($flag$$2$$) {
    this.$m_keyMode$ = $flag$$2$$ ? "actionable" : "navigation";
    $flag$$2$$ || this.element[0].focus();
  }, $GetFocusMode$:function() {
    return this.$FOCUS_MODE_ITEM$;
  }, $getFocusItem$:function($item$$49$$) {
    return $item$$49$$.hasClass(this.$getFocusedElementStyleClass$()) ? $item$$49$$ : $$$$18$$($item$$49$$.find("." + this.$getFocusedElementStyleClass$()).first());
  }, $_setTabIndex$:function($item$$50$$) {
    this.$getFocusItem$($item$$50$$).attr("tabIndex", 0);
  }, $_resetTabIndex$:function($item$$51$$) {
    var $removeAttr$$1$$;
    $removeAttr$$1$$ = !0;
    "presentation" === $item$$51$$.attr("role") && ($removeAttr$$1$$ = !1);
    $item$$51$$ = this.$getFocusItem$($item$$51$$);
    $removeAttr$$1$$ ? $item$$51$$.removeAttr("tabIndex") : $item$$51$$.attr("tabIndex", -1);
  }, $_focusItem$:function($previousItem$$1$$, $item$$52$$) {
    this.$FOCUS_MODE_ITEM$ === this.$FOCUS_MODE_ITEM$ ? (null != $previousItem$$1$$ && this.$_resetTabIndex$($previousItem$$1$$), this.$_setTabIndex$($item$$52$$), this.element.attr("tabIndex") && this.element.removeAttr("tabIndex")) : this.$UpdateActiveDescendant$($item$$52$$);
  }, $getSingleFocusableElement$:function($item$$53$$) {
    var $childElements$$;
    $childElements$$ = $item$$53$$.children("a, input, select, textarea, button");
    return 1 === $childElements$$.length && 0 === $childElements$$.first().find("a, input, select, textarea, button").length ? $childElements$$.first() : $item$$53$$;
  }, $_setActive$:function($item$$54$$, $event$$292$$) {
    var $elem$$46_key$$92$$, $ui$$11$$, $active_cancelled$$;
    null != $item$$54$$ ? ($elem$$46_key$$92$$ = $item$$54$$[0], $elem$$46_key$$92$$ = this.$GetKey$($elem$$46_key$$92$$), null == this.$m_active$ || $elem$$46_key$$92$$ != this.$m_active$.key ? ($ui$$11$$ = {key:$elem$$46_key$$92$$, item:$item$$54$$}, null != this.$m_active$ && ($ui$$11$$.previousKey = this.$m_active$.key, $ui$$11$$.previousItem = this.$m_active$.elem), $active_cancelled$$ = !this.$Trigger$("beforeCurrentItem", $event$$292$$, $ui$$11$$), $active_cancelled$$ || (this.$m_active$ = 
    $active_cancelled$$ = {key:$elem$$46_key$$92$$, elem:$item$$54$$}, this.$_focusItem$($ui$$11$$.previousItem, $item$$54$$), this.$SetOption$("currentItem", $elem$$46_key$$92$$, {_context:{originalEvent:$event$$292$$, $internalSet$:!0, $extraData$:{item:$item$$54$$}}, changed:!0}))) : $elem$$46_key$$92$$ == this.$m_active$.key && (this.$m_active$ = $active_cancelled$$ = {key:$elem$$46_key$$92$$, elem:$item$$54$$}, this.$_focusItem$(null, $item$$54$$))) : this.$m_active$ = null;
  }, $HighlightActive$:function($force$$1$$) {
    var $item$$55$$, $target$$83$$;
    null != this.$m_active$ && this.$_getListContainer$().hasClass("oj-focus-ancestor") && ($force$$1$$ = $force$$1$$ || !1, $item$$55$$ = this.$m_active$.elem, this.$_highlightElem$($item$$55$$, "oj-focus"), this.$FOCUS_MODE_ITEM$ === this.$FOCUS_MODE_ITEM$ && ($item$$55$$ = this.$getFocusItem$($item$$55$$), $target$$83$$ = document.activeElement, !$force$$1$$ && $item$$55$$.get(0).contains($target$$83$$) || $item$$55$$.get(0).focus()));
  }, $UnhighlightActive$:function() {
    null != this.$m_active$ && this.$_unhighlightElem$(this.$m_active$.elem, "oj-focus");
  }, $_handleClickActive$:function($item$$56$$, $event$$293$$) {
    this.$_activeAndFocus$($item$$56$$, $event$$293$$);
  }, $_activeAndFocus$:function($item$$57$$, $event$$294$$) {
    this.$_scrollToVisible$($item$$57$$[0]);
    this.$UnhighlightActive$();
    this.$_setActive$($item$$57$$, $event$$294$$);
    this.$HighlightActive$();
  }, $_isSelectionEnabled$:function() {
    return "none" != this.$GetOption$("selectionMode");
  }, $_isMultipleSelection$:function() {
    return "multiple" == this.$GetOption$("selectionMode");
  }, $IsSelectable$:function($item$$58$$) {
    $item$$58$$ = this.$getFocusItem$($$$$18$$($item$$58$$)).get(0);
    return $item$$58$$.hasAttribute("aria-selected");
  }, $_filterSelection$:function($selection$$8$$) {
    var $filtered$$3$$, $i$$282$$, $elem$$47$$;
    $filtered$$3$$ = [];
    for ($i$$282$$ = 0;$i$$282$$ < $selection$$8$$.length && ($elem$$47$$ = this.$FindElementByKey$($selection$$8$$[$i$$282$$]), null == $elem$$47$$ || !this.$IsSelectable$($elem$$47$$) || ($filtered$$3$$.push($selection$$8$$[$i$$282$$]), this.$_isMultipleSelection$()));$i$$282$$++) {
    }
    return $filtered$$3$$;
  }, $_unhighlightSelection$:function() {
    var $self$$126$$, $elem$$48$$;
    null != this.$m_keyElemMap$ && ($self$$126$$ = this, $$$$18$$.each(this.$GetOption$("selection"), function($index$$138$$, $value$$243$$) {
      $elem$$48$$ = $self$$126$$.$FindElementByKey$($value$$243$$);
      null != $elem$$48$$ && $self$$126$$.$_unhighlightElem$($elem$$48$$, "oj-selected");
    }));
  }, $_highlightElem$:function($elem$$49$$, $style$$4$$) {
    this.$HighlightUnhighlightElem$($elem$$49$$, $style$$4$$, !0);
  }, $_unhighlightElem$:function($elem$$50$$, $style$$5$$) {
    this.$HighlightUnhighlightElem$($elem$$50$$, $style$$5$$, !1);
  }, $HighlightUnhighlightElem$:function($elem$$51$$, $style$$6$$, $highlight$$) {
    var $group$$3$$;
    $elem$$51$$ = $$$$18$$($elem$$51$$);
    "oj-selected" == $style$$6$$ && this.$getFocusItem$($elem$$51$$).attr("aria-selected", $highlight$$ ? "true" : "false");
    $group$$3$$ = $elem$$51$$.children("." + this.$getGroupItemStyleClass$());
    0 < $group$$3$$.length && ($elem$$51$$ = $$$$18$$($group$$3$$[0]));
    $highlight$$ ? $elem$$51$$.addClass($style$$6$$) : $elem$$51$$.removeClass($style$$6$$);
  }, $HandleClickSelection$:function($item$$59$$, $event$$295$$) {
    var $ctrlKey$$2$$, $shiftKey$$2$$;
    this.$_scrollToVisible$($item$$59$$[0]);
    $ctrlKey$$2$$ = this.$_ctrlEquivalent$($event$$295$$);
    $shiftKey$$2$$ = $event$$295$$.shiftKey;
    this.$_isMultipleSelection$() ? $ctrlKey$$2$$ || $shiftKey$$2$$ ? !$ctrlKey$$2$$ && $shiftKey$$2$$ ? this.$_extendSelection$($item$$59$$, $event$$295$$) : this.$_augmentSelectionAndFocus$($item$$59$$, $event$$295$$) : this.$SelectAndFocus$($item$$59$$, $event$$295$$) : this.$SelectAndFocus$($item$$59$$, $event$$295$$);
  }, $_handleTouchSelection$:function($item$$60$$, $event$$296$$) {
    this.$_isMultipleSelection$() ? this.$_augmentSelectionAndFocus$($item$$60$$, $event$$296$$) : this.$SelectAndFocus$($item$$60$$, $event$$296$$);
  }, $_clearSelection$:function($updateOption$$) {
    this.$_unhighlightSelection$();
    $updateOption$$ && this.$SetOption$("selection", [], {_context:{originalEvent:null, $internalSet$:!0, $extraData$:{items:$$$$18$$()}}, changed:!0});
    this.$m_selectionFrontier$ = null;
  }, $SelectAndFocus$:function($item$$61$$, $event$$297$$) {
    this.$_clearSelection$(!1);
    this.$_augmentSelectionAndFocus$($item$$61$$, $event$$297$$, []);
  }, $_extendSelection$:function($item$$62$$, $event$$298$$) {
    var $current$$10$$;
    null != this.$m_active$ && ($current$$10$$ = this.$m_selectionFrontier$, $current$$10$$ != $item$$62$$ && (this.$_unhighlightElem$($item$$62$$, "oj-focus"), this.$_extendSelectionRange$(this.$m_active$.elem, $item$$62$$, $event$$298$$)));
  }, $_extendSelectionRange$:function($from$$1$$, $to$$1$$, $event$$299$$) {
    this.$_clearSelection$(!1);
    this.$m_selectionFrontier$ = $to$$1$$;
    this.$_highlightRange$($from$$1$$, $to$$1$$, $event$$299$$);
    this.$HighlightActive$();
  }, $_highlightRange$:function($start$$39_startIndex$$26_to$$2$$, $end$$12_from$$2_i$$283$$, $event$$300$$) {
    var $selection$$9$$, $selectedItems$$3$$, $items$$4$$, $endIndex$$3_item$$63$$, $key$$93$$;
    $selection$$9$$ = [];
    $selectedItems$$3$$ = [];
    $items$$4$$ = this.$_getItemsCache$();
    $start$$39_startIndex$$26_to$$2$$ = $items$$4$$.index($start$$39_startIndex$$26_to$$2$$);
    $endIndex$$3_item$$63$$ = $items$$4$$.index($end$$12_from$$2_i$$283$$);
    $start$$39_startIndex$$26_to$$2$$ > $endIndex$$3_item$$63$$ ? $end$$12_from$$2_i$$283$$ = $endIndex$$3_item$$63$$ : ($end$$12_from$$2_i$$283$$ = $start$$39_startIndex$$26_to$$2$$, $start$$39_startIndex$$26_to$$2$$ = $endIndex$$3_item$$63$$);
    for (;$end$$12_from$$2_i$$283$$ <= $start$$39_startIndex$$26_to$$2$$;$end$$12_from$$2_i$$283$$++) {
      $endIndex$$3_item$$63$$ = $items$$4$$[$end$$12_from$$2_i$$283$$], this.$IsSelectable$($endIndex$$3_item$$63$$) && ($key$$93$$ = this.$m_contentHandler$.$GetKey$($endIndex$$3_item$$63$$), this.$_applySelection$($endIndex$$3_item$$63$$, $key$$93$$), $selection$$9$$.push($key$$93$$), $selectedItems$$3$$.push($endIndex$$3_item$$63$$));
    }
    this.$SetOption$("selection", $selection$$9$$, {_context:{originalEvent:$event$$300$$, $internalSet$:!0, $extraData$:{items:$$$$18$$($selectedItems$$3$$)}}, changed:!0});
  }, $_applySelection$:function($element$$111$$, $key$$94$$) {
    null == this.$m_keyElemMap$ && (this.$m_keyElemMap$ = {});
    this.$m_keyElemMap$[$key$$94$$] = $$$$18$$($element$$111$$).attr("id");
    this.$_highlightElem$($element$$111$$, "oj-selected");
  }, $_augmentSelectionAndFocus$:function($item$$64$$, $event$$301$$, $selection$$10$$) {
    var $key$$95_selectedItems$$4$$, $i$$284_index$$139$$;
    $key$$95_selectedItems$$4$$ = this.$GetKey$($item$$64$$[0]);
    void 0 == $selection$$10$$ && ($selection$$10$$ = this.$GetOption$("selection").slice(0));
    this.$UnhighlightActive$();
    $i$$284_index$$139$$ = $selection$$10$$.indexOf($key$$95_selectedItems$$4$$);
    -1 < $i$$284_index$$139$$ ? (this.$_unhighlightElem$($item$$64$$, "oj-selected"), $selection$$10$$.splice($i$$284_index$$139$$, 1)) : (this.$m_selectionFrontier$ = $item$$64$$, this.$_applySelection$($item$$64$$, $key$$95_selectedItems$$4$$), $selection$$10$$.push($key$$95_selectedItems$$4$$));
    $key$$95_selectedItems$$4$$ = Array($selection$$10$$.length);
    for ($i$$284_index$$139$$ = 0;$i$$284_index$$139$$ < $selection$$10$$.length;$i$$284_index$$139$$++) {
      $key$$95_selectedItems$$4$$[$i$$284_index$$139$$] = this.$FindElementByKey$($selection$$10$$[$i$$284_index$$139$$]);
    }
    this.$_setActive$($item$$64$$, $event$$301$$);
    this.$HighlightActive$();
    this.$SetOption$("selection", $selection$$10$$, {_context:{originalEvent:$event$$301$$, $internalSet$:!0, $extraData$:{items:$$$$18$$($key$$95_selectedItems$$4$$)}}, changed:!0});
  }, $ToggleSelection$:function($event$$302$$, $keepCurrentSelection_selectedItems$$5$$, $i$$285_skipIfNotSelected$$) {
    var $selection$$11$$, $item$$65$$, $key$$96$$, $index$$140$$;
    $selection$$11$$ = this.$GetOption$("selection").slice(0);
    $item$$65$$ = this.$m_active$.elem;
    $key$$96$$ = this.$m_active$.key;
    $index$$140$$ = $selection$$11$$.indexOf($key$$96$$);
    if (-1 < $index$$140$$) {
      if ($i$$285_skipIfNotSelected$$) {
        return;
      }
      this.$_unhighlightElem$($item$$65$$, "oj-selected");
      $selection$$11$$.splice($index$$140$$, 1);
      0 == $selection$$11$$.length && (this.$m_selectionFrontier$ = null);
    } else {
      this.$IsSelectable$($item$$65$$[0]) && ($keepCurrentSelection_selectedItems$$5$$ || (this.$_clearSelection$(!1), $selection$$11$$.length = 0), this.$m_selectionFrontier$ = $item$$65$$, this.$_applySelection$($item$$65$$, $key$$96$$), $selection$$11$$.push($key$$96$$));
    }
    $keepCurrentSelection_selectedItems$$5$$ = Array($selection$$11$$.length);
    for ($i$$285_skipIfNotSelected$$ = 0;$i$$285_skipIfNotSelected$$ < $selection$$11$$.length;$i$$285_skipIfNotSelected$$++) {
      $keepCurrentSelection_selectedItems$$5$$[$i$$285_skipIfNotSelected$$] = this.$FindElementByKey$($selection$$11$$[$i$$285_skipIfNotSelected$$]);
    }
    this.$SetOption$("selection", $selection$$11$$, {_context:{originalEvent:$event$$302$$, $internalSet$:!0, $extraData$:{items:$$$$18$$($keepCurrentSelection_selectedItems$$5$$)}}, changed:!0});
  }, $HandleSelectionOrActiveKeyDown$:function($event$$303$$) {
    var $first$$5_keyCode$$7$$, $ctrlKey$$3_current$$11_last$$, $shiftKey$$3$$, $processed$$2$$ = !1;
    if (null == this.$m_active$) {
      return!1;
    }
    $first$$5_keyCode$$7$$ = $event$$303$$.keyCode;
    $ctrlKey$$3_current$$11_last$$ = this.$m_active$.elem;
    this.$_isActionableMode$() ? $first$$5_keyCode$$7$$ == this.$ESC_KEY$ ? (this.$_setActionableMode$(!1), this.$_disableAllTabbableElements$($ctrlKey$$3_current$$11_last$$), this.$HighlightActive$(!0), $processed$$2$$ = !0) : $first$$5_keyCode$$7$$ === this.$TAB_KEY$ && ($first$$5_keyCode$$7$$ = $ctrlKey$$3_current$$11_last$$.find("[data-first]"), $ctrlKey$$3_current$$11_last$$ = $ctrlKey$$3_current$$11_last$$.find("[data-last]"), $event$$303$$.shiftKey ? 0 < $first$$5_keyCode$$7$$.length && 0 < 
    $ctrlKey$$3_current$$11_last$$.length && $first$$5_keyCode$$7$$ != $ctrlKey$$3_current$$11_last$$ && $event$$303$$.target == $first$$5_keyCode$$7$$[0] && ($ctrlKey$$3_current$$11_last$$[0].focus(), $processed$$2$$ = !0) : 0 < $first$$5_keyCode$$7$$.length && 0 < $ctrlKey$$3_current$$11_last$$.length && $first$$5_keyCode$$7$$ != $ctrlKey$$3_current$$11_last$$ && $event$$303$$.target == $ctrlKey$$3_current$$11_last$$[0] && ($first$$5_keyCode$$7$$[0].focus(), $processed$$2$$ = !0)) : $first$$5_keyCode$$7$$ == 
    this.$F2_KEY$ ? (this.$_enableAllTabbableElements$($ctrlKey$$3_current$$11_last$$), $first$$5_keyCode$$7$$ = $ctrlKey$$3_current$$11_last$$.find("[data-first]"), 0 < $first$$5_keyCode$$7$$.length && ($first$$5_keyCode$$7$$[0].focus(), this.$_setActionableMode$(!0))) : $first$$5_keyCode$$7$$ == this.$SPACE_KEY$ && this.$_isSelectionEnabled$() ? ($ctrlKey$$3_current$$11_last$$ = this.$_ctrlEquivalent$($event$$303$$), ($shiftKey$$3$$ = $event$$303$$.shiftKey) && !$ctrlKey$$3_current$$11_last$$ && 
    null != this.$m_selectionFrontier$ && this.$_isMultipleSelection$() ? this.$_extendSelectionRange$(this.$m_selectionFrontier$, this.$m_active$.elem, $event$$303$$) : this.$ToggleSelection$($event$$303$$, $ctrlKey$$3_current$$11_last$$ && !$shiftKey$$3$$ && this.$_isMultipleSelection$(), !1), $processed$$2$$ = !0) : $first$$5_keyCode$$7$$ == this.$ENTER_KEY$ && this.$_isSelectionEnabled$() ? this.$ToggleSelection$($event$$303$$, !1, !0) : this.$IsArrowKey$($first$$5_keyCode$$7$$) && ($ctrlKey$$3_current$$11_last$$ = 
    this.$_ctrlEquivalent$($event$$303$$), $shiftKey$$3$$ = $event$$303$$.shiftKey, $ctrlKey$$3_current$$11_last$$ || ($processed$$2$$ = this.$HandleArrowKeys$($first$$5_keyCode$$7$$, $shiftKey$$3$$ && this.$_isSelectionEnabled$() && this.$_isMultipleSelection$(), $event$$303$$)));
    return $processed$$2$$;
  }, $isExpandable$:function() {
    return "none" != this.$GetOption$("drillMode");
  }, $_isExpandAll$:function() {
    var $expanded$$4$$ = this.$GetOption$("expanded");
    if ("auto" === $expanded$$4$$) {
      if (!this.$isExpandable$()) {
        return!0;
      }
    } else {
      if ("all" === $expanded$$4$$) {
        return!0;
      }
    }
    return!1;
  }, $expandKey$:function($key$$97$$, $beforeVetoable$$, $fireBefore$$, $fireAfter$$) {
    var $item$$66$$ = this.$FindElementByKey$($key$$97$$);
    null != $item$$66$$ && this.$ExpandItem$($$$$18$$($item$$66$$), null, !1, $key$$97$$, $beforeVetoable$$, $fireAfter$$, $fireBefore$$);
  }, $_expand$:function($event$$304$$) {
    var $item$$67$$ = this.$FindItem$($event$$304$$.target);
    null != $item$$67$$ && 0 < $item$$67$$.length && this.$ExpandItem$($item$$67$$, $event$$304$$, !0, null, !0, !0, !0);
  }, $ExpandItem$:function($item$$68$$, $event$$305$$, $animate$$, $cancelled$$1_key$$98$$, $beforeVetoable$$1$$, $fireEvent$$1$$, $fireBeforeEvent$$) {
    var $ui$$13$$;
    if (this.$GetState$($item$$68$$) == this.$STATE_COLLAPSED$) {
      null == $cancelled$$1_key$$98$$ && ($cancelled$$1_key$$98$$ = this.$GetKey$($item$$68$$[0]));
      $ui$$13$$ = {item:$item$$68$$, key:$cancelled$$1_key$$98$$};
      if ($fireBeforeEvent$$ && ($cancelled$$1_key$$98$$ = !this.$Trigger$("beforeExpand", $event$$305$$, $ui$$13$$)) && $beforeVetoable$$1$$) {
        return;
      }
      this.$signalTaskStart$();
      this.$m_contentHandler$.$Expand$($item$$68$$, function($groupItem$$4$$) {
        this.$_expandSuccess$($groupItem$$4$$, $animate$$, $event$$305$$, $ui$$13$$, $fireEvent$$1$$);
      }.bind(this));
      this.$m_items$ = null;
      null != $event$$305$$ && $event$$305$$.stopPropagation();
      this.$signalTaskEnd$();
    }
  }, $_expandSuccess$:function($groupItem$$5_item$$69$$, $animate$$1_collapseClass$$2$$, $event$$306$$, $ui$$14$$, $fireEvent$$2$$) {
    var $expandClass$$;
    this.$signalTaskStart$();
    this.$AnimateExpand$($$$$18$$($groupItem$$5_item$$69$$), $animate$$1_collapseClass$$2$$);
    $groupItem$$5_item$$69$$ = $groupItem$$5_item$$69$$.parentNode;
    $groupItem$$5_item$$69$$ = $$$$18$$($groupItem$$5_item$$69$$);
    this.$SetState$($groupItem$$5_item$$69$$, this.$STATE_EXPANDED$);
    $animate$$1_collapseClass$$2$$ = this.$getCollapseIconStyleClass$();
    $expandClass$$ = this.$getExpandIconStyleClass$();
    $groupItem$$5_item$$69$$.children("." + this.$getGroupItemStyleClass$()).find("." + $animate$$1_collapseClass$$2$$).removeClass($animate$$1_collapseClass$$2$$).addClass($expandClass$$);
    $fireEvent$$2$$ && this.$Trigger$("expand", $event$$306$$, $ui$$14$$);
    this.$signalTaskEnd$();
  }, $_adjustAncestorsMaxHeight$:function($groupItem$$6$$, $delta$$4$$) {
    var $maxHeight$$;
    $groupItem$$6$$.parentsUntil("ul.oj-component-initnode", "ul." + this.$getGroupStyleClass$()).each(function() {
      $maxHeight$$ = parseInt($$$$18$$(this).css("maxHeight"), 10);
      0 < $maxHeight$$ && $$$$18$$(this).css("maxHeight", $maxHeight$$ + $delta$$4$$ + "px");
    });
  }, $AnimateExpand$:function($groupItem$$7$$, $animate$$2$$) {
    var $totalHeight$$ = 0;
    $animate$$2$$ ? (this.$signalTaskStart$(), $groupItem$$7$$.children().each(function() {
      $totalHeight$$ += $$$$18$$(this).outerHeight(!0);
    }), this.$_isTouchSupport$() && this.$_adjustAncestorsMaxHeight$($groupItem$$7$$, $totalHeight$$), null == this.$m_expandTransitionEndListener$ && (this.$m_expandTransitionEndListener$ = this.$_handleExpandTransitionEnd$.bind(this)), $groupItem$$7$$.css("maxHeight", "0px"), $groupItem$$7$$.on("transitionend", this.$m_expandTransitionEndListener$), this.$signalTaskStart$(), requestAnimationFrame(function() {
      $groupItem$$7$$.css("maxHeight", $totalHeight$$ + "px");
    }), this.$signalTaskEnd$()) : (this.$_isTouchSupport$() ? ($groupItem$$7$$.children().each(function() {
      $totalHeight$$ += $$$$18$$(this).outerHeight(!0);
    }), $groupItem$$7$$.css("maxHeight", $totalHeight$$ + "px"), this.$_adjustAncestorsMaxHeight$($groupItem$$7$$, $totalHeight$$)) : $groupItem$$7$$.css("maxHeight", ""), this.$AnimateExpandComplete$($groupItem$$7$$));
  }, $_handleExpandTransitionEnd$:function($event$$307_groupItem$$8$$) {
    $event$$307_groupItem$$8$$ = $$$$18$$($event$$307_groupItem$$8$$.target);
    $event$$307_groupItem$$8$$.off("transitionend", this.$m_expandTransitionEndListener$);
    this.$_isTouchSupport$() || $event$$307_groupItem$$8$$.css("maxHeight", "");
    this.$AnimateExpandComplete$($event$$307_groupItem$$8$$);
    this.$signalTaskEnd$();
  }, $AnimateExpandComplete$:function($groupItem$$9$$) {
    $groupItem$$9$$.removeClass(this.$getGroupCollapseStyleClass$()).addClass(this.$getGroupExpandStyleClass$());
  }, $collapseKey$:function($key$$100$$, $fireBefore$$1$$, $fireAfter$$1$$) {
    var $item$$71$$ = this.$FindElementByKey$($key$$100$$);
    null != $item$$71$$ && this.$CollapseItem$($$$$18$$($item$$71$$), null, !1, $key$$100$$, $fireBefore$$1$$, $fireAfter$$1$$);
  }, $_collapse$:function($event$$308$$) {
    var $item$$72$$ = this.$FindItem$($event$$308$$.target);
    null != $item$$72$$ && 0 < $item$$72$$.length && this.$CollapseItem$($item$$72$$, $event$$308$$, !0, null, !0, !0);
  }, $CollapseItem$:function($item$$73$$, $event$$309$$, $animate$$3_collapseClass$$3$$, $key$$101_ui$$15$$, $beforeVetoable$$2_expandClass$$1$$, $fireEvent$$3$$) {
    var $cancelled$$2$$;
    this.$GetState$($item$$73$$) == this.$STATE_EXPANDED$ && (null == $key$$101_ui$$15$$ && ($key$$101_ui$$15$$ = this.$GetKey$($item$$73$$[0])), $key$$101_ui$$15$$ = {item:$item$$73$$, key:$key$$101_ui$$15$$}, $cancelled$$2$$ = !this.$Trigger$("beforeCollapse", $event$$309$$, $key$$101_ui$$15$$), $cancelled$$2$$ && $beforeVetoable$$2_expandClass$$1$$ || (this.$signalTaskStart$(), this.$AnimateCollapse$($item$$73$$, $animate$$3_collapseClass$$3$$), this.$SetState$($item$$73$$, this.$STATE_COLLAPSED$), 
    $animate$$3_collapseClass$$3$$ = this.$getCollapseIconStyleClass$(), $beforeVetoable$$2_expandClass$$1$$ = this.$getExpandIconStyleClass$(), $item$$73$$.find("." + $beforeVetoable$$2_expandClass$$1$$).first().removeClass($beforeVetoable$$2_expandClass$$1$$).addClass($animate$$3_collapseClass$$3$$), this.$m_items$ = null, null != $event$$309$$ && $event$$309$$.stopPropagation(), $fireEvent$$3$$ && this.$Trigger$("collapse", $event$$309$$, $key$$101_ui$$15$$), this.$signalTaskEnd$()));
  }, $AnimateCollapse$:function($item$$74$$, $animate$$4$$) {
    var $totalHeight$$1$$ = 0, $groupItem$$10$$, $self$$127$$ = this;
    $groupItem$$10$$ = $item$$74$$.children("ul").first();
    $animate$$4$$ ? (this.$signalTaskStart$(), null == this.$m_collapseTransitionEndListener$ && (this.$m_collapseTransitionEndListener$ = this.$_handleCollapseTransitionEnd$.bind(this)), $groupItem$$10$$.children().each(function() {
      $totalHeight$$1$$ += $$$$18$$(this).outerHeight();
    }), $groupItem$$10$$.css("transition-property", "none"), $groupItem$$10$$.css("maxHeight", $totalHeight$$1$$ + "px"), $groupItem$$10$$.css("transition-property", ""), $groupItem$$10$$.on("transitionend", this.$m_collapseTransitionEndListener$), setTimeout(function() {
      $self$$127$$.$signalTaskStart$();
      $groupItem$$10$$.css("maxHeight", "0px");
      $self$$127$$.$signalTaskEnd$();
    }, 100)) : ($groupItem$$10$$.css("maxHeight", "0px"), this.$AnimateCollapseComplete$($item$$74$$));
  }, $_handleCollapseTransitionEnd$:function($event$$310_groupItem$$11$$) {
    $event$$310_groupItem$$11$$ = $$$$18$$($event$$310_groupItem$$11$$.target);
    $event$$310_groupItem$$11$$.off("transitionend", this.$m_collapseTransitionEndListener$);
    this.$AnimateCollapseComplete$($event$$310_groupItem$$11$$);
    this.$signalTaskEnd$();
  }, $AnimateCollapseComplete$:function($groupItem$$12$$) {
    $groupItem$$12$$.removeClass(this.$getGroupExpandStyleClass$()).addClass(this.$getGroupCollapseStyleClass$());
    null != this.$m_contentHandler$ && this.$m_contentHandler$.$Collapse$($groupItem$$12$$);
  }, $_collapseAll$:function() {
    var $self$$128$$;
    this.$signalTaskStart$();
    $self$$128$$ = this;
    this.$_getItemsCache$().each(function() {
      $self$$128$$.$CollapseItem$($$$$18$$(this), null, !1, null, !1, !1);
    });
    this.$signalTaskEnd$();
  }, getExpanded:function() {
    var $expanded$$7$$, $self$$129$$, $item$$76$$;
    $expanded$$7$$ = [];
    $self$$129$$ = this;
    this.$_getItemsCache$().each(function() {
      $item$$76$$ = $$$$18$$(this);
      $self$$129$$.$GetState$($item$$76$$) == $self$$129$$.$STATE_EXPANDED$ && $expanded$$7$$.push($self$$129$$.$GetKey$($item$$76$$[0]));
    });
    return $expanded$$7$$;
  }, $getWidgetConstructor$:function() {
    return $oj$$19$$.Components.$getWidgetConstructor$(this.element);
  }, $GetContainerStyleClass$:function() {
    return this.$_isTouchSupport$() ? "oj-listview oj-listview-container-touch" : "oj-listview oj-listview-container";
  }, $GetStyleClass$:function() {
    return "oj-listview-element";
  }, $getItemStyleClass$:function() {
    return "oj-listview-item";
  }, $getFocusedElementStyleClass$:function() {
    return "oj-listview-focused-element";
  }, $getItemElementStyleClass$:function() {
    return "oj-listview-item-element";
  }, $getGroupItemStyleClass$:function() {
    return "oj-listview-group-item";
  }, $getGroupStyleClass$:function() {
    return "oj-listview-group";
  }, $getGroupExpandStyleClass$:function() {
    return "oj-listview-collapsible-transition";
  }, $getGroupCollapseStyleClass$:function() {
    return this.$getGroupExpandStyleClass$();
  }, $getCollapseIconStyleClass$:function() {
    return "oj-listview-collapse-icon";
  }, $getExpandIconStyleClass$:function() {
    return "oj-listview-expand-icon";
  }, $getDepthStyleClass$:function() {
    return "";
  }, $_registerScrollHandler$:function() {
    var $self$$130$$ = this;
    this.$ojContext$._off(this.$_getListContainer$(), "scroll");
    this.$_isPinGroupHeader$() && this.$ojContext$._on(this.$_getListContainer$(), {scroll:function() {
      $self$$130$$.$_handlePinGroupHeader$();
    }});
  }, $_isPinGroupHeader$:function() {
    return "static" != this.$GetOption$("groupHeaderPosition");
  }, $_getGroupItemsCache$:function() {
    var $selector$$29$$;
    null == this.$m_groupItems$ && ($selector$$29$$ = "." + this.$getGroupItemStyleClass$() + ":visible", this.$m_groupItems$ = this.element.find($selector$$29$$).filter(function() {
      return!$$$$18$$(this).parent().hasClass("oj-collapsed") && 0 < $$$$18$$(this).next().children().length ? !0 : !1;
    }));
    return this.$m_groupItems$;
  }, $_unpinGroupItem$:function($groupItem$$13$$) {
    $groupItem$$13$$.style.position = "static";
    $groupItem$$13$$.style.top = "auto";
    $groupItem$$13$$.style.width = "auto";
  }, $_getNextGroupItem$:function($groupItem$$14_index$$143$$) {
    var $groupItems$$2$$;
    $groupItems$$2$$ = this.$_getGroupItemsCache$();
    $groupItem$$14_index$$143$$ = $groupItems$$2$$.index($groupItem$$14_index$$143$$);
    return-1 < $groupItem$$14_index$$143$$ && $groupItem$$14_index$$143$$ < $groupItems$$2$$.length - 1 ? $groupItems$$2$$[$groupItem$$14_index$$143$$ + 1] : null;
  }, $_pinGroupItem$:function($groupItem$$15$$, $scrollTop$$5$$) {
    var $width$$26$$, $height$$24$$, $next$$4$$;
    $width$$26$$ = $groupItem$$15$$.offsetWidth;
    $height$$24$$ = $groupItem$$15$$.offsetHeight;
    $next$$4$$ = this.$_getNextGroupItem$($groupItem$$15$$);
    null != $next$$4$$ && $next$$4$$.offsetTop <= $scrollTop$$5$$ + $height$$24$$ + 5 && ($scrollTop$$5$$ -= $height$$24$$);
    $groupItem$$15$$.style.position = "absolute";
    $groupItem$$15$$.style.top = $scrollTop$$5$$ + "px";
    $groupItem$$15$$.style.width = $width$$26$$ + "px";
  }, $_handlePinGroupHeader$:function() {
    var $scrollTop$$6$$, $groupItemToPin_next$$5$$, $groupItems$$3$$, $pinHeaderHeight$$, $i$$286$$, $groupItem$$16$$, $top$$3$$, $bottom$$1$$;
    $scrollTop$$6$$ = this.$_getListContainer$().get(0).scrollTop;
    if (null != this.$m_groupItemToPin$ && 0 == $scrollTop$$6$$) {
      this.$_unpinGroupItem$(this.$m_groupItemToPin$), this.$m_groupItemToPin$ = null;
    } else {
      $groupItems$$3$$ = this.$_getGroupItemsCache$();
      $pinHeaderHeight$$ = 0;
      null != this.$m_groupItemToPin$ && ($pinHeaderHeight$$ = this.$m_groupItemToPin$.offsetHeight);
      for ($i$$286$$ = 0;$i$$286$$ < $groupItems$$3$$.length;$i$$286$$++) {
        if ($groupItem$$16$$ = $groupItems$$3$$[$i$$286$$], this.$m_groupItemToPin$ != $groupItem$$16$$ && ($top$$3$$ = $groupItems$$3$$[$i$$286$$].offsetTop, $bottom$$1$$ = $top$$3$$ + $groupItem$$16$$.parentNode.offsetHeight, $top$$3$$ < $scrollTop$$6$$ && $bottom$$1$$ > $scrollTop$$6$$ + $pinHeaderHeight$$)) {
          $groupItemToPin_next$$5$$ = $groupItem$$16$$;
          break;
        }
      }
      null != $groupItemToPin_next$$5$$ && $groupItemToPin_next$$5$$ != this.$m_groupItemToPin$ ? (null != this.$m_groupItemToPin$ && this.$_unpinGroupItem$(this.$m_groupItemToPin$), this.$_pinGroupItem$($groupItemToPin_next$$5$$, $scrollTop$$6$$), this.$m_groupItemToPin$ = $groupItemToPin_next$$5$$) : null != this.$m_groupItemToPin$ && ($groupItemToPin_next$$5$$ = this.$_getNextGroupItem$(this.$m_groupItemToPin$), this.$m_groupItemToPin$.style.top = null != $groupItemToPin_next$$5$$ && $groupItemToPin_next$$5$$.offsetTop <= 
      $scrollTop$$6$$ + $pinHeaderHeight$$ ? $groupItemToPin_next$$5$$.offsetTop - $pinHeaderHeight$$ + "px" : $scrollTop$$6$$ + "px");
    }
  }, $_scrollToGroupHeader$:function($groupHeader$$) {
    var $container$$24$$, $currentScrollTop$$;
    $container$$24$$ = this.$_getListContainer$().get(0);
    $currentScrollTop$$ = $container$$24$$.scrollTop;
    null != this.$m_groupItemToPin$ && (this.$_unpinGroupItem$(this.$m_groupItemToPin$), this.$m_groupItemToPin$ = null);
    $container$$24$$.scrollTop = $groupHeader$$.offsetTop;
    this.$_isPinGroupHeader$() && $currentScrollTop$$ == $container$$24$$.scrollTop && this.$_handlePinGroupHeader$();
    this.$_setFirstFocusableItemInGroupCurrent$($groupHeader$$);
  }, $_setFirstFocusableItemInGroupCurrent$:function($groupHeader$$1$$) {
    var $self$$131$$ = this, $item$$77$$;
    $$$$18$$($groupHeader$$1$$).next().children().each(function() {
      $item$$77$$ = $$$$18$$(this);
      if (!$self$$131$$.$SkipFocus$($item$$77$$)) {
        return $self$$131$$.$SetOption$("currentItem", this.key), !1;
      }
    });
  }});
  $goog$exportPath_$$("_ojListView", $oj$$19$$.$_ojListView$, $oj$$19$$);
  $oj$$19$$.$__registerWidget$("oj.ojListView", $$$$18$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{currentItem:null, data:null, drillMode:"collapsible", expanded:"auto", groupHeaderPosition:"sticky", item:{focusable:!0, renderer:null, selectable:!0}, scrollPolicy:"auto", scrollPolicyOptions:{fetchSize:25, maxCount:500}, selection:[], selectionMode:"none", beforeCurrentItem:null, beforeExpand:null, beforeCollapse:null, collapse:null, expand:null, optionChange:null, ready:null}, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_setup$:function() {
    var $opts$$20$$ = {};
    $opts$$20$$.element = this.element;
    $opts$$20$$.$ojContext$ = this;
    $opts$$20$$ = $$$$18$$.extend(this.options, $opts$$20$$);
    this.$listview$ = new $oj$$19$$.$_ojListView$;
    this.$listview$.$init$($opts$$20$$);
  }, $_AfterCreate$:function() {
    this._super();
    this.$listview$.$afterCreate$();
  }, _destroy:function() {
    this.$listview$.destroy();
    this._super();
  }, $_NotifyContextMenuGesture$:function($menu$$7$$, $event$$312$$, $eventType$$36$$) {
    this.$listview$.$notifyContextMenuGesture$($menu$$7$$, $event$$312$$, $eventType$$36$$);
  }, _setOptions:function($options$$260$$, $flags$$28$$) {
    var $needRefresh$$ = this.$listview$.$setOptions$($options$$260$$, $flags$$28$$);
    this._super($options$$260$$, $flags$$28$$);
    $needRefresh$$ && (this.$listview$.refresh(), this.$_fireIndexerModelChangeEvent$());
  }, _setOption:function($key$$102$$, $value$$244$$) {
    var $valid$$8$$ = !0;
    "selectionMode" == $key$$102$$ ? $valid$$8$$ = "none" == $value$$244$$ || "single" == $value$$244$$ || "multiple" == $value$$244$$ : "drillMode" == $key$$102$$ ? $valid$$8$$ = "collapsible" == $value$$244$$ || "none" == $value$$244$$ : "scrollPolicy" == $key$$102$$ ? $valid$$8$$ = "auto" == $value$$244$$ || "loadMoreOnScroll" == $value$$244$$ : "groupHeaderPosition" == $key$$102$$ && ($valid$$8$$ = "static" == $value$$244$$ || "sticky" == $value$$244$$);
    if ($valid$$8$$) {
      this._super($key$$102$$, $value$$244$$);
    } else {
      throw "Invalid value: " + $value$$244$$ + " for key: " + $key$$102$$;
    }
  }, $_NotifyDetached$:function() {
    this.$listview$.$notifyDetached$();
  }, $_NotifyShown$:function() {
  }, widget:function() {
    return this.$listview$.$getRootElement$();
  }, refresh:function() {
    this._super();
    this.$listview$.refresh();
    this.$_fireIndexerModelChangeEvent$();
  }, whenReady:function() {
    return this.$listview$.whenReady();
  }, getNodeBySubId:function($locator$$27$$) {
    return this.$listview$.getNodeBySubId($locator$$27$$);
  }, getSubIdByNode:function($node$$72$$) {
    return this.$listview$.getSubIdByNode($node$$72$$);
  }, getContextByNode:function($node$$73$$) {
    return this.$listview$.getContextByNode($node$$73$$);
  }, expand:function($key$$103$$, $vetoable$$) {
    this.$listview$.$expandKey$($key$$103$$, $vetoable$$, !0, !0);
  }, collapse:function($key$$104$$, $vetoable$$1$$) {
    this.$listview$.$collapseKey$($key$$104$$, $vetoable$$1$$, !0);
  }, getExpanded:function() {
    return this.$listview$.getExpanded();
  }, getIndexerModel:function() {
    null == this.$indexerModel$ && $oj$$19$$.$ListViewIndexerModel$ && (this.$indexerModel$ = new $oj$$19$$.$ListViewIndexerModel$(this.$listview$));
    return this.$indexerModel$;
  }, $_fireIndexerModelChangeEvent$:function() {
    null != this.$indexerModel$ && this.$indexerModel$.$fireChangeEvent$ && this.$indexerModel$.$fireChangeEvent$();
  }});
});
