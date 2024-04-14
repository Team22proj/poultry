function displayNutrition() {
    var feedTypes = document.getElementById('feedType').selectedOptions;
    var nutritionInfo = document.getElementById('nutritionInfo');
    var selectedFeeds = [];
  
    // Get the values of the selected feed options
    for (var i = 0; i < feedTypes.length; i++) {
      selectedFeeds.push(feedTypes[i].value);
    }
  
    // Fetch and display combined nutrition information based on selected feed types
    var combinedInfo = '';
    selectedFeeds.forEach(function(feedType) {
      switch(feedType) {
        case 'maize':
          combinedInfo += "Nutrition Information for Maize:<br> Highly digestible, low in fiber, low in protein (especially lysine and sulfur-containing amino acids).<br><br>";
          break;
        case 'barley':
          combinedInfo += "Nutrition Information for Barley:<br> Not very palatable, high in fiber (should not exceed 15% of the ration).<br><br>";
          break;
        case 'oat':
          combinedInfo += "Nutrition Information for Oat:<br> Not very palatable, high in fiber (should not exceed 20% of the ration).<br><br>";
          break;
        case 'wheat':
          combinedInfo += "Nutrition Information for Wheat:<br> Can be used as a source of energy, can replace maize.<br><br>";
          break;
        case 'wheatBran':
          combinedInfo += "Nutrition Information for Wheat Bran:<br> Bulky, laxative, high in fiber, manganese, and phosphorus.<br><br>";
          break;
        case 'pearlMillet':
          combinedInfo += "Nutrition Information for Pearl Millet:<br> Very useful feedstuff, similar to wheat in nutritive value.<br><br>";
          break;
        case 'rice':
          combinedInfo += "Nutrition Information for Rice:<br> Broken grains can replace maize.<br><br>";
          break;
        case 'ricePolish':
          combinedInfo += "Nutrition Information for Rice Polish:<br> Very good substitute for cereal grains (up to 50% of the ration), high oil content.<br><br>";
          break;
        case 'deoiledRicePolish':
          combinedInfo += "Nutrition Information for Deoiled Rice Polish:<br> Low energy content due to fat removal, rich in protein and ash.<br><br>";
          break;
        case 'sorghum':
          combinedInfo += "Nutrition Information for Sorghum:<br> Similar to maize, higher protein content, quite palatable.<br><br>";
          break;
        case 'groundnutCake':
          combinedInfo += "Nutrition Information for Groundnut Cake:<br> Palatable, widely used source of protein (about 40% protein).<br><br>";
          break;
        case 'fishMeal':
          combinedInfo += "Nutrition Information for Fish Meal:<br> Excellent source of animal protein (45-55% protein), composition varies.<br><br>";
          break;
        case 'limestone':
          combinedInfo += "Nutrition Information for Limestone:<br> Source of calcium, should not contain more than 5% magnesium.<br><br>";
          break;
        case 'oysterShell':
          combinedInfo += "Nutrition Information for Oyster Shell:<br> Contains over 38% calcium, good substitute for limestone, palatable.<br><br>";
          break;
      }
    });
  
    // Display the combined nutrition information
    nutritionInfo.innerHTML = combinedInfo;
  }