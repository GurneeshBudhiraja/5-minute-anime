/**
 * Contains the premade stories using Perplexity API and Image generation models
 */

const PRE_MADE_STORIES: ExploreStories[] = [
  // story 1
  {
    title: "<title>Sky Pirates: Quest for the Celestial Treasure</title>",
    data: [
      {
        prompt: `<title>Sky Pirates: Quest for the Celestial Treasure</title>
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: Captain Orion poised at the prow of his flagship under a star-streaked sky, floating isles illuminated by bioluminescent glow in the distance.
        Characters:
        • Captain Orion, resolute and charismatic, silhouette outlined by lantern glow.
        • First Mate Luna, vigilant with a spyglass, wind-tousled hair and steampunk coat.
        Panel Composition: Dramatic low-angle shot framing the ship cresting a sea of clouds, islands arching overhead.
        Dialogue & Text: Title text (center, bold): "SKY PIRATES: QUEST FOR THE CELESTIAL TREASURE"
        Sound Effects: Soft hum of engines ("VRRMMM") near the propellers.
        Atmosphere: Epic and adventurous, with cool moonlit blues contrasted by warm lantern gold, evoking mystery and daring.`,
        image: "/sky-pirates/scene0.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces.
        Scene: Interior of the airship, crew members busy at their stations, with a large map of the floating islands spread out on a table, late afternoon with warm sunlight filtering through the windows.
        Characters:
        • Engineer Zephyr, focused and inventive, tinkering with a steam-powered device, wearing goggles and a leather apron.
        • Navigator Astra, studious and determined, poring over the map, with a compass in hand and a look of concentration.
        Panel Composition: Medium shot focusing on Zephyr's hands as they work, with Astra in the background studying the map, and the map's details visible on the table.
        Dialogue & Text: Speech bubble (bottom-left): “We need to find the hidden passage!”
        Sound Effects: “TICK-TOCK” (small text near Zephyr's device)
        Atmosphere: Cozy with warm golden lighting, emphasizing teamwork and strategy.`,
        image: "/sky-pirates/scene1.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: A dramatic aerial battle high above the floating isles at dusk; two rival airships locked in fierce combat with cannon fire and billowing smoke.
        Characters:
        • Captain Orion, fierce and commanding on his ship's deck wielding a gleaming cutlass.
        • Rival Captain Scarlett, ruthless and cunning aboard her vessel with a determined glare.
        Panel Composition: Dynamic high-angle wide shot capturing both ships in mid-battle; explosions erupting between them with smoke trails drawing the eye across the frame.
        Dialogue & Text: Speech bubble (top-center): “Take cover!”
        Sound Effects: “BOOM!” (large impact text integrated into explosion clouds)
        Atmosphere: Intense and chaotic with dark stormy clouds contrasted by fiery orange highlights from cannon blasts illuminating the scene.`,
        image: "/sky-pirates/scene2.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: The crew discovers a hidden treasure chamber deep within a floating island at twilight, filled with ancient artifacts and mysterious devices, with a soft ethereal glow.
        Characters:
        • First Mate Luna, awestruck and curious, examining a glowing artifact with a look of wonder.
        • Captain Orion, triumphant yet cautious, standing guard at the entrance with a watchful gaze.
        Panel Composition: Low-angle shot focusing on Luna's amazed expression, with the treasure chamber's wonders in the background, and the soft glow of artifacts illuminating her face.
        Dialogue & Text: Speech bubble (bottom-right): “This is it... the Celestial Treasure!”
        Sound Effects: None
        Atmosphere: Mystical with soft blue lighting, emphasizing discovery and wonder, and a sense of ancient magic lingering in the air.`,
        image: "/sky-pirates/scene3.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: The crew celebrates their victory on the airship deck at sunset, with the floating islands fading into the distance, warm golden light casting long shadows.
        Characters:
        • Captain Orion, smiling and relieved, raising a glass in a toast with a hint of weariness.
        • Engineer Zephyr, laughing and clinking glasses with Navigator Astra, both beaming with joy.
        Panel Composition: Warm close-up shot focusing on the crew's joyful faces, with the setting sun casting a golden glow and the islands visible in the background.
        Dialogue & Text: Speech bubble (top-center): “To new adventures!”
        Sound Effects: “CLINK” (small text near the glasses)
        Atmosphere: Heartwarming with soft orange hues and gentle shadows, capturing camaraderie and triumph.`,
        image: "/sky-pirates/scene4.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: Inside the airship's cozy common room at night; warm lantern light casts soft shadows over the crew gathered around a wooden table sharing stories and laughter.
        Characters:
        • Captain Orion, relaxed and smiling warmly as he recounts their adventure.
        • First Mate Luna and Engineer Zephyr listening intently with joyful expressions.
        Panel Composition: Intimate medium shot focusing on the close-knit group seated in a semi-circle; flickering lantern light highlights their faces against the rich wood interior.
        Dialogue & Text: Speech bubble (top-left): “We've earned this moment.”
        Sound Effects: Soft crackle of fire (“CRACKLE”) near a small stove in the corner.
        Atmosphere: Warm and nostalgic with amber tones creating a sense of camaraderie and peaceful reflection after their journey.`,
        image: "/sky-pirates/scene5.png",
      },
    ],
  },
  {
    title: "<title>Sky Pirates: Quest for the Celestial Treasure</title>",
    data: [
      {
        prompt: `<title>Sky Pirates: Quest for the Celestial Treasure</title>
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: Captain Orion poised at the prow of his flagship under a star-streaked sky, floating isles illuminated by bioluminescent glow in the distance.
        Characters:
        • Captain Orion, resolute and charismatic, silhouette outlined by lantern glow.
        • First Mate Luna, vigilant with a spyglass, wind-tousled hair and steampunk coat.
        Panel Composition: Dramatic low-angle shot framing the ship cresting a sea of clouds, islands arching overhead.
        Dialogue & Text: Title text (center, bold): "SKY PIRATES: QUEST FOR THE CELESTIAL TREASURE"
        Sound Effects: Soft hum of engines ("VRRMMM") near the propellers.
        Atmosphere: Epic and adventurous, with cool moonlit blues contrasted by warm lantern gold, evoking mystery and daring.`,
        image: "/sky-pirates/scene0.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces.
        Scene: Interior of the airship, crew members busy at their stations, with a large map of the floating islands spread out on a table, late afternoon with warm sunlight filtering through the windows.
        Characters:
        • Engineer Zephyr, focused and inventive, tinkering with a steam-powered device, wearing goggles and a leather apron.
        • Navigator Astra, studious and determined, poring over the map, with a compass in hand and a look of concentration.
        Panel Composition: Medium shot focusing on Zephyr's hands as they work, with Astra in the background studying the map, and the map's details visible on the table.
        Dialogue & Text: Speech bubble (bottom-left): “We need to find the hidden passage!”
        Sound Effects: “TICK-TOCK” (small text near Zephyr's device)
        Atmosphere: Cozy with warm golden lighting, emphasizing teamwork and strategy.`,
        image: "/sky-pirates/scene1.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: A dramatic aerial battle high above the floating isles at dusk; two rival airships locked in fierce combat with cannon fire and billowing smoke.
        Characters:
        • Captain Orion, fierce and commanding on his ship's deck wielding a gleaming cutlass.
        • Rival Captain Scarlett, ruthless and cunning aboard her vessel with a determined glare.
        Panel Composition: Dynamic high-angle wide shot capturing both ships in mid-battle; explosions erupting between them with smoke trails drawing the eye across the frame.
        Dialogue & Text: Speech bubble (top-center): “Take cover!”
        Sound Effects: “BOOM!” (large impact text integrated into explosion clouds)
        Atmosphere: Intense and chaotic with dark stormy clouds contrasted by fiery orange highlights from cannon blasts illuminating the scene.`,
        image: "/sky-pirates/scene2.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: The crew discovers a hidden treasure chamber deep within a floating island at twilight, filled with ancient artifacts and mysterious devices, with a soft ethereal glow.
        Characters:
        • First Mate Luna, awestruck and curious, examining a glowing artifact with a look of wonder.
        • Captain Orion, triumphant yet cautious, standing guard at the entrance with a watchful gaze.
        Panel Composition: Low-angle shot focusing on Luna's amazed expression, with the treasure chamber's wonders in the background, and the soft glow of artifacts illuminating her face.
        Dialogue & Text: Speech bubble (bottom-right): “This is it... the Celestial Treasure!”
        Sound Effects: None
        Atmosphere: Mystical with soft blue lighting, emphasizing discovery and wonder, and a sense of ancient magic lingering in the air.`,
        image: "/sky-pirates/scene3.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: The crew celebrates their victory on the airship deck at sunset, with the floating islands fading into the distance, warm golden light casting long shadows.
        Characters:
        • Captain Orion, smiling and relieved, raising a glass in a toast with a hint of weariness.
        • Engineer Zephyr, laughing and clinking glasses with Navigator Astra, both beaming with joy.
        Panel Composition: Warm close-up shot focusing on the crew's joyful faces, with the setting sun casting a golden glow and the islands visible in the background.
        Dialogue & Text: Speech bubble (top-center): “To new adventures!”
        Sound Effects: “CLINK” (small text near the glasses)
        Atmosphere: Heartwarming with soft orange hues and gentle shadows, capturing camaraderie and triumph.`,
        image: "/sky-pirates/scene4.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: Inside the airship's cozy common room at night; warm lantern light casts soft shadows over the crew gathered around a wooden table sharing stories and laughter.
        Characters:
        • Captain Orion, relaxed and smiling warmly as he recounts their adventure.
        • First Mate Luna and Engineer Zephyr listening intently with joyful expressions.
        Panel Composition: Intimate medium shot focusing on the close-knit group seated in a semi-circle; flickering lantern light highlights their faces against the rich wood interior.
        Dialogue & Text: Speech bubble (top-left): “We've earned this moment.”
        Sound Effects: Soft crackle of fire (“CRACKLE”) near a small stove in the corner.
        Atmosphere: Warm and nostalgic with amber tones creating a sense of camaraderie and peaceful reflection after their journey.`,
        image: "/sky-pirates/scene5.png",
      },
    ],
  },
];

export default PRE_MADE_STORIES;
