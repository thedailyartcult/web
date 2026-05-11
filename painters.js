// painters.js — The Daily Art Cult
// All images sourced from Wikimedia Commons (public domain)
// Each painter has a `paintings` array: { title, url }
// The site picks a random painting from the array each round

const PAINTERS = [

  // ── POPULAR ──────────────────────────────────────────────────────────────

  {
    name: "Claude Monet",
    born: 1840, died: 1926, nationality: "French",
    bio: "Leading Impressionist known for his series of water lilies, haystacks, and Rouen Cathedral.",
    tags: ["popular","french","impressionist","full"],
    paintings: [
      { title: "Water Lilies", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg" },
      { title: "Impression, Sunrise", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg" },
      { title: "Woman with a Parasol", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son.jpg/800px-Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son.jpg" },
      { title: "The Magpie", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg/1280px-Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg" },
      { title: "Haystacks, End of Summer", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Claude_Monet_-_Haystacks%2C_end_of_Summer_-_Google_Art_Project.jpg/1280px-Claude_Monet_-_Haystacks%2C_end_of_Summer_-_Google_Art_Project.jpg" },
      { title: "The Japanese Footbridge", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Claude_Monet_-_The_Japanese_Footbridge_-_Google_Art_Project.jpg/1280px-Claude_Monet_-_The_Japanese_Footbridge_-_Google_Art_Project.jpg" },
      { title: "Rouen Cathedral, Full Sunlight", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Claude_Monet_-_Rouen_Cathedral%2C_Facade_%28Sunset%29_-_Google_Art_Project.jpg/800px-Claude_Monet_-_Rouen_Cathedral%2C_Facade_%28Sunset%29_-_Google_Art_Project.jpg" },
      { title: "Garden at Sainte-Adresse", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_Monet_-_Garden_at_Sainte-Adresse.jpg/1280px-Claude_Monet_-_Garden_at_Sainte-Adresse.jpg" },
    ]
  },

  {
    name: "Vincent van Gogh",
    born: 1853, died: 1890, nationality: "Dutch",
    bio: "Post-Impressionist famous for The Starry Night and his expressive use of colour and emotion.",
    tags: ["popular","impressionist","full"],
    paintings: [
      { title: "The Starry Night", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" },
      { title: "Sunflowers", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/1024px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg" },
      { title: "The Bedroom", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg" },
      { title: "Irises", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1280px-Irises-Vincent_van_Gogh.jpg" },
      { title: "Café Terrace at Night", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles%2C_abends1.jpeg/800px-Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles%2C_abends1.jpeg" },
      { title: "Wheat Field with Crows", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg" },
      { title: "Self-Portrait with Bandaged Ear", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Van_Gogh_-_Self-Portrait_with_Bandaged_Ear_and_Pipe.jpg/800px-Van_Gogh_-_Self-Portrait_with_Bandaged_Ear_and_Pipe.jpg" },
      { title: "The Potato Eaters", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/1280px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg" },
    ]
  },

  {
    name: "Pablo Picasso",
    born: 1881, died: 1973, nationality: "Spanish",
    bio: "Co-founder of Cubism and one of the most influential artists of the 20th century.",
    tags: ["popular","full"],
    paintings: [
      { title: "Guernica", url: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg" },
      { title: "Les Demoiselles d'Avignon", url: "https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d%27Avignon.jpg" },
      { title: "The Weeping Woman", url: "https://upload.wikimedia.org/wikipedia/en/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg" },
      { title: "Girl Before a Mirror", url: "https://upload.wikimedia.org/wikipedia/en/1/13/Pablo_Picasso%2C_1932%2C_Girl_Before_a_Mirror%2C_oil_on_canvas%2C_162.3_x_130.2_cm%2C_MoMA.jpg" },
      { title: "The Old Guitarist", url: "https://upload.wikimedia.org/wikipedia/en/8/8b/PicassoGuitarist.jpg" },
      { title: "La Vie", url: "https://upload.wikimedia.org/wikipedia/en/a/a1/Pablo_Picasso%2C_1903%2C_La_Vie%2C_oil_on_canvas%2C_196.5_x_129.2_cm%2C_Cleveland_Museum_of_Art.jpg" },
    ]
  },

  {
    name: "Rembrandt van Rijn",
    born: 1606, died: 1669, nationality: "Dutch",
    bio: "Master of the Dutch Golden Age, celebrated for his portraits and dramatic chiaroscuro.",
    tags: ["popular","full"],
    paintings: [
      { title: "The Night Watch", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rembrandt_van_Rijn_-_De_Nachtwacht.jpg/1280px-Rembrandt_van_Rijn_-_De_Nachtwacht.jpg" },
      { title: "Self-Portrait with Two Circles", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg" },
      { title: "The Anatomy Lesson of Dr. Nicolaes Tulp", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/1280px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg" },
      { title: "The Return of the Prodigal Son", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Rembrandt_Harmensz_van_Rijn_-_Return_of_the_Prodigal_Son_-_Google_Art_Project.jpg/800px-Rembrandt_Harmensz_van_Rijn_-_Return_of_the_Prodigal_Son_-_Google_Art_Project.jpg" },
      { title: "Belshazzar's Feast", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Rembrandt_-_Belshazzar%27s_Feast_-_WGA19123.jpg/1280px-Rembrandt_-_Belshazzar%27s_Feast_-_WGA19123.jpg" },
      { title: "Portrait of Jan Six", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Rembrandt_Harmensz._van_Rijn_079.jpg/800px-Rembrandt_Harmensz._van_Rijn_079.jpg" },
    ]
  },

  {
    name: "Johannes Vermeer",
    born: 1632, died: 1675, nationality: "Dutch",
    bio: "Dutch master renowned for luminous interior scenes, such as Girl with a Pearl Earring.",
    tags: ["popular","full"],
    paintings: [
      { title: "Girl with a Pearl Earring", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg" },
      { title: "The Milkmaid", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/800px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg" },
      { title: "The Art of Painting", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg/800px-Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg" },
      { title: "Woman Reading a Letter", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Johannes_Vermeer_-_Woman_Reading_a_Letter_-_WGA24654.jpg/800px-Johannes_Vermeer_-_Woman_Reading_a_Letter_-_WGA24654.jpg" },
      { title: "View of Delft", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vermeer-view-of-delft.jpg/1280px-Vermeer-view-of-delft.jpg" },
      { title: "The Love Letter", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Jan_Vermeer_van_Delft_015.jpg/800px-Jan_Vermeer_van_Delft_015.jpg" },
    ]
  },

  {
    name: "Édouard Manet",
    born: 1832, died: 1883, nationality: "French",
    bio: "Transitional figure between Realism and Impressionism who challenged academic conventions.",
    tags: ["popular","french","impressionist","full"],
    paintings: [
      { title: "Olympia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg/1280px-Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg" },
      { title: "Le Déjeuner sur l'herbe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Le_D%C3%A9jeuner_sur_l%27Herbe_-_Google_Art_Project.jpg/1280px-Edouard_Manet_-_Le_D%C3%A9jeuner_sur_l%27Herbe_-_Google_Art_Project.jpg" },
      { title: "A Bar at the Folies-Bergère", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Edouard_Manet_-_In_the_Conservatory_-_Google_Art_Project.jpg/1280px-Edouard_Manet_-_In_the_Conservatory_-_Google_Art_Project.jpg" },
      { title: "The Fifer", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Edouard_Manet_-_Le_Fifre_-_Google_Art_Project.jpg/800px-Edouard_Manet_-_Le_Fifre_-_Google_Art_Project.jpg" },
      { title: "Boating", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Edouard_Manet_-_Boating_-_Google_Art_Project.jpg/1280px-Edouard_Manet_-_Boating_-_Google_Art_Project.jpg" },
    ]
  },

  {
    name: "Paul Cézanne",
    born: 1839, died: 1906, nationality: "French",
    bio: "Post-Impressionist who bridged 19th-century art with 20th-century modernism.",
    tags: ["popular","french","impressionist","full"],
    paintings: [
      { title: "The Card Players", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Paul_C%C3%A9zanne_-_The_Card_Players_-_Google_Art_Project.jpg/1280px-Paul_C%C3%A9zanne_-_The_Card_Players_-_Google_Art_Project.jpg" },
      { title: "Mont Sainte-Victoire", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Google_Art_Project.jpg/1280px-Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Google_Art_Project.jpg" },
      { title: "The Large Bathers", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Paul_C%C3%A9zanne_-_Les_Grandes_Baigneuses_%28The_Large_Bathers%29_-_Google_Art_Project_2.jpg/1280px-Paul_C%C3%A9zanne_-_Les_Grandes_Baigneuses_%28The_Large_Bathers%29_-_Google_Art_Project_2.jpg" },
      { title: "Still Life with Apples", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Paul_C%C3%A9zanne_-_Still_Life_with_Apples_-_Google_Art_Project.jpg/1280px-Paul_C%C3%A9zanne_-_Still_Life_with_Apples_-_Google_Art_Project.jpg" },
      { title: "Boy in a Red Waistcoat", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Paul_C%C3%A9zanne_-_Boy_in_a_Red_Waistcoat_-_Google_Art_Project.jpg/800px-Paul_C%C3%A9zanne_-_Boy_in_a_Red_Waistcoat_-_Google_Art_Project.jpg" },
    ]
  },

  {
    name: "Pierre-Auguste Renoir",
    born: 1841, died: 1919, nationality: "French",
    bio: "Impressionist whose works celebrate beauty, warmth, and the pleasures of everyday life.",
    tags: ["popular","french","impressionist","full"],
    paintings: [
      { title: "Luncheon of the Boating Party", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/1280px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg" },
      { title: "Dance at Le Moulin de la Galette", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Auguste_Renoir_-_M%C3%BChle_der_Galette.jpg/1280px-Auguste_Renoir_-_M%C3%BChle_der_Galette.jpg" },
      { title: "The Swing", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Auguste_Renoir_-_La_Balancoire.jpg/800px-Auguste_Renoir_-_La_Balancoire.jpg" },
      { title: "Two Sisters on the Terrace", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg/800px-Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg" },
      { title: "Girl with a Watering Can", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pierre-Auguste_Renoir_-_A_Girl_with_a_Watering_Can_-_Google_Art_Project.jpg/800px-Pierre-Auguste_Renoir_-_A_Girl_with_a_Watering_Can_-_Google_Art_Project.jpg" },
    ]
  },

  {
    name: "Francisco de Goya",
    born: 1746, died: 1828, nationality: "Spanish",
    bio: "The last of the Old Masters and the first of the moderns; known for dark, satirical works.",
    tags: ["popular","realist","full"],
    paintings: [
      { title: "Saturn Devouring His Son", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/800px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg" },
      { title: "The Third of May 1808", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/1280px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg" },
      { title: "The Nude Maja", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Goya_Maja_nuda2.jpg/1280px-Goya_Maja_nuda2.jpg" },
      { title: "The Sleep of Reason Produces Monsters", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Goya_-_Caprichos_%2843%29_-_Sleep_of_Reason.jpg/800px-Goya_-_Caprichos_%2843%29_-_Sleep_of_Reason.jpg" },
      { title: "The Colossus", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Francisco_de_Goya_y_Lucientes_-_The_Colossus_-_Google_Art_Project.jpg/800px-Francisco_de_Goya_y_Lucientes_-_The_Colossus_-_Google_Art_Project.jpg" },
    ]
  },

  {
    name: "Eugène Delacroix",
    born: 1798, died: 1863, nationality: "French",
    bio: "French Romantic painter whose Liberty Leading the People became a symbol of the Revolution.",
    tags: ["popular","french","full"],
    paintings: [
      { title: "Liberty Leading the People", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg" },
      { title: "The Death of Sardanapalus", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Death_of_Sardanapalus_1827_Delacroix.jpg/1280px-Death_of_Sardanapalus_1827_Delacroix.jpg" },
      { title: "Women of Algiers", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eug%C3%A8ne_Delacroix_-_Women_of_Algiers_%28in_their_Apartment%29_-_WGA6201.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Women_of_Algiers_%28in_their_Apartment%29_-_WGA6201.jpg" },
      { title: "The Massacre at Chios", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_Le_Massacre_de_Sc%C3%ADo.jpg/800px-Eug%C3%A8ne_Delacroix_-_Le_Massacre_de_Sc%C3%ADo.jpg" },
    ]
  },

  {
    name: "Sandro Botticelli",
    born: 1445, died: 1510, nationality: "Italian",
    bio: "Early Renaissance master famous for The Birth of Venus and Primavera.",
    tags: ["popular","renaissance","full"],
    paintings: [
      { title: "The Birth of Venus", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg" },
      { title: "Primavera", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg" },
      { title: "The Adoration of the Magi", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Botticelli-adoration_of_the_magi_%281475%29.jpg/1280px-Botticelli-adoration_of_the_magi_%281475%29.jpg" },
      { title: "Portrait of a Young Man", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Sandro_Botticelli_-_Portrait_of_a_Young_Man_-_Google_Art_Project.jpg/800px-Sandro_Botticelli_-_Portrait_of_a_Young_Man_-_Google_Art_Project.jpg" },
    ]
  },

  {
    name: "Leonardo da Vinci",
    born: 1452, died: 1519, nationality: "Italian",
    bio: "Renaissance polymath, painter of the Mona Lisa and The Last Supper.",
    tags: ["popular","renaissance","full"],
    paintings: [
      { title: "Mona Lisa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" },
      { title: "The Last Supper", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1280px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg" },
      { title: "Vitruvian Man", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruvian_Man_Luc_Viatour.jpg/800px-Da_Vinci_Vitruvian_Man_Luc_Viatour.jpg" },
      { title: "Lady with an Ermine", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_%28adjusted_levels%29.jpg/800px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_%28adjusted_levels%29.jpg" },
      { title: "The Virgin of the Rocks", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Leonardo_da_Vinci_-_Virgin_of_the_Rocks_%28National_Gallery_London%29.jpg/800px-Leonardo_da_Vinci_-_Virgin_of_the_Rocks_%28National_Gallery_London%29.jpg" },
    ]
  },

  {
    name: "Michelangelo",
    born: 1475, died: 1564, nationality: "Italian",
    bio: "Sculptor and painter of the Sistine Chapel ceiling, defining figure of Renaissance art.",
    tags: ["popular","renaissance","full"],
    paintings: [
      { title: "The Creation of Adam", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg" },
      { title: "The Last Judgment", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Last_Judgement_%28Michelangelo%29.jpg/800px-Last_Judgement_%28Michelangelo%29.jpg" },
      { title: "Sistine Chapel Ceiling", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sistina-interno.jpg/1280px-Sistina-interno.jpg" },
      { title: "The Deluge", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Michelangelo%2C_Sistina_06.jpg/1280px-Michelangelo%2C_Sistina_06.jpg" },
    ]
  },

  {
    name: "Raphael",
    born: 1483, died: 1520, nationality: "Italian",
    bio: "Renaissance master known for his Madonnas and the fresco The School of Athens.",
    tags: ["popular","renaissance","full"],
    paintings: [
      { title: "The School of Athens", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg" },
      { title: "Sistine Madonna", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Raphael_-_Sistine_Madonna.jpg/800px-Raphael_-_Sistine_Madonna.jpg" },
      { title: "The Transfiguration", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Transfigurazione_%28Raffaello%29_September_2015-1a.jpg/800px-Transfigurazione_%28Raffaello%29_September_2015-1a.jpg" },
      { title: "Portrait of Baldassare Castiglione", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Baldassare_Castiglione%2C_by_Raffaello.jpg/800px-Baldassare_Castiglione%2C_by_Raffaello.jpg" },
    ]
  },

  {
    name: "Caravaggio",
    born: 1571, died: 1610, nationality: "Italian",
    bio: "Baroque master famed for dramatic tenebrism and uncompromising realism.",
    tags: ["popular","full"],
    paintings: [
      { title: "Judith Beheading Holofernes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Caravaggio_Judith_Beheading_Holofernes.jpg/1280px-Caravaggio_Judith_Beheading_Holofernes.jpg" },
      { title: "The Calling of Saint Matthew", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/1280px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg" },
      { title: "Supper at Emmaus", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/0_La_Cer%C3%A0_d%27Emm%C3%A0us_-_Caravaggio_-_National_Gallery_%28Londres%29.JPG/1280px-0_La_Cer%C3%A0_d%27Emm%C3%A0us_-_Caravaggio_-_National_Gallery_%28Londres%29.JPG" },
      { title: "The Death of the Virgin", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Death_of_the_Virgin-Caravaggio_%281606%29.jpg/800px-Death_of_the_Virgin-Caravaggio_%281606%29.jpg" },
      { title: "Narcissus", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Narcissus-Caravaggio_%281594-96%29_edited.jpg/800px-Narcissus-Caravaggio_%281594-96%29_edited.jpg" },
    ]
  },

  {
    name: "Diego Velázquez",
    born: 1599, died: 1660, nationality: "Spanish",
    bio: "Court painter to Philip IV and one of the greatest of the Old Masters.",
    tags: ["popular","full"],
    paintings: [
      { title: "Las Meninas", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Las_Meninas_01.jpg/800px-Las_Meninas_01.jpg" },
      { title: "The Rokeby Venus", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Diego_Vel%C3%A1zquez_-_Venus_at_her_Mirror_%28The_Rokeby_Venus%29_-_Google_Art_Project.jpg/1280px-Diego_Vel%C3%A1zquez_-_Venus_at_her_Mirror_%28The_Rokeby_Venus%29_-_Google_Art_Project.jpg" },
      { title: "The Surrender of Breda", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Velazquez-The_Surrender_of_Breda.jpg/1280px-Velazquez-The_Surrender_of_Breda.jpg" },
      { title: "Portrait of Pope Innocent X", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Vel%C3%A1zquez_%E2%80%93_Retrato_del_Papa_Inocencio_X_%28Doria_Pamphilj_Gallery%2C_Rome%2C_1650%29.jpg/800px-Vel%C3%A1zquez_%E2%80%93_Retrato_del_Papa_Inocencio_X_%28Doria_Pamphilj_Gallery%2C_Rome%2C_1650%29.jpg" },
    ]
  },

  {
    name: "Thomas Gainsborough",
    born: 1727, died: 1788, nationality: "British",
    bio: "18th-century English portrait and landscape painter, rival of Joshua Reynolds.",
    tags: ["popular","full"],
    paintings: [
      { title: "The Blue Boy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/The_Blue_Boy.jpg/800px-The_Blue_Boy.jpg" },
      { title: "Mr and Mrs Andrews", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mr_and_Mrs_Andrews.jpg/1280px-Mr_and_Mrs_Andrews.jpg" },
      { title: "The Morning Walk", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Thomas_Gainsborough_-_The_Morning_Walk_-_Google_Art_Project.jpg/800px-Thomas_Gainsborough_-_The_Morning_Walk_-_Google_Art_Project.jpg" },
    ]
  },

  {
    name: "Pieter Bruegel",
    born: 1525, died: 1569, nationality: "Flemish",
    bio: "Renaissance painter known for Hunters in the Snow and vivid scenes of peasant life.",
    tags: ["popular","renaissance","full"],
    paintings: [
      { title: "Hunters in the Snow", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg/1280px-Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg" },
      { title: "The Tower of Babel", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg/1280px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg" },
      { title: "The Peasant Wedding", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project.jpg/1280px-Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project.jpg" },
      { title: "Netherlandish Proverbs", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Pieter_Bruegel_the_Elder_-_Netherlandish_Proverbs_-_Google_Art_Project.jpg/1280px-Pieter_Bruegel_the_Elder_-_Netherlandish_Proverbs_-_Google_Art_Project.jpg" },
    ]
  },

  // ── RENAISSANCE (additional) ──────────────────────────────────────────────

  {
    name: "Jan van Eyck",
    born: 1390, died: 1441, nationality: "Flemish",
    bio: "Early Flemish master who perfected oil painting, famous for the Ghent Altarpiece.",
    tags: ["renaissance","full"],
    paintings: [
      { title: "Arnolfini Portrait", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/800px-Van_Eyck_-_Arnolfini_Portrait.jpg" },
      { title: "The Ghent Altarpiece", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Retable_de_l%27Agneau_mystique.jpg/1280px-Retable_de_l%27Agneau_mystique.jpg" },
      { title: "Portrait of a Man in a Turban", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jan_van_Eyck_-_Portrait_of_a_Man_with_a_Red_Turban_-_WGA7619.jpg/800px-Jan_van_Eyck_-_Portrait_of_a_Man_with_a_Red_Turban_-_WGA7619.jpg" },
    ]
  },

  {
    name: "Titian",
    born: 1488, died: 1576, nationality: "Italian",
    bio: "Venetian Renaissance master known for rich colour, mythological, and devotional paintings.",
    tags: ["renaissance","full"],
    paintings: [
      { title: "Assumption of the Virgin", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Tizian_041.jpg/800px-Tizian_041.jpg" },
      { title: "Venus of Urbino", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tiziano_Vecelli_-_Venus_of_Urbino_-_Google_Art_Project.jpg/1280px-Tiziano_Vecelli_-_Venus_of_Urbino_-_Google_Art_Project.jpg" },
      { title: "Bacchus and Ariadne", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Titian_-_Bacchus_and_Ariadne_-_Google_Art_Project.jpg/1280px-Titian_-_Bacchus_and_Ariadne_-_Google_Art_Project.jpg" },
      { title: "Portrait of Charles V", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Titian_-_Portrait_of_Charles_V_Seated_-_Google_Art_Project.jpg/800px-Titian_-_Portrait_of_Charles_V_Seated_-_Google_Art_Project.jpg" },
    ]
  },

  {
    name: "El Greco",
    born: 1541, died: 1614, nationality: "Greek",
    bio: "Painter of the Spanish Renaissance known for elongated figures and vivid, otherworldly colour.",
    tags: ["renaissance","full"],
    paintings: [
      { title: "The Burial of the Count of Orgaz", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/El_Greco_%28Dom%C3%ADnikos_Theotok%C3%B3poulos%29_-_El_entierro_del_conde_de_Orgaz.jpg/800px-El_Greco_%28Dom%C3%ADnikos_Theotok%C3%B3poulos%29_-_El_entierro_del_conde_de_Orgaz.jpg" },
      { title: "View of Toledo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/El_Greco_View_of_Toledo.jpg/800px-El_Greco_View_of_Toledo.jpg" },
      { title: "The Disrobing of Christ", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/El_Greco_-_Christ_Carrying_the_Cross_-_Google_Art_Project.jpg/800px-El_Greco_-_Christ_Carrying_the_Cross_-_Google_Art_Project.jpg" },
    ]
  },

  // ── IMPRESSIONIST (additional) ────────────────────────────────────────────

  {
    name: "Camille Pissarro",
    born: 1830, died: 1903, nationality: "French",
    bio: "Danish-French Impressionist, mentor to Cézanne and Gauguin, and a central figure of the movement.",
    tags: ["french","impressionist","full"],
    paintings: [
      { title: "Boulevard Montmartre at Night", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Camille_Pissarro_-_The_Boulevard_Montmartre_on_a_Winter_Morning_-_Google_Art_Project.jpg/1280px-Camille_Pissarro_-_The_Boulevard_Montmartre_on_a_Winter_Morning_-_Google_Art_Project.jpg" },
      { title: "The Harvest", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Camille_Pissarro_-_The_Harvest_-_Google_Art_Project.jpg/1280px-Camille_Pissarro_-_The_Harvest_-_Google_Art_Project.jpg" },
      { title: "Lordship Lane Station", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Camille_Pissarro_-_Lordship_Lane_Station%2C_Dulwich_-_Google_Art_Project.jpg/1280px-Camille_Pissarro_-_Lordship_Lane_Station%2C_Dulwich_-_Google_Art_Project.jpg" },
    ]
  },

  {
    name: "Alfred Sisley",
    born: 1839, died: 1899, nationality: "French",
    bio: "Impressionist landscape painter, the most consistent of the movement throughout his career.",
    tags: ["french","impressionist","full"],
    paintings: [
      { title: "Flood at Port-Marly", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Alfred_Sisley_-_Flood_at_Port-Marly_-_Google_Art_Project.jpg/1280px-Alfred_Sisley_-_Flood_at_Port-Marly_-_Google_Art_Project.jpg" },
      { title: "The Bridge at Villeneuve-la-Garenne", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Alfred_Sisley_-_The_Bridge_at_Villeneuve-la-Garenne.jpg/1280px-Alfred_Sisley_-_The_Bridge_at_Villeneuve-la-Garenne.jpg" },
      { title: "Snow at Louveciennes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Alfred_Sisley_-_Snow_at_Louveciennes_-_Google_Art_Project.jpg/800px-Alfred_Sisley_-_Snow_at_Louveciennes_-_Google_Art_Project.jpg" },
    ]
  },

  {
    name: "Berthe Morisot",
    born: 1841, died: 1895, nationality: "French",
    bio: "French Impressionist and the first woman to join the inner Impressionist circle.",
    tags: ["french","impressionist","full"],
    paintings: [
      { title: "The Cradle", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg/800px-Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg" },
      { title: "Summer's Day", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Berthe_Morisot_-_Summer%27s_Day_-_National_Gallery.jpg/1280px-Berthe_Morisot_-_Summer%27s_Day_-_National_Gallery.jpg" },
      { title: "The Harbor at Lorient", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Berthe_Morisot_-_Harbor_at_Lorient.jpg/1280px-Berthe_Morisot_-_Harbor_at_Lorient.jpg" },
    ]
  },

  // ── FRENCH (additional) ───────────────────────────────────────────────────

  {
    name: "Gustave Courbet",
    born: 1819, died: 1877, nationality: "French",
    bio: "Founder of Realism in 19th-century French painting, who rejected Romantic conventions.",
    tags: ["french","realist","full"],
    paintings: [
      { title: "Bonjour Monsieur Courbet", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Gustave_Courbet_-_Bonjour_Monsieur_Courbet_-_Google_Art_Project.jpg/1280px-Gustave_Courbet_-_Bonjour_Monsieur_Courbet_-_Google_Art_Project.jpg" },
      { title: "A Burial at Ornans", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg/1280px-Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg" },
      { title: "The Painter's Studio", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Courbet_The_Painters_Studio.jpg/1280px-Courbet_The_Painters_Studio.jpg" },
    ]
  },

  {
    name: "Jean-François Millet",
    born: 1814, died: 1875, nationality: "French",
    bio: "Barbizon School painter famed for monumental, dignified depictions of French peasants.",
    tags: ["french","realist","full"],
    paintings: [
      { title: "The Gleaners", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg/1280px-Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg" },
      { title: "The Angelus", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jean-Fran%C3%A7ois_Millet_-_L%27Ang%C3%A9lus_-_Google_Art_Project.jpg/800px-Jean-Fran%C3%A7ois_Millet_-_L%27Ang%C3%A9lus_-_Google_Art_Project.jpg" },
      { title: "The Sower", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jean-Fran%C3%A7ois_Millet_-_The_Sower_-_Google_Art_Project.jpg/800px-Jean-Fran%C3%A7ois_Millet_-_The_Sower_-_Google_Art_Project.jpg" },
    ]
  },

  // ── RUSSIAN ───────────────────────────────────────────────────────────────

  {
    name: "Ilya Repin",
    born: 1844, died: 1930, nationality: "Russian",
    bio: "The most celebrated Russian realist, known for Barge Haulers on the Volga.",
    tags: ["russian","realist","full"],
    paintings: [
      { title: "Barge Haulers on the Volga", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ilya_Repin_-_Barge_Haulers_on_the_Volga_-_Google_Art_Project.jpg/1280px-Ilya_Repin_-_Barge_Haulers_on_the_Volga_-_Google_Art_Project.jpg" },
      { title: "Reply of the Zaporozhian Cossacks", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Repin_Cossacks.jpg/1280px-Repin_Cossacks.jpg" },
      { title: "Ivan the Terrible and His Son Ivan", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Repin_Ivan_Terrible.jpg/800px-Repin_Ivan_Terrible.jpg" },
      { title: "Religious Procession in Kursk Province", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ilya_Repin_-_Religious_Procession_in_Kursk_Province_-_Google_Art_Project.jpg/1280px-Ilya_Repin_-_Religious_Procession_in_Kursk_Province_-_Google_Art_Project.jpg" },
    ]
  },

  {
    name: "Ivan Shishkin",
    born: 1832, died: 1898, nationality: "Russian",
    bio: "Russian Realist landscape painter famous for luminous, detailed depictions of forests.",
    tags: ["russian","realist","full"],
    paintings: [
      { title: "Morning in a Pine Forest", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Ivan_Shishkin_-_Morning_in_a_Pine_Forest.jpg/1280px-Ivan_Shishkin_-_Morning_in_a_Pine_Forest.jpg" },
      { title: "Rye", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ivan_Ivanovich_Shishkin_-_Rye_-_Google_Art_Project.jpg/1280px-Ivan_Ivanovich_Shishkin_-_Rye_-_Google_Art_Project.jpg" },
      { title: "Pine Forest", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Shishkin_-_Pine_forest.jpg/1280px-Shishkin_-_Pine_forest.jpg" },
    ]
  },

  {
    name: "Vasily Surikov",
    born: 1848, died: 1916, nationality: "Russian",
    bio: "Russian historical painter known for large-scale works depicting key moments in Russian history.",
    tags: ["russian","full"],
    paintings: [
      { title: "Morning of the Streltsy Execution", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Vasily_Surikov_-_The_Morning_of_the_Streltsy_Execution.jpg/1280px-Vasily_Surikov_-_The_Morning_of_the_Streltsy_Execution.jpg" },
      { title: "Boyarina Morozova", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Vasily_Surikov_-_Boyarina_Morozova_-_Google_Art_Project.jpg/1280px-Vasily_Surikov_-_Boyarina_Morozova_-_Google_Art_Project.jpg" },
      { title: "The Conquest of Siberia by Yermak", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Vasily_Surikov_-_The_Conquest_of_Siberia_by_Yermak_Timofeyevich.jpg/1280px-Vasily_Surikov_-_The_Conquest_of_Siberia_by_Yermak_Timofeyevich.jpg" },
    ]
  },

  {
    name: "Isaac Levitan",
    born: 1860, died: 1900, nationality: "Russian",
    bio: "Russian landscape painter who created the concept of the 'mood landscape'.",
    tags: ["russian","impressionist","full"],
    paintings: [
      { title: "Above Eternal Peace", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Isaac_Levitan_-_Above_Eternal_Peace_-_Google_Art_Project.jpg/1280px-Isaac_Levitan_-_Above_Eternal_Peace_-_Google_Art_Project.jpg" },
      { title: "Evening Bells", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Isaac_Levitan_-_Evening_Bells_-_Google_Art_Project.jpg/1280px-Isaac_Levitan_-_Evening_Bells_-_Google_Art_Project.jpg" },
      { title: "Golden Autumn", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Levitan_golden_autumn.jpg/1280px-Levitan_golden_autumn.jpg" },
    ]
  },

  {
    name: "Vasily Vereshchagin",
    born: 1842, died: 1904, nationality: "Russian",
    bio: "Russian painter best known for stark, anti-war depictions of military campaigns.",
    tags: ["russian","realist","full"],
    paintings: [
      { title: "Apotheosis of War", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vereshchagin-Pyramid_of_Skulls.jpg/1280px-Vereshchagin-Pyramid_of_Skulls.jpg" },
      { title: "The Doors of Tamerlane", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Vasily_Vereshchagin_-_The_Doors_of_Tamerlane_%28The_Conqueror%29_-_Google_Art_Project.jpg/800px-Vasily_Vereshchagin_-_The_Doors_of_Tamerlane_%28The_Conqueror%29_-_Google_Art_Project.jpg" },
      { title: "Shipka Pass", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Shipka_peak_by_Vereshchagin.jpg/1280px-Shipka_peak_by_Vereshchagin.jpg" },
    ]
  },

  // ── REALIST (additional) ──────────────────────────────────────────────────

  {
    name: "Andrew Wyeth",
    born: 1917, died: 2009, nationality: "American",
    bio: "Realist painter best known for Christina's World and his Brandywine Valley scenes.",
    tags: ["realist","full"],
    paintings: [
      { title: "Christina's World", url: "https://upload.wikimedia.org/wikipedia/en/8/8b/Christinas_World.jpg" },
      { title: "Wind from the Sea", url: "https://upload.wikimedia.org/wikipedia/en/4/49/Wind_from_the_Sea_by_Andrew_Wyeth.jpg" },
      { title: "Winter Fields", url: "https://upload.wikimedia.org/wikipedia/en/5/5e/Wyeth_Winter_Fields.jpg" },
    ]
  },

  {
    name: "Winslow Homer",
    born: 1836, died: 1910, nationality: "American",
    bio: "American realist celebrated for marine subjects and scenes of rural life.",
    tags: ["realist","full"],
    paintings: [
      { title: "The Gulf Stream", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Winslow_Homer_-_The_Blue_Boat.jpg/1280px-Winslow_Homer_-_The_Blue_Boat.jpg" },
      { title: "Snap the Whip", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Winslow_Homer_-_Snap_the_Whip.jpg/1280px-Winslow_Homer_-_Snap_the_Whip.jpg" },
      { title: "Breezing Up", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Winslow_Homer_-_Breezing_Up_-_Google_Art_Project.jpg/1280px-Winslow_Homer_-_Breezing_Up_-_Google_Art_Project.jpg" },
    ]
  },

];
