window.TOEIC_KEYS = window.TOEIC_KEYS || {};
window.TOEIC_SCRIPTS = window.TOEIC_SCRIPTS || {};
window.TOEIC_EXPLANATIONS = window.TOEIC_EXPLANATIONS || {};

function parseKey(text) {
    const key = {};
    const re = /(\d{1,3})\s*[.\-:)]?\s*([A-Da-d])/g;
    let m;
    while ((m = re.exec(text)) !== null) key[parseInt(m[1], 10)] = m[2].toUpperCase();
    return key;
}

// 1. DÀN KEY 200 CÂU TEST 10 (ĐÃ ĐỐI CHIẾU CHUẨN XÁC 100%)
window.TOEIC_KEYS[10] = parseKey("1D 2C 3C 4B 5B 6B 7A 8A 9B 10B 11B 12B 13A 14C 15A 16C 17B 18A 19A 20A 21B 22C 23C 24C 25B 26A 27B 28A 29A 30C 31C 32A 33C 34B 35B 36B 37B 38B 39D 40A 41D 42B 43A 44C 45A 46B 47D 48C 49D 50C 51B 52D 53C 54B 55C 56A 57D 58C 59A 60B 61B 62A 63D 64C 65D 66B 67B 68D 69C 70B 71C 72B 73A 74C 75A 76D 77B 78C 79A 80B 81D 82C 83A 84D 85B 86C 87A 88B 89A 90C 91C 92A 93B 94B 95D 96C 97B 98A 99B 100B 101A 102D 103B 104A 105D 106B 107A 108B 109D 110B 111B 112A 113B 114D 115C 116B 117C 118A 119B 120A 121C 122D 123B 124D 125A 126A 127D 128D 129C 130B 131D 132C 133B 134A 135D 136B 137C 138B 139C 140A 141B 142D 143B 144C 145B 146D 147D 148B 149B 150D 151A 152D 153B 154C 155A 156C 157C 158C 159B 160D 161B 162D 163A 164C 165D 166A 167B 168A 169D 170B 171C 172C 173B 174A 175C 176B 177A 178B 179C 180C 181B 182A 183C 184D 185C 186A 187C 188D 189D 190B 191B 192B 193C 194D 195A 196B 197A 198B 199C 200B");

// 2. FULL TRANSCRIPT LISTENING TEST 10
window.TOEIC_SCRIPTS[10] = `
  <h3>PART 1: PHOTOGRAPHS (Câu 1 - 6)</h3>
  <div class="script-question">
    <span class="script-speaker">1. M-Cn</span>
    <div class="script-opt">(A) He's reaching for the ceiling.</div>
    <div class="script-opt">(B) He's carrying a bucket of paint.</div>
    <div class="script-opt">(C) He's fixing a doorway.</div>
    <div class="script-opt correct-pink">(D) He's climbing down a ladder.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">2. W-Br</span>
    <div class="script-opt">(A) She's reading a poster on the wall.</div>
    <div class="script-opt">(B) A chair is propped against the door.</div>
    <div class="script-opt correct-pink">(C) A laptop has been left open.</div>
    <div class="script-opt">(D) She's speaking into a microphone.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">3. M-Au</span>
    <div class="script-opt">(A) They're strolling in a park.</div>
    <div class="script-opt">(B) They're shaking hands.</div>
    <div class="script-opt correct-pink">(C) He's holding up an umbrella.</div>
    <div class="script-opt">(D) She's handing him a phone.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">4. W-Br</span>
    <div class="script-opt">(A) A car is being towed down a street.</div>
    <div class="script-opt correct-pink">(B) Some men are removing a tire from a truck.</div>
    <div class="script-opt">(C) One of the men is unloading equipment from a truck.</div>
    <div class="script-opt">(D) A building has a clock tower on top of it.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">5. M-Cn</span>
    <div class="script-opt">(A) Some of the bicycles are being repaired.</div>
    <div class="script-opt correct-pink">(B) The bicycles are lined up in a row.</div>
    <div class="script-opt">(C) One of the bicycles is leaning against a traffic sign.</div>
    <div class="script-opt">(D) A bicycle path is being painted.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">6. W-Am</span>
    <div class="script-opt">(A) Some ships are moving under a bridge.</div>
    <div class="script-opt correct-pink">(B) Some boats are docked near a shore.</div>
    <div class="script-opt">(C) A ferry boat is traveling through a marina.</div>
    <div class="script-opt">(D) There are buildings along the side of a street.</div>
  </div>

  <h3>PART 2: QUESTION-RESPONSE (Câu 7 - 31)</h3>
  <div class="script-question">
    <span class="script-speaker">7. M-Au: Would you like me to order some more business cards for you?</span>
    <div class="script-opt correct-pink">(A) Sure, that would be great.</div>
    <div class="script-opt">(B) They'll be busy at that time.</div>
    <div class="script-opt">(C) No, it wasn't.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">8. W-Br: Why don't you ask Ms. Kim for help?</span>
    <div class="script-opt correct-pink">(A) Because she's on a conference call.</div>
    <div class="script-opt">(B) There's no more paper in the cabinet.</div>
    <div class="script-opt">(C) I've already seen that one.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">9. M-Cn: Do you want to review the report together or on your own?</span>
    <div class="script-opt">(A) No, I don't need any more copies.</div>
    <div class="script-opt correct-pink">(B) I'd prefer to look it over myself.</div>
    <div class="script-opt">(C) A fifteen-page document.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">10. W-Am: When's the marketing conference?</span>
    <div class="script-opt">(A) The convention center downtown.</div>
    <div class="script-opt correct-pink">(B) Sometime next month.</div>
    <div class="script-opt">(C) I need a room with a projector.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">11. M-Au: Where are the safety goggles kept?</span>
    <div class="script-opt">(A) I'm visiting an eye doctor soon.</div>
    <div class="script-opt correct-pink">(B) They're in the first-floor supply closet.</div>
    <div class="script-opt">(C) Sure, I'll try them on.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">12. W-Br: When did this restaurant change its name?</span>
    <div class="script-opt">(A) Yes, it is well known.</div>
    <div class="script-opt correct-pink">(B) I'm not sure.</div>
    <div class="script-opt">(C) It's my favorite type of cuisine.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">13. M-Au: Did we complete the inventory, or is there more to do?</span>
    <div class="script-opt correct-pink">(A) We're not quite finished.</div>
    <div class="script-opt">(B) Okay, that would be fine.</div>
    <div class="script-opt">(C) About one thousand dollars.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">14. M-Cn: Can you get me a sandwich from the café down the street?</span>
    <div class="script-opt">(A) He left an hour ago.</div>
    <div class="script-opt">(B) The street signs will be replaced next week.</div>
    <div class="script-opt correct-pink">(C) I'm just about to start a meeting.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">15. W-Am: How can we interest the client in our business?</span>
    <div class="script-opt correct-pink">(A) By sharing positive customer reviews.</div>
    <div class="script-opt">(B) No, I didn't go this year.</div>
    <div class="script-opt">(C) At the meeting last Wednesday.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">16. M-Au: Are you planning to work at home tomorrow?</span>
    <div class="script-opt">(A) Yes, in the city directory.</div>
    <div class="script-opt">(B) Every day at three o'clock.</div>
    <div class="script-opt correct-pink">(C) No, I'll be going into the office.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">17. M-Cn: Don't you have the promotional materials with you?</span>
    <div class="script-opt">(A) Thanks, that's great news.</div>
    <div class="script-opt correct-pink">(B) Yes, they're in my bag.</div>
    <div class="script-opt">(C) It's lightweight but durable.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">18. M-Cn: The projector needs to be fixed before our presentation.</span>
    <div class="script-opt correct-pink">(A) A technician has been notified.</div>
    <div class="script-opt">(B) The quarterly sales figures.</div>
    <div class="script-opt">(C) These pens have our logo on them.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">19. M-Cn: What's the price of this printer?</span>
    <div class="script-opt correct-pink">(A) I don't work here.</div>
    <div class="script-opt">(B) It's on Washington Avenue.</div>
    <div class="script-opt">(C) Yes, I like it a lot.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">20. W-Br: How many people are attending the orientation session?</span>
    <div class="script-opt correct-pink">(A) There should be twenty-one people.</div>
    <div class="script-opt">(B) Maybe next week.</div>
    <div class="script-opt">(C) I can't see the screen.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">21. W-Am: There's a free shuttle bus to the airport, right?</span>
    <div class="script-opt">(A) She has an overnight flight.</div>
    <div class="script-opt correct-pink">(B) Yes, it stops right outside.</div>
    <div class="script-opt">(C) No, I don't have any.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">22. W-Br: Who has time to edit this article?</span>
    <div class="script-opt">(A) The library is on Walton Street.</div>
    <div class="script-opt">(B) To meet the client.</div>
    <div class="script-opt correct-pink">(C) It was checked this morning.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">23. W-Br: What time does the factory shift end?</span>
    <div class="script-opt">(A) Because it's too far.</div>
    <div class="script-opt">(B) I'm glad you like it.</div>
    <div class="script-opt correct-pink">(C) The schedule is posted in the break room.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">24. W-Am: These train tickets are expensive.</span>
    <div class="script-opt">(A) Just a one-way ticket, please.</div>
    <div class="script-opt">(B) Did you complete the training?</div>
    <div class="script-opt correct-pink">(C) Yes, it's an express train.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">25. M-Cn: Isn't this television prototype supposed to have more advanced features?</span>
    <div class="script-opt">(A) He has an advanced degree in economics.</div>
    <div class="script-opt correct-pink">(B) We're already over budget.</div>
    <div class="script-opt">(C) I really enjoyed that television program.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">26. M-Cn: What should we do to prepare for the sales meeting?</span>
    <div class="script-opt correct-pink">(A) Let's discuss it after lunch.</div>
    <div class="script-opt">(B) With the sixteen summer interns.</div>
    <div class="script-opt">(C) The conference center on Mill Street.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">27. W-Am: Do you think Ms. Wong would be interested in joining the event planning committee?</span>
    <div class="script-opt">(A) Let's reserve the hotel ballroom.</div>
    <div class="script-opt correct-pink">(B) She'll be on vacation for the next month.</div>
    <div class="script-opt">(C) I'd love a cup of tea.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">28. M-Au: Dr. Moreno has the survey results on his desk.</span>
    <div class="script-opt correct-pink">(A) His office door is locked.</div>
    <div class="script-opt">(B) He passed his driving test.</div>
    <div class="script-opt">(C) The pharmacy on Maple Street.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">29. M-Cn: The keynote speech wasn't very inspiring, was it?</span>
    <div class="script-opt correct-pink">(A) It was too technical.</div>
    <div class="script-opt">(B) No, the one on the right side.</div>
    <div class="script-opt">(C) Some receipts for expenses.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">30. W-Am: Our company is upgrading its bookkeeping software.</span>
    <div class="script-opt">(A) No, I took a different flight.</div>
    <div class="script-opt">(B) How was your business trip to Shanghai?</div>
    <div class="script-opt correct-pink">(C) I signed up for a training session this morning.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">31. M-Au: Should we set up the buffet table for tomorrow's lunch indoors or outdoors?</span>
    <div class="script-opt">(A) I haven't seen her.</div>
    <div class="script-opt">(B) We won't need any more copies.</div>
    <div class="script-opt correct-pink">(C) It's supposed to be a beautiful day.</div>
  </div>

  <h3>PART 3: CONVERSATIONS (Câu 32 - 70)</h3>
  <div class="script-dialogue">
    <b>[Questions 32 - 34]</b><br>
    <b>M-Au:</b> Bianca, the retail space next door to us will become available in June. <span class="correct-pink">[32] That means we can begin the store expansion</span> we've been planning.<br>
    <b>W-Br:</b> That's great news! After we increase our space, we can finally do more than just <span class="correct-pink">[33] sell musical instruments</span>.<br>
    <b>M-Au:</b> I knew you'd be happy to hear the news. We'll be able to add practice rooms so <span class="correct-pink">[34] we can offer private music lessons by the end of the year</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 35 - 37]</b><br>
    <b>M-Au:</b> Hi, I'm working on renovating the lobby of my office, and <span class="correct-pink">[35] I'd like to get some paint for the walls</span>.<br>
    <b>W-Am:</b> Sure, what do you have in mind?<br>
    <b>M-Au:</b> Well, I want to paint the walls with one of the colors from our new logo, either green or red.<br>
    <b>W-Am:</b> Hmm, I wouldn't choose red. <span class="correct-pink">[36] It will fade too fast</span>.<br>
    <b>M-Au:</b> Oh, okay. Then let's go with green.<br>
    <b>W-Am:</b> Do you have a copy of the logo with you? If I have the image, I can mix a custom paint to match it.<br>
    <b>M-Au:</b> Actually, I don't.<br>
    <b>W-Am:</b> Well, <span class="correct-pink">[37] if you email me a picture of the logo</span>, I can have the paint ready for you by Friday.
  </div>

  <div class="script-dialogue">
    <b>[Questions 38 - 40]</b><br>
    <b>W-Br:</b> Welcome to the Western Airlines customer service desk. How can I assist you?<br>
    <b>M-Au:</b> Hi, I flew in yesterday from Canada and was told that my luggage was accidentally put on a flight arriving this morning. <span class="correct-pink">[38] Can I go to the unclaimed baggage area and pick up my luggage?</span><br>
    <b>W-Br:</b> Okay, do you have your <span class="correct-pink">[39] boarding pass</span>?<br>
    <b>M-Au:</b> Yes, here it is.<br>
    <b>W-Br:</b> <span class="correct-pink">[40] That area is past security</span>. I can use information on the boarding pass to locate the luggage for you.
  </div>

  <div class="script-dialogue">
    <b>[Questions 41 - 43]</b><br>
    <b>M-Cn:</b> We're so happy to have you join our office as our new <span class="correct-pink">[41] dental hygienist</span>, Maria. As you know, you'll be cleaning our patients' teeth before I come in to complete the exam.<br>
    <b>W-Br:</b> I'll also be responsible for updating the patients' files and scheduling their next appointments, right?<br>
    <b>M-Cn:</b> Yes, we use a software program called DentalX for all our patient records. Have you used it before?<br>
    <b>W-Br:</b> Yes, <span class="correct-pink">[42] I'm familiar with that software</span>.<br>
    <b>M-Cn:</b> Great. Also remember that <span class="correct-pink">[43] our office closes every day from twelve to one-thirty for lunch</span>, so please be mindful of that when scheduling patients.
  </div>

  <div class="script-dialogue">
    <b>[Questions 44 - 46]</b><br>
    <b>M-Au:</b> Next, I wanted to check with the design team about our water-permeable bricks for walkways. I think the bricks will be popular in areas with water-drainage problems. But <span class="correct-pink">[44] I'm concerned that the final design won't be ready in time for the trade show</span>.<br>
    <b>W1:</b> Right, we still need to finish the durability testing. Camille, how's that going?<br>
    <b>W2:</b> So far, they seem to be as durable as we anticipated, but <span class="correct-pink">[45] we still have a few more tests to run</span>.<br>
    <b>M-Au:</b> Great. Please keep me posted on your progress. In the meantime, we should start putting together a promotional video to show at our booth at the trade show. <span class="correct-pink">[46] Who'd like to help me with that project?</span>
  </div>

  <div class="script-dialogue">
    <b>[Questions 47 - 49]</b><br>
    <b>M-Cn:</b> Excuse me, officer, do you happen to know where <span class="correct-pink">[47] rideshare drivers</span> park to wait for passengers? It's my first time at this airport.<br>
    <b>W-Am:</b> Yes. Drive to the pick-up area by Terminal A. Look out for the orange sign that says "Ride Share." I'm sure you'll see other drivers there. By the way, <span class="correct-pink">[48] I recommend taking the terminal bypass. That bridge will take you there faster</span>.<br>
    <b>M-Cn:</b> Great, thank you. Oh, is there a fuel station near the airport? My tank is almost empty.<br>
    <b>W-Am:</b> <span class="correct-pink">[49] You'll see one by the rental car lot on your way out</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 50 - 52]</b><br>
    <b>M-Au:</b> This traffic is really terrible.<br>
    <b>W-Br:</b> I know, <span class="correct-pink">[50] we've been stuck in this bus for hours now</span>. It's frustrating. I wonder what's going on.<br>
    <b>M-Au:</b> <span class="correct-pink">[51] I heard the Day Street Bridge is being worked on</span>.<br>
    <b>W-Br:</b> Oh, really? I didn't know that.<br>
    <b>M-Au:</b> Yes, I think it's down to just one lane for the next couple of weeks.<br>
    <b>W-Br:</b> That's good to know. <span class="correct-pink">[52] I'll take the train into the city tomorrow instead</span>, so I won't be late for my appointments.
  </div>

  <div class="script-dialogue">
    <b>[Questions 53 - 55]</b><br>
    <b>W-Br:</b> Girard Electronics, how can I help you?<br>
    <b>M-Cn:</b> Hi, <span class="correct-pink">[53] I bought a camera from your store last week</span>, but I'm having trouble with it now.<br>
    <b>W-Br:</b> What's the problem?<br>
    <b>M-Cn:</b> Well, I changed the lens from the standard to a telephoto one today, and now an error message pops up on the LCD screen.<br>
    <b>W-Br:</b> Hmm, I'm sorry, but I can't know for sure without looking at it, as it could be caused by a few things.<br>
    <b>M-Cn:</b> <span class="correct-pink">[54] I could come by this afternoon</span>.<br>
    <b>W-Br:</b> Okay, I won't be here, but <span class="correct-pink">[55] one of the other employees can definitely help you. Let me just write a note down</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 56 - 58]</b><br>
    <b>M-Au:</b> Hi, I have a delivery of medical supplies addressed to Eun-Mi Park.<br>
    <b>W1:</b> That's Eun-Mi sitting at the desk over there.<br>
    <b>W2:</b> I'm Eun-Mi. I've been waiting for these sterile pads and bandages.<br>
    <b>M-Au:</b> Great. <span class="correct-pink">[57] I just need you to sign here</span> to confirm the delivery.<br>
    <b>W2:</b> Okay, sure. Oh, Claudia, do you have time to help me <span class="correct-pink">[58] carry these boxes to the storage closet?</span><br>
    <b>W1:</b> Of course! I have a patient at one o'clock, but I have a few minutes now.
  </div>

  <div class="script-dialogue">
    <b>[Questions 59 - 61]</b><br>
    <b>M-Cn:</b> Dola Commercial Cleaners, how can I help you?<br>
    <b>W-Br:</b> <span class="correct-pink">[59] I manage a new bed-and-breakfast here in town, and I'm looking for a company to wash, dry, and fold our linens</span>. I have a few questions for you.<br>
    <b>M-Cn:</b> Sure.<br>
    <b>W-Br:</b> How do you work in terms of scheduling?<br>
    <b>M-Cn:</b> <span class="correct-pink">[60] We work around the clock to guarantee a twenty-four-hour turnaround time</span>. We run three separate shifts.<br>
    <b>W-Br:</b> That's good to hear. Could I ask where you're located?<br>
    <b>M-Cn:</b> We're at 647 Pond Street.<br>
    <b>W-Br:</b> In that case, <span class="correct-pink">[61] pick-up and delivery will not add to your service charge</span>, since you're within a fifteen-kilometer radius of us.
  </div>

  <div class="script-dialogue">
    <b>[Questions 62 - 64]</b><br>
    <b>M-Au:</b> Welcome to <span class="correct-pink">[62] Centerville Fitness Center</span>.<br>
    <b>W-Br:</b> Hi, I hear you're having a fundraising campaign.<br>
    <b>M-Au:</b> Yes, today's the start of our annual fundraiser. All proceeds go toward the purchase of new sports equipment for the center. You'll be entered into a raffle to win a prize based on your donation amount.<br>
    <b>W-Br:</b> Sounds great. <span class="correct-pink">[63] I'd like to donate fifty dollars</span>.<br>
    <b>M-Au:</b> Wonderful! Just fill out the donation form, and I'll get you your raffle ticket.<br>
    <b>W-Br:</b> How will I find out if I won?<br>
    <b>M-Au:</b> The drawing is on Friday, and <span class="correct-pink">[64] winners will receive a phone call from the organizers</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 65 - 67]</b><br>
    <b>W-Am:</b> Hi. Some of us at work decided to get together to buy some flowers here. <span class="correct-pink">[65] They're for a colleague who just received a promotion</span>.<br>
    <b>M-Cn:</b> We have a nice selection of arrangements that are appropriate for an event like that. Here's a list of the most popular, in a range of prices.<br>
    <b>W-Am:</b> Oh, I have enough money for <span class="correct-pink">[66] the Harmony arrangement</span>. Can you make that while I wait?<br>
    <b>M-Cn:</b> Sure, I'll have it made for you now. <span class="correct-pink">[67] And will you want a greeting card to go with that?</span><br>
    <b>W-Am:</b> Actually, no card is needed. We already have one that we've all signed.
  </div>

  <div class="script-dialogue">
    <b>[Questions 68 - 70]</b><br>
    <b>W-Am:</b> Hi, Andrew. How have you enjoyed your first week here at Jebreen Farms?<br>
    <b>M-Au:</b> It's been great! I'm definitely learning a lot about commercial agriculture.<br>
    <b>W-Am:</b> So glad to hear that. Let's go over to where we'll store <span class="correct-pink">[69] the upcoming corn harvest</span>. As you know, we sell a lot of corn as feed for livestock farms in the area.<br>
    <b>M-Au:</b> Yes, I'm eager to get some hands-on experience with drying and storing the corn.<br>
    <b>W-Am:</b> Good. If the process is done right, it can be stored for long periods, but conditions inside the grain bin have to be just right.<br>
    <b>M-Au:</b> <span class="correct-pink">[70] How long will the drying process take after the harvest?</span><br>
    <b>W-Am:</b> About four to six weeks.
  </div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>
  <div class="script-dialogue">
    <b>[Questions 71 - 73]</b><br>
    <b>M-Au:</b> Welcome to your first day of work at Schneider Technology. Our <span class="correct-pink">[71] navigation devices</span> enable vehicles to direct drivers to their destination by taking into consideration a variety of factors such as distance, weather, and traffic conditions. Moritz Schneider, <span class="correct-pink">[72] the president of the company, will be here in person at ten o'clock</span> to welcome you and tell you all about the company's history. But first, <span class="correct-pink">[73] I'll help you set up your computer accounts</span>. Cyber security is very important to us, so we've added extra steps to verify your identity.
  </div>

  <div class="script-dialogue">
    <b>[Questions 74 - 76]</b><br>
    <b>W-Br:</b> Good afternoon, <span class="correct-pink">[74] this is Captain Jong giving you a heads-up on our plane's departure status</span>. As you can see, there's a light dusting of snow on the ground. <span class="correct-pink">[75] Air traffic control is holding us here at the gate while the snowplows clear the runway</span>. It should take just a few minutes, then we'll be cleared for takeoff. I apologize for the delay. And a reminder: <span class="correct-pink">[76] please ensure that children remain seated with their seatbelts fastened</span> throughout the flight.
  </div>

  <div class="script-dialogue">
    <b>[Questions 77 - 79]</b><br>
    <b>M-Cn:</b> Good morning, and thanks for tuning in to News at Four. We've just learned that the Natural Zoological Museum, one of Springfield's most popular museums, <span class="correct-pink">[77] will soon close for a renovation project</span>. To those who are planning to visit the exhibits in person, be aware that <span class="correct-pink">[78] the workers arrive in six weeks</span>. But if you miss that window, don't worry. You can still visit the museum virtually during the renovation period. <span class="correct-pink">[79] Video tours will soon be available on the museum's website</span>, and videos showing the progress of the project will also be posted regularly.
  </div>

  <div class="script-dialogue">
    <b>[Questions 80 - 82]</b><br>
    <b>W-Am:</b> At Jin-ah's Jewelers, <span class="correct-pink">[80] we create custom-made jewelry</span> that showcases your style and celebrates the most important moments in your life. Meet for a video consultation with one of our talented artists, who can design earrings, bracelets, and more, just for you. And unlike our competitors, who only send you a sketch, <span class="correct-pink">[81] we'll send you a simple metal prototype</span>. You can approve or request changes to the sample before your final piece is made. To get your order started, <span class="correct-pink">[82] just enter your information on our website</span>, and one of our designers will contact you.
  </div>

  <div class="script-dialogue">
    <b>[Questions 83 - 85]</b><br>
    <b>M-Cn:</b> On today's episode of our podcast, we'll be talking to Rebecca Taylor, the chair and founder of <span class="correct-pink">[83] Real Estate</span> Investments LLC. As we know, the housing market has had its ups and downs in recent years. <span class="correct-pink">[84] Ms. Taylor is widely known for her ability to correctly predict trends in the real estate market</span>. Her opinion is highly valued. We are fortunate to be able to interview her today before she travels to the National Real Estate Conference in Chicago, where she has been invited to <span class="correct-pink">[85] deliver the keynote speech</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 86 - 88]</b><br>
    <b>W-Am:</b> The topic for today's workshop is <span class="correct-pink">[86] writing business correspondence</span>. Business correspondence has different guidelines than the informal type of writing you use when writing to a friend. For example, when writing to a friend you might address them by their first name, or perhaps include emojis—you know, symbols like smiley faces that are commonly used to express feelings. However, emojis are considered inappropriate in business writing. Also, business correspondence should always include the recipient's title and last name. Remember, <span class="correct-pink">[87] we don't want to offend our clients</span>. Now, I will project some slides of informally worded emails. In your notebooks, <span class="correct-pink">[88] rewrite the emails using wording and style appropriate for business correspondence</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 89 - 91]</b><br>
    <b>W-Br:</b> In the world of business, athletic retailer <span class="correct-pink">[89] Clementine Stores has filed a complaint against software firm Stephion</span>. Clementine claims that the Stephion logo, which is round and orange, is too similar to its own. However, a Stephion public relations representative, <span class="correct-pink">[91] Friedrich Faber</span>, responded by saying that the two company logos were similar, but not similar enough to confuse consumers. Furthermore, Faber maintained that the Stephion design was not problematic because <span class="correct-pink">[90] the two companies have completely different markets</span> (one is an athletic retailer, the other is a software firm).
  </div>

  <div class="script-dialogue">
    <b>[Questions 92 - 94]</b><br>
    <b>M-Cn:</b> Thanks for coming in early this morning. I wanted to update you on <span class="correct-pink">[92] the café refrigerators</span> that our customers use. We recently installed a new temperature monitoring system. I've noticed that <span class="correct-pink">[93] every increase in temperature can be traced to the refrigerator doors being left open for extended periods of time</span>. This is alarming because it compromises the freshness and safety of our food. We all know that <span class="correct-pink">[94] customers often take a while to make their selection</span>. I'll be meeting with the management team to discuss ways to address this.
  </div>

  <div class="script-dialogue">
    <b>[Questions 95 - 97]</b><br>
    <b>M-Au:</b> Thanks for inviting me to represent <span class="correct-pink">[95] the parking authority</span> at this month's city council meeting. As you know, parking in city parking garages <span class="correct-pink">[96] will no longer be free on Saturdays</span>. My office has updated the parking rate schedule and posted copies in all city garages. If you look at the screen, you'll see the new rates that went into effect this week. We're planning to use some of the additional revenue to cover the cost of new payment kiosks for the garages. <span class="correct-pink">[97] I will provide a revenue report at next month's meeting</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 98 - 100]</b><br>
    <b>W-Am:</b> Attention, passengers: <span class="correct-pink">[98] Flight AU354</span> will now be departing from a different gate. (Bảng điện tử đối chiếu chuyến AU354 bay tới Los Angeles). The new gate will appear on screens throughout the terminal shortly. Your boarding time remains as scheduled and will begin in approximately twenty-five minutes. If you do not yet have a seat assignment, please come up to the counter now so that <span class="correct-pink">[99] Claudia can assist you with seat assignments</span>. And one important reminder: all carry-on baggage must comply with our height and width restrictions. <span class="correct-pink">[100] Size check templates are available</span> throughout the terminal for your reference.
  </div>
`;

// 3. GIẢI THÍCH CHI TIẾT READING (CÂU 101 - 200) TEST 10 (CHUẨN THEO ĐỀ GỐC)
window.TOEIC_EXPLANATIONS[10] = {
    101: "💡 <b>Đáp án (A) her:</b> Đứng trước danh từ không đếm được 'work' cần tính từ sở hữu 'her': 'commended for her work' (được khen ngợi/tuyên dương vì đóng góp công việc của cô ấy đối với hợp đồng khách hàng Kala).",
    102: "💡 <b>Đáp án (D) performed:</b> Dấu hiệu thời gian 'Last summer' và ngữ cảnh nhạc sĩ jazz biểu diễn: chia động từ thì quá khứ đơn 'performed' (đã biểu diễn trên sân khấu hòa nhạc chính).",
    103: "💡 <b>Đáp án (B) additional:</b> Cần tính từ 'additional' đứng trước bổ nghĩa cho cụm danh từ: 'six additional cases of ink toner' (đặt mua thêm 6 thùng mực in).",
    104: "💡 <b>Đáp án (A) better:</b> Trạng từ so sánh hơn 'better' bổ nghĩa cho động từ 'understand': 'help our team understand better the financial services' (giúp đội ngũ của chúng tôi hiểu rõ hơn về các dịch vụ tài chính).",
    105: "💡 <b>Đáp án (D) Production:</b> Đứng đầu câu trước giới từ 'of' cần danh từ làm chủ ngữ: 'Production of the garments' (Quá trình sản xuất hàng may mặc sẽ bắt đầu sau 2 tuần).",
    106: "💡 <b>Đáp án (B) minor:</b> Cụm danh từ 'minor errors' mang nghĩa những lỗi nhỏ, không đáng kể (biên bản cuộc họp chỉ có 3 lỗi nhỏ).",
    107: "💡 <b>Đáp án (A) when:</b> Liên từ chỉ thời gian 'when' nối mệnh đề: Khách được yêu cầu tắt chuông điện thoại khi buổi biểu diễn bắt đầu.",
    108: "💡 <b>Đáp án (B) by:</b> Giới từ 'by' đi với phương tiện giao thông: 'commute to work by train' (đi làm bằng tàu hỏa).",
    109: "💡 <b>Đáp án (D) continuously:</b> Trạng từ 'continuously' (một cách liên tục) đứng trước phân từ 'operating' để bổ nghĩa: tuyến xe buýt vận hành liên tục lâu đời nhất trong lịch sử thành phố.",
    110: "💡 <b>Đáp án (B) reminder:</b> Danh từ 'reminder' trong cấu trúc thông báo: 'This message is a reminder to pick up...' (Tin nhắn này là lời nhắc nhở quý khách đến bưu điện nhận kiện hàng càng sớm càng tốt).",
    111: "💡 <b>Đáp án (B) who:</b> Đại từ quan hệ 'who' thay thế cho danh từ chỉ người 'Pet Orbit customers' để làm chủ ngữ cho mệnh đề quan hệ.",
    112: "💡 <b>Đáp án (A) but:</b> Liên từ chỉ sự tương phản đối lập 'but': Anh Takajian có thể là nhân viên mới vào nghề, nhưng anh ấy không hề ngần ngại chủ động trong công việc.",
    113: "💡 <b>Đáp án (B) to place:</b> Cấu trúc 'allow somebody to do something': 'allows customers to place items on hold' (cho phép khách hàng giữ lại món đồ tối đa 24 giờ).",
    114: "💡 <b>Đáp án (D) fashionable:</b> Cần tính từ đứng trước danh từ 'look': 'a fashionable look' (mang lại một diện mạo phong cách, hợp thời trang cho các ngôi nhà).",
    115: "💡 <b>Đáp án (C) Because of:</b> Sau chỗ trống là cụm danh từ 'efficient project management' nên dùng giới từ chỉ nguyên nhân 'Because of' (Nhờ/Do việc quản lý dự án hiệu quả...).",
    116: "💡 <b>Đáp án (B) at:</b> Giới từ 'at' đi với địa điểm cụ thể: 'at select stores' (có mặt tại các cửa hàng được tuyển chọn ngay từ tháng Hai).",
    117: "💡 <b>Đáp án (C) noticeable:</b> Cần tính từ đứng trước danh từ 'decrease': 'a noticeable decrease' (có sự sụt giảm rõ rệt/đáng chú ý về số lượng yêu cầu hỗ trợ khách hàng).",
    118: "💡 <b>Đáp án (A) so:</b> Liên từ chỉ kết quả 'so': Bina Dal luôn khao khát trở thành một nhà ngoại giao, vì vậy cô ấy đã theo học ngành quan hệ quốc tế ở trường đại học.",
    119: "💡 <b>Đáp án (B) promptly:</b> Trạng từ 'promptly' (một cách nhanh chóng, kịp thời) đứng sau bổ nghĩa cho danh động từ 'responding': Cảm ơn bạn đã phản hồi nhanh chóng thông tin về máy in.",
    120: "💡 <b>Đáp án (A) reschedule:</b> Cụm cấu trúc 'need to reschedule your appointment' (chúng tôi cần phải sắp xếp lại lịch hẹn dịch vụ chặt hạ cây của bạn do điều kiện thời tiết).",
    121: "💡 <b>Đáp án (C) coordinated:</b> Phân từ hai làm tính từ: 'a coordinated effort' (đòi hỏi một nỗ lực phối hợp nhịp nhàng giữa cả hai quốc gia để hoàn thành tuyến đường sắt).",
    122: "💡 <b>Đáp án (D) policy:</b> Cụm danh từ 'the restaurant's policy' mang nghĩa quy định/chính sách của nhà hàng: khách phải chờ nhân viên sảnh sắp xếp chỗ ngồi.",
    123: "💡 <b>Đáp án (B) had anticipated:</b> Hành động dự tính của ban tổ chức diễn ra trước sự việc bán hết vé trong quá khứ nên chia thì quá khứ hoàn thành: 'had anticipated'.",
    124: "💡 <b>Đáp án (D) rather than:</b> Cụm từ mang nghĩa 'thay vì': 'Renewing your auto registration online rather than at the motor vehicle office...' (Gia hạn đăng ký xe trực tuyến thay vì đến tận văn phòng).",
    125: "💡 <b>Đáp án (A) Given:</b> Giới từ 'Given' mang nghĩa 'Xét đến / Căn cứ vào': Căn cứ vào danh tiếng vững chắc của công ty quản lý người mẫu Latoya, các người mẫu triển vọng có thể kỳ vọng vào một sự nghiệp thăng hoa.",
    126: "💡 <b>Đáp án (A) so that:</b> Liên từ chỉ mục đích 'so that' theo sau bởi mệnh đề: nhân viên được yêu cầu cập nhật thông tin liên lạc để danh bạ nhân sự có thể được hoàn thiện.",
    127: "💡 <b>Đáp án (D) imitations:</b> Danh từ số nhiều 'imitations' trong cụm 'inferior imitations' (những sản phẩm làm nhái/bắt chước kém chất lượng trên thị trường).",
    128: "💡 <b>Đáp án (D) Despite:</b> Giới từ nhượng bộ trong cụm 'Despite the fact that' (Mặc cho thực tế là mạng xã hội rất phổ biến, nhiều người vẫn tin tưởng vào báo in).",
    129: "💡 <b>Đáp án (C) convincing:</b> Cần tính từ đứng trước danh từ: 'convincing arguments' (người thuyết trình đã đưa ra nhiều lập luận thuyết phục về việc lắp đặt các tấm pin năng lượng mặt trời).",
    130: "💡 <b>Đáp án (B) named:</b> Thể bị động bổ nhiệm chức danh: 'was named Director' (được bổ nhiệm/chỉ định làm Giám đốc chương trình nông nghiệp thanh thiếu niên Nanboro).",
    131: "💡 <b>Đáp án (D) containers:</b> Danh từ 'containers' (thùng chứa/hộp đựng) dùng để thay thế đồng nghĩa cho các thùng sọt 'Flexmerge crates' ở câu trước.",
    132: "💡 <b>Đáp án (C):</b> Câu tiếp nối ưu điểm thùng có thể gập gọn lại: 'Accordingly, more of them can be loaded onto trucks when empty' (Theo đó, có thể chất được nhiều thùng hơn lên xe tải khi thùng rỗng).",
    133: "💡 <b>Đáp án (B) for:</b> Cấu trúc danh từ đi với giới từ: 'the need for something': 'minimizes the need for frequent replacement' (giảm thiểu nhu cầu phải thay thế thùng thường xuyên nhờ độ bền cao).",
    134: "💡 <b>Đáp án (A) reducing:</b> Dùng hiện tại phân từ V-ing sau 'thereby' chỉ hệ quả trực tiếp: 'thereby reducing the risk of injuries' (nhờ đó làm giảm đáng kể nguy cơ chấn thương cho công nhân).",
    135: "💡 <b>Đáp án (D) is based:</b> Thể bị động ở thì hiện tại đơn diễn tả sự thật nội dung phim: 'is based on the book' (bộ phim giật gân chính trị này được chuyển thể/dựa trên cuốn tiểu thuyết của Noriaki Arishima).",
    136: "💡 <b>Đáp án (B) In contrast:</b> Cụm liên từ nối nêu ý kiến tương phản đối lập: 'In contrast, other reviewers argue...' (Trái lại, các nhà phê bình khác lại cho rằng phần 3 sẽ kém cuốn hút vì có quá nhiều nhân vật mới).",
    137: "💡 <b>Đáp án (C) criticism:</b> Danh từ 'criticism' (lời chỉ trích/phê bình): Đạo diễn đã lên tiếng phản hồi lại lời phê bình về việc đưa vào quá nhiều nhân vật mới khiến cốt truyện phức tạp.",
    138: "💡 <b>Đáp án (B):</b> Lời phản biện của đạo diễn về dàn nhân vật mới: 'But they bring greater depth to the narrative' (Nhưng các nhân vật này mang lại chiều sâu hơn cho câu chuyện).",
    139: "💡 <b>Đáp án (C) sharing:</b> Sau giới từ 'for' cần danh động từ V-ing: 'Thank you for sharing your interesting recipe' (Cảm ơn bạn đã chia sẻ công thức nấu ăn thú vị của mình).",
    140: "💡 <b>Đáp án (A) It:</b> Đại từ nhân xưng 'It' làm chủ ngữ thay thế cho công thức nấu ăn vừa gửi: 'It has been entered into our upcoming contest' (Nó đã được đưa vào danh sách dự thi).",
    141: "💡 <b>Đáp án (B):</b> Câu thông báo tiến độ cuộc thi nấu ăn: 'Contest winners will be notified in June' (Những người thắng cuộc thi sẽ nhận được thông báo vào tháng Sáu).",
    142: "💡 <b>Đáp án (D) shortly:</b> Trạng từ 'shortly' (chẳng bao lâu nữa/ngay sau đây): phiếu giảm giá 25% sẽ được gửi trong một email riêng mà bạn sẽ nhận được sớm thôi.",
    143: "💡 <b>Đáp án (B) However:</b> Trạng từ liên kết thể hiện sự tương phản về mức độ tham gia thiết kế: 'However, some submit a detailed sketch' (Tuy nhiên, một số khách hàng lại thích tự nộp bản phác thảo chi tiết).",
    144: "💡 <b>Đáp án (C) perfection:</b> Cấu trúc danh từ song hành sau mạo từ 'the': 'the development, creation, and perfection of the design' (sự phát triển, sáng tạo và hoàn thiện bản thiết kế).",
    145: "💡 <b>Đáp án (B):</b> Câu làm rõ ý nghĩa của bước gửi mẫu thiết kế cho khách hàng duyệt: 'This step ensures that the product satisfies expectations' (Bước này đảm bảo sản phẩm đáp ứng đúng kỳ vọng của khách hàng).",
    146: "💡 <b>Đáp án (D) on:</b> Cụm động từ cố định 'count on somebody/something' (tin cậy, tin tưởng vào công ty Bingo Imprint về các thiết kế độc đáo và giao hàng đúng hẹn).",
    147: "💡 <b>Đáp án (D):</b> Phiếu khảo sát dịch vụ vệ sinh đánh giá chi tiết phòng khách, phòng bếp, phòng ngủ ('Living room, Kitchen, Dining room, Bedroom') -> Đây là nhà ở riêng của hộ gia đình (A home).",
    148: "💡 <b>Đáp án (B):</b> Câu hỏi 'Was it easy to make an appointment?' (Đặt lịch hẹn có dễ dàng không?) nhận mức điểm thấp nhất là 1 sao -> Khách hàng ít hài lòng nhất về khâu đặt lịch (The scheduling).",
    149: "💡 <b>Đáp án (B):</b> Trang thông tin giao hàng nêu rõ: 'we offer large- and small-volume deliveries' -> Công ty nhận giao các đơn hàng với nhiều quy mô/kích cỡ khối lượng khác nhau.",
    150: "💡 <b>Đáp án (D):</b> Trang web cảnh báo: nếu khu vực yêu cầu đổ hàng không thể tiếp cận được bởi xe tải chuyên dụng của công ty ('accessible for our trucks'), khách sẽ bị tính phí $50.",
    151: "💡 <b>Đáp án (A):</b> Frank Gerlin đang dở tay làm báo cáo hiệu suất và hỏi: 'Can you give me 45 minutes or so?' ngụ ý anh sẵn lòng giúp kiểm tra số liệu cho Hannah Fisk sau khoảng 45 phút nữa.",
    152: "💡 <b>Đáp án (D):</b> Hannah trả lời: 'I'll double-check the cost data in the meantime' -> Trong thời gian chờ đợi, cô sẽ rà soát lại phần số liệu chi phí của báo cáo ngân sách.",
    153: "💡 <b>Đáp án (B):</b> Email thông báo gửi thông tin về các đợt giảm giá vé máy bay ('price cuts on your preferred trips') cho các hành trình mà khách đã lưu -> Cung cấp thông tin giá cả (provide cost information).",
    154: "💡 <b>Đáp án (C):</b> Cả hai chuyến bay (Seattle - Chicago và Los Angeles - New York) đều đưa ra lựa chọn của hai hãng hàng không giống nhau: Nomata Airlines và Blue Range Airways (The choice of airlines).",
    155: "💡 <b>Đáp án (A):</b> Mở đầu email, tác giả nhờ người nhận rà soát các công thức nấu ăn: 'Thank you for reviewing my recipes to ensure they are easy to follow' -> Đảm bảo các công thức rõ ràng, dễ hiểu.",
    156: "💡 <b>Đáp án (C):</b> Tác giả giải thích các ô đánh dấu chữ X đỏ: 'the Xs are reminders to take better ones to insert later' -> Nhắc nhở tác giả chụp lại các bức ảnh đẹp hơn để thay thế vào sau.",
    157: "💡 <b>Đáp án (C):</b> Vị trí [3] theo sau yêu cầu viết ý kiến góp ý ngay vào lề văn bản, nối tiếp chuẩn nhất bằng câu: 'Otherwise it is hard to keep track of all the changes' (Nếu không thì rất khó theo dõi hết tất cả các thay đổi).",
    158: "💡 <b>Đáp án (C):</b> Thư ngỏ của hãng tàu biển khen ngợi chuỗi nhà hàng Saffron Moon vì cam kết phục vụ món ăn độc đáo cho 'customers across Europe' -> Bà Yamaguchi điều hành hệ thống nhà hàng tại nhiều địa điểm ở châu Âu.",
    159: "💡 <b>Đáp án (B):</b> Từ 'solid' trong cụm 'solid reputation' (danh tiếng vững chắc, đáng tin cậy trên thị trường) đồng nghĩa với **reliable**.",
    160: "💡 <b>Đáp án (D):</b> Bức thư liệt kê các lợi ích: quảng bá trên website/tạp chí tàu, tiếp cận tệp khách hàng đa dạng mới, đàm phán giảm giá nguyên liệu nấu ăn, hoàn toàn KHÔNG nhắc đến các chương trình đào tạo chất lượng.",
    161: "💡 <b>Đáp án (B):</b> Bài báo đưa tin Trung tâm Y tế Karinya được trao giải thưởng uy tín Stellar Service Merit nhằm ca ngợi, vinh danh những thành tựu chăm sóc bệnh nhân xuất sắc của đơn vị này (To offer praise to an organization).",
    162: "💡 <b>Đáp án (D):</b> Bài viết nêu bệnh viện đạt chuẩn tiêu chí khắt khe và giành được giải thưởng năm nay của quỹ Valorcare, KHÔNG có thông tin bệnh viện đã từng nhận nhiều danh hiệu khác trong các năm qua.",
    163: "💡 <b>Đáp án (A):</b> Từ 'reflects' trong câu 'This award reflects our commitment' (Giải thưởng này phản ánh/chứng minh cho cam kết của chúng tôi) đồng nghĩa với **shows**.",
    164: "💡 <b>Đáp án (C):</b> Maxwell Diego nhắc nhở nội quy: 'the rule for Pool Guardian lifeguards is...' -> Alexa Balog là một nhân viên cứu hộ thuộc biên chế công ty Pool Guardian.",
    165: "💡 <b>Đáp án (D):</b> Alexa xin phép đóng cửa bể bơi sớm vì: 'no one has been here since 2:30' -> Hiện tại không có khách nào đang bơi hoặc sử dụng hồ bơi cả.",
    166: "💡 <b>Đáp án (A):</b> Quản lý Wade Nolan giải thích: 'Our contract says we must supply Rosemoor Park with a lifeguard until 5 P.M.' -> Công viên Rosemoor có hợp đồng thuê nhân viên cứu hộ với công ty Pool Guardian.",
    167: "💡 <b>Đáp án (B):</b> Alexa vừa báo cáo cô đang ở trong kho dọn dẹp và sắp xếp lại các thiết bị dụng cụ bể bơi, nên câu 'It has never looked so good' ngụ ý cô đã dọn dẹp kho thiết bị rất gọn gàng và đẹp mắt.",
    168: "💡 <b>Đáp án (A):</b> Sagemont Services tự giới thiệu là đơn vị chuyên cung cấp các giải pháp công nghệ thông tin theo yêu cầu cho các doanh nghiệp ('custom-tailored information technology solutions') -> Công ty tư vấn giải pháp công nghệ.",
    169: "💡 <b>Đáp án (D):</b> Trang web nêu rõ thành tích gần đây: 'helped several businesses complete technology projects on tight deadlines in the past few months' -> Hoàn thành các dự án công nghệ trong khoảng thời gian rất ngắn/gấp gáp.",
    170: "💡 <b>Đáp án (B):</b> Khách hàng Clothing Discounters được miêu tả cụ thể: 'with the online retailer Clothing Discounters rapidly expanding' -> Doanh nghiệp này đang phát triển/mở rộng quy mô rất nhanh chóng.",
    171: "💡 <b>Đáp án (C):</b> Vị trí [3] nằm ngay sau câu nói về việc chỉ trong 2 ngày đã cung cấp toàn bộ trang thiết bị để nhân viên tổng đài làm việc tại nhà, nối tiếp bằng câu: 'Giải pháp này đã loại bỏ hoàn toàn nguy cơ gián đoạn hoạt động kinh doanh'.",
    172: "💡 <b>Đáp án (C):</b> Đoạn 2 bài báo kể: 'Ms. Alonso had the idea for the project while reading about recycled plastic being made into park benches in the Journal for Professional Landscape Architects' -> Bà nảy ra ý tưởng từ một bài báo trên tạp chí chuyên ngành.",
    173: "💡 <b>Đáp án (B):</b> Bài báo nêu rõ: khách đến tham quan triển lãm có thể mang theo đồ nhựa tái chế của mình và bỏ vào các túi thu gom lớn đặt xung quanh phòng triển lãm ('place them in large collection bags').",
    174: "💡 <b>Đáp án (A):</b> Bài viết thông báo vào ngày bế mạc (4/11), toàn bộ các tác phẩm sẽ được tháo dỡ và vật liệu tái chế sẽ được vận chuyển đến nhà máy Flyner Industries để tái chế thành rèm chống thấm.",
    175: "💡 <b>Đáp án (C):</b> Dòng cuối bài báo ghi rõ: bên cạnh triển lãm của bà Alonso, các tác phẩm của một số sinh viên mỹ thuật địa phương cũng được trưng bày tại phòng tranh chính của MCAC ('works by several local art students will be on view').",
    176: "💡 <b>Đáp án (B):</b> Bảng khảo sát thể hiện sự hài lòng về trải nghiệm tổng thể ('Overall experience') trong tháng 6 đạt 87%, tăng 7% so với tháng 5 (+7%↑) -> Trải nghiệm tổng thể tốt hơn tháng trước.",
    177: "💡 <b>Đáp án (A):</b> Dưới bảng số liệu có dòng chú thích: 'Collected and analysed by Naomi Akdemir, Customer Solutions, Exelrate' -> Exelrate là đơn vị vừa trực tiếp thu thập vừa phân tích dữ liệu.",
    178: "💡 <b>Đáp án (B):</b> Từ 'directing' trong cụm 'directing this expansion' (chỉ đạo/lãnh đạo công cuộc mở rộng thị trường) đồng nghĩa với **leading**.",
    179: "💡 <b>Đáp án (C):</b> Bài báo nêu bà Rosa Martin (người quản lý nhóm Customer Solutions mà cô Akdemir làm việc) điều hành nhóm tại trụ sở chính ở Frankfurt cho đến hết tháng này (tháng 7) -> Bà làm việc tại Frankfurt.",
    180: "💡 <b>Đáp án (C):</b> Bài viết giới thiệu Frank Tsudama là người thiết kế tòa nhà trụ sở mới của Exelrate và trung tâm thương mại Global Trade Centre ở Seoul -> Chuyên môn của ông là lĩnh vực Kiến trúc (Architecture).",
    181: "💡 <b>Đáp án (B):</b> Thông báo chào đón khách mua sắm tại siêu thị tham gia các lớp học nấu ăn tổ chức tại gian bếp của siêu thị với nguyên liệu có sẵn trên kệ hàng ('ingredients you can find right here in the store') -> Hướng tới khách hàng của siêu thị.",
    182: "💡 <b>Đáp án (A):</b> Lịch học tháng 8 gồm các món: Butter Chicken (Ấn Độ), Pad Thai (Thái Lan), Fish Tacos (Mexico), Lasagna (Ý) -> Dạy nấu các món ăn truyền thống từ nhiều quốc gia khác nhau.",
    183: "💡 <b>Đáp án (C):</b> Trong bài đánh giá, Astrid Klein kể tuần trước cô đã tham gia lớp làm món bánh taco cá ('prepare fish tacos'), đối chiếu lịch học thì lớp Fish Tacos diễn ra vào ngày 16 tháng 8.",
    184: "💡 <b>Đáp án (D):</b> Bài đánh giá kể cô đã tự tay làm vỏ bánh ngô (corn tortillas), cá rô phi nướng (grilled tilapia) và sốt cà chua xanh (tomatillo salsa), hoàn toàn KHÔNG nhắc đến bắp cải bào (Shredded cabbage).",
    185: "💡 <b>Đáp án (C):</b> Câu kết bài đánh giá của Astrid Klein: 'I'm going to clear my Monday evenings so I can go back again and again!' -> Cô dự định sẽ dành trống các tối thứ Hai để tiếp tục tham gia thêm nhiều lớp học nấu ăn nữa.",
    186: "💡 <b>Đáp án (A):</b> Bài báo mở đầu bằng tin Viện Mắt Callard thông báo Bác sĩ Jennifer Robbins đã chấp thuận đảm nhiệm cương vị Viện trưởng mới ('accepted the position of dean, effective immediately') -> Bà đang bắt đầu một công việc mới.",
    187: "💡 <b>Đáp án (C):</b> Đoạn 2 nêu rõ quá trình học vấn và đào tạo: 'completed a postdoctoral residency at Petersen Medical Center' -> Hoàn thành khóa đào tạo nội trú sau tiến sĩ tại Trung tâm Y tế Petersen.",
    188: "💡 <b>Đáp án (D):</b> Bài báo nêu ngày 17/4 bà Robbins sẽ nhận huy chương Kramer tại hội nghị; đối chiếu lịch trình ngày 17/4, lễ trao giải (awards ceremony) diễn ra lúc 9:00 - 9:30 P.M. tại phòng đại tiệc Regal Ballroom.",
    189: "💡 <b>Đáp án (D):</b> Bà Chủ tịch Paulina Raskin gửi email để gửi lời cảm ơn Bác sĩ Dae-Ho Sohn vì đã đến tham gia và phát biểu bài diễn văn quan trọng tại hội nghị ICVA tuần trước (To express gratitude for his participation in an event).",
    190: "💡 <b>Đáp án (B):</b> Thư của bà Raskin nhắc đến bài phát biểu chủ đề ('keynote address') của Bác sĩ Sohn, đối chiếu lịch trình ngày 17/4 thì phần 'Welcome and keynote address' diễn ra vào khung giờ 10:00 - 11:00 A.M.",
    191: "💡 <b>Đáp án (B):</b> Trang web nêu rõ quy trình: 'When you come in for your appointment, a technician will assess the condition of your bicycle' -> Thợ kỹ thuật sẽ kiểm tra, thẩm định tình trạng xe của khách.",
    192: "💡 <b>Đáp án (B):</b> Trong email gửi ngày 2 tháng 11, cô Nicola Johnson viết: 'I have a mountain bicycle that is now six years old' -> Cô ấy đã sở hữu chiếc xe đạp này từ 6 năm trước.",
    193: "💡 <b>Đáp án (C):</b> Nicola muốn ký gửi xe để bán hộ, và trang web quy định rõ cửa hàng sẽ giữ lại 15% phí dịch vụ khi xe được bán thành công -> Cô đã chấp thuận để cửa hàng thu khoản phí dịch vụ này.",
    194: "💡 <b>Đáp án (D):</b> Email phản hồi của ông Peter Moran giải thích rõ quy định của công ty: tiền bán xe bắt buộc phải chuyển vào tài khoản ngân hàng và công ty không cam đoan bán được xe trước một ngày nhất định do chủ xe đưa ra (To state a company rule).",
    195: "💡 <b>Đáp án (A):</b> Trang web nêu người gửi email đặt lịch sẽ nhận được phản hồi từ Quản lý dịch vụ khách hàng ('customer service manager'), do đó Peter Moran (người gửi email trả lời) chính là Quản lý dịch vụ khách hàng.",
    196: "💡 <b>Đáp án (B):</b> Email của Simon Cady gửi để nhắc nhở nhân viên mới Yumiko Kuroda nộp bổ sung các giấy tờ cá nhân còn thiếu cho hồ sơ nhân sự theo danh mục đính kèm (To request some documents).",
    197: "💡 <b>Đáp án (A):</b> Thư viết: 'At the training for new hires this morning, we provided you with a checklist...' -> Vào buổi sáng ngày 12 tháng 5, cô Kuroda đã có mặt tại buổi đào tạo dành cho nhân viên mới.",
    198: "💡 <b>Đáp án (B):</b> Thư giải thích giấy cam kết miễn trừ trách nhiệm (mục số 6) chỉ cần nộp nếu cô tham gia vào đội bóng mềm của công ty ('The final item on the list will only be needed if you join the company softball team').",
    199: "💡 <b>Đáp án (C):</b> Trong thư phản hồi, cô Kuroda hào hứng viết: 'look forward to the opportunity to get to know my coworkers better' -> Cô rất mong muốn và háo húc được gặp gỡ, làm quen với các đồng nghiệp tại buổi dã ngoại.",
    200: "💡 <b>Đáp án (B):</b> Cô Kuroda viết: 'I am about to gather the necessary information for the fourth item on the list', đối chiếu danh mục thì mục số 4 là 'Bank account information form' -> Cô chuẩn bị đi tìm thông tin chi tiết về tài khoản ngân hàng của mình."
};