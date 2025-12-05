// update cards

const nutrition = [
    {
        foodName: "KITTEN DRY CAT FOOD",
        thName1: "Guaranteed Analysis",
        protein: "34.0%",
        fat: "16.0%",
        fiber: "4.4%",
        carbohydrate: "N/A",
        moisture: "7.5%",
        linoleic: "N/A",
        aAcid: "162 mg/kg",
        dAcid: "N/A",
        eAcid: "N/A",
        calcium: "7.5%",
        phosphorus: "0.93%",
        potassium: "N/A",
        sodium: "N/A",
        magnesium: "N/A",
        vitA: "N/A",
        vitC: "N/A",
        vitE: "350 IU/kg",
        taurine: "N/A",
        carnitine: "N/A",
        omega3: "N/A",
        omega6: "N/A",
        bacillus: "N/A",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: "Chicken by-product meal, brown rice, brewers rice, chicken fat, wheat gluten, natural flavors, corn, corn gluten meal, egg product, dried plain beet pulp, powdered cellulose, vegetable oil, sodium aluminosilicate, sodium pyrophosphate, potassium chloride, powdered psyllium seed husk, taurine, rice flour, fish oil, fructooligosaccharides, choline chloride, hydrolyzed yeast, marine microalgae oil, calcium carbonate, vitamins [DL-alpha tocopherol acetate (source of vitamin E), L-ascorbyl-2-polyphosphate (source of vitamin C), niacin supplement, biotin, riboflavin supplement, D-calcium pantothenate, pyridoxine hydrochloride (vitamin B6), vitamin A acetate, thiamine mononitrate (vitamin B1), vitamin B12 supplement, folic acid, vitamin D3 supplement], salt, trace minerals [zinc proteinate, zinc oxide, manganese proteinate, ferrous sulfate, manganous oxide, copper sulfate, sodium selenite, calcium iodate, copper proteinate], marigold extract (Tagetes erecta L.), carotene, rosemary extract, preserved with mixed tocopherols and citric acid."
    },
    {
        foodName: "INDOOR ADULT DRY CAT FOOD",
        thName1: "Guaranteed Analysis",
        protein: "27.0%",
        fat: "11.0%-15.0%",
        fiber: "5.7%",
        carbohydrate: "N/A",
        moisture: "8.0%",
        linoleic: "N/A",
        aAcid: "N/A",
        dAcid: "N/A",
        eAcid: "N/A",
        calcium: "N/A",
        phosphorus: "N/A",
        potassium: "N/A",
        sodium: "N/A",
        magnesium: "N/A",
        vitA: "N/A",
        vitC: "N/A",
        vitE: "N/A",
        taurine: "N/A",
        carnitine: "N/A",
        omega3: "N/A",
        omega6: "N/A",
        bacillus: "N/A",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: "Chicken meal, corn, brewers rice, corn gluten meal, wheat, chicken fat, wheat gluten, natural flavors, brown rice, pea fiber, rice hulls, dried plain beet pulp, vegetable oil, calcium sulfate, grain distillers dried yeast, sodium silico aluminate, fish oil, potassium chloride, fructooligosaccharides, sodium pyrophosphate, psyllium seed husk, salt, DL-methionine, choline chloride, egg product, calcium carbonate, vitamins [DL-alpha tocopherol acetate (source of vitamin E), L-ascorbyl-2-polyphosphate (source of vitamin C), niacin supplement, biotin, riboflavin supplement, D-calcium pantothenate, thiamine mononitrate (vitamin B1), pyridoxine hydrochloride (vitamin B6), vitamin A acetate, vitamin B12 supplement, folic acid, vitamin D3 supplement], taurine, trace minerals [zinc oxide, zinc proteinate, ferrous sulfate, manganous oxide, manganese proteinate, copper sulfate, calcium iodate, sodium selenite, copper proteinate], L-carnitine, rosemary extract, preserved with mixed tocopherols and citric acid."
    },
    {
        foodName: "INDOOR 7+ DRY CAT FOOD",
        thName1: "Guaranteed Analysis",
        protein: "27.0%",
        fat: "11.0%",
        fiber: "5.5%",
        carbohydrate: "N/A",
        moisture: "8.0%",
        linoleic: "N/A",
        aAcid: "240 mg/kg",
        dAcid: "0.07%",
        eAcid: "0.16%",
        calcium: "7.5%",
        phosphorus: "0.49%",
        potassium: "N/A",
        sodium: "N/A",
        magnesium: "N/A",
        vitA: "N/A",
        vitC: "N/A",
        vitE: "350 IU/kg",
        taurine: "N/A",
        carnitine: "N/A",
        omega3: "N/A",
        omega6: "N/A",
        bacillus: "N/A",
        glucosamine: "340 mg/kg",
        cSulfate: "7 mg/kg",
        thName2: "Ingredients",
        ingredients: "Corn, barley, wheat, chicken meal, corn gluten meal, soy protein isolate, natural flavors, chicken fat, wheat gluten, brewers rice, dried plain beet pulp, vegetable oil, pea fiber, fish oil, calcium sulfate, rice hulls, grain distillers dried yeast, potassium chloride, egg product, psyllium seed husk, sodium silico aluminate, sodium bisulfate, sodium pyrophosphate, fructooligosaccharides, choline chloride, calcium carbonate, vitamins [DL-alpha tocopherol acetate (source of vitamin E), L-ascorbyl-2-polyphosphate (source of vitamin C), niacin supplement, biotin, riboflavin supplement, D-calcium pantothenate, pyridoxine hydrochloride (vitamin B6), vitamin A acetate, thiamine mononitrate (vitamin B1), vitamin B12 supplement, folic acid, vitamin D3 supplement], taurine, DL-methionine, potassium citrate, salt, trace minerals [zinc proteinate, zinc oxide, ferrous sulfate, manganese proteinate, manganous oxide, copper sulfate, calcium iodate, copper proteinate, sodium selenite], glucosamine hydrochloride, marigold extract (Tagetes erecta L.), green tea extract, L-carnitine, chondroitin sulfate, rosemary extract, preserved with mixed tocopherols and citric acid."
    },
];

createInfoCard(nutrition);

function createInfoCard(nutrition) {
    document.querySelector("#nutrition").innerHTML = ""
    nutrition.forEach(nutritionCard => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let sectionOne = document.createElement("h3");
        let protein = document.createElement("p");
        let fat = document.createElement("p");
        let fiber = document.createElement("p");
        let carbohydrate = document.createElement("p");
        let moisture = document.createElement("p");
        let linoleic = document.createElement("p");
        let aAcid = document.createElement("p");
        let dAcid = document.createElement("p");
        let eAcid = document.createElement("p");
        let calcium = document.createElement("p");
        let phosphorus = document.createElement("p");
        let potassium = document.createElement("p");
        let sodium = document.createElement("p");
        let magnesium = document.createElement("p");
        let vitA = document.createElement("p");
        let vitC = document.createElement("p");
        let vitE = document.createElement("p");
        let taurine = document.createElement("p");
        let carnitine = document.createElement("p");
        let omega3 = document.createElement("p");
        let omega6 = document.createElement("p");
        let bacillus = document.createElement("p");
        let glucosamine = document.createElement("p");
        let cSulfate = document.createElement("p");
        let sectionTwo = document.createElement("h3");
        let ingredients = document.createElement("p");

        name.textContent = nutritionCard.foodName;
        sectionOne.textContent = nutritionCard.thName1;
        protein.innerHTML = `<span class="highlight">Crude Protein: </span>${nutritionCard.protein}`;
        fat.innerHTML = `<span class="highlight">Crude Fat: </span>${nutritionCard.fat}`;
        fiber.innerHTML = `<span class="highlight">Crude Fiber: </span>${nutritionCard.fiber}`;
        carbohydrate.innerHTML = `<span class="highlight">Carbohydrate: </span>${nutritionCard.carbohydrate}`;
        moisture.innerHTML = `<span class="highlight">Moisture: </span>${nutritionCard.moisture}`;
        linoleic.innerHTML = `<span class="highlight">Linoleic Acid: </span>${nutritionCard.linoleic}`;
        aAcid.innerHTML = `<span class="highlight">Ascorbic acid: </span>${nutritionCard.aAcid}`;
        dAcid.innerHTML = `<span class="highlight">Docosahexaenoic Acid (DH): </span>${nutritionCard.dAcid}`;
        eAcid.innerHTML = `<span class="highlight">Eicosapentaenoic Acid: </span>${nutritionCard.eAcid}`;
        calcium.innerHTML = `<span class="highlight">Calcium: </span>${nutritionCard.calcium}`;
        phosphorus.innerHTML = `<span class="highlight">Phosphorus: </span>${nutritionCard.phosphorus}`;
        potassium.innerHTML = `<span class="highlight">Potassium: </span>${nutritionCard.potassium}`;
        sodium.innerHTML = `<span class="highlight">Sodium: </span>${nutritionCard.sodium}`;
        magnesium.innerHTML = `<span class="highlight">Magnesium: </span>${nutritionCard.magnesium}`;
        vitA.innerHTML = `<span class="highlight">Vitamin A: </span>${nutritionCard.vitA}`;
        vitC.innerHTML = `<span class="highlight">Vitamin C: </span>${nutritionCard.vitC}`;
        vitE.innerHTML = `<span class="highlight">Vitamin E: </span>${nutritionCard.vitE}`;
        taurine.innerHTML = `<span class="highlight">Taurine: </span>${nutritionCard.taurine}`;
        carnitine.innerHTML = `<span class="highlight">Carnitine: </span>${nutritionCard.carnitine}`;
        omega3.innerHTML = `<span class="highlight">Omega-3 Fatty Acids: </span>${nutritionCard.omega3}`;
        omega6.innerHTML = `<span class="highlight">Omega-6 Fatty Acids: </span>${nutritionCard.omega6}`;
        bacillus.innerHTML = `<span class="highlight">Bacillus coagulans: </span>${nutritionCard.bacillus}`;
        glucosamine.innerHTML = `<span class="highlight">Glucosamine: </span>${nutritionCard.glucosamine}`;
        cSulfate.innerHTML = `<span class="highlight">Chondroitin sulfate: </span>${nutritionCard.cSulfate}`;
        sectionTwo.textContent = nutritionCard.thName2;
        ingredients.textContent = nutritionCard.ingredients;


        card.appendChild(name);
        card.appendChild(sectionOne);
        card.appendChild(protein);
        card.appendChild(fat);
        card.appendChild(fiber);
        card.appendChild(carbohydrate);
        card.appendChild(moisture);
        card.appendChild(linoleic);
        card.appendChild(aAcid);
        card.appendChild(dAcid);
        card.appendChild(eAcid);
        card.appendChild(calcium);
        card.appendChild(phosphorus);
        card.appendChild(potassium);
        card.appendChild(sodium);
        card.appendChild(magnesium);
        card.appendChild(vitA);
        card.appendChild(vitC);
        card.appendChild(vitE);
        card.appendChild(taurine);
        card.appendChild(carnitine);
        card.appendChild(omega3);
        card.appendChild(omega6);
        card.appendChild(bacillus);
        card.appendChild(glucosamine);
        card.appendChild(cSulfate);
        card.appendChild(sectionTwo);
        card.appendChild(ingredients);

        document.querySelector("#nutrition").appendChild(card);
    });
}