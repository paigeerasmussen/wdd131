const nutrition = [
    {
        foodName: "PRO PLAN KITTEN COMPLETE ESSENTIALS CHICKEN & RICE FORMULA CAT FOOD",
        thName1: "Guaranteed Analysis",
        protein: "42.0%",
        fat: "19.0%",
        fiber: "2.5%",
        carbohydrate: "N/A",
        moisture: "12.0%",
        linoleic: "1.9%",
        aAcid: "N/A",
        dAcid: "0.02%",
        eAcid: "N/A",
        calcium: "1.0%",
        phosphorus: "0.8%",
        potassium: "N/A",
        sodium: "N/A",
        magnesium: "N/A",
        vitA: "10,000 IU/kg",
        vitC: "N/A",
        vitE: "400 IU/kg",
        taurine: "0.18%",
        carnitine: "N/A",
        omega3: "N/A",
        omega6: "2.0%",
        bacillus: "600 million CFU/lb",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: "Chicken, rice, chicken by-product meal, corn protein meal, beef fat preserved with mixed- tocopherols, soybean meal, soy protein isolate, poultry by - product meal, dried egg product, fish meal, natural flavor, wheat flour, soybean oil, sodium caseinate, phosphoric acid, L - Lysine monohydrochloride, fish oil, sodium bisulfate, calcium carbonate, salt, choline chloride, VITAMINS [Vitamin E supplement, niacin(Vitamin B - 3), thiamine mononitrate(Vitamin B - 1), calcium pantothenate (Vitamin B - 5), riboflavin supplement(Vitamin B - 2), Vitamin A supplement, pyridoxine hydrochloride (Vitamin B - 6), Vitamin B - 12 supplement, folic acid(Vitamin B - 9), biotin(Vitamin B - 7), Vitamin D - 3 supplement, menadione sodium bisulfite complex(Vitamin K)], MINERALS [zinc sulfate, ferrous sulfate, manganese sulfate, copper sulfate, calcium iodate, sodium selenite], potassium chloride, taurine, DLMethionine, dried Bacillus coagulans fermentation product."
    },
    {
        foodName: "PRO PLAN ADULT COMPLETE ESSENTIALS CHICKEN & RICE FORMULA CAT FOOD",
        thName1: "Guaranteed Analysis",
        protein: "36.0%",
        fat: "16.0%",
        fiber: "2.0%",
        carbohydrate: "N/A",
        moisture: "12.0%",
        linoleic: "1.4%",
        aAcid: "N/A",
        dAcid: "N/A",
        eAcid: "N/A",
        calcium: "0.8%",
        phosphorus: "0.7%",
        potassium: "N/A",
        sodium: "N/A",
        magnesium: "N/A",
        vitA: "10,000 IU/kg",
        vitC: "N/A",
        vitE: "200 IU/kg",
        taurine: "0.15%",
        carnitine: "N/A",
        omega3: "N/A",
        omega6: "1.5%",
        bacillus: "600 million CFU/lb",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: " Chicken, rice, corn protein meal, poultry by-product meal, wheat flour, dried egg product, beef fat preserved with mixed tocopherols, soy protein concentrate, natural flavor, fish meal, dried chicory root, potassium chloride, phosphoric acid, calcium carbonate, salt, caramel color, VITAMINS [Vitamin E supplement, niacin (Vitamin B-3), Vitamin A supplement, calcium pantothenate (Vitamin B-5), thiamine mononitrate (Vitamin B-1), riboflavin supplement (Vitamin B-2), Vitamin B-12 supplement, pyridoxine hydrochloride (Vitamin B-6), folic acid (Vitamin B-9), Vitamin D-3 supplement, biotin (Vitamin B-7), menadione sodium bisulfite complex (Vitamin K)], choline chloride, taurine, MINERALS [zinc sulfate, ferrous sulfate, manganese sulfate, copper sulfate, calcium iodate, sodium selenite], L-Lysine monohydrochloride, dried Bacillus coagulans fermentation product."
    },
    {
        foodName: "PRO PLAN ADULT 7+ COMPLETE ESSENTIALS CHICKEN & RICE FORMULA CAT FOOD",
        thName1: "Guaranteed Analysis",
        protein: "38.0%",
        fat: "17.0%",
        fiber: "2.5%",
        carbohydrate: "N/A",
        moisture: "12.0%",
        linoleic: "1.7%",
        aAcid: "N/A",
        dAcid: "N/A",
        eAcid: "N/A",
        calcium: "1.0%",
        phosphorus: "0.8%",
        potassium: "N/A",
        sodium: "N/A",
        magnesium: "N/A",
        vitA: "15,000 IU/kg",
        vitC: "N/A",
        vitE: "400 IU/kg",
        taurine: "0.15%",
        carnitine: "N/A",
        omega3: "0.25%",
        omega6: "1.8%",
        bacillus: "600 million CFU/lb",
        glucosamine: "N/A",
        cSulfate: "N/A",
        thName2: "Ingredients",
        ingredients: "Chicken, rice, chicken by-product meal, corn protein meal, beef fat preserved with mixed- tocopherols, soybean meal, soy protein isolate, poultry by - product meal, dried egg product, fish meal, natural flavor, wheat flour, soybean oil, sodium caseinate, phosphoric acid, L - Lysine monohydrochloride, fish oil, sodium bisulfate, calcium carbonate, salt, choline chloride, VITAMINS [Vitamin E supplement, niacin(Vitamin B - 3), thiamine mononitrate(Vitamin B - 1), calcium pantothenate (Vitamin B - 5), riboflavin supplement(Vitamin B - 2), Vitamin A supplement, pyridoxine hydrochloride (Vitamin B - 6), Vitamin B - 12 supplement, folic acid(Vitamin B - 9), biotin(Vitamin B - 7), Vitamin D - 3 supplement, menadione sodium bisulfite complex(Vitamin K)], MINERALS [zinc sulfate, ferrous sulfate, manganese sulfate, copper sulfate, calcium iodate, sodium selenite], potassium chloride, taurine, DLMethionine, dried Bacillus coagulans fermentation product."
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