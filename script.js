function addRow(){
	var toAdd='<tr>';
	var counter = $("#counter").text();
	counter = parseInt(counter);
	$("#counter").text(counter+17);
	toAdd += '<td><select style="padding-left:1px;" id="' + (12 + counter) + '" class="selfunc form-control" onchange="updatesel(this)"><option selected disabled hidden>-Function-</option><option>Water</option><option>Fish</option></select></td>';
	toAdd += '<td><select style="padding-left:1px;" id="' + (counter) + '" class="selfail form-control" onchange="updatesel(this)"><option selected disabled hidden>-Failure Mode-</option><option disabled> - Fish - </option><option>Fish Die</option><option>Fish Stop Reproducing</option><option>Average Fish Smaller</option><option>Fish Are Toxic</option><option>Destruction Of Farm</option><option>Fish Ill</option><option>Farm Polluted</option><option disabled> - Water - </option><option>Algae</option><option>Eutrophocation</option><option>Alien Species</option><option>Increase Of Other Bacteria</option><option>Less Saline</option><option>Vibrios Bacteria</option><option>Other</option></select><textarea placeholder="Notes" onchange="update(\'txt'+(counter)+'\');" class="form-control txt'+(counter)+'" style="height:40px; display:None;"></textarea></td>';
	toAdd += '<td><select style="padding-left:1px;" id="'+(1+counter)+'" class="form-control" onchange="updatesel(this)"><option selected disabled hidden>-Local Effect-</option><option>Ocean Polluted</option><option>Health Risk For Customers</option><option>Pollution Of Drinking Water</option><option>Illness For Fish</option><option>Illness For Other Animals</option><option>Fish Can\'t Find Food</option><option>Reduced Oxygen In Water</option><option>Loss In Confidence In Business</option><option>Drop In Sales</option><option>No Food</option><option>Customers Dissatisfied</option><option>Farm Not Self Sustaining</option><option>No Sales</option><option>Fish Farming No Longer Practical</option><option>Fish Escape</option><option>Predators Break In</option><option>Fishing Quota Affected</option><option>Other</option></select><textarea placeholder="Notes" onchange="update(\'txt'+(1+counter)+'\');" class="form-control txt'+(1+counter)+'" style="height:40px; display:None;"></textarea></td>';
	toAdd += '<td><select style="padding-left:1px;" id="'+(2+counter)+'" class="form-control" onchange="updatesel(this)"><option selected disabled hidden>-System Effect-</option><option>Ocean Polluted</option><option>Health Risk For Customers</option><option>Pollution Of Drinking Water</option><option>Illness For Fish</option><option>Illness For Other Animals</option><option>Fish Can\'t Find Food</option><option>Reduced Oxygen In Water</option><option>Loss In Confidence In Business</option><option>Drop In Sales</option><option>No Food</option><option>Customers Dissatisfied</option><option>Farm Not Self Sustaining</option><option>No Sales</option><option>Fish Farming No Longer Practical</option><option>Fish Escape</option><option>Predators Break In</option><option>Fishing Quota Affected</option><option>Other</option></select><textarea placeholder="Notes" onchange="update(\'txt'+(2+counter)+'\');" class="form-control txt'+(2+counter)+'" style="height:40px; display:None;"></textarea></td>';
	
	toAdd += '<td style="width:5%;"><select style="padding-left:1px;" id="'+(3+counter)+'" class="form-control hint" onchange="updateselrpn(this)"><option selected disabled hidden>-S-</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select></td>'
	toAdd += '<td><select style="padding-left:1px;" id="'+(4+counter)+'" class="form-control" onchange="updatesel(this)"><option selected disabled hidden>-Cause-</option><option>Temperature Increase</option><option>Temperature Decrease</option><option>pH Increase</option><option>pH Decrease</option><option>Salinity Increase</option><option>Salinity Decrease</option><option>Oxygen Increase</option><option>Oxygen Decrease</option><option>Extreme Weather</option><option>Pollution</option></select></td>'

	toAdd += '<td class="txtsmall"><select style="padding-left:1px;" id="'+(5+counter)+'" class="form-control" onchange="updateselrpn(this)"><option selected disabled hidden>-O-</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select></td>'
	toAdd += '<td class="txtsmall"><select style="padding-left:1px;" id="'+(6+counter)+'" class="form-control" onchange="updateselrpn(this)"><option selected disabled hidden>-O-</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select></td>'
	toAdd += '<td class="txtsmall"><select style="padding-left:1px;" id="'+(7+counter)+'" class="form-control" onchange="updateselrpn(this)"><option selected disabled hidden>-O-</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select></td>'
	
	toAdd += '<td><select style="padding-left:1px;" id="'+(8+counter)+'" class="form-control" onchange="updatesel(this)"><option selected disabled hidden>-Detection-</option><option>Measure Temperature</option><option>Visual Inspection</option><option>Water Samples</option><option>Existing Area Data</option><option>Fish Autopsies</option></select></td>'
	toAdd += '<td style="width:5%;"><select style="padding-left:1px;" id="'+(13+counter)+'" class="form-control" onchange="updateselrpn(this)"><option selected disabled hidden>-D-</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select></td>'
	toAdd += '<td><select style="padding-left:1px;" id="'+(9+counter)+'" class="form-control" onchange="updatesel(this)"><option selected disabled hidden>-Control-</option><option>National Flood Management</option><option>Increased Monitoring</option><option>Decreasing Fishing Quota</option><option>Breeding Programs</option><option>Change Locations</option><option>Change Species</option><option>Change Storage Options</option><option>Use Alternative Energy</option><option>Improve Efficiency</option><option>Support Training</option><option>Other</option></select><textarea placeholder="Notes" onchange="update(\'txt'+(8+counter)+'\');" class="form-control txt'+(9+counter)+'" style="height:40px; display:None;"></textarea></td>';
	toAdd += '<td><select style="padding-left:1px;" id="'+(10+counter)+'" class="form-control" onchange="updatesel(this)"><option selected disabled hidden>-Control-</option><option>National Flood Management</option><option>Increased Monitoring</option><option>Decreasing Fishing Quota</option><option>Breeding Programs</option><option>Change Locations</option><option>Change Species</option><option>Change Storage Options</option><option>Use Alternative Energy</option><option>Improve Efficiency</option><option>Support Training</option><option>Other</option></select><textarea placeholder="Notes" onchange="update(\'txt'+(9+counter)+'\');" class="form-control txt'+(10+counter)+'" style="height:40px; display:None;"></textarea></td>';
	toAdd += '<td class="txtsmaller"><p id="'+(14+counter)+'">N/A</p></td>'
	toAdd += '<td class="txtsmaller"><p id="'+(15+counter)+'">N/A</p></td>'
	toAdd += '<td class="txtsmaller"><p id="'+(16+counter)+'">N/A</p></td>'
	toAdd += "</tr>";
	$("#rows").append(toAdd);
	
	var options = $('#13 option');

	var newfunc = $("#" + (12+counter));
	newfunc.html("");
	$.map(options ,function(option) {
		var o = new Option(option.value, option.value);
		$(o).html(option.value);
		console.log(o);
		newfunc.append(o);
	});
	
}

function addOption(){
  var opt = prompt("Enter the new failure", "");
  if (opt != null) {
    var o = new Option(opt, "");
	$(o).html(opt);
	$(".selfail").append(o);
  }
}

function addOptionFunc(){
  var opt = prompt("Enter the new function", "");
  if (opt != null) {
    var o = new Option(opt, opt);
	$(o).html(opt);
	$(".selfunc").append(o);
  }
}

function load(){
	$("#upload").toggle();
}

function loadinf(){
	$("#rows").html($("#textup").val());
	$("#upload").hide();
	var everyChild = document.querySelectorAll("textarea");
	for (var i = 0; i<everyChild.length; i++) {
		if (everyChild[i].id == ""){
			continue;
		}
		$("#"+everyChild[i].id).val(everyChild[i].id);
	}
}

function clearz() {
	$("#counter").text(1);
	$("#rows").html("");
	addRow();
}

function update(id){
	$("."+id).attr('id', $("."+id).val());
}

function updatesel(selector){
	for (var i=0; i<selector.options.length; i++){
		$(selector.options[i]).removeAttr('selected');
	}
	$(selector.options[selector.selectedIndex]).attr('selected', 'selected');
	if (selector.value == "Other"){
		$(".txt" + selector.id).show();
	}else{
		$(".txt" + selector.id).hide();
	}
}

function updateselrpn(selector){

	var row = (parseInt(selector.id) - (parseInt(selector.id)%17))/17;
	console.log(row);

	var s = $("#"+((row*17)+4)).val();
	var d = $("#"+((row*17)+14)).val();
	
	
	if (s == null || d == null){
		updatesel(selector);
		return;
	}
	
	s = parseInt(s);
	d = parseInt(d);
	
	var o1 = $("#"+((row*17)+6)).val();
	var o2 = $("#"+((row*17)+7)).val();
	var o3 = $("#"+((row*17)+8)).val();
	
	if (o1 != null){
		o1 = parseInt(o1);
		$("#"+((row*17)+15)).html((s*d*o1));
	}
	
	if (o2 != null){
		o2 = parseInt(o2);
		$("#"+((row*17)+16)).html((s*d*o2));
	}
	
	if (o3 != null){
		o3 = parseInt(o3);
		$("#"+((row*17)+17)).html((s*d*o3));
	}

	console.log(s);
	console.log(d);

	updatesel(selector)
}

function download() {
	var name = prompt("What would you like the file to be called?", "riskassess");
	if (name == "" || name == null){
		name = "riskassess";
	}
	var data = $("#rows").html();
    var file = new Blob([data], {type: "txt"});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, name + ".txt");
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = name + ".txt";
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

$(document).ready(function() {
      addRow();
});