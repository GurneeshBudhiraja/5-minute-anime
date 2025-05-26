/**
 * Contains the prompts and images for the premade stories made using Perplexity API and Image generation models
 */

const PRE_MADE_STORIES: ExploreStories[] = [
  // story 1 - sky pirates
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
  // story2 - Nicola Tesla
  {
    title: "<title>Tesla: Lightning Master of Colorado Springs</title>",
    data: [
      {
        prompt: `<title>Tesla: Lightning Master of Colorado Springs</title>. Nikola Tesla standing boldly before his towering 50-foot Tesla coil, arcs of brilliant lightning crackling wildly around him under a stormy night sky in 1899 Colorado Springs; dramatic sparks illuminating the rugged mountain backdrop, intense determination in Tesla's eyes, rival inventors lurking in shadowy corners—science and drama collide in an epic battle for wireless electricity mastery. Ultra-detailed anime style, 4K cinematic lighting.`,
        image: "/electric-storm-tesla/scene0.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces. Scene: Nikola Tesla's Colorado Springs Experimental Station, May 1899, under a clear blue sky with a hint of excitement and anticipation. Characters: 
        • Nikola Tesla: Tall, slender, with a determined look, wearing a suit and holding a notebook
        • Joseph Dozier: Local carpenter, rugged attire, curious expression
        • Leonard E. Curtis: Patent attorney, well-dressed, supportive smile
        Panel Composition: Wide shot of the laboratory under construction (left) / close-up of Tesla explaining his plans (right)
        Dialogue & Text:
        • Tesla: “Imagine it, Joseph—wireless telegraphy from Pikes Peak to Paris!” (top-left bubble). • Dozier: “That sounds like magic, Mr. Tesla. How do you plan to make it happen?” (bottom-right bubble)
        • Curtis: “Nikola, your work here could change the world. We're behind you all the way” (mid-panel bubble)
        • Tesla: “Thank you, Leonard. I believe the thin air here will be perfect for my experiments” (top-right bubble)
        • Dozier: “And what about the rumors of rival inventors trying to sabotage your work?” (bottom-left bubble)
        • Tesla: “Let them try. I have the vision and the science on my side” (mid-panel bubble)
        Sound Effects:
        • “HAMMERING!” (construction in the background)
        • “WHOOSH!” (wind blowing through the open fields)
        Atmosphere: Exciting Shonen adventure with dynamic action lines and a sense of pioneering spirit.
        `,
        image: "/electric-storm-tesla/scene1.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: Nikola Tesla's Colorado Springs Experimental Station, late afternoon, May 1899, with a sense of anticipation as Tesla prepares for his first major experiment.
        Characters:
        • Nikola Tesla: Tall, slender, determined, holding a notebook
        • Joseph Dozier: Local carpenter, rugged attire, curious expression
        • Leonard E. Curtis: Patent attorney, supportive smile
        • George Westinghouse: Businessman, observing from a distance, intrigued
        Panel Composition: Split-screen: close-up of Tesla explaining his experiment (left) / wide shot of the lab with the massive Tesla coil in the background (right)
        Dialogue & Text:. • Tesla: “Today, we will harness the power of the atmosphere itself. Watch closely!” (top-left bubble)
        • Dozier: “But Mr. Tesla, isn't this dangerous? What if it gets out of control?” (bottom-left bubble)
        • Curtis: “Nikola, your work could revolutionize communication. We're all rooting for you” (mid-panel bubble)
        • Westinghouse: “I must admit, Tesla's ambition is impressive. But can he deliver?” (top-right bubble)
        • Tesla: “The key is not just the technology, but understanding the Earth's resonance” (bottom-right bubble)
        Sound Effects:
        • “ZZZZT!” (electricity crackling)
        • “WHOOSH!” (wind through the fields)
        Atmosphere: Exciting Shonen adventure with dynamic action lines and a sense of pioneering spirit.
        `,
        image: "/electric-storm-tesla/scene2.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces. Scene: Night at Tesla's Experimental Station; a fierce thunderstorm rages, massive artificial lightning bolts arcing from the towering Tesla coil into the dark sky. Sparks fly as Tesla and his assistants monitor instruments intensely.
        Characters:
        • Nikola Tesla: Exhilarated, soot-stained lab coat, wind-tousled hair
        • Assistant #1: Young man adjusting dials, tense expression. • Assistant #2: Woman holding a clipboard, eyes wide with excitement
              Panel Composition: Dynamic wide shot of the giant Tesla coil emitting enormous lightning arcs (center) / close-up on Tesla's determined face (top-right) / inset of assistants working frantically (bottom-left)
              Dialogue & Text:
        • Tesla: “This is it! Millions of volts—wireless energy unleashed!” (top-left bubble)
              • Assistant #1: “The sparks are reaching over one hundred feet! Incredibl. (bottom-left bubble)
              • Assistant #2: “Sir… what if this overloads the local grid?” (mid-panel bubble)
              • Tesla: “Let them try to stop progress! We're rewriting physics tonight!” (top-right bubble)
              Sound Effects:
              • “CRACKLE-BOOM!” (lightning strike)
        • “ZZZZZZT!” (electric arcs buzzing)
        Atmosphere: Intense Shonen action with speed lines emphasizing raw electrical energy and high-stakes tension.`,
        image: "/electric-storm-tesla/scene3.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: Early morning after the storm—locals and rival inventors gather outside the lab fence as rumors spread.. Characters:
        • Nikola Tesla: Exhausted but determined, singed lab coat
        • Joseph Dozier: Protective stance by Tesla's side
        • Leonard E. Curtis: Concerned but supportive
        • Rival Inventor: Calculating smirk among the crowd
        Panel Composition: Split-screen—close-up of Tesla and allies inside (left) / wide shot of curious townsfolk beyond the fence (right)
        Dialogue & Text:
        • Dozier: “They say you nearly burned down half the town!” (top-left bubble)
        • Curtis: “Nikola… we could lose our free electricity deal.” (bottom-left bubble). • Narration: “Word spreads fast in a small town—especially when sparks fly.” (bottom-center box)
        • Rival Inventor: “Let him play with lightning. He'll only prove me right when he fails.” (top-right bubble)
        Sound Effects:
        • “CRACKLE!” (lingering electricity)
        • “MURMUR…” (crowd voices)
        Atmosphere: Intense Shonen drama with dynamic paneling and expressive faces.`,
        image: "/electric-storm-tesla/scene4.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: Nighttime storm inside the lab; Tesla and assistants work by artificial lightning flashes.
        Characters:
        • Nikola Tesla: Intense focus, disheveled hair, soot-stained coat
        • Assistant #1: Adjusting dials nervously
        • Assistant #2: Clipboard in hand, eyes wide. • George Westinghouse: Observing from afar, intrigued
        Panel Composition: Wide shot of the lab with lightning illuminating the room (center) / close-up on Tesla's face (top-right) / inset of assistants (bottom-left)
        Dialogue & Text:
        • Tesla: “This is the moment we harness Earth's power!” (top-left bubble)
        • Assistant #1: “Sir, voltage is critical—are you sure?” (bottom-left bubble)
        • Assistant #2: “Look—the bulbs outside glow without wires!” (mid-panel bubble)
        • Westinghouse: “Tesla might just change the world.” (top-right bubble)
        • Tesla: “We're rewriting the laws of physics!” (bottom-right bubble)
        Sound Effects:
        • “CRACKLE-BOOM!” (lightning strike)
        • “ZZZZZZT!” (electric buzz)
        Atmosphere: Intense Shonen action with dramatic speed lines and high stakes tension.`,
        image: "/electric-storm-tesla/scene5.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: Late evening January 1900; Tesla packs to leave, a sense of accomplishment and melancholy fills the air.
        Characters:
        • Nikola Tesla: Reflective, hint of sadness, worn coat
        • Joseph Dozier: Concerned carpenter
        • Leonard E. Curtis: Supportive patent attorney
        • George Westinghouse: Intrigued businessman
        Panel Composition: Split-screen: close-up of Tesla packing (left) / wide shot of sil. Tesla coil station (right)
        Dialogue & Text:
        • Tesla: “It's time to leave, but my work will not be forgotten.” (top-left bubble)
        • Dozier: “What will become of this place?” (bottom-left bubble)
        • Curtis: “Your patents are secure—you'll change the world.” (mid-panel bubble)
        • Westinghouse: “His vision is too grand to fail.” (top-right bubble)
        • Tesla: “The real challenge begins now.” (bottom-right bubble)
        • Narration: “As Tesla departs, his legacy in wireless power begins.” (bottom-center box)
        Sound Effects:
        • “CREAK!” (door closing)
        • “WHOOSH!” (wind blowing)
        Atmosphere: Emotional Shonen drama with reflective pacing and expressive faces.`,
        image: "/electric-storm-tesla/scene6.png",
      },
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
        Scene: Early morning January 1900; Tesla stands before his station, looking out to the horizon with resolve.
        Characters:
        • Nikola Tesla: Reflective, determined gaze
        • Joseph Dozier: Concerned expression
        • Leonard E. Curtis: Supportive smile
        • George Westinghouse: Watching with admiration
        Panel Composition: Split-screen: close-up of Tesla facing the landscape (left) / wide shot of the silent Tesla coil behind him (right)
        Dialogue & Text:
        • Tesla: “I may leave Colorado Springs, but my work will change history.” (top-left bubble)
        • Dozier: “Will this place be remembered?” (bottom-left bubble)
        • Curtis: “Your legacy is secure—world will soon know your genius.” (mid-panel bubble)
        • Westinghouse: “His vision will not be ignored.” (top-right bubble)
        • Tesla: “The journey to revolutionize the world has just begun.” (bottom-right bubble)
        Sound Effects:
        • “WHOOSH!” (wind)
        • “CREAK!” (door)
        Atmosphere: Emotional Shonen drama with hopeful forward momentum.`,
        image: "/electric-storm-tesla/scene7.png",
      },
    ],
  },
  // story 3 - tariff information
  {
    title: "<title>Tariff Tides: A Global Storm</title>",
    data: [
      // cover letter
      {
        prompt: `<title>Tariff Tides: A Global Storm</title>. A dramatic anime-style cover featuring a split-screen backdrop of the US and China flags, with a stormy sea in between. In the foreground, two characters stand facing each other: a determined US trade official and a resolute Chinese diplomat. The sky is filled with ships and planes, symbolizing disrupted global trade. The title "Tariff Tides" is emblazoned across the top, while "A Global Storm" is written in smaller text at the bottom. The scene is set against a backdrop of intense lightning and turbulent waves, reflecting the turmoil of the tariff wars.`,
        image: "/current-affairs/scene0.png",
      },
      // scene 1
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
      Scene: A tense meeting room in Washington D.C., with world maps and economic charts on the walls, reflecting the global impact of tariffs.
      Characters:
      • Alex Chen: A determined US trade official, wearing a sharp business suit, with a resolute expression.
      • Liang Wong: A calm yet firm Chinese diplomat, dressed in a traditional suit, with a hint of a smile.
      • Rachel Patel: A concerned international economist, wearing glasses and a professional outfit, with a worried look.
      Panel Composition: Split-screen: close-up of Alex Chen's face (left) / wide shot of the meeting room with Liang Wong and Rachel Patel (right).
      Dialogue & Text:
      • Alex Chen: “We can't back down on these tariffs. It's a matter of national security and economic stability.” (top-left bubble)
      • Liang Wong: “You're playing with fire, Alex. Retaliation will only hurt both our economies.” (bottom-right bubble)
      • Rachel Patel: “I agree with Liang. The global market is already showing signs of strain.” (mid-panel bubble)
      • Alex Chen: “We've studied the Smoot-Hawley Act. We know the risks, but we believe it's necessary this time.” (top-right bubble)
      • Liang Wong: “History repeats itself, Alex. Protectionism never ends well.” (bottom-left bubble)
      Sound Effects:
      • “TAP” (pen hitting the table)
      • “WHOOSH” (papers being shuffled)
      Atmosphere: High-stakes political drama with a hint of historical context, inspired by the intense negotiations of real-world trade wars.`,
        image: "/current-affairs/scene1.png",
      },
      // scene 2
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, cinematic lighting with tense atmosphere
      Scene: A bustling global port city at dusk with cargo ships and cranes silhouetted against the skyline; news screens in the background show headlines about tariff hikes and economic fallout worldwide.
      Characters:
      • Maya Torres: A young logistics manager looking worried as she checks shipment data on a tablet.
      • Kenji Saito: A seasoned dockworker discussing the impact of tariffs on his livelihood with Maya.
      • News Reporter (on screen): Calm but urgent tone reporting rising tensions between trade powers.
      Panel Composition: Wide shot focusing on Maya and Kenji in the foreground near shipping containers; inset close-up of news screen showing breaking headlines about tariff wars affecting global supply chains.
      Dialogue & Text:
      • Maya Torres: “These new tariffs are causing delays everywhere... our clients are losing trust.” (top-left bubble)
      • Kenji Saito: “My family depends on this work—if imports slow down, so do our paychecks.” (bottom-right bubble)
      • News Reporter (screen): “Tariff escalations threaten to disrupt markets globally...” (mid-panel bubble)
      • Maya Torres: “It's not just numbers—it's real people caught in this crossfire.” (top-right bubble)
      Sound Effects:
      • “CLANK” (metal container doors closing)
      Atmosphere: Realistic slice-of-life drama highlighting human stories behind geopolitical conflicts; somber mood with subtle tension reflecting uncertainty in global trade due to tariff wars.`,
        image: "/current-affairs/scene2.png",
      },
      // scene 3
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
      Scene: A crowded press conference in Beijing, with international journalists and cameras flashing as Chinese officials address the media about the escalating tariff situation; the mood is tense and urgent.
      Characters:
      • Liang Wong: The Chinese diplomat from the previous meeting, now standing confidently at the podium, addressing the press.
      • Alex Chen: The US trade official, seated in the audience, looking determined but slightly uneasy.
      • Rachel Patel: The international economist, standing near the back, observing the scene with a thoughtful expression.
      • Journalist 1: A sharp, inquisitive reporter from CNN, microphone in hand, ready to ask a question.
      • Journalist 2: A seasoned BBC correspondent, scribbling notes, preparing to follow up.
      Panel Composition: Split-screen: close-up of Liang Wong at the podium (left) / wide shot of the press conference with Alex Chen and Rachel Patel in the audience (right).
      Dialogue & Text:
      • Liang Wong: “We will not back down. These tariffs are a necessary response to protect our industries.” (top-left bubble)
      • Journalist 1: “But isn't this just a cycle of retaliation? How will it end?” (bottom-right bubble)
      • Alex Chen: “We're not looking for a trade war, but we won't be bullied either.” (mid-panel bubble)
      • Rachel Patel: “The global economy is already showing signs of strain. We need a resolution soon.” (top-right bubble)
      • Journalist 2: “What about the impact on ordinary people? How will they be affected?” (bottom-left bubble)
      • Liang Wong: “We understand the concerns, but our actions are to ensure long-term stability.” (mid-panel bubble)
      Sound Effects:
      • “FLASH!” (camera flash)
      • “CLICK-CLICK!” (reporters typing on laptops)
      Atmosphere: High-stakes international diplomacy with a sense of urgency and tension, reflecting the global implications of the tariff wars.`,
        image: "/current-affairs/scene3.png",
      },
      // scene 4
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces
      Scene: A packed international trade conference in Geneva, with world leaders and economists gathered to discuss the escalating tariff crisis; the mood is tense and urgent.
      Characters:
      • Alex Chen: The determined US trade official, standing confidently at the podium, addressing the assembly.
      • Liang Wong: The calm yet firm Chinese diplomat, seated in the front row, observing Alex with a thoughtful expression.
      • Rachel Patel: The concerned international economist, standing near the back, taking notes and looking worried.
      • European Union Representative: A seasoned diplomat from Brussels, nodding in agreement with Rachel's concerns.
      • Journalist: A sharp, inquisitive reporter from Reuters, microphone in hand, ready to ask a question.
      Panel Composition: Split-screen: close-up of Alex Chen at the podium (left) / wide shot of the conference hall with Liang Wong and Rachel Patel in the audience (right).
      Dialogue & Text:
      • Alex Chen: “We must stand firm on our tariffs. It's a matter of national security and economic sovereignty.” (top-left bubble)
      • Liang Wong: “But at what cost? The global economy is on the brink of collapse.” (bottom-right bubble)
      • Rachel Patel: “I agree with Liang. We need a multilateral approach to resolve this crisis.” (mid-panel bubble)
      • European Union Representative: “We cannot afford to see the global supply chain disrupted further.” (top-right bubble)
      • Journalist: “But isn't this just a game of chicken? Who will blink first?” (bottom-left bubble)
      • Alex Chen: “We're not playing games; we're protecting our nation's future.” (mid-panel bubble)
      Sound Effects:
      • “CLICK-CLICK!” (reporters typing on laptops)
      • “FLASH!” (camera flash)
      Atmosphere: High-stakes international diplomacy with a sense of urgency and tension, reflecting the global implications of the tariff wars.`,
        image: "/current-affairs/scene4.png",
      },
      // scene 5
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces 
      Scene: A hopeful, bustling street in a global city, with people from different cultures coming together to celebrate a new era of international cooperation; the mood is optimistic and uplifting.
      Characters:
      • Alex Chen: The determined US trade official, now smiling warmly as he shakes hands with Liang Wong, symbolizing a new agreement.
      • Liang Wong: The calm yet firm Chinese diplomat, also smiling, reflecting mutual respect and understanding.
      • Rachel Patel: The concerned international economist, looking relieved and hopeful as she watches the scene unfold.
      • Maya Torres: The young logistics manager, now smiling as she talks to Kenji Saito, both looking forward to a brighter future for global trade.
      • Kenji Saito: The seasoned dockworker, nodding in agreement with Maya, his expression filled with renewed optimism.
      Panel Composition: Wide shot focusing on Alex Chen and Liang Wong shaking hands in the foreground; inset close-up of Rachel Patel and Maya Torres in the background, both smiling.
      Dialogue & Text:
      • Alex Chen: “We did it, Liang. A new era of cooperation begins today.” (top-left bubble)
      • Liang Wong: “Together, we can build a stronger global economy for all.” (bottom-right bubble)
      • Rachel Patel: “This is just the start. We have a lot of work ahead to ensure stability.” (mid-panel bubble)
      • Maya Torres: “I can already see the impact on our shipments. This is a new beginning.” (top-right bubble)
      • Kenji Saito: “My family will finally have some peace of mind. Thank you, everyone.” (bottom-left bubble)
      • Alex Chen: “We couldn't have done it without understanding and compromise.” (mid-panel bubble)
      Sound Effects:
      • “CHEERS!” (crowd celebrating)
      • “CONFETTI POP!” (confetti bursting)
      Atmosphere: Heartwarming conclusion with a sense of global unity and cooperation, reflecting the power of diplomacy and mutual understanding in resolving conflicts.`,
        image: "/current-affairs/scene5.png",
      },
    ],
  },
  // story 4 - anime physics
  {
    title: "<title>Quantum Riders</title>",
    data: [
      // cover letter
      {
        prompt: `<title>Quantum Riders</title>. Students shrinking to the quantum scale, riding entangled photons amidst swirling particles, with superposition effects creating multiple versions of themselves in action-packed visuals - Anime style, 4K, vibrant colors, dynamic lighting.`,
        image: "/anime-physics/scene0.png",
      },
      // scene 1
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
      Scene: A high-tech science lab shrinks to a quantum world—students float among glowing particles and entangled photon beams. Mood is wonder and excitement.  
      Characters:  
      • Kaito: Curious teen with goggles pushed up on forehead; wears a futuristic jumpsuit; wide-eyed amazement.  
      • Sora: Energetic girl with twin ponytails; dressed in a lab coat over shorts; determined grin.  
      • Professor Yuki: Calm mentor with silver hair and glasses; smart suit; gentle smile.  

      Panel Composition: Split-screen—left panel shows Kaito's face in close-up as he reaches for a photon beam (speed lines behind him); right panel is a wide shot of the group floating through swirling quantum particles (entangled photons crisscrossing the scene).  

      Dialogue & Text:  
      • Kaito (top-left): “Whoa! We're really at the quantum scale? Everything looks… alive!”  
      • Sora (bottom-right): “Check this out! I can see myself in two places at once—superposition is wild!”  
      • Narration (bottom-center): “Shrunk to subatomic size, students experience quantum reality firsthand.”  
      • Professor Yuki (mid-panel): “Remember—entanglement means what happens to one photon affects its partner instantly!”  

      Sound Effects:  
      • “ZAP!” (near entangled photons)  
      • “WHOOSH!” (as students ride photon beams)  

      Atmosphere: Thrilling discovery meets scientific awe—dynamic action lines and glowing particle effects fill every panel.`,
        image: "/anime-physics/scene1.png",
      },
      // scene 2
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, vibrant colors, dynamic lighting  
      Scene: Inside a dazzling quantum realm where Kaito and Sora ride glowing entangled photons through a maze of shimmering light paths. Mood is thrilling and energetic.  
      Characters:  
      • Kaito: Focused and exhilarated; gripping photon beam tightly; futuristic jumpsuit gleaming.  
      • Sora: Excitedly pointing ahead; eyes sparkling with discovery; lab coat fluttering in quantum wind.  

      Panel Composition: Wide-angle shot showing the two students riding parallel photon beams connected by glowing entanglement threads that pulse with energy; inset close-up of their hands touching the entanglement link as it glows brighter.  

      Dialogue & Text:  
      • Kaito (top-left): “These photons are linked no matter how far apart—entanglement means instant connection!”  
      • Sora (bottom-right): “It's like they share one fate! If something happens to one, the other knows immediately!”  
      • Narration (bottom-center): “Quantum entanglement defies classical limits—particles remain mysteriously connected across space.”  
      • Kaito (mid-panel): “Riding these entangled photons lets us experience this spooky action firsthand!”  

      Sound Effects:  
      • “ZING!” (along the glowing entanglement threads)  
      • “WHOOSH!” (as they speed through quantum pathways)  

      Atmosphere: High-energy adventure fused with awe-inspiring science visuals—light trails and particle effects emphasize instantaneous connections beyond normal physics boundaries.`,
        image: "/anime-physics/scene2.png",
      },
      // scene 3
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
      Scene: Kaito and Sora find themselves split into multiple versions—each version glows with a different color as they stand before a shimmering double slit in the quantum realm. Mood is wonder and confusion.  
      Characters:  
      • Kaito: Multiple glowing versions of himself; each looks surprised but curious; futuristic jumpsuit shimmers with shifting colors.  
      • Sora: Also split into several copies; some are pointing at the slits while others look around in awe; lab coat flutters as if caught in quantum wind.  

      Panel Composition: Split-screen—left panel shows close-up of Kaito's face as he realizes he's in two places at once (superposition effect); right panel is a wide shot of all the students' copies standing before the glowing double slit (interference patterns visible behind them).  

      Dialogue & Text:  
      • Kaito (top-left): “Whoa! I can see myself everywhere! Is this really happening?”  
      • Sora (bottom-right): “It's superposition! We exist in multiple states until someone observes us!”  
      • Narration (bottom-center): “At the quantum scale, particles can be in many places at once—like passing through both slits simultaneously.” [1][2][6]  
      • Professor Yuki (mid-panel): “This is how quantum computers work—using superposition to process information faster than ever!”  

      Sound Effects:  
      • “GLOW!” (around each copy)  
      • “ZAP!” (as interference patterns form)  

      Atmosphere: Mind-bending discovery meets scientific thrill—dynamic action lines and glowing particle effects highlight every copy and their connection to the double slit experiment[1][2][3].`,
        image: "/anime-physics/scene3.png",
      },
      // scene 4
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
      Scene: Kaito and Sora's multiple copies converge at a glowing quantum crossroads—entangled photon beams form a Yin-Yang pattern in the air above them. Mood is awe and revelation.  
      Characters:  
      • Kaito: Multiple versions merge into one; eyes wide with wonder; futuristic jumpsuit shimmers with residual superposition glow.  
      • Sora: Copies also fuse back together; excitedly points at the Yin-Yang symbol forming in the sky; lab coat flutters as if caught in quantum wind.  

      Panel Composition: Split-screen—left panel shows close-up of Kaito's face as he watches his copies merge (speed lines and glowing particles around him); right panel is a wide shot of all students gazing up at the massive entangled photon Yin-Yang symbol[1][4][6].  

      Dialogue & Text:  
      • Kaito (top-left): “Whoa! My copies are merging… I feel whole again!”  
      • Sora (bottom-right): “Look! The photons made a giant Yin-Yang! That's entanglement visualized!”[1][4]  
      • Narration (bottom-center): “Quantum entanglement connects particles instantly—like two sides of one coin.”  
      • Professor Yuki (mid-panel): “This is what Einstein called ‘spooky action at a distance.' Entanglement defies space itself!”[1][3]  

      Sound Effects:  
      • “GLOW!” (around merging copies)  
      • “ZING!” (along entangled photon beams)  

      Atmosphere: Mind-blowing scientific discovery meets anime spectacle—dynamic action lines and vibrant particle effects highlight every moment as students witness entanglement made visible for the first time[1][4].`,
        image: "/anime-physics/scene4.png",
      },
      // scene 5
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
      Scene: Kaito and Sora stand at the heart of a glowing quantum circuit—entangled photon beams form a dazzling network around them as Professor Yuki explains the power of quantum computing. Mood is awe and determination.  
      Characters:  
      • Kaito: Eyes wide with excitement; futuristic jumpsuit glows with residual quantum energy; determined grin.  
      • Sora: Hands on hips; lab coat flutters in the energy field; energetic smile.  
      • Professor Yuki: Calm and wise; silver hair catches the light from the circuit; glasses reflect holographic data streams.  

      Panel Composition: Split-screen—left panel shows close-up of Kaito's face as he reaches toward a glowing node (speed lines behind him); right panel is a wide shot of all three characters surrounded by swirling entangled photon circuits (Yin-Yang patterns visible in the background)[1][4].  

      Dialogue & Text:  
      • Kaito (top-left): “So this is how quantum computers work? It's like riding entangled photons through every possible answer at once!”[1][3]  
      • Sora (bottom-right): “Exactly! Superposition lets us process tons of data super fast—way faster than any normal computer!”[3]  
      • Narration (bottom-center): “Quantum computers use entanglement and superposition to solve problems impossible for classical machines.” [1][3]  
      • Professor Yuki (mid-panel): “And remember—every time you observe a result here, you collapse all those possibilities into one reality!”[1][2]  

      Sound Effects:  
      • “ZING!” (along entangled photon beams)  
      • “GLOW!” (as nodes pulse with energy)  

      Atmosphere: High-tech wonder meets anime action—dynamic action lines and vibrant particle effects highlight every moment as students grasp how quantum computing could change everything[1][4].`,
        image: "/anime-physics/scene5.png",
      },
      // scene 6
      {
        prompt: `masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
      Scene: Kaito and Sora return to the lab, now filled with excitement and newfound understanding of quantum physics—Professor Yuki stands proudly beside them as they gaze at a holographic display of their quantum journey. Mood is triumphant and reflective.  
      Characters:  
      • Kaito: Relieved smile; futuristic jumpsuit slightly worn from the adventure; eyes shining with excitement.  
      • Sora: Energetic grin; lab coat fluttering as she gestures enthusiastically; ponytails bouncing with each movement.  
      • Professor Yuki: Warm smile; silver hair glistening under lab lights; glasses reflecting holographic images.  

      Panel Composition: Wide-angle shot of the lab with a holographic display projecting their quantum journey in the center—Kaito and Sora standing on either side of Professor Yuki, looking up at the hologram. Inset close-up of Kaito's face as he reflects on their adventure.  

      Dialogue & Text:  
      • Kaito (top-left): “We did it We experienced quantum entanglement firsthand!”  
      • Sora (bottom-right): “And we learned so much about superposition and quantum computing!”  
      • Narration (bottom-center): “Their journey through the quantum world has opened doors to new possibilities in science and technology.”  
      • Professor Yuki (mid-panel): “This is just the beginning. With quantum computing, we can solve problems that were once impossible.”  
      • Kaito (mid-right): “Imagine what we could achieve with quantum computers—curing diseases, solving climate change…”  
      • Sora (top-right): “And it all starts with understanding entanglement and superposition!”  
      • Professor Yuki (bottom-left): “The future is bright, and it's quantum.”  

      Sound Effects:  
      • “ZAP!” (as holographic images flicker)  
      • “WHOOSH!” (as the hologram zooms in on key moments of their journey)  

      Atmosphere: Triumphant conclusion with a sense of limitless possibility—dynamic action lines and vibrant particle effects highlight every moment as students reflect on their adventure and look toward a quantum future.`,
        image: "/anime-physics/scene6.png",
      },
    ],
  },
  // story 5 -
  {
    title: "<title>Neon Ronin</title>",
    data: [
      // scene-0
      {
        prompt: `<title>Neon Ronin</title>
        In a cyber-feudal Japan, a neon-clad samurai stands atop a skyscraper, gazing out over a cityscape of holographic cherry blossoms and neon-lit alleys, as corporate ronin clash in the shadows below. Anime style, 4K, vibrant neon visuals.`,
        image: "/neon-ronin/scene0.png",
      },
      // scene 1
      {
        prompt: `1. masterpiece, best quality, ultra-detailed, anime style, 4K, vibrant neon lighting  
        Scene: Neon-lit alley in cyber-feudal Tokyo at night; holographic cherry blossoms float gently through the air amid towering skyscrapers and glowing billboards. Tension crackles in the electric atmosphere.  
        Characters:  
          • Akira (Neon Samurai): Sleek cybernetic armor with glowing blue accents; katana humming with energy; determined glare beneath a high-tech kabuto helmet.  
          • Ryo (Corporate Ronin): Dark corporate suit fused with tactical gear; visor reflecting neon signs; dual pistols holstered but ready; cold and calculating expression.  
        Panel Composition: Dynamic split-screen showing Akira stepping into the alley from one side and Ryo emerging from shadows on the other, close-ups on their eyes locking in challenge. Neon cherry blossoms swirl between them as a visual bridge across panels.  
        Dialogue & Text:  
          • Akira (top-left bubble): “This city's soul isn't for sale.”  
          • Ryo (bottom-right bubble): “Your honor won't save you here.”  
          • Narration (bottom-center box): “In Neo-Edo's underbelly, ancient codes clash with corporate greed.”  
          • Akira (mid-panel bubble): “Then let steel decide our fate.”  
        Sound Effects:  
          • “SHING!” (katana unsheathing) near Akira's hand  
        Atmosphere: Intense cyberpunk action mood infused with traditional samurai honor—vibrant neon colors contrasted against dark urban grit and flickering holograms`,
        image: "/neon-ronin/scene1.png",
      },
      // scene 2
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: Neon-lit alley in cyber-feudal Tokyo; holographic cherry blossoms swirl as Akira and Ryo circle each other—blades drawn and pistols ready. The air crackles with tension.  
        Characters:  
          • Akira (Neon Samurai): Sleek cybernetic armor with glowing blue accents; katana humming with energy; determined glare beneath a high-tech kabuto helmet.  
          • Ryo (Corporate Ronin): Dark corporate suit fused with tactical gear; visor reflecting neon signs; dual pistols holstered but ready; cold and calculating expression.  

        Panel Composition: Split-screen—left panel shows Akira lunging forward in a dynamic slash pose (close-up on eyes), right panel shows Ryo dodging backward while drawing both pistols (wide action shot). Holographic cherry blossoms drift between them as speed lines emphasize the clash.  

        Dialogue & Text:  
          • Akira: “You're just another pawn for the corporations!” (top-left bubble)  
          • Ryo: “And you're living in the past.” (bottom-right bubble)  
          • Akira: “My blade will cut through your lies!” (mid-left bubble)  
          • Ryo: “Then die clinging to it.” (mid-right bubble)  

        Sound Effects:  
          • “SHING!” (katana slash near Akira's hand)  
          • “BANG-BANG!” (pistol shots echoing from Ryo's side)  

        Atmosphere: Intense cyberpunk action mood infused with traditional samurai honor—vibrant neon colors contrasted against dark urban grit and flickering holograms.`,
        image: "/neon-ronin/scene2.png",
      },
      // scene 3
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: Neon-lit alley in cyber-feudal Tokyo; holographic cherry blossoms swirl as Akira and Ryo clash—steel meets gunfire in a dazzling display of speed and skill. The city's neon glow reflects off wet pavement.  
        Characters:  
          • Akira (Neon Samurai): Cybernetic armor glowing blue under neon lights; katana raised mid-slash; determined eyes behind high-tech kabuto helmet.  
          • Ryo (Corporate Ronin): Tactical suit sleek black with red highlights; dual pistols firing rapidly; visor flashing with data streams.  

        Panel Composition: Split-screen—left panel shows Akira leaping forward with katana poised for a downward slash (close-up on gritted teeth), right panel shows Ryo dodging to the side while firing both pistols upward at Akira (wide action shot). Holographic cherry blossoms drift between them as speed lines emphasize the clash.  

        Dialogue & Text:  
          • [Akira]: “You think money can buy everything?!” (top-left bubble)  
          • [Ryo]: “It buys survival… something you've forgotten.” (bottom-right bubble)  
          • [Akira]: “I fight for those who can't!” (mid-left bubble)  
          • [Ryo]: “Then die for them too.” (mid-right bubble)  

        Sound Effects:  
          • “SHING!” (katana swing near Akira's hand)  
          • “BANG-BANG-BANG!” (rapid pistol shots echoing)  

        Atmosphere: Intense shonen-style action meets noir cyberpunk grit—speed lines highlight every move as neon reflections dance across wet pavement.`,
        image: "/neon-ronin/scene3.png",
      },
      // scene 4
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: Neon-lit alley in cyber-feudal Tokyo; holographic cherry blossoms swirl as Akira and Ryo clash—steel meets gunfire in a dazzling display of speed and skill. The city's neon glow reflects off wet pavement, casting a vibrant, dynamic atmosphere.  
        Characters:  
          • Akira (Neon Samurai): Cybernetic armor glowing blue under neon lights; katana raised mid-slash; determined eyes behind high-tech kabuto helmet.  
          • Ryo (Corporate Ronin): Tactical suit sleek black with red highlights; dual pistols firing rapidly; visor flashing with data streams.  

        Panel Composition: Split-screen—left panel shows Akira lunging forward, right panel shows Ryo dodging and firing. Holographic cherry blossoms drift between them.  

        Dialogue & Text:  
          • Akira: “Your bullets won't stop me!” (top-left bubble)  
          • Ryo: “We'll see about that.” (bottom-right bubble)  
          • Akira: “You're just a tool for the corporations!” (mid-left bubble)  
          • Ryo: “And you're a relic of the past.” (mid-right bubble)  
          • Narration: “In Neo-Edo, honor and greed collide.” (bottom-center box)  
          • Akira: “I won't back down!” (top-right bubble)  
          • Ryo: “Then fall with your honor.” (bottom-left bubble)  

        Sound Effects:  
          • “SHING!” — katana swing  
          • “BANG-BANG-BANG!” — pistol shots  

        Atmosphere: Intense shonen-style action meets noir cyberpunk grit—speed lines highlight every move as neon reflections dance across wet pavement.`,
        image: "/neon-ronin/scene4.png",
      },
      // scene 5
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: Neon-lit alley in cyber-feudal Tokyo; holographic cherry blossoms swirl as Akira and Ryo clash—steel meets gunfire in a final, decisive showdown. The city's neon glow reflects off wet pavement, casting a vibrant, dynamic atmosphere.  
        Characters:  
          • Akira (Neon Samurai): Cybernetic armor glowing blue under neon lights; katana raised high; determined eyes behind high-tech kabuto helmet.  
          • Ryo (Corporate Ronin): Tactical suit sleek black with red highlights; dual pistols firing rapidly; visor flashing with data streams.  

        Panel Composition: Split-screen—left panel shows Akira lunging, right panel shows Ryo firing. Holographic cherry blossoms drift between them.  

        Dialogue & Text:  
          • Akira: “This ends now—your greed won't consume Neo-Edo!” (top-left)  
          • Ryo: “You're just delaying the inevitable.” (bottom-right)  
          • Akira: “I'll protect this city, no matter the cost!” (mid-left)  
          • Ryo: “Then let's see who pays the price.” (mid-right)  
          • Narration: “In Neo-Edo, honor and greed collide in a final stand.” (bottom-center)  
          • Akira: “For the people, I won't back down!” (top-right)  
          • Ryo: “And for my family, I won't lose.” (bottom-left)  

        Sound Effects:  
          • “SHING!” — katana swing  
          • “BANG-BANG-BANG!” — pistol shots  

        Atmosphere: Intense shonen-style action meets noir cyberpunk grit—speed lines highlight every move as neon reflections dance across wet pavement. The final confrontation unfolds with dramatic tension, setting the stage for a climactic conclusion.`,
        image: "/neon-ronin/scene5.png",
      },
    ],
  },

  // story - perplexity rise
  {
    title: "<title>The Rise of Perplexity AI</title>",
    data: [
      // scene 0
      {
        prompt: `<title>The Rise of Perplexity AI</title>  
        Black pencil sketch style • Dynamic, energetic composition • Perplexity AI logo prominently featured in authentic form • Four founders depicted as spirited anime characters brainstorming around a glowing futuristic AI core • Background hints at digital data streams and cityscape skyline symbolizing innovation and growth • Anime style, 4K, dramatic shading and contrast`,
        image: "/perplexity-rise/scene0.png",
      },
      // scene 1
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: A bustling San Francisco tech office in August 2022—late night energy with glowing monitors and whiteboards covered in code sketches. The mood is electric with excitement and determination.  
        Characters:  
        • Aravind Srinivas (CEO): Young genius vibe, messy hair under a hoodie, intense eyes behind glasses—leaning over a laptop with a determined grin.  
        • Denis Yarats (CTO): Taller than the rest, calm but focused expression; dressed in a casual t-shirt and jeans—arms crossed as he watches the screen.  
        • Johnny Ho (Chief Strategy Officer): Energetic posture standing up from his chair; wears a graphic tee and headphones around his neck—grinning confidently.  
        • Andy Konwinski (President/Board Member): Relaxed but sharp look; button-up shirt sleeves rolled up—smirking as he points at the whiteboard.

        Panel Composition: Split-screen layout—close-up of Aravind's face on left (determined), wide shot of all four founders gathered around their workstations on right; action lines radiating from their huddle.

        Dialogue & Text:  
        • Aravind Srinivas: “We're building something that changes how people search… forever!” (top-left bubble)  
        • Denis Yarats: “If we get this right… it'll be like ChatGPT and Wikipedia had a baby.” (bottom-right bubble)  
        • Johnny Ho: “Let's make sure every answer comes with proof! No more guessing games!” (mid-panel bubble)  
        • Andy Konwinski: “And let's keep it open for everyone—no paywalls or hidden agendas.” (top-right bubble)

        Sound Effects:  
        • “CLACK-CLACK!” (keyboard typing fast)  
        • “WHOOSH!” (data streams flowing across screens)

        Atmosphere: High-energy shonen startup spirit with speed lines highlighting movement and innovation[1][2][5].`,
        image: "/perplexity-rise/scene1.png",
      },
      // scene 2
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: The same San Francisco tech office a few months later—now with more monitors and a whiteboard covered in new diagrams and code snippets. The mood is focused but hopeful as the team prepares for their public launch.  
        Characters:  
        • Aravind Srinivas (CEO): Still in hoodie but now with a confident smirk; pointing at a roadmap on the screen.  
        • Denis Yarats (CTO): Leaning back in his chair with arms crossed; calm but attentive expression.  
        • Johnny Ho (Chief Strategy Officer): Standing up energetically; gesturing toward the whiteboard with excitement.  
        • Andy Konwinski (President/Board Member): Sitting on the edge of a desk; thoughtful look as he reviews notes.

        Panel Composition: Split-screen—left side shows close-up of Aravind's determined face and hand pointing at roadmap; right side is wide shot of all four founders gathered around screens and whiteboard.

        Dialogue & Text:  
        • Aravind Srinivas: “We're launching next week! Are we ready to change how people search?” (top-left bubble)  
        • Denis Yarats: “The model's stable… but we need to double-check our citations.” (bottom-right bubble)  
        • Johnny Ho: “Let's make sure every answer is bulletproof! No room for errors!” (mid-panel bubble)  
        • Andy Konwinski: “And let's keep it open—no paywalls means everyone gets access.” (top-right bubble)

        Sound Effects:  
        • “CLICK-CLACK!” (keyboards typing fast)  
        • “WHOOSH!” (data streams flowing across screens)

        Atmosphere: High-energy startup spirit with speed lines highlighting movement and innovation[2][5].`,
        image: "/perplexity-rise/scene2.png",
      },
      // scene 3
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: December 7, 2022, at the Perplexity AI headquarters in San Francisco—exciting launch day atmosphere with balloons and confetti. The mood is celebratory as the team prepares to unveil their flagship search engine to the world.  
        Characters:  
        • Aravind Srinivas (CEO): Wearing a bright smile and a suit; holding a microphone to address the crowd.  
        • Denis Yarats (CTO): Standing confidently with arms crossed; observing the launch preparations.  
        • Johnny Ho (Chief Strategy Officer): Energetically high-fiving colleagues; wearing a Perplexity AI t-shirt.  
        • Andy Konwinski (President/Board Member): Smiling warmly as he shakes hands with investors; dressed in a formal suit.

        Panel Composition: Split-screen layout—left side shows a close-up of Aravind's face as he begins his speech; right side is a wide shot of the launch event with balloons and confetti filling the room.

        Dialogue & Text:  
        • Aravind Srinivas: “Today, we revolutionize how you search the internet—Welcome to Perplexity AI!” (top-left bubble)  
        • Denis Yarats: “Our model is ready to provide answers with real-time citations. Let's change the game!” (bottom-right bubble)  
        • Johnny Ho: “We're not just a search engine; we're your knowledge partner!” (mid-panel bubble)  
        • Andy Konwinski: “And we're committed to keeping it free and open for everyone!” (top-right bubble)

        Sound Effects:  
        • “POP-POP!” (balloons popping)  
        • “CHEERS!” (crowd cheering)

        Atmosphere: Vibrant, celebratory mood with confetti and balloons, capturing the excitement of a new era in search technology[1][2].`,
        image: "/perplexity-rise/scene3.png",
      },
      // scene 4
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: Early 2025 in Perplexity AI's sleek new headquarters—bright and modern with large windows overlooking San Francisco. The atmosphere is a mix of intense focus and quiet pride as the team reviews soaring user stats and revenue growth on giant digital screens.  
        Characters:  
        • Aravind Srinivas (CEO): Standing confidently with arms crossed; sharp business casual attire; eyes gleaming with determination.  
        • Denis Yarats (CTO): Sitting at a console analyzing data streams; calm but focused expression.  
        • Johnny Ho (Chief Strategy Officer): Pointing excitedly at a graph showing exponential user growth; casual shirt and jeans.  
        • Andy Konwinski (President/Board Member): Holding a tablet displaying funding news; smiling knowingly.

        Panel Composition: Wide shot capturing the entire team gathered around futuristic holographic displays showing key metrics like “22 million active users,” “$80 million revenue run rate,” and “$18 billion valuation.” Close-up inset panels highlight each founder's determined face.

        Dialogue & Text:  
        • Aravind Srinivas: “From zero to millions of users in just two years—we're rewriting the rules!” (top-left bubble)  
        • Denis Yarats: “Our tech handled over 400 million queries last month alone.” (bottom-right bubble)  
        • Johnny Ho: “And our premium subscriptions are skyrocketing—$100 million projected this year!” (mid-panel bubble)  
        • Andy Konwinski: “Investors believe in us—$915 million raised so far! The future is ours.” (top-right bubble)

        Sound Effects:  
        • “BEEP-BEEP!” (data alerts on screens)  
        • “WHOOSH!” (holographic graphs animating)

        Atmosphere: Triumphant yet forward-looking mood with dynamic speed lines emphasizing rapid growth and innovation[1][2][3].`,
        image: "/perplexity-rise/scene4.png",
      },
      // scene 5
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: Perplexity AI's San Francisco office in spring 2025—team huddle around a sleek conference table with laptops and holographic projections of global user data. The mood is electric with excitement and a hint of pressure as they discuss new partnerships and product launches.  
        Characters:  
        • Aravind Srinivas (CEO): Leaning forward on the table; sharp business casual look; eyes gleaming with determination.  
        • Denis Yarats (CTO): Sitting back in his chair; calm but focused expression; arms crossed.  
        • Johnny Ho (Chief Strategy Officer): Standing up energetically; pointing at a projection showing new partnership logos—PayPal and Captiv8 highlighted.  
        • Andy Konwinski (President/Board Member): Smiling confidently as he reviews notes on his tablet.

        Panel Composition: Split-screen layout—left side shows close-up of Aravind's determined face and hand gesturing toward the team; right side is wide shot of all four founders gathered around the glowing holographic display.

        Dialogue & Text:  
        • Aravind Srinivas: “With PayPal onboard for payments and Captiv8 for influencer marketing… we're unstoppable!” (top-left bubble)  
        • Denis Yarats: “Our voice mode launch is already trending—users love hands-free search!” (bottom-right bubble) [5]  
        • Johnny Ho: “And our agentic browser Comet? Tech reviewers are calling it the future of browsing!'” (mid-panel bubble) [5]  
        • Andy Konwinski: “We've got offices in SF and NYC now…but this is just the beginning!” (top-right bubble) [3][6]

        Sound Effects:  
        • “BEEP-BEEP!” (data alerts on screens)  
        • “WHOOSH!” (holographic graphs animating)

        Atmosphere: High-energy startup spirit with speed lines highlighting rapid growth and innovation[2][3][5].`,
        image: "/perplexity-rise/scene5.png",
      },
      // scene 6
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: Perplexity AI's San Francisco headquarters in late spring 2025—exciting atmosphere with balloons and confetti as the team celebrates reaching a new milestone: surpassing 20 million active users. The mood is celebratory and optimistic about the future.  
        Characters:  
        • Aravind Srinivas (CEO): Wearing a bright smile and a suit; holding a microphone to address the team.  
        • Denis Yarats (CTO): Standing confidently with arms crossed; observing the celebration.  
        • Johnny Ho (Chief Strategy Officer): Energetically high-fiving colleagues; wearing a Perplexity AI t-shirt.  
        • Andy Konwinski (President/Board Member): Smiling warmly as he shakes hands with team members; dressed in a formal suit.

        Panel Composition: Split-screen layout—left side shows a close-up of Aravind's face as he begins his speech; right side is a wide shot of the celebration with balloons and confetti filling the room.

        Dialogue & Text:  
        • Aravind Srinivas: “Today, we celebrate not just our growth but our mission to make knowledge accessible to everyone!” (top-left bubble)  
        • Denis Yarats: “We're not just a search engine; we're the bridge between information and understanding.” (bottom-right bubble)  
        • Johnny Ho: “And we're just getting started—With new partnerships and features, the sky's the limit!” (mid-panel bubble)  
        • Andy Konwinski: “Let's keep pushing the boundaries of what AI can do for humanity.” (top-right bubble)

        Sound Effects:  
        • “POP-POP!” (balloons popping)  
        • “CHEERS!” (team cheering)

        Atmosphere: Vibrant, celebratory mood with confetti and balloons, capturing the excitement of achieving a new milestone in the AI search landscape[1][2].`,
        image: "/perplexity-rise/scene6.png",
      },
      // scene 7
      {
        prompt: `text  
        masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces  
        Scene: Perplexity AI's San Francisco headquarters rooftop at sunset—panoramic city view behind the team as they reflect on their journey and look toward the future. The mood is triumphant yet thoughtful.  
        Characters:  
        • Aravind Srinivas (CEO): Leaning on the railing with a confident smile; sharp business casual attire; eyes gleaming with determination.  
        • Denis Yarats (CTO): Standing beside him with arms crossed; calm but proud expression.  
        • Johnny Ho (Chief Strategy Officer): Sitting on a bench nearby; energetic posture and bright grin.  
        • Andy Konwinski (President/Board Member): Hands in pockets; relaxed but visionary look.

        Panel Composition: Split-screen—left side shows close-up of Aravind's determined face and hand gesturing toward the cityscape; right side is wide shot of all four founders together on the rooftop.

        Dialogue & Text:  
        • Aravind Srinivas: “We started with just an idea… now we're changing how millions search for knowledge!” (top-left bubble) [1][2]  
        • Denis Yarats: “Our tech handles billions of queries every year—and we keep raising the bar.” (bottom-right bubble) [1][5]  
        • Johnny Ho: “With new features like voice mode and Comet browser… there's no limit to what we can do next!” (mid-panel bubble) [5]  
        • Andy Konwinski: “Let's keep building tools that make information open and accessible for everyone.” (top-right bubble) [2]

        Sound Effects:  
        • “WHOOSH!” (wind blowing across rooftop)  
        • “CHEERS!” (distant celebration from office below)

        Atmosphere: Inspiring shonen finale mood with golden sunset light and speed lines highlighting limitless potential[1][2][5].`,
        image: "/perplexity-rise/scene7.png",
      },
    ],
  },
];

export default PRE_MADE_STORIES;
