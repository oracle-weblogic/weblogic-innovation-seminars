/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$47$$) {
  $oj$$47$$.$JsonNodeSet$ = function $$oj$$47$$$$JsonNodeSet$$($startNode$$, $endNode$$, $data$$163$$, $currKey$$1$$) {
    $oj$$47$$.$Assert$.$assertNumber$($startNode$$, null);
    $oj$$47$$.$Assert$.$assertNumber$($endNode$$, null);
    this.$m_key$ = $currKey$$1$$;
    this.$m_startNode$ = $startNode$$;
    this.$m_endNode$ = $endNode$$;
    this.$m_nodes$ = $data$$163$$;
  };
  $goog$exportPath_$$("JsonNodeSet", $oj$$47$$.$JsonNodeSet$, $oj$$47$$);
  $oj$$47$$.$JsonNodeSet$.prototype.getParent = function $$oj$$47$$$$JsonNodeSet$$$getParent$() {
    return this.$m_key$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getParent", {getParent:$oj$$47$$.$JsonNodeSet$.prototype.getParent});
  $oj$$47$$.$JsonNodeSet$.prototype.$getStart$ = function $$oj$$47$$$$JsonNodeSet$$$$getStart$$() {
    return this.$m_startNode$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getStart", {$getStart$:$oj$$47$$.$JsonNodeSet$.prototype.$getStart$});
  $oj$$47$$.$JsonNodeSet$.prototype.$getCount$ = function $$oj$$47$$$$JsonNodeSet$$$$getCount$$() {
    return Math.max(0, this.$m_endNode$ - this.$m_startNode$);
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getCount", {$getCount$:$oj$$47$$.$JsonNodeSet$.prototype.$getCount$});
  $oj$$47$$.$JsonNodeSet$.prototype.getData = function $$oj$$47$$$$JsonNodeSet$$$getData$($index$$228$$) {
    $oj$$47$$.$Assert$.assert($index$$228$$ <= this.$m_endNode$ && $index$$228$$ >= this.$m_startNode$);
    $index$$228$$ -= this.$m_startNode$;
    return this.$m_nodes$[$index$$228$$] ? this.$m_nodes$[$index$$228$$].attr : null;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$47$$.$JsonNodeSet$.prototype.getData});
  $oj$$47$$.$JsonNodeSet$.prototype.getMetadata = function $$oj$$47$$$$JsonNodeSet$$$getMetadata$($index$$229$$) {
    var $metadata$$16$$ = [];
    $oj$$47$$.$Assert$.assert($index$$229$$ <= this.$m_endNode$ && $index$$229$$ >= this.$m_startNode$);
    $index$$229$$ -= this.$m_startNode$;
    $metadata$$16$$.key = this.$m_nodes$[$index$$229$$].id ? this.$m_nodes$[$index$$229$$].id : this.$m_nodes$[$index$$229$$].attr.id;
    $metadata$$16$$.leaf = this.$m_nodes$[$index$$229$$].$leaf$;
    $metadata$$16$$.depth = this.$m_nodes$[$index$$229$$].depth;
    null == $metadata$$16$$.leaf && ($metadata$$16$$.leaf = this.$m_nodes$[$index$$229$$].children && 0 < this.$m_nodes$[$index$$229$$].children.length ? !1 : !0);
    return $metadata$$16$$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getMetadata", {getMetadata:$oj$$47$$.$JsonNodeSet$.prototype.getMetadata});
  $oj$$47$$.$JsonNodeSet$.prototype.$_updateDepth$ = function $$oj$$47$$$$JsonNodeSet$$$$_updateDepth$$($currChild$$2$$, $offset$$26$$) {
    var $i$$376$$;
    $offset$$26$$++;
    $currChild$$2$$.depth = $offset$$26$$;
    if ($currChild$$2$$.children && 0 != $currChild$$2$$.children.length) {
      for ($i$$376$$ = 0;$i$$376$$ < $currChild$$2$$.children.length;$i$$376$$++) {
        this.$_updateDepth$($currChild$$2$$.children[$i$$376$$], $offset$$26$$);
      }
    }
  };
  $oj$$47$$.$JsonNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$47$$$$JsonNodeSet$$$$getChildNodeSet$$($index$$230_key$$162$$) {
    var $results$$12$$, $depth$$27$$, $i$$377$$;
    $oj$$47$$.$Assert$.assert($index$$230_key$$162$$ <= this.$m_endNode$ && $index$$230_key$$162$$ >= this.$m_startNode$);
    $index$$230_key$$162$$ -= this.$m_startNode$;
    $depth$$27$$ = this.$m_nodes$[$index$$230_key$$162$$].depth;
    $results$$12$$ = this.$m_nodes$[$index$$230_key$$162$$].children;
    if (0 == $results$$12$$.length) {
      return null;
    }
    $index$$230_key$$162$$ = this.$m_nodes$[$index$$230_key$$162$$].id ? this.$m_nodes$[$index$$230_key$$162$$].id : this.$m_nodes$[$index$$230_key$$162$$].attr.id;
    for ($i$$377$$ = 0;$i$$377$$ < $results$$12$$.length;$i$$377$$++) {
      this.$_updateDepth$($results$$12$$[$i$$377$$], $depth$$27$$);
    }
    return new $oj$$47$$.$JsonNodeSet$(0, $results$$12$$.length, $results$$12$$, $index$$230_key$$162$$);
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$47$$.$JsonNodeSet$.prototype.$getChildNodeSet$});
  $oj$$47$$.$_JsonTreeNodeDataSource$ = function $$oj$$47$$$$_JsonTreeNodeDataSource$$() {
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.$leaf$ = this.attr = this.title = null;
  };
  $oj$$47$$.$_JsonTreeNodeDataSource$.prototype.$_ascending$ = function $$oj$$47$$$$_JsonTreeNodeDataSource$$$$_ascending$$($key$$163$$) {
    return function($a$$120$$, $b$$74$$) {
      return $a$$120$$.attr && $b$$74$$.attr && $a$$120$$.attr[$key$$163$$] && $b$$74$$.attr[$key$$163$$] ? $a$$120$$.attr[$key$$163$$] < $b$$74$$.attr[$key$$163$$] ? -1 : $a$$120$$.attr[$key$$163$$] === $b$$74$$.attr[$key$$163$$] ? 0 : 1 : $a$$120$$[$key$$163$$] < $b$$74$$[$key$$163$$] ? -1 : $a$$120$$[$key$$163$$] === $b$$74$$[$key$$163$$] ? 0 : 1;
    };
  };
  $oj$$47$$.$_JsonTreeNodeDataSource$.prototype.$_descending$ = function $$oj$$47$$$$_JsonTreeNodeDataSource$$$$_descending$$($key$$164$$) {
    return function($a$$121$$, $b$$75$$) {
      return $a$$121$$.attr && $b$$75$$.attr && $a$$121$$.attr[$key$$164$$] && $b$$75$$.attr[$key$$164$$] ? $a$$121$$.attr[$key$$164$$] < $b$$75$$.attr[$key$$164$$] ? 1 : $a$$121$$.attr[$key$$164$$] === $b$$75$$.attr[$key$$164$$] ? 0 : -1 : $a$$121$$[$key$$164$$] < $b$$75$$[$key$$164$$] ? 1 : $a$$121$$[$key$$164$$] === $b$$75$$[$key$$164$$] ? 0 : -1;
    };
  };
  $oj$$47$$.$_JsonTreeNodeDataSource$.prototype.$_sortRecursive$ = function $$oj$$47$$$$_JsonTreeNodeDataSource$$$$_sortRecursive$$($criteria$$9$$) {
    var $i$$378_key$$165$$ = $criteria$$9$$.key;
    "ascending" === $criteria$$9$$.direction ? this.children.sort(this.$_ascending$($i$$378_key$$165$$)) : "descending" === $criteria$$9$$.direction && this.children.sort(this.$_descending$($i$$378_key$$165$$));
    for (var $i$$378_key$$165$$ = 0, $l$$11$$ = this.children.length;$i$$378_key$$165$$ < $l$$11$$;$i$$378_key$$165$$++) {
      this.children[$i$$378_key$$165$$].$_sortRecursive$($criteria$$9$$);
    }
  };
  $oj$$47$$.$JsonTreeDataSource$ = function $$oj$$47$$$$JsonTreeDataSource$$($data$$164$$) {
    var $tree$$;
    $tree$$ = new $oj$$47$$.$_JsonTreeNodeDataSource$;
    $data$$164$$.id || ($tree$$.id = "root");
    this.data = this.$_createTreeDataSource$({count:0}, $tree$$, $data$$164$$);
    $oj$$47$$.$JsonTreeDataSource$.$superclass$.constructor.call(this, $tree$$);
  };
  $goog$exportPath_$$("JsonTreeDataSource", $oj$$47$$.$JsonTreeDataSource$, $oj$$47$$);
  $oj$$47$$.$Object$.$createSubclass$($oj$$47$$.$JsonTreeDataSource$, $oj$$47$$.$TreeDataSource$, "oj.JsonTreeDataSource");
  $oj$$47$$.$JsonTreeDataSource$.prototype.Init = function $$oj$$47$$$$JsonTreeDataSource$$$Init$() {
    $oj$$47$$.$JsonTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.Init", {Init:$oj$$47$$.$JsonTreeDataSource$.prototype.Init});
  $oj$$47$$.$JsonTreeDataSource$.prototype.$_createTreeDataSource$ = function $$oj$$47$$$$JsonTreeDataSource$$$$_createTreeDataSource$$($c$$47$$, $target$$91$$, $source$$12$$, $depth$$28$$) {
    var $children$$12$$, $node$$95$$, $child$$11$$, $prop$$72$$, $propr$$, $prp$$, $j$$45$$;
    $depth$$28$$ || ($depth$$28$$ = 0);
    for ($prop$$72$$ in $source$$12$$) {
      if ("children" == $prop$$72$$ || 0 == $depth$$28$$ && $source$$12$$ instanceof Array) {
        for ($children$$12$$ = 0 == $depth$$28$$ && $source$$12$$ instanceof Array ? $source$$12$$ : $source$$12$$[$prop$$72$$], $depth$$28$$++, $j$$45$$ = 0;$j$$45$$ < $children$$12$$.length;$j$$45$$++) {
          $child$$11$$ = $children$$12$$[$j$$45$$];
          $node$$95$$ = new $oj$$47$$.$_JsonTreeNodeDataSource$;
          $child$$11$$.id || ($c$$47$$.count++, $child$$11$$.attr ? $child$$11$$.attr.id || ($child$$11$$.attr.id = "rid_" + $c$$47$$.count) : $node$$95$$.id = "rid_" + $c$$47$$.count);
          for ($propr$$ in $child$$11$$) {
            for ($prp$$ in $node$$95$$) {
              $propr$$ == $prp$$ && "children" != $propr$$ && ($node$$95$$[$prp$$] = $child$$11$$[$propr$$]), "depth" == $prp$$ && ($node$$95$$[$prp$$] = $depth$$28$$);
            }
          }
          $target$$91$$.children.push($node$$95$$);
          for ($prp$$ in $child$$11$$) {
            "children" == $prp$$ && this.$_createTreeDataSource$($c$$47$$, $target$$91$$.children[$j$$45$$], $child$$11$$, $depth$$28$$);
          }
        }
      }
    }
    return $target$$91$$;
  };
  $oj$$47$$.$JsonTreeDataSource$.prototype.$getChildCount$ = function $$oj$$47$$$$JsonTreeDataSource$$$$getChildCount$$($parent$$42_parentKey$$8$$) {
    $parent$$42_parentKey$$8$$ || ($parent$$42_parentKey$$8$$ = this.data.id);
    $parent$$42_parentKey$$8$$ = this.$_searchTreeById$(this.data, $parent$$42_parentKey$$8$$);
    return $parent$$42_parentKey$$8$$.children ? $parent$$42_parentKey$$8$$.children.length : 0;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$47$$.$JsonTreeDataSource$.prototype.$getChildCount$});
  $oj$$47$$.$JsonTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$47$$$$JsonTreeDataSource$$$$fetchChildren$$($nodeSet$$38_parentKey$$9$$, $i$$379_range$$20$$, $callbacks$$52$$) {
    var $childStart$$, $childEnd$$, $results$$13$$, $parent$$43$$, $node$$96$$;
    $results$$13$$ = [];
    $nodeSet$$38_parentKey$$9$$ || ($nodeSet$$38_parentKey$$9$$ = this.data.id);
    $parent$$43$$ = this.$_searchTreeById$(this.data, $nodeSet$$38_parentKey$$9$$);
    $i$$379_range$$20$$ || ($i$$379_range$$20$$ = [], $i$$379_range$$20$$.start = 0, $i$$379_range$$20$$.count = $parent$$43$$.children.length);
    $i$$379_range$$20$$.count || ($i$$379_range$$20$$.count = $parent$$43$$.children.length);
    $i$$379_range$$20$$.start || ($i$$379_range$$20$$.start = 0);
    $childStart$$ = $i$$379_range$$20$$.start;
    $childEnd$$ = Math.min($parent$$43$$.children.length, $childStart$$ + $i$$379_range$$20$$.count);
    for ($i$$379_range$$20$$ = $childStart$$;$i$$379_range$$20$$ < $childEnd$$;$i$$379_range$$20$$ += 1) {
      $node$$96$$ = new $oj$$47$$.$_JsonTreeNodeDataSource$, $parent$$43$$.children[$i$$379_range$$20$$].attr && ($node$$96$$.attr = $parent$$43$$.children[$i$$379_range$$20$$].attr), $parent$$43$$.children[$i$$379_range$$20$$].id && ($node$$96$$.id = $parent$$43$$.children[$i$$379_range$$20$$].id), $parent$$43$$.children[$i$$379_range$$20$$].depth && ($node$$96$$.depth = $parent$$43$$.children[$i$$379_range$$20$$].depth), $parent$$43$$.children[$i$$379_range$$20$$].title && ($node$$96$$.title = 
      $parent$$43$$.children[$i$$379_range$$20$$].title), $parent$$43$$.children[$i$$379_range$$20$$].parent && ($node$$96$$.parent = $parent$$43$$.children[$i$$379_range$$20$$].parent), $node$$96$$.$leaf$ = 0 < $parent$$43$$.children[$i$$379_range$$20$$].children.length ? !1 : !0, $results$$13$$.push($node$$96$$);
    }
    $nodeSet$$38_parentKey$$9$$ = new $oj$$47$$.$JsonNodeSet$($childStart$$, $childEnd$$, $results$$13$$, $nodeSet$$38_parentKey$$9$$);
    null != $callbacks$$52$$ && null != $callbacks$$52$$.success && $callbacks$$52$$.success.call(null, $nodeSet$$38_parentKey$$9$$);
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$47$$.$JsonTreeDataSource$.prototype.$fetchChildren$});
  $oj$$47$$.$JsonTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$47$$$$JsonTreeDataSource$$$$fetchDescendants$$($parentKey$$10$$, $callbacks$$53$$) {
    var $childEnd$$1_range$$21$$, $childStart$$1_i$$380$$, $nodeSet$$39_results$$14$$, $parent$$44$$;
    $nodeSet$$39_results$$14$$ = [];
    $parentKey$$10$$ || ($parentKey$$10$$ = this.data.id);
    $parent$$44$$ = this.$_searchTreeById$(this.data, $parentKey$$10$$);
    $childEnd$$1_range$$21$$ = [];
    $childEnd$$1_range$$21$$.start = 0;
    $childEnd$$1_range$$21$$.count = $parent$$44$$.children.length;
    $childStart$$1_i$$380$$ = $childEnd$$1_range$$21$$.start;
    for ($childEnd$$1_range$$21$$ = Math.min($parent$$44$$.children.length, $childStart$$1_i$$380$$ + $childEnd$$1_range$$21$$.count);$childStart$$1_i$$380$$ < $childEnd$$1_range$$21$$;$childStart$$1_i$$380$$ += 1) {
      $parent$$44$$.children[$childStart$$1_i$$380$$].$leaf$ = 0 < $parent$$44$$.children[$childStart$$1_i$$380$$].children.length ? !1 : !0, $nodeSet$$39_results$$14$$.push($parent$$44$$.children[$childStart$$1_i$$380$$]);
    }
    $nodeSet$$39_results$$14$$ = new $oj$$47$$.$JsonNodeSet$(0, $nodeSet$$39_results$$14$$.length, $nodeSet$$39_results$$14$$, $parentKey$$10$$);
    null != $callbacks$$53$$ && null != $callbacks$$53$$.success && $callbacks$$53$$.success.call(null, $nodeSet$$39_results$$14$$);
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$47$$.$JsonTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$47$$.$JsonTreeDataSource$.prototype.$moveOK$ = function $$oj$$47$$$$JsonTreeDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$47$$.$JsonTreeDataSource$.prototype.$moveOK$});
  $oj$$47$$.$JsonTreeDataSource$.prototype.move = function $$oj$$47$$$$JsonTreeDataSource$$$move$($moveNode_nodeToMove$$, $refNode$$8_referenceNode$$1$$, $index$$231_position$$26$$, $callbacks$$54$$) {
    var $parent$$45_refNodeKey$$;
    $parent$$45_refNodeKey$$ = $refNode$$8_referenceNode$$1$$;
    if (!$parent$$45_refNodeKey$$ || $parent$$45_refNodeKey$$ == this.data.id) {
      if ("inside" != $index$$231_position$$26$$) {
        $oj$$47$$.$Logger$.log("Error: root can not be the reference node if position equals to " + $index$$231_position$$26$$);
        return;
      }
      $parent$$45_refNodeKey$$ || ($parent$$45_refNodeKey$$ = this.data.id);
    }
    $moveNode_nodeToMove$$ = this.$_searchTreeById$(null, $moveNode_nodeToMove$$);
    this.$_searchTreeById$($moveNode_nodeToMove$$, $parent$$45_refNodeKey$$) ? $oj$$47$$.$Logger$.log("Error: the node to move contains the reference node as its sub-tree.") : ($refNode$$8_referenceNode$$1$$ = this.$_searchTreeById$(null, $parent$$45_refNodeKey$$), $parent$$45_refNodeKey$$ = this.$_getParentById$($parent$$45_refNodeKey$$), this.$_removeFromTree$($moveNode_nodeToMove$$), "inside" == $index$$231_position$$26$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - 
    ($refNode$$8_referenceNode$$1$$.depth + 1)), $refNode$$8_referenceNode$$1$$.children.push($moveNode_nodeToMove$$)) : "before" == $index$$231_position$$26$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $index$$231_position$$26$$ = $parent$$45_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$1$$), -1 < $index$$231_position$$26$$ && (0 != $index$$231_position$$26$$ ? $parent$$45_refNodeKey$$.children.splice($index$$231_position$$26$$ - 
    1, 0, $moveNode_nodeToMove$$) : $parent$$45_refNodeKey$$.children.unshift($moveNode_nodeToMove$$))) : "after" == $index$$231_position$$26$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $index$$231_position$$26$$ = $parent$$45_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$1$$), -1 < $index$$231_position$$26$$ && $parent$$45_refNodeKey$$.children.splice($index$$231_position$$26$$, 0, $moveNode_nodeToMove$$)) : "first" == 
    $index$$231_position$$26$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $parent$$45_refNodeKey$$.children.unshift($moveNode_nodeToMove$$)) : "last" == $index$$231_position$$26$$ && (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $parent$$45_refNodeKey$$.children.push($moveNode_nodeToMove$$)), null != $callbacks$$54$$ && null != $callbacks$$54$$.success && 
    $callbacks$$54$$.success.call(null, this.data));
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.move", {move:$oj$$47$$.$JsonTreeDataSource$.prototype.move});
  $oj$$47$$.$JsonTreeDataSource$.prototype.sort = function $$oj$$47$$$$JsonTreeDataSource$$$sort$($criteria$$10$$, $callbacks$$55$$) {
    var $parent$$46$$;
    $parent$$46$$ = this.$_searchTreeById$(this.data, this.data.id);
    $parent$$46$$.$_sortRecursive$($criteria$$10$$);
    null != $callbacks$$55$$ && null != $callbacks$$55$$.success && $callbacks$$55$$.success.call(null, $parent$$46$$);
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.sort", {sort:$oj$$47$$.$JsonTreeDataSource$.prototype.sort});
  $oj$$47$$.$JsonTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$47$$$$JsonTreeDataSource$$$$getSortCriteria$$() {
    return{key:null, direction:"none"};
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$47$$.$JsonTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$47$$.$JsonTreeDataSource$.prototype.$_getParentById$ = function $$oj$$47$$$$JsonTreeDataSource$$$$_getParentById$$($refNodeKey$$1$$, $currNode$$4$$) {
    var $i$$381$$, $parent$$47$$ = null;
    if ($refNodeKey$$1$$ == this.data.id) {
      return null;
    }
    $currNode$$4$$ || ($currNode$$4$$ = this.data);
    if ($currNode$$4$$.children && 0 < $currNode$$4$$.children.length) {
      for ($i$$381$$ = 0;$i$$381$$ < $currNode$$4$$.children.length;$i$$381$$++) {
        if ($currNode$$4$$.children[$i$$381$$].id && $currNode$$4$$.children[$i$$381$$].id == $refNodeKey$$1$$ || $currNode$$4$$.children[$i$$381$$].attr && $currNode$$4$$.children[$i$$381$$].attr.id == $refNodeKey$$1$$) {
          return $currNode$$4$$;
        }
      }
      for ($i$$381$$ = 0;$i$$381$$ < $currNode$$4$$.children.length && !($parent$$47$$ = this.$_getParentById$($refNodeKey$$1$$, $currNode$$4$$.children[$i$$381$$]));$i$$381$$++) {
      }
    }
    return $parent$$47$$;
  };
  $oj$$47$$.$JsonTreeDataSource$.prototype.$_searchTreeById$ = function $$oj$$47$$$$JsonTreeDataSource$$$$_searchTreeById$$($currChild$$3$$, $parentKey$$12$$) {
    var $i$$382$$, $result$$75$$ = null;
    $currChild$$3$$ || ($currChild$$3$$ = this.data);
    if ($currChild$$3$$.id && $currChild$$3$$.id == $parentKey$$12$$ || $currChild$$3$$.attr && $currChild$$3$$.attr.id == $parentKey$$12$$) {
      return $currChild$$3$$;
    }
    if (null != $currChild$$3$$.children) {
      for ($i$$382$$ = 0;$i$$382$$ < $currChild$$3$$.children.length && !$result$$75$$;$i$$382$$++) {
        $result$$75$$ = $currChild$$3$$.children[$i$$382$$].id && $currChild$$3$$.children[$i$$382$$].id == $parentKey$$12$$ || $currChild$$3$$.children[$i$$382$$].attr && $currChild$$3$$.children[$i$$382$$].attr.id == $parentKey$$12$$ ? $currChild$$3$$.children[$i$$382$$] : this.$_searchTreeById$($currChild$$3$$.children[$i$$382$$], $parentKey$$12$$);
      }
    }
    return $result$$75$$;
  };
  $oj$$47$$.$JsonTreeDataSource$.prototype.$_updateDepth$ = function $$oj$$47$$$$JsonTreeDataSource$$$$_updateDepth$$($currChild$$4$$, $offset$$27$$) {
    var $i$$383$$;
    $currChild$$4$$.depth -= $offset$$27$$;
    if ($currChild$$4$$.children && 0 != $currChild$$4$$.children.length) {
      for ($i$$383$$ = 0;$i$$383$$ < $currChild$$4$$.children.length;$i$$383$$++) {
        this.$_updateDepth$($currChild$$4$$.children[$i$$383$$], $offset$$27$$);
      }
    }
  };
  $oj$$47$$.$JsonTreeDataSource$.prototype.$_removeFromTree$ = function $$oj$$47$$$$JsonTreeDataSource$$$$_removeFromTree$$($currChild$$5_index$$232$$) {
    var $key$$166_parent$$48$$;
    $currChild$$5_index$$232$$.id ? $key$$166_parent$$48$$ = $currChild$$5_index$$232$$.id : $currChild$$5_index$$232$$.attr && ($key$$166_parent$$48$$ = $currChild$$5_index$$232$$.attr.id);
    ($key$$166_parent$$48$$ = this.$_getParentById$($key$$166_parent$$48$$)) || ($key$$166_parent$$48$$ = this.data);
    $currChild$$5_index$$232$$ = $key$$166_parent$$48$$.children.indexOf($currChild$$5_index$$232$$);
    -1 < $currChild$$5_index$$232$$ && $key$$166_parent$$48$$.children.splice($currChild$$5_index$$232$$, 1);
  };
  $oj$$47$$.$JsonTreeDataSource$.prototype.getCapability = function $$oj$$47$$$$JsonTreeDataSource$$$getCapability$($feature$$15$$) {
    return "fetchDescendants" === $feature$$15$$ ? "enable" : "sort" === $feature$$15$$ ? "default" : "batchFetch" === $feature$$15$$ ? "disable" : "move" === $feature$$15$$ ? "full" : null;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getCapability", {getCapability:$oj$$47$$.$JsonTreeDataSource$.prototype.getCapability});
});
