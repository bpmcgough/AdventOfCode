var testInput = ["pbga (66)",
"xhth (57)",
"ebii (61)",
"havc (66)",
"ktlj (57)",
"fwft (72) -> ktlj, cntj, xhth",
"qoyq (66)",
"padx (45) -> pbga, havc, qoyq",
"tknk (41) -> ugml, padx, fwft",
"jptl (61)",
"ugml (68) -> gyxo, ebii, jptl",
"gyxo (61)",
"cntj (57)"];

var treeMaker = function(input){
  var tree = {};
  var selectedNode;
  input.forEach(function (el, i) {
    // we only care about a given disc in its relation to other discs
    if(el.indexOf('->') > -1){
      // make value and children
      var parent = el.slice(0, 4);
      var children = el.slice(13, 41).split(', ');
      children.forEach(function(child){
        tree[child] = parent;
      });
    }
    // select an arbitrary value
    if(i === input.length - 1){
      selectedNode = el.slice(0, 4);
    }
  });
  // once tree is complete, take selectedNode, find its parent,
  // keep going until you cant find a parent, aka tree[child] doesnt exist

  while(typeof tree[selectedNode] !== 'undefined'){
    selectedNode = tree[selectedNode];
  }
  return selectedNode;
};

console.log(treeMaker(testInput));
