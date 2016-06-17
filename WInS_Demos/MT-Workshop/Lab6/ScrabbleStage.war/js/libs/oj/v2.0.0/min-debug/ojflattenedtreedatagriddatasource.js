/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojrowexpander"], function($oj$$42$$) {
  $oj$$42$$.$FlattenedTreeCellSet$ = function $$oj$$42$$$$FlattenedTreeCellSet$$($startRow$$3$$, $endRow$$2$$, $startColumn$$3$$, $endColumn$$2$$, $nodeSet$$27$$, $columns$$24$$) {
    $oj$$42$$.$Assert$.$assertArrayOrNull$($columns$$24$$);
    this.$m_startRow$ = $startRow$$3$$;
    this.$m_endRow$ = $endRow$$2$$;
    this.$m_startColumn$ = $startColumn$$3$$;
    this.$m_endColumn$ = $endColumn$$2$$;
    this.$m_nodeSet$ = $nodeSet$$27$$;
    this.$m_columns$ = $columns$$24$$;
  };
  $goog$exportPath_$$("FlattenedTreeCellSet", $oj$$42$$.$FlattenedTreeCellSet$, $oj$$42$$);
  $oj$$42$$.$FlattenedTreeCellSet$.prototype.getData = function $$oj$$42$$$$FlattenedTreeCellSet$$$getData$($indexes$$16_row$$45_rowData$$5$$) {
    var $column$$26_columnKey$$6_relIndex$$2$$;
    $column$$26_columnKey$$6_relIndex$$2$$ = this.$_getRelIndexes$($indexes$$16_row$$45_rowData$$5$$);
    if (null == $column$$26_columnKey$$6_relIndex$$2$$) {
      return null;
    }
    $indexes$$16_row$$45_rowData$$5$$ = $column$$26_columnKey$$6_relIndex$$2$$[0];
    $column$$26_columnKey$$6_relIndex$$2$$ = $column$$26_columnKey$$6_relIndex$$2$$[1];
    $oj$$42$$.$Assert$.assert($indexes$$16_row$$45_rowData$$5$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$26_columnKey$$6_relIndex$$2$$ < this.$m_columns$.length);
    $column$$26_columnKey$$6_relIndex$$2$$ = this.$m_columns$[$column$$26_columnKey$$6_relIndex$$2$$];
    $indexes$$16_row$$45_rowData$$5$$ = this.$m_nodeSet$.getData($indexes$$16_row$$45_rowData$$5$$);
    return null != $indexes$$16_row$$45_rowData$$5$$ ? $indexes$$16_row$$45_rowData$$5$$.get ? $indexes$$16_row$$45_rowData$$5$$.get($column$$26_columnKey$$6_relIndex$$2$$) : $indexes$$16_row$$45_rowData$$5$$[$column$$26_columnKey$$6_relIndex$$2$$] : null;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getData", {getData:$oj$$42$$.$FlattenedTreeCellSet$.prototype.getData});
  $oj$$42$$.$FlattenedTreeCellSet$.prototype.getMetadata = function $$oj$$42$$$$FlattenedTreeCellSet$$$getMetadata$($indexes$$17_metadata$$14_row$$46$$) {
    var $column$$27_columnKey$$7_relIndex$$3$$;
    $column$$27_columnKey$$7_relIndex$$3$$ = this.$_getRelIndexes$($indexes$$17_metadata$$14_row$$46$$);
    if (null == $column$$27_columnKey$$7_relIndex$$3$$) {
      return null;
    }
    $indexes$$17_metadata$$14_row$$46$$ = $column$$27_columnKey$$7_relIndex$$3$$[0];
    $column$$27_columnKey$$7_relIndex$$3$$ = $column$$27_columnKey$$7_relIndex$$3$$[1];
    $oj$$42$$.$Assert$.assert($indexes$$17_metadata$$14_row$$46$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$27_columnKey$$7_relIndex$$3$$ < this.$m_columns$.length);
    $column$$27_columnKey$$7_relIndex$$3$$ = this.$m_columns$[$column$$27_columnKey$$7_relIndex$$3$$];
    $indexes$$17_metadata$$14_row$$46$$ = this.$m_nodeSet$.getMetadata($indexes$$17_metadata$$14_row$$46$$);
    $indexes$$17_metadata$$14_row$$46$$.keys = {row:$indexes$$17_metadata$$14_row$$46$$.key, column:$column$$27_columnKey$$7_relIndex$$3$$};
    return $indexes$$17_metadata$$14_row$$46$$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getMetadata", {getMetadata:$oj$$42$$.$FlattenedTreeCellSet$.prototype.getMetadata});
  $oj$$42$$.$FlattenedTreeCellSet$.prototype.$_getRelIndexes$ = function $$oj$$42$$$$FlattenedTreeCellSet$$$$_getRelIndexes$$($column$$28_indexes$$18$$) {
    var $row$$47$$;
    $oj$$42$$.$Assert$.$assertObject$($column$$28_indexes$$18$$);
    if (null == this.$m_nodeSet$ || 0 == this.$m_nodeSet$.length) {
      return null;
    }
    $row$$47$$ = $column$$28_indexes$$18$$.row - this.$m_startRow$ + this.$m_nodeSet$.$getStart$();
    $column$$28_indexes$$18$$ = $column$$28_indexes$$18$$.column;
    $oj$$42$$.$Assert$.$assertNumber$($row$$47$$, null);
    $oj$$42$$.$Assert$.$assertNumber$($column$$28_indexes$$18$$, null);
    $oj$$42$$.$Assert$.assert(0 <= $row$$47$$ && 0 <= $column$$28_indexes$$18$$);
    return[$row$$47$$, $column$$28_indexes$$18$$];
  };
  $oj$$42$$.$FlattenedTreeCellSet$.prototype.$getStart$ = function $$oj$$42$$$$FlattenedTreeCellSet$$$$getStart$$($axis$$46$$) {
    return "row" === $axis$$46$$ ? this.$m_startRow$ : "column" === $axis$$46$$ ? this.$m_startColumn$ : 0;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getStart", {$getStart$:$oj$$42$$.$FlattenedTreeCellSet$.prototype.$getStart$});
  $oj$$42$$.$FlattenedTreeCellSet$.prototype.$getCount$ = function $$oj$$42$$$$FlattenedTreeCellSet$$$$getCount$$($axis$$47$$) {
    return "row" === $axis$$47$$ ? Math.min(this.$m_endRow$ - this.$m_startRow$, this.$m_nodeSet$.$getCount$()) : "column" === $axis$$47$$ ? this.$m_endColumn$ - this.$m_startColumn$ : 0;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getCount", {$getCount$:$oj$$42$$.$FlattenedTreeCellSet$.prototype.$getCount$});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$($treeDataSource$$2$$, $options$$339$$) {
    $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.constructor.call(this, $treeDataSource$$2$$, $options$$339$$);
  };
  $goog$exportPath_$$("FlattenedTreeDataGridDataSource", $oj$$42$$.$FlattenedTreeDataGridDataSource$, $oj$$42$$);
  $oj$$42$$.$Object$.$createSubclass$($oj$$42$$.$FlattenedTreeDataGridDataSource$, $oj$$42$$.$FlattenedTreeDataSource$, "oj.FlattenedTreeDataGridDataSource");
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.Init = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$Init$() {
    $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.Init.call(this);
    this.$m_columns$ = $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "columns");
    this.$m_rowHeader$ = $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "rowHeader");
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.Init", {Init:$oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.Init});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$getCountPrecision$$($axis$$48$$) {
    return "row" === $axis$$48$$ ? "estimate" : "actual";
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$getCount$$($axis$$49$$) {
    return "row" === $axis$$49$$ ? -1 : "column" === $axis$$49$$ ? this.$m_columns$.length : 0;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCount", {$getCount$:$oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$fetchHeaders$$($headerRange$$6$$, $callbacks$$43$$, $callbackObjects$$21$$) {
    var $axis$$50_columnCount$$3$$, $headerSet$$2$$;
    $axis$$50_columnCount$$3$$ = $headerRange$$6$$.axis;
    if ("column" === $axis$$50_columnCount$$3$$) {
      $axis$$50_columnCount$$3$$ = $headerRange$$6$$.start + $headerRange$$6$$.count, $axis$$50_columnCount$$3$$ > this.$getCount$("column") && ($axis$$50_columnCount$$3$$ = this.$getCount$("column") - $headerRange$$6$$.start), $headerSet$$2$$ = new $oj$$42$$.$FlattenedTreeHeaderSet$($headerRange$$6$$.start, $axis$$50_columnCount$$3$$, this.$m_columns$);
    } else {
      if ("row" === $axis$$50_columnCount$$3$$) {
        if (null != this.$m_rowHeader$) {
          this.$m_fetchHeaderRequest$ = {range:$headerRange$$6$$, callbacks:$callbacks$$43$$, callbackObjects:$callbackObjects$$21$$};
          return;
        }
        $headerSet$$2$$ = new $oj$$42$$.$ArrayHeaderSet$($headerRange$$6$$.start, $headerRange$$6$$.start, $axis$$50_columnCount$$3$$, null);
      }
    }
    null != $headerSet$$2$$ && null != $callbacks$$43$$ && null != $callbacks$$43$$.success && (null == $callbackObjects$$21$$ && ($callbackObjects$$21$$ = {}), $callbacks$$43$$.success.call($callbackObjects$$21$$.success, $headerSet$$2$$, $headerRange$$6$$));
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$fetchCells$$($cellRanges$$7$$, $callbacks$$44$$, $callbackObjects$$22$$) {
    var $i$$356$$, $cellRange$$4$$, $rowStart$$6$$, $rowCount$$8$$;
    for ($i$$356$$ = 0;$i$$356$$ < $cellRanges$$7$$.length;$i$$356$$++) {
      if ($cellRange$$4$$ = $cellRanges$$7$$[$i$$356$$], "row" == $cellRange$$4$$.axis) {
        $rowStart$$6$$ = $cellRange$$4$$.start;
        $rowCount$$8$$ = $cellRange$$4$$.count;
        break;
      }
    }
    $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.$fetchRows$.call(this, {start:$rowStart$$6$$, count:$rowCount$$8$$}, {success:function($nodeSet$$28$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$28$$, $cellRanges$$7$$, $callbacks$$44$$, $callbackObjects$$22$$, 0);
    }.bind(this), error:function($status$$26$$) {
      this.$_handleFetchRowsError$($status$$26$$, {start:$rowStart$$6$$, count:$rowCount$$8$$}, $callbacks$$44$$, $callbackObjects$$22$$);
    }.bind(this)});
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.keys = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$keys$($indexes$$19$$) {
    var $rowIndex$$12$$, $colIndex$$;
    $rowIndex$$12$$ = $indexes$$19$$.row;
    $colIndex$$ = $indexes$$19$$.column;
    return new Promise(function($resolve$$52$$) {
      $rowIndex$$12$$ > $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getFetchedRange$.call(this).end || $colIndex$$ > this.$m_columns$.length ? $resolve$$52$$(null) : $resolve$$52$$({row:$oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.getKey.call(this, $rowIndex$$12$$), column:this.$m_columns$[$colIndex$$]});
    }.bind(this));
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.keys", {keys:$oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.keys});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$indexes$$($keys$$39$$) {
    var $rowIndex$$13$$, $colIndex$$1$$, $rowKey$$40$$, $colKey$$, $i$$357$$;
    $rowKey$$40$$ = $keys$$39$$.row;
    $colKey$$ = $keys$$39$$.column;
    return new Promise(function($resolve$$53$$) {
      $rowIndex$$13$$ = $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getIndex$.call(this, $rowKey$$40$$);
      for ($i$$357$$ = 0;$i$$357$$ < this.$m_columns$.length;$i$$357$$++) {
        if (this.$m_columns$[$i$$357$$] === $colKey$$) {
          $colIndex$$1$$ = $i$$357$$;
          break;
        }
      }
      0 <= $rowIndex$$13$$ || 0 <= $colIndex$$1$$ ? $resolve$$53$$({row:$rowIndex$$13$$, column:$colIndex$$1$$}) : $resolve$$53$$(null);
    }.bind(this));
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.indexes", {$indexes$:$oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.sort = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$sort$($criteria$$7$$, $callbacks$$45$$, $callbackObjects$$23$$) {
    return $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).sort($criteria$$7$$, {success:function() {
      this.$_handleSortSuccess$($callbacks$$45$$, $callbackObjects$$23$$);
    }.bind(this), error:$callbacks$$45$$.error});
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.sort", {sort:$oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.sort});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleSortSuccess$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$_handleSortSuccess$$($callbacks$$46$$, $callbackObjects$$24$$) {
    this.refresh();
    $callbacks$$46$$.success && (null == $callbackObjects$$24$$ && ($callbackObjects$$24$$ = {}), $callbacks$$46$$.success.call($callbackObjects$$24$$.success));
  };
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.move = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$move$($rowToMove$$8$$, $referenceRow$$8$$, $position$$24$$, $callbacks$$47$$) {
    $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).move($rowToMove$$8$$, $referenceRow$$8$$, $position$$24$$, $callbacks$$47$$);
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.move", {move:$oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.move});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$getCapability$($feature$$13$$) {
    return "default" === $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).getCapability($feature$$13$$) ? "column" : "none";
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability});
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$insertMetadata$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$insertMetadata$$($key$$158$$, $metadata$$15$$) {
    $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.$insertMetadata$.call(this, $key$$158$$, $metadata$$15$$);
  };
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsSuccess$$($cellSet$$2_nodeSet$$29$$, $cellRanges$$8$$, $callbacks$$48$$, $callbackObjects$$25$$) {
    var $headerRange$$7_i$$358$$, $cellRange$$5$$, $rowStart$$7$$, $rowCount$$9$$, $columnStart$$, $columnCount$$4$$;
    for ($headerRange$$7_i$$358$$ = 0;$headerRange$$7_i$$358$$ < $cellRanges$$8$$.length;$headerRange$$7_i$$358$$++) {
      $cellRange$$5$$ = $cellRanges$$8$$[$headerRange$$7_i$$358$$], "row" == $cellRange$$5$$.axis ? ($rowStart$$7$$ = $cellRange$$5$$.start, $rowCount$$9$$ = $cellRange$$5$$.count) : "column" == $cellRange$$5$$.axis && ($columnStart$$ = $cellRange$$5$$.start, $columnCount$$4$$ = $cellRange$$5$$.count, $columnStart$$ + $columnCount$$4$$ > this.$getCount$("column") && ($columnCount$$4$$ = this.$getCount$("column") - $columnStart$$));
    }
    this.$m_fetchHeaderRequest$ && ($headerRange$$7_i$$358$$ = this.$m_fetchHeaderRequest$.range, $headerRange$$7_i$$358$$.start == $rowStart$$7$$ && $headerRange$$7_i$$358$$.count == $rowCount$$9$$ && this.$_handleRowHeaderFetchSuccess$($cellSet$$2_nodeSet$$29$$, $headerRange$$7_i$$358$$, this.$m_fetchHeaderRequest$.callbacks, this.$m_fetchHeaderRequest$.callbackObjects), this.$m_fetchHeaderRequest$ = null);
    $cellSet$$2_nodeSet$$29$$ = new $oj$$42$$.$FlattenedTreeCellSet$($rowStart$$7$$, $rowStart$$7$$ + $rowCount$$9$$, $columnStart$$, $columnStart$$ + $columnCount$$4$$, $cellSet$$2_nodeSet$$29$$, this.$m_columns$);
    $callbacks$$48$$.success && (null == $callbackObjects$$25$$ && ($callbackObjects$$25$$ = {}), $callbacks$$48$$.success.call($callbackObjects$$25$$.success, $cellSet$$2_nodeSet$$29$$, $cellRanges$$8$$));
  };
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsError$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsError$$($status$$27$$, $headerCallbacks_range$$17$$, $callbacks$$49$$, $callbackObjects$$26$$) {
    var $headerCallbackObjects_headerRange$$8$$;
    this.$m_fetchHeaderRequest$ && ($headerCallbackObjects_headerRange$$8$$ = this.$m_fetchHeaderRequest$.range, $headerCallbackObjects_headerRange$$8$$.start == $headerCallbacks_range$$17$$.start && $headerCallbackObjects_headerRange$$8$$.count == $headerCallbacks_range$$17$$.count && ($headerCallbacks_range$$17$$ = this.$m_fetchHeaderRequest$.callbacks, $headerCallbackObjects_headerRange$$8$$ = this.$m_fetchHeaderRequest$.callbackObjects, $headerCallbacks_range$$17$$.error && (null == $headerCallbackObjects_headerRange$$8$$ && 
    ($headerCallbackObjects_headerRange$$8$$ = {}), $headerCallbacks_range$$17$$.error.call($headerCallbackObjects_headerRange$$8$$.error, $status$$27$$))), this.$m_fetchHeaderRequest$ = null);
    $callbacks$$49$$.error && (null == $callbackObjects$$26$$ && ($callbackObjects$$26$$ = {}), $callbacks$$49$$.success.call($callbackObjects$$26$$.error, $status$$27$$));
  };
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$3_nodeSet$$30$$, $headerRange$$9$$, $callbacks$$50$$, $callbackObjects$$27$$) {
    $headerSet$$3_nodeSet$$30$$ = new $oj$$42$$.$FlattenedTreeHeaderSet$($headerRange$$9$$.start, $headerRange$$9$$.start + $headerRange$$9$$.count, this.$m_columns$, $headerSet$$3_nodeSet$$30$$, this.$m_rowHeader$);
    $callbacks$$50$$.success && (null == $callbackObjects$$27$$ && ($callbackObjects$$27$$ = {}), $callbacks$$50$$.success.call($callbackObjects$$27$$.success, $headerSet$$3_nodeSet$$30$$, $headerRange$$9$$));
  };
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$insertRows$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$insertRows$$($event$$489_insertAtIndex$$1$$, $cellSet$$3_insertAtRowKey$$, $nodeSet$$31$$) {
    var $headerSet$$4$$, $i$$359$$, $keys$$40$$, $indexes$$20$$;
    $headerSet$$4$$ = null;
    this.$m_rowHeader$ && ($headerSet$$4$$ = new $oj$$42$$.$FlattenedTreeHeaderSet$($event$$489_insertAtIndex$$1$$, $event$$489_insertAtIndex$$1$$ + $nodeSet$$31$$.$getCount$(), this.$m_columns$, $nodeSet$$31$$, this.$m_rowHeader$));
    $cellSet$$3_insertAtRowKey$$ = new $oj$$42$$.$FlattenedTreeCellSet$($event$$489_insertAtIndex$$1$$, $event$$489_insertAtIndex$$1$$ + $nodeSet$$31$$.$getCount$(), 0, this.$m_columns$.length, $nodeSet$$31$$, this.$m_columns$);
    $keys$$40$$ = [];
    $indexes$$20$$ = [];
    for ($i$$359$$ = 0;$i$$359$$ < $nodeSet$$31$$.$getCount$();$i$$359$$++) {
      $keys$$40$$.push({row:this.$_getEntry$($event$$489_insertAtIndex$$1$$ + $i$$359$$).key}), $indexes$$20$$.push({row:$event$$489_insertAtIndex$$1$$ + $i$$359$$, column:-1});
    }
    $event$$489_insertAtIndex$$1$$ = {source:this, operation:"insert"};
    $event$$489_insertAtIndex$$1$$.result = $cellSet$$3_insertAtRowKey$$;
    $headerSet$$4$$ && ($event$$489_insertAtIndex$$1$$.header = $headerSet$$4$$);
    $event$$489_insertAtIndex$$1$$.keys = $keys$$40$$;
    $event$$489_insertAtIndex$$1$$.indexes = $indexes$$20$$;
    $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$489_insertAtIndex$$1$$);
  };
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$removeRows$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$removeRows$$($event$$490_rowKeys$$1$$) {
    var $keys$$41$$, $i$$360$$, $indexes$$21$$;
    $keys$$41$$ = [];
    $indexes$$21$$ = [];
    for ($i$$360$$ = 0;$i$$360$$ < $event$$490_rowKeys$$1$$.length;$i$$360$$++) {
      $keys$$41$$.push({row:$event$$490_rowKeys$$1$$[$i$$360$$].key}), $indexes$$21$$.push({row:$event$$490_rowKeys$$1$$[$i$$360$$].index, column:-1});
    }
    $event$$490_rowKeys$$1$$ = {source:this, operation:"delete"};
    $event$$490_rowKeys$$1$$.keys = $keys$$41$$;
    $event$$490_rowKeys$$1$$.indexes = $indexes$$21$$;
    $oj$$42$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$490_rowKeys$$1$$);
  };
  $oj$$42$$.$FlattenedTreeDataGridDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$42$$$$FlattenedTreeDataGridDataSource$$$$handleMaxCountReached$$($range$$18$$, $callbacks$$51$$) {
    $callbacks$$51$$.success.call(null, new $oj$$42$$.$EmptyNodeSet$(null, $range$$18$$.start));
  };
  $oj$$42$$.$FlattenedTreeHeaderSet$ = function $$oj$$42$$$$FlattenedTreeHeaderSet$$($start$$56$$, $end$$19$$, $headers$$5$$, $nodeSet$$32$$, $rowHeader$$2$$) {
    $oj$$42$$.$Assert$.$assertArrayOrNull$($headers$$5$$);
    this.$m_start$ = $start$$56$$;
    this.$m_end$ = $end$$19$$;
    this.$m_headers$ = $headers$$5$$;
    this.$m_nodeSet$ = $nodeSet$$32$$;
    this.$m_rowHeader$ = $rowHeader$$2$$;
  };
  $goog$exportPath_$$("FlattenedTreeHeaderSet", $oj$$42$$.$FlattenedTreeHeaderSet$, $oj$$42$$);
  $oj$$42$$.$FlattenedTreeHeaderSet$.prototype.getData = function $$oj$$42$$$$FlattenedTreeHeaderSet$$$getData$($index$$217$$, $level$$34$$) {
    var $rowData$$6$$;
    $oj$$42$$.$Assert$.assert($index$$217$$ <= this.$m_end$ && $index$$217$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$34$$ || 0 == $level$$34$$, "level out of bounds");
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? ($rowData$$6$$ = this.$m_nodeSet$.getData($index$$217$$ - this.$m_start$ + this.$m_nodeSet$.$getStart$()), null != $rowData$$6$$ ? $rowData$$6$$.get ? $rowData$$6$$.get(this.$m_rowHeader$) : $rowData$$6$$[this.$m_rowHeader$] : null) : this.$m_headers$[$index$$217$$];
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getData", {getData:$oj$$42$$.$FlattenedTreeHeaderSet$.prototype.getData});
  $oj$$42$$.$FlattenedTreeHeaderSet$.prototype.getMetadata = function $$oj$$42$$$$FlattenedTreeHeaderSet$$$getMetadata$($index$$218$$, $level$$35$$) {
    $oj$$42$$.$Assert$.assert($index$$218$$ <= this.$m_end$ && $index$$218$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$35$$ || 0 == $level$$35$$, "level out of bounds");
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? this.$m_nodeSet$.getMetadata($index$$218$$ - this.$m_start$ + this.$m_nodeSet$.$getStart$()) : {key:this.getData($index$$218$$)};
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$42$$.$FlattenedTreeHeaderSet$.prototype.getMetadata});
  $oj$$42$$.$FlattenedTreeHeaderSet$.prototype.$getCount$ = function $$oj$$42$$$$FlattenedTreeHeaderSet$$$$getCount$$() {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? Math.min(this.$m_nodeSet$.$getCount$(), this.$m_end$ - this.$m_start$) : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getCount", {$getCount$:$oj$$42$$.$FlattenedTreeHeaderSet$.prototype.$getCount$});
  $oj$$42$$.$FlattenedTreeHeaderSet$.prototype.$getLevelCount$ = function $$oj$$42$$$$FlattenedTreeHeaderSet$$$$getLevelCount$$() {
    return 0 < this.$getCount$() ? 1 : 0;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$42$$.$FlattenedTreeHeaderSet$.prototype.$getLevelCount$});
  $oj$$42$$.$FlattenedTreeHeaderSet$.prototype.$getExtent$ = function $$oj$$42$$$$FlattenedTreeHeaderSet$$$$getExtent$$($index$$219$$, $level$$36$$) {
    $oj$$42$$.$Assert$.assert($index$$219$$ <= this.$m_end$ && $index$$219$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$36$$ || 0 == $level$$36$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getExtent", {$getExtent$:$oj$$42$$.$FlattenedTreeHeaderSet$.prototype.$getExtent$});
  $oj$$42$$.$FlattenedTreeHeaderSet$.prototype.$getDepth$ = function $$oj$$42$$$$FlattenedTreeHeaderSet$$$$getDepth$$($index$$220$$, $level$$37$$) {
    $oj$$42$$.$Assert$.assert($index$$220$$ <= this.$m_end$ && $index$$220$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$37$$ || 0 == $level$$37$$, "level out of bounds");
    return 1;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getDepth", {$getDepth$:$oj$$42$$.$FlattenedTreeHeaderSet$.prototype.$getDepth$});
});
