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

// 1. DÀN KEY 200 CÂU TEST 7 (ĐÃ ĐỐI CHIẾU CHUẨN XÁC 100%)
window.TOEIC_KEYS[7] = parseKey("1C 2A 3B 4B 5C 6B 7A 8A 9C 10A 11C 12B 13B 14C 15C 16C 17B 18A 19A 20B 21A 22C 23C 24C 25C 26A 27A 28B 29A 30A 31C 32B 33C 34B 35A 36C 37D 38B 39C 40A 41A 42B 43D 44C 45D 46C 47B 48D 49A 50D 51C 52B 53B 54C 55B 56D 57C 58B 59D 60A 61C 62B 63D 64C 65A 66D 67B 68C 69B 70C 71A 72C 73B 74C 75B 76D 77B 78A 79A 80C 81B 82A 83C 84B 85B 86A 87D 88B 89D 90B 91B 92C 93B 94D 95D 96C 97C 98A 99B 100A 101A 102B 103B 104A 105D 106D 107A 108B 109A 110B 111A 112D 113C 114D 115B 116A 117C 118D 119C 120C 121D 122B 123A 124A 125B 126C 127D 128D 129A 130B 131C 132A 133D 134B 135B 136A 137C 138B 139D 140B 141B 142C 143B 144D 145A 146C 147A 148B 149A 150B 151B 152A 153B 154A 155C 156D 157C 158B 159C 160A 161C 162C 163B 164B 165D 166C 167B 168C 169C 170C 171D 172A 173B 174D 175D 176B 177D 178C 179C 180A 181C 182D 183C 184B 185A 186B 187C 188C 189D 190D 191C 192A 193B 194D 195B 196A 197D 198C 199A 200D");

// 2. FULL TRANSCRIPT LISTENING TEST 7
window.TOEIC_SCRIPTS[7] = `
  <h3>PART 1: PHOTOGRAPHS (Câu 1 - 6)</h3>
  <div class="script-question">
    <span class="script-speaker">1. M-Au</span>
    <div class="script-opt">(A) She's holding a water bottle.</div>
    <div class="script-opt">(B) She's looking at a newspaper.</div>
    <div class="script-opt correct-pink">(C) She's reaching for a book.</div>
    <div class="script-opt">(D) She's standing next to a copier.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">2. W-Br</span>
    <div class="script-opt correct-pink">(A) A tire is leaning against a car.</div>
    <div class="script-opt">(B) A chain has been left on the ground.</div>
    <div class="script-opt">(C) A car is backing out of a garage.</div>
    <div class="script-opt">(D) A box of tools has been set on top of a car.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">3. M-Cn</span>
    <div class="script-opt">(A) He's pushing a cart toward a doorway.</div>
    <div class="script-opt correct-pink">(B) He's spraying cleaning liquid onto a glass door.</div>
    <div class="script-opt">(C) He's mopping up a tiled floor.</div>
    <div class="script-opt">(D) He's setting up a bulletin board.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">4. W-Am</span>
    <div class="script-opt">(A) The woman is walking across the street.</div>
    <div class="script-opt correct-pink">(B) The woman is repairing a bicycle.</div>
    <div class="script-opt">(C) The woman is wearing a helmet.</div>
    <div class="script-opt">(D) The woman is getting into a vehicle.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">5. M-Au</span>
    <div class="script-opt">(A) Some umbrellas have been opened in an outdoor dining area.</div>
    <div class="script-opt">(B) All the tables are occupied by diners.</div>
    <div class="script-opt correct-pink">(C) A worker is sweeping a dining area.</div>
    <div class="script-opt">(D) Flowers have been placed on the tables.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">6. W-Br</span>
    <div class="script-opt">(A) File folders have been arranged on a shelf.</div>
    <div class="script-opt correct-pink">(B) Some window blinds have been raised.</div>
    <div class="script-opt">(C) Some wastebaskets have been turned upside down.</div>
    <div class="script-opt">(D) An office chair has been pushed under a desk.</div>
  </div>

  <h3>PART 2: QUESTION-RESPONSE (Câu 7 - 31)</h3>
  <div class="script-question">
    <span class="script-speaker">7. M-Au: Where do I sign this contract?</span>
    <div class="script-opt correct-pink">(A) A large account.</div>
    <div class="script-opt">(B) Here at the bottom.</div>
    <div class="script-opt">(C) Hang it on the wall.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">8. M-Cn: How about planting a vegetable garden?</span>
    <div class="script-opt correct-pink">(A) There's parking available on the next street.</div>
    <div class="script-opt">(B) I think that's a good idea.</div>
    <div class="script-opt">(C) A new hardware store.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">9. W-Br: When did the conference committee meeting get canceled?</span>
    <div class="script-opt">(A) Yesterday morning.</div>
    <div class="script-opt">(B) A new member.</div>
    <div class="script-opt correct-pink">(C) At the hotel on Main Street.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">10. W-Am: Does the company pay for our hotel rooms?</span>
    <div class="script-opt correct-pink">(A) I have a layover in Dubai.</div>
    <div class="script-opt">(B) No, we have to pay for them ourselves.</div>
    <div class="script-opt">(C) That's my favorite airline.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">11. W-Br: Our team's going to inspect the construction site tomorrow.</span>
    <div class="script-opt">(A) His name is Alberto.</div>
    <div class="script-opt">(B) The office down the hall.</div>
    <div class="script-opt correct-pink">(C) That's the first I've heard of it.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">12. M-Cn: Why does the moon look so close in this photograph?</span>
    <div class="script-opt">(A) Are there seats available for the astronomy presentation?</div>
    <div class="script-opt correct-pink">(B) Because I used a special camera lens.</div>
    <div class="script-opt">(C) She's always wanted to be an astronaut.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">13. W-Am: How do I log on to this computer?</span>
    <div class="script-opt">(A) Some printer ink and paper.</div>
    <div class="script-opt correct-pink">(B) I'll send you a temporary password.</div>
    <div class="script-opt">(C) No, he was late.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">14. M-Cn: When does the property manager arrive?</span>
    <div class="script-opt">(A) On Whitmer Boulevard.</div>
    <div class="script-opt">(B) You're right, it doesn't fit.</div>
    <div class="script-opt correct-pink">(C) At ten o'clock.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">15. M-Cn: Let's have dinner at the French restaurant tonight.</span>
    <div class="script-opt">(A) Okay, I'll see you there.</div>
    <div class="script-opt">(B) I'd like to buy some new cookware.</div>
    <div class="script-opt correct-pink">(C) Here's a copy of the agreement.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">16. M-Au: Who's supervising the production line?</span>
    <div class="script-opt">(A) Please sign on the line.</div>
    <div class="script-opt">(B) Luca's doing it.</div>
    <div class="script-opt correct-pink">(C) A forty-five-minute lunch break.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">17. W-Br: When will the reception for the artist start?</span>
    <div class="script-opt">(A) After the lecture.</div>
    <div class="script-opt correct-pink">(B) Asian art.</div>
    <div class="script-opt">(C) At the conference center.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">18. W-Am: How often should I submit my travel expenses?</span>
    <div class="script-opt correct-pink">(A) Sure, I'll trim the branches a little.</div>
    <div class="script-opt">(B) Once a month.</div>
    <div class="script-opt">(C) An updated owner's manual.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">19. W-Br: Our print shop is going to have a sale on shirts.</span>
    <div class="script-opt correct-pink">(A) I'm afraid I have no more change.</div>
    <div class="script-opt">(B) It's his favorite television show.</div>
    <div class="script-opt">(C) Okay, when will it start?</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">20. M-Cn: You already bought a new part for the sprinkler system, right?</span>
    <div class="script-opt">(A) Check the weather forecast.</div>
    <div class="script-opt correct-pink">(B) Yes, I did that last week.</div>
    <div class="script-opt">(C) That flight departs soon.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">21. M-Au: How many lamps are made at the factory every day?</span>
    <div class="script-opt correct-pink">(A) Some new machinery.</div>
    <div class="script-opt">(B) A new line of men's clothing.</div>
    <div class="script-opt">(C) About five hundred.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">22. M-Cn: Are you going out to eat, or did you bring your lunch from home?</span>
    <div class="script-opt">(A) Right next to my office.</div>
    <div class="script-opt">(B) That'll be five dollars, please.</div>
    <div class="script-opt correct-pink">(C) It's in the microwave.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">23. W-Br: Can I place an order online?</span>
    <div class="script-opt">(A) The post office on Main Street.</div>
    <div class="script-opt">(B) Our website is currently down for maintenance.</div>
    <div class="script-opt correct-pink">(C) No, he put it in the filing cabinet.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">24. M-Au: Shouldn't the new floor plan be finished today?</span>
    <div class="script-opt">(A) I enjoyed the movie.</div>
    <div class="script-opt">(B) My team is short-staffed right now.</div>
    <div class="script-opt correct-pink">(C) We met in the cafeteria.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">25. M-Cn: Who's the new head of the legal department?</span>
    <div class="script-opt">(A) No, I think it's on the second floor.</div>
    <div class="script-opt">(B) It hasn't been announced yet.</div>
    <div class="script-opt correct-pink">(C) Thanks, that'll help.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">26. M-Au: Who's scheduled to repair the water heater in Building Two?</span>
    <div class="script-opt correct-pink">(A) There's a bottle of water in the refrigerator.</div>
    <div class="script-opt">(B) Twenty dollars each.</div>
    <div class="script-opt">(C) That job was completed yesterday.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">27. M-Au: Why were the sales figures so high last quarter?</span>
    <div class="script-opt correct-pink">(A) I think that storefront is vacant.</div>
    <div class="script-opt">(B) Koji is in charge of analyzing market trends.</div>
    <div class="script-opt">(C) Let me unlock the door first.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">28. M-Cn: Ms. Martin is demonstrating the new software at the conference.</span>
    <div class="script-opt">(A) I live on Vine Street.</div>
    <div class="script-opt correct-pink">(B) No, they catered food last year.</div>
    <div class="script-opt">(C) I thought she was on vacation.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">29. W-Br: Let's hire Johnson Construction to fix this roof.</span>
    <div class="script-opt correct-pink">(A) They don't seem to be.</div>
    <div class="script-opt">(B) They can't start until next month.</div>
    <div class="script-opt">(C) I think it's on the bottom shelf.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">30. W-Am: Your travel itinerary says you're going to Seattle, right?</span>
    <div class="script-opt correct-pink">(A) But I'm going to London!</div>
    <div class="script-opt">(B) Turn left at the light, please.</div>
    <div class="script-opt">(C) An email update.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">31. W-Br: Won't theater tickets become available later today?</span>
    <div class="script-opt">(A) A new pair of work boots.</div>
    <div class="script-opt">(B) It should say on their website.</div>
    <div class="script-opt correct-pink">(C) Yes, I saw him at the convention.</div>
  </div>

  <h3>PART 3: CONVERSATIONS (Câu 32 - 70)</h3>
  <div class="script-dialogue">
    <b>[Questions 32 - 34]</b><br>
    <b>M-Cn:</b> Carmen, I don't know if you realize it, but <span class="correct-pink">[32] your office chair makes a squeaking sound</span> every time you move. It's a little distracting when the office is so quiet.<br>
    <b>W-Am:</b> Oh, I had my headset on, so I didn't realize that. <span class="correct-pink">[33] I'll go swap this chair with one from the conference room</span>.<br>
    <b>M-Cn:</b> Thanks for understanding. And don't forget that <span class="correct-pink">[34] our team is ordering takeout from a Thai restaurant for lunch</span>. Do you want anything?<br>
    <b>W-Am:</b> Sure, I'd love some spring rolls.
  </div>

  <div class="script-dialogue">
    <b>[Questions 35 - 37]</b><br>
    <b>M-Cn:</b> Amina, do you have a few minutes? <span class="correct-pink">[35] I finished preparing the sample dish</span> that you asked for. You can try it now if you'd like.<br>
    <b>W-Br:</b> Sure, I have time now. I think the pasta is delicious. <span class="correct-pink">[36] I like the hint of fresh lemon flavor</span>. It'll make a great addition to our summer menu.<br>
    <b>M-Cn:</b> I agree, but we don't use lemons in any other dish. Should I get in touch with our fruit and vegetable supplier?<br>
    <b>W-Br:</b> Thanks. <span class="correct-pink">[37] Just ask him what the cost difference would be</span> if we added five kilograms of lemons to our regular delivery.
  </div>

  <div class="script-dialogue">
    <b>[Questions 38 - 40]</b><br>
    <b>M-Au:</b> Dr. Ruiz, do you have a minute?<br>
    <b>W-Am:</b> Sure.<br>
    <b>M-Au:</b> It looks like the <span class="correct-pink">[38] hospital has a little money left over in our staff development budget</span>. Can you think of anything we could spend it on? I'm just looking for ideas.<br>
    <b>W-Am:</b> Well, I'd love it if <span class="correct-pink">[39] we could get a subscription to Prescriber Meds newsletter</span>. A lot of the expert summaries in it are useful for my clinical practice work.<br>
    <b>M-Au:</b> Sounds good. I'm going to ask other doctors too, and see how best to use these funds.<br>
    <b>W-Am:</b> Great. <span class="correct-pink">[40] I'd suggest maybe sending out a survey</span> though. That'd be more convenient.<br>
    <b>M-Au:</b> Good idea. I'll do that.
  </div>

  <div class="script-dialogue">
    <b>[Questions 41 - 43]</b><br>
    <b>M-Cn:</b> Hello, <span class="correct-pink">[41] I just received a pair of shoes I ordered from your online store</span>. They're nice, but they don't fit. Can I ship them back to you for a refund?<br>
    <b>W-Br:</b> Yes, but for a refund, I'm afraid you'll have to ship the shoes back at your own expense. On the other hand, <span class="correct-pink">[42] if you'd like to exchange them, we'll send you a return label for free</span>.<br>
    <b>M-Cn:</b> In that case, I'll exchange them for another size. How do I do that?<br>
    <b>W-Br:</b> <span class="correct-pink">[43] I'll email you a link</span>. Just click on it, and you'll be redirected to the instructions for exchanges on our website.
  </div>

  <div class="script-dialogue">
    <b>[Questions 44 - 46]</b><br>
    <b>M-Cn:</b> On today's podcast, we have Gabriella Espinosa, a former history professor who focuses on <span class="correct-pink">[44] ancient civilizations</span>. Recently, however, she left the university for another position. Tell us about that.<br>
    <b>W-Am:</b> Well, last year, a film company was producing a movie about the famous pyramids at Giza. They needed an expert in ancient Egypt, and they found me. Now, <span class="correct-pink">[45] I work full-time as a consultant for the film industry</span>.<br>
    <b>M-Cn:</b> Do you actually work on set?<br>
    <b>W-Am:</b> Yes. When there are last-minute changes, I make sure the changes are historically accurate. In fact, <span class="correct-pink">[46] I'll be in Egypt next week, sailing down the Nile River</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 47 - 49]</b><br>
    <b>W-Br:</b> Pedro, I just registered for <span class="correct-pink">[47] the National Marketing Convention</span> in June.<br>
    <b>M-Cn:</b> Me too, and I printed out the program with all the talks and workshops.<br>
    <b>W-Br:</b> Oh, can I take a look? This is great. <span class="correct-pink">[48] It looks like there are plenty of breaks in the schedule for networking with potential clients</span>.<br>
    <b>M-Cn:</b> Right. So <span class="correct-pink">[49] don't forget to bring your business cards with you</span>. You'll need a lot of them.<br>
    <b>W-Br:</b> Thanks for the reminder. I'd better order more.
  </div>

  <div class="script-dialogue">
    <b>[Questions 50 - 52]</b><br>
    <b>M-Cn:</b> We need to come up with a new menu design for <span class="correct-pink">[50] our seaside restaurant</span>. Something memorable. Do you two have any suggestions?<br>
    <b>M-Au:</b> Maybe we could use a dolphin jumping out of the water? Junko, what do you think?<br>
    <b>W-Br:</b> Oh, I really like that idea, and it's fitting, since our restaurant is at the beach. <span class="correct-pink">[51] Minoru, can you put together a graphic for the rest of us to look at?</span><br>
    <b>M-Au:</b> I'll start working on it immediately.<br>
    <b>M-Cn:</b> Great. Hopefully, we can finalize something <span class="correct-pink">[52] before next month's community fair</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 53 - 55]</b><br>
    <b>M-Au:</b> Hello, <span class="correct-pink">[53] welcome to Henderson State Park</span>. Parking is free this weekend.<br>
    <b>W-Am:</b> That's great! I'm visiting here for the first time. Do you have a map of the park trails?<br>
    <b>M-Au:</b> I'm sorry, I just ran out of maps. It's been a very busy weekend.<br>
    <b>W-Am:</b> Well, <span class="correct-pink">[54] I'm just a little concerned since I don't know the trails</span>.<br>
    <b>M-Au:</b> I understand. <span class="correct-pink">[55] The visitor center is about four hundred meters up the road</span>.<br>
    <b>W-Am:</b> Oh, that's good to know. Thanks.
  </div>

  <div class="script-dialogue">
    <b>[Questions 56 - 58]</b><br>
    <b>M-Au:</b> Good morning, Mayor Ishikawa. I'm glad you could join Ms. Schneider and me for the ceremony as we begin this important first step: <span class="correct-pink">[56] the building demolition</span>.<br>
    <b>M-Cn:</b> Happy to be here. The city appreciates your company's involvement in this project.<br>
    <b>W-Br:</b> Our pleasure. TJO Property is excited to be <span class="correct-pink">[57] investing in this community in such a substantial way</span>.<br>
    <b>M-Au:</b> Right. And tearing down this old shopping center will give us the space to create a new mixed-use project of apartments, shops, and offices.<br>
    <b>M-Cn:</b> Community residents are looking forward to the new development.<br>
    <b>W-Br:</b> Absolutely. Since the press is here, <span class="correct-pink">[58] should we pose for a photograph in front of the wrecking ball before the work begins?</span>
  </div>

  <div class="script-dialogue">
    <b>[Questions 59 - 61]</b><br>
    <b>M-Cn:</b> Welcome to Schmidt's. <span class="correct-pink">[59] Are you interested in our hanging plants?</span> I'm happy to help you choose.<br>
    <b>W-Am:</b> Please. <span class="correct-pink">[60] I got this coupon in the mail for fifteen percent off any outdoor plants</span>, so I thought I'd see if you have some flower baskets I could hang in my back patio area.<br>
    <b>M-Cn:</b> These plants here bloom beautifully and do best in direct sunlight.<br>
    <b>W-Am:</b> Well, <span class="correct-pink">[61] it's a covered patio</span>.<br>
    <b>M-Cn:</b> Okay. Just follow me. We have plenty of plants that do well in shade or partial sun.
  </div>

  <div class="script-dialogue">
    <b>[Questions 62 - 64]</b><br>
    <b>W-Br:</b> Hey, Pablo. I missed the intern team morning update. Was there information about cleaning acrylic test tubes? I wonder whether there are specific guidelines for these, as opposed to glass tubes.<br>
    <b>M-Cn:</b> <span class="correct-pink">[63] You should check the intern lab manual</span>. I think it was updated this week with step-by-step instructions.<br>
    <b>W-Br:</b> Good idea. You know, what I'm enjoying most so far is learning about the practical side of the work, but I wish we could start working alongside the researchers here.<br>
    <b>M-Cn:</b> <span class="correct-pink">[64] Professor Kwan is showing us how to analyze data later today</span>. She usually asks the interns to participate.
  </div>

  <div class="script-dialogue">
    <b>[Questions 65 - 67]</b><br>
    <b>M-Au:</b> Hi, Farida. I'm excited to see the designs you created. People spend a lot of time outside during the summer, so <span class="correct-pink">[65] we want to get our sunscreen on store shelves before the summer rush</span>. We need to pick a logo design quickly.<br>
    <b>W-Br:</b> Take a look at these logo designs. All of them will grab the attention of shoppers.<br>
    <b>M-Au:</b> <span class="correct-pink">[66] I like this one with the palm tree in a circle</span>.<br>
    <b>W-Br:</b> I agree. The single palm tree is a simple, clean logo.<br>
    <b>M-Au:</b> Before we make our decision, I'd like to show it to a focus group that represents our target audience. <span class="correct-pink">[67] We have a large group coming in next week</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 68 - 70]</b><br>
    <b>W-Am:</b> Stefan, have you given any more thought to that parcel of <span class="correct-pink">[68] land that's available for lease</span>? If we leased it, we'd have space for a lot more crops this spring and summer.<br>
    <b>M-Cn:</b> Yes. With the extra growing space, we'd definitely increase our yield. What crops do you think would be best?<br>
    <b>W-Am:</b> Well, we could plant more celery, which is <span class="correct-pink">[69] our most popular crop</span>, and we could even add cabbage as a new crop in the spring.<br>
    <b>M-Cn:</b> That makes sense. We'll need to extend our irrigation system to the new parcel though, and that could be expensive. <span class="correct-pink">[70] I can call Lyndon Ag Supply for an estimate on that</span>.<br>
    <b>W-Am:</b> Sure, that would be great.
  </div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>
  <div class="script-dialogue">
    <b>[Questions 71 - 73]</b><br>
    <b>W-Am:</b> Good morning, everyone. <span class="correct-pink">[71] Thank you for coming in a little bit early for your shift today</span>. While production was closed down for the holiday, management took the opportunity to install a new type of safety equipment on all the machines on <span class="correct-pink">[72] the assembly lines</span>. A special sensor, called a light curtain, automatically turns off the machines if an object gets too close during operation. <span class="correct-pink">[73] I'd like to show you how it works. Let's go look at a machine now</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 74 - 76]</b><br>
    <b>W-Br:</b> Good job at all the rehearsals this week as we prepare for our upcoming performance, <span class="correct-pink">[74] dancers! You did great at quickly learning the newly choreographed steps to our main piece</span>. <span class="correct-pink">[75] I recommend that you rest a lot over the weekend</span>. Please give your muscles time to recover after working so hard. When we return on Monday for our final rehearsal, Irina will be here. She's in charge of <span class="correct-pink">[76] the costumes</span> and will be making last-minute alterations to your outfits. Then we'll be ready for our first show on Tuesday night.
  </div>

  <div class="script-dialogue">
    <b>[Questions 77 - 79]</b><br>
    <b>M-Au:</b> Attention, everyone. <span class="correct-pink">[77] Tonight we're filming a live performance of the Edmonton Symphony Orchestra</span>, so the margin for error is zero. I know we've had a lot of adjustments to make since <span class="correct-pink">[78] we just upgraded our cameras to newer models last week</span>, but we've tested everything, and we know what we're doing. Remember, it's an important night because this is a high-profile event that will be broadcast live to viewers. If we do a great job, our services are bound to be in demand. It's noon now, so let's break for lunch. <span class="correct-pink">[79] When we come back, we'll get set up</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 80 - 82]</b><br>
    <b>W-Br:</b> Hi, I'm your supervisor, Maria Gonzalez. <span class="correct-pink">[80] I'd like to extend a warm welcome to everyone here. I'm excited that you'll all be joining the customer service department</span>. I hope that the onboarding process has been going well so far. <span class="correct-pink">[81] After lunch, I'll share a video about our company's history</span>, from its founding in 1971 to the present day. Let's move on now to introductions. I'd like all of you to tell us something about yourselves. For example, I just found out that Astrid plays saxophone in a jazz ensemble. <span class="correct-pink">[82] That certainly wasn't on her résumé!</span> Klaus, would you go first?
  </div>

  <div class="script-dialogue">
    <b>[Questions 83 - 85]</b><br>
    <b>M-Au:</b> Good afternoon, and welcome aboard this train to Ashdale. Our next stop is Broxton, <span class="correct-pink">[83] famous for being the birthplace of renowned painter Oliver Murray</span>. As you may know, several of Mr. Murray's paintings hang in museums around the world. Please be advised that due to the short platform length, the doors of the last train car will not open. <span class="correct-pink">[84] If you are in that car, you'll need to walk forward to exit the train</span>. There will also be <span class="correct-pink">[85] a short delay at this station while our new train crew comes on</span> and gets situated. We apologize for any inconvenience.
  </div>

  <div class="script-dialogue">
    <b>[Questions 86 - 88]</b><br>
    <b>W-Am:</b> I have good news: we've signed a contract with Lambert Technologies to plan <span class="correct-pink">[86] the gardens and landscaping around their new office building</span>. I met with them last week to present our design proposals, and they agreed on a design plan. They've decided to cover a lot of the open space with creeping thyme plantings instead of grass. Resource conservation is a priority for all of us, and I must say, <span class="correct-pink">[87] grass does require a lot of water</span>. The project will start in August. I'll need to make the work schedules soon. If you're planning to take any time off for vacation, <span class="correct-pink">[88] send me those dates today, please</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 89 - 91]</b><br>
    <b>M-Cn:</b> A market research firm has reported that <span class="correct-pink">[89] the department store chain Willoughby is partnering with the beauty retailer Rossi</span>. By the end of the year, Rossi stores will be in place at five hundred Willoughby locations. Currently, most of the beauty retailer's sales come from small shops in urban areas. By joining forces with Willoughby, <span class="correct-pink">[90] Rossi hopes to meet its goal of expanding its customer base</span> by entering suburban markets. To accommodate the new retail spaces for Rossi, participating Willoughby stores will <span class="correct-pink">[91] start renovations in July</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 92 - 94]</b><br>
    <b>M-Au:</b> Today, <span class="correct-pink">[92] I want to discuss some ways we can improve our solar panel installation business</span>. I'd like to pay for national certification for all of our installation techs, which will greatly improve our quality. <span class="correct-pink">[93] Let's not forget that the business council's yearly ratings will be published soon</span>. In addition, we can attract new customers by offering twenty-five percent off the installation charge. <span class="correct-pink">[94] I suggest we begin the promotion next month</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 95 - 97]</b><br>
    <b>M-Cn:</b> Thank you for attending. <span class="correct-pink">[95] Last fall, the city approved more funding for transportation projects</span>. Today, my department is happy to announce that we'll use some of those funds to install covered benches at city bus stops. They will give riders a place to rest and keep out of the sun, rain, or snow while they wait. This map shows the neighborhoods where we'll construct new bus shelters. <span class="correct-pink">[97] We'll start with the neighborhood around the university</span>, since students make up a large portion of the overall ridership.
  </div>

  <div class="script-dialogue">
    <b>[Questions 98 - 100]</b><br>
    <b>W-Br:</b> Hi, Andrew. This is Samantha Evans. It was great running into you at the flower trade show in Boston, and thanks for recommending that <span class="correct-pink">[98] I visit the art museum</span> while I was in town. I really enjoyed seeing the modern art exhibit. I'm calling because I wanted to follow up with you right away about the tulips you're getting shipped from the Netherlands next week. I'd like to buy ten dozen tulips from you for <span class="correct-pink">[99] my flower shop</span>. However, my budget is tight, and I can't spend more than two hundred and fifty dollars, so <span class="correct-pink">[100] I'd like to order tulips in that price range</span>.
  </div>
`;

// 3. GIẢI THÍCH CHI TIẾT READING (CÂU 101 - 200) TEST 7 (CHUẨN 100% THEO ĐỀ GỐC)
window.TOEIC_EXPLANATIONS[7] = {
    101: "💡 <b>Đáp án (A) her:</b> Đứng trước danh từ 'presentation' cần tính từ sở hữu 'her': 'After Ms. Takido finishes her presentation...' (Sau khi cô Takido hoàn thành bài thuyết trình của mình).",
    102: "💡 <b>Đáp án (B) drink:</b> Danh từ 'drink' (đồ uống/thức uống): quán cà phê tặng một đồ uống miễn phí đi kèm mỗi bữa ăn vào thứ Ba.",
    103: "💡 <b>Đáp án (B) to commute:</b> Cấu trúc quen thuộc 'prefer to do something': 'prefers to commute to work by train' (thích đi làm bằng tàu hỏa hơn là ô tô).",
    104: "💡 <b>Đáp án (A) Because:</b> Liên từ chỉ nguyên nhân 'Because' đứng đầu câu nối hai mệnh đề nguyên nhân - kết quả: Vì chi nhánh mới thiếu nhân lực nên họ đã tuyển thêm người.",
    105: "💡 <b>Đáp án (D) useful:</b> Sau to-be 'are' cần tính từ làm vị ngữ: 'useful for keeping fit at home' (hữu ích cho việc rèn luyện giữ dáng tại nhà).",
    106: "💡 <b>Đáp án (D) actually:</b> Trạng từ 'actually' (thực tế là/thực sự) bổ nghĩa cho hành động: công việc trên thực tế đã hoàn thành sớm 2 tuần so với kế hoạch.",
    107: "💡 <b>Đáp án (A) link:</b> Danh từ 'link' trong cụm 'click on the link below' (nhấp vào đường liên kết bên dưới để đăng ký nhận bản tin).",
    108: "💡 <b>Đáp án (B) basic:</b> Cần tính từ đứng trước danh từ: 'a basic understanding' (sự hiểu biết cơ bản/nền tảng về hành vi người tiêu dùng).",
    109: "💡 <b>Đáp án (A) directly:</b> Cần trạng từ 'directly' (một cách trực tiếp) đứng sau bổ nghĩa cho động từ 'respond': phản hồi trực tiếp tới các nhà lãnh đạo chính quyền.",
    110: "💡 <b>Đáp án (B) at:</b> Giới từ chỉ độ tuổi: 'at the age of five' (bắt đầu học chơi đàn violin từ năm lên 5 tuổi).",
    111: "💡 <b>Đáp án (A) one:</b> Đại từ số ít 'one' thay thế cho ứng viên: trong số 7 ứng viên, hội đồng tuyển dụng chỉ được chọn ra đúng một người.",
    112: "💡 <b>Đáp án (D) elsewhere:</b> Trạng từ chỉ nơi chốn 'elsewhere' mang nghĩa ở nơi khác: những sản phẩm độc đáo rất khó tìm thấy ở bất kỳ nơi nào khác.",
    113: "💡 <b>Đáp án (C) if:</b> Liên từ điều kiện 'if' nối mệnh đề: Hãy liên hệ văn phòng chính của khách sạn nếu quý khách có nhu cầu sử dụng dịch vụ thay khăn trải giường hàng ngày.",
    114: "💡 <b>Đáp án (D) familiarize:</b> Cấu trúc câu mệnh lệnh 'familiarize yourself with something' (hãy tự tìm hiểu kỹ/làm quen với chính sách hoàn trả học phí của công ty).",
    115: "💡 <b>Đáp án (B) actively:</b> Trạng từ 'actively' (một cách tích cực, chủ động) đứng trước phân từ hai bổ nghĩa trong thể bị động 'is actively being evaluated'.",
    116: "💡 <b>Đáp án (A) convenient:</b> Cần tính từ đứng trước danh từ 'option': 'Another convenient option' (Một phương án di chuyển thuận tiện khác tới sân bay).",
    117: "💡 <b>Đáp án (C) will be held:</b> Sự việc diễn ra vào thứ Bảy tới theo dự báo thời tiết nên chia thì tương lai đơn thể bị động: buổi lễ sẽ được tổ chức trong nhà.",
    118: "💡 <b>Đáp án (D) behind:</b> Giới từ chỉ vị trí: 'stacked behind the old warehouse' (được xếp gọn gàng ở phía sau nhà kho cũ).",
    119: "💡 <b>Đáp án (C) diverse:</b> Cụm danh từ 'a diverse range of topics' mang nghĩa một chuỗi các chủ đề vô cùng đa dạng, phong phú.",
    120: "💡 <b>Đáp án (C) lack:</b> Danh từ 'lack' trong cụm 'A lack of clearly defined milestones' (Sự thiếu hụt các cột mốc mục tiêu rõ ràng là nguyên nhân khiến dự án thất bại).",
    121: "💡 <b>Đáp án (D) personable:</b> Cấu trúc chuỗi tính từ song hành cùng bổ nghĩa cho nhân viên: 'well-informed, personable, and responsive' (am hiểu thông tin, dễ mến/thân thiện và nhanh nhẹn).",
    122: "💡 <b>Đáp án (B) instruct:</b> Sau trợ động từ 'will' cần động từ nguyên mẫu: 'instruct delivery drivers' (hướng dẫn các tài xế giao hàng vị trí dỡ hàng).",
    123: "💡 <b>Đáp án (A) Although:</b> Liên từ chỉ sự nhượng bộ 'Although' nối hai mệnh đề trái ngược: Mặc dù vé hòa nhạc vẫn còn, nhưng tất cả các chỗ ngồi đẹp nhất đều đã có người đặt.",
    124: "💡 <b>Đáp án (A) or:</b> Liên từ cảnh báo/hệ quả tiêu cực: 'park in the designated parking area or risk having...' (đỗ đúng khu vực quy định nếu không muốn có nguy cơ bị cẩu xe).",
    125: "💡 <b>Đáp án (B) intention:</b> Sau mạo từ 'the' cần danh từ làm chủ ngữ: 'the intention was to train her' (ý định ban đầu khi tuyển dụng là đào tạo cô ấy làm việc tại phòng thí nghiệm).",
    126: "💡 <b>Đáp án (C) favorable:</b> Cần tính từ đứng trước danh từ: 'A favorable effect' (Một tác động thuận lợi/tích cực của sự tăng trưởng du lịch).",
    127: "💡 <b>Đáp án (D) whenever:</b> Liên từ chỉ thời gian 'whenever' (bất cứ khi nào): hệ thống sẽ tự động gửi email cho nhân viên bất cứ khi nào người quản lý chỉnh sửa bảng chấm công.",
    128: "💡 <b>Đáp án (D) in case:</b> Liên từ chỉ mục đích phòng ngừa rủi ro 'in case' (phòng khi/trong trường hợp): thứ tự người phát biểu đã được thay đổi phòng khi ông Chen đến muộn.",
    129: "💡 <b>Đáp án (A) maximum:</b> Danh từ 'maximum' trong cụm 'up to a maximum of ten liters' (chứa tối đa lên tới 10 lít nhiên liệu).",
    130: "💡 <b>Đáp án (B) has been hosting:</b> Mốc thời gian 'Ever since... last May' (Kể từ tháng 5 năm ngoái đến nay) diễn tả hành động liên tục kéo dài đến hiện tại nên chia thì hiện tại hoàn thành tiếp diễn 'has been hosting'.",
    131: "💡 <b>Đáp án (C) laughter:</b> Danh từ 'laughter' (tiếng cười) đi liền với 'fun': chào đón quý khách đến để tận hưởng niềm vui và ngập tràn tiếng cười.",
    132: "💡 <b>Đáp án (A):</b> Câu nối tiếp gợi ý về các trò chơi board game: 'Or bring your own if you prefer' (Hoặc bạn có thể tự mang theo trò chơi yêu thích nếu muốn).",
    133: "💡 <b>Đáp án (D) as well as:</b> Cụm liên từ song hành 'as well as' (cũng như): thưởng thức trà, cà phê, sô-cô-la nóng cũng như các loại bánh ngọt thơm ngon.",
    134: "💡 <b>Đáp án (B) to relax:</b> Cấu trúc đi với danh từ opportunity: 'the perfect opportunity to do something' -> 'the perfect opportunity to relax and socialise' (cơ hội hoàn hảo để thư giãn và giao lưu).",
    135: "💡 <b>Đáp án (B) contract:</b> Danh từ 'contract' trong ngữ cảnh thuê nhà: 'renew your contract' (gia hạn hợp đồng thuê nhà sắp hết hạn vào ngày 31 tháng 3).",
    136: "💡 <b>Đáp án (A) I:</b> Cần đại từ nhân xưng 'I' làm chủ ngữ cho vế chính: Nếu quý khách không phản hồi email này, tôi sẽ mặc định hiểu là quý khách không muốn tiếp tục thuê.",
    137: "💡 <b>Đáp án (C) In that case:</b> Cụm trạng từ liên kết tình huống giả định: 'In that case' (Trong trường hợp đó, căn hộ sẽ được niêm yết cho khách mới thuê từ ngày 1 tháng 4).",
    138: "💡 <b>Đáp án (B):</b> Câu kết thư dịch vụ bất động sản lịch sự: 'Kanarak Realty is happy to help you however we can' (Chúng tôi luôn sẵn lòng hỗ trợ quý khách bằng mọi cách có thể).",
    139: "💡 <b>Đáp án (D) accommodation:</b> Cụm danh từ ghép 'accommodation options' mang nghĩa các phương án, lựa chọn về nơi lưu trú/khách sạn.",
    140: "💡 <b>Đáp án (B) can be:</b> Thể bị động với động từ khuyết thiếu: 'can be found along Devegas Beach' (hơn 20 khách sạn hạng sang có thể được tìm thấy dọc theo bãi biển Devegas).",
    141: "💡 <b>Đáp án (B) In addition:</b> Trạng từ liên kết bổ sung thông tin nơi ở: 'Ngoài ra, một loạt các nhà nghỉ nhỏ và căn hộ cho thuê ngắn hạn cũng nằm rải rác khắp khu vực'.",
    142: "💡 <b>Đáp án (C):</b> Câu dẫn dắt đoạn giới thiệu các khu cắm trại và nhà nghỉ giá rẻ: 'Travelers on a budget also have options' (Những du khách có ngân sách tiết kiệm cũng có nhiều lựa chọn).",
    143: "💡 <b>Đáp án (B) be notified:</b> Thể bị động ở thì tương lai đơn sau 'will': 'you will be notified by e-mail' (bạn sẽ được nhận thông báo qua thư điện tử).",
    144: "💡 <b>Đáp án (D) completion:</b> Sau giới từ 'Upon' cần một danh từ: 'Upon completion' (Ngay sau khi hoàn tất quy trình thu thập đầy đủ chữ ký).",
    145: "💡 <b>Đáp án (A):</b> Câu hướng dẫn sử dụng tiếp nối thông tin lưu trữ hồ sơ tài khoản: 'Đối với những ai cần tạo tài khoản, chỉ cần truy cập trang web của chúng tôi'.",
    146: "💡 <b>Đáp án (C) regarding:</b> Giới từ 'regarding' mang nghĩa liên quan đến (= about/concerning): 'For any questions regarding the signing process...' (Nếu có thắc mắc liên quan đến quá trình ký kết...).",
    147: "💡 <b>Đáp án (A):</b> Phiếu giảm giá ghi rõ: giảm $2.00 khi mua một hộp bánh quy Truli với mọi kích cỡ ('any size') -> Có nhiều quy cách kích cỡ khác nhau.",
    148: "💡 <b>Đáp án (B):</b> Điều kiện áp dụng trên phiếu là phải mua kèm 2 gói phô mai Truli ('when you buy any TWO packages of Truli cheese') -> Yêu cầu mua thêm sản phẩm khác.",
    149: "💡 <b>Đáp án (A):</b> Tin nhắn quy định tích 1 điểm cho mỗi đô-la chi tiêu tại các cửa hàng kem của hãng ('in one of our ice cream shops') -> Hãng có nhiều chi nhánh cửa hàng.",
    150: "💡 <b>Đáp án (B):</b> Dòng cuối tin nhắn thông báo: 'You have earned: 20 points' ngay sau câu cảm ơn đã đăng ký tham gia -> Nhận được 20 điểm nhờ việc tạo tài khoản thành viên.",
    151: "💡 <b>Đáp án (B):</b> Mục đích email là nhắc bệnh nhân đã bỏ lỡ buổi khám định kỳ và khuyên nên liên hệ phòng khám để đặt lại lịch hẹn khám mới (reschedule).",
    152: "💡 <b>Đáp án (A):</b> Email giải thích Bác sĩ Ramanathan mở thêm giờ khám trong tháng này vì ông ấy sẽ đi nghỉ phép vào tháng Hai ('will be on vacation in February') -> Sắp nghỉ phép.",
    153: "💡 <b>Đáp án (B):</b> Khi cô Ikeda hỏi còn ở văn phòng không, Anders trả lời 'I was just packing up' (Tôi đang chuẩn bị thu dọn đồ) ngụ ý anh vẫn còn ở văn phòng và chưa ra về.",
    154: "💡 <b>Đáp án (A):</b> Cô Ikeda nhắn: 'The custodian is out today, and I was supposed to do it. Unfortunately, I'm on a train...' -> Cô ấy đã quên chỉnh nhiệt độ điều hòa trước khi rời đi làm việc khác.",
    155: "💡 <b>Đáp án (C):</b> Trang web giới thiệu Qualitekk Research chuyên phân tích các kết quả khảo sát và lập các báo cáo chi tiết về sở thích của khách hàng cho các doanh nghiệp đối tác.",
    156: "💡 <b>Đáp án (D):</b> Đoạn 3 khuyến nghị các thành viên: 'If your interests change, simply update your profile' -> Cập nhật lại hồ sơ thành viên khi sở thích thay đổi.",
    157: "💡 <b>Đáp án (C):</b> Vị trí [3] nằm sau câu thông báo người tiêu dùng hoàn thành hơn 20.000 khảo sát mỗi ngày, nối tiếp tự nhiên bằng câu: 'Những con số này tiếp tục tăng trưởng mạnh mẽ khi thương mại điện tử gia tăng'.",
    158: "💡 <b>Đáp án (B):</b> Giám đốc Rhian Griffud gửi thông báo để cập nhật cho toàn thể nhân viên về việc hoàn thành dự án cải tạo lớn của nhà hát trước ngày mở cửa hoạt động trở lại.",
    159: "💡 <b>Đáp án (C):</b> Đoạn 2 nêu rõ điểm cải tạo nổi bật là quán Swansea Spotlight Bistro mới 'replaces our previous concession stand' (thay thế cho quầy bán đồ ăn vặt trước đây).",
    160: "💡 <b>Đáp án (A):</b> Thông báo ghi ngày 2 tháng 10 rạp sẽ tổ chức khai trương với 'a one-night musical showcase' (chương trình biểu diễn âm nhạc đặc biệt chỉ diễn ra trong đúng một đêm duy nhất).",
    161: "💡 <b>Đáp án (C):</b> Trang tin nội bộ giới thiệu Building Blocks là nhóm tình nguyện viên của chính nhân viên công ty Milos Tek nhằm cống hiến chuyên môn cho cộng đồng địa phương.",
    162: "💡 <b>Đáp án (C):</b> Hoạt động chính của nhóm là tổ chức các buổi hội thảo hướng dẫn kỹ năng quản lý, quan hệ công chúng, viết dự án miễn phí cho các tổ chức phi lợi nhuận (Presenting informational sessions).",
    163: "💡 <b>Đáp án (B):</b> Đoạn 2 nêu rõ tham gia nhóm này đòi hỏi nhiều thời gian hơn các nhóm khác, tình nguyện viên cần dành khoảng hai giờ mỗi tuần cho công tác chuẩn bị và giảng dạy.",
    164: "💡 <b>Đáp án (B):</b> Bài viết khắc họa chân dung, quá trình sự nghiệp và tầm nhìn chiến lược của bà Dana Loeb - nữ Tổng giám đốc điều hành mới của hãng xe Mehan Motors.",
    165: "💡 <b>Đáp án (D):</b> Đoạn 2 kể lại bà từng bước thăng tiến và lần đầu tiên lãnh đạo bộ phận xe điện (EV division) là tại hãng xe Tafts Motors ở Detroit.",
    166: "💡 <b>Đáp án (C):</b> Dòng xe điện cỡ nhỏ Radar do bà dẫn dắt sản xuất đạt cự ly di chuyển sau mỗi lần sạc cao hơn 20% so với đối thủ cạnh tranh gần nhất -> Thời lượng pin dùng lâu hơn.",
    167: "💡 <b>Đáp án (B):</b> Vị trí [2] đứng ngay sau câu nhắc đến bằng cử nhân kỹ thuật điện của bà tại Boston, rất hợp lý để bổ sung thông tin học vấn: 'Bà cũng đã đạt được chứng chỉ về quản trị doanh nghiệp'.",
    168: "💡 <b>Đáp án (C):</b> Mục đích quảng cáo là quảng bá cho sự kiện bán xe đạp đã qua sử dụng thường niên lần thứ 10 của cửa hàng ('Tenth Annual Sale of Secondhand Bicycles!').",
    169: "💡 <b>Đáp án (C):</b> Thông tin giờ mở cửa ghi rõ: 'Monday-Sunday 10 A.M.-6 P.M.' -> Cửa hàng mở cửa phục vụ 7 ngày trong tuần.",
    170: "💡 <b>Đáp án (C):</b> Quảng cáo nêu rõ dòng xe đạp cũ có đủ loại dành cho mọi lứa tuổi và mọi trình độ ('for all ages and abilities'), ngụ ý có cả xe dành cho trẻ em.",
    171: "💡 <b>Đáp án (D):</b> Bài viết có nêu các loại xe, tay nghề thợ sửa chữa, cách nhận ưu đãi 10%, hoàn toàn KHÔNG có thông tin bản đồ các tuyến đường đạp xe quanh khu vực London.",
    172: "💡 <b>Đáp án (A):</b> Anh Morton Talbert mở đầu cuộc thảo luận bằng câu hỏi thăm dò kinh nghiệm thực tế của mọi người trước khi quyết định chọn mua thiết bị kích sóng Internet.",
    173: "💡 <b>Đáp án (B):</b> Cô Laria Jones phàn nàn rằng cô đã dùng thử nhiều thiết bị kích sóng khác nhau ở tầng hầm nhưng không có hiệu quả và chỉ tốn tiền vô ích.",
    174: "💡 <b>Đáp án (D):</b> Câu 'That one is the best' của Chaya Leven ngụ ý cô vô cùng hài lòng với thiết bị Bam Booster 10 mà mình đang dùng ở nhà.",
    175: "💡 <b>Đáp án (D):</b> Danyelle Walken chia sẻ thiết bị kích sóng Zeertox cô đang dùng 'is somewhat big and unsightly' -> Thiết bị có kích thước khá to và thô kệch.",
    176: "💡 <b>Đáp án (B):</b> Tổng quản lý Ashley Nguyen gửi email để giao việc cho Mark Schroeder phụ trách toàn bộ kế hoạch đăng tuyển và tuyển dụng nhân viên mùa hè năm nay.",
    177: "💡 <b>Đáp án (D):</b> Bà Nguyen nhắn tuyển số lượng bằng năm ngoái nhưng 'this time, all four should be full-time', ngụ ý đợt tuyển dụng năm ngoái không phải tất cả đều làm toàn thời gian.",
    178: "💡 <b>Đáp án (C):</b> Tin tuyển dụng liệt kê các nhiệm vụ bán hàng, xếp kệ hàng, tư vấn khách và trưng bày đồ, KHÔNG nhắc đến nhiệm vụ bốc dỡ hàng hóa giao tới (Unloading deliveries).",
    179: "💡 <b>Đáp án (C):</b> Tin tuyển dụng ghi rõ các cuộc phỏng vấn diễn ra tại cửa hàng Gravel Road, và đây là chi nhánh do ông Schroeder làm cửa hàng trưởng và trực tiếp xây dựng nhân sự.",
    180: "💡 <b>Đáp án (A):</b> Cụm từ 'original Pelican Inlet store' mang nghĩa cửa hàng đầu tiên/gốc của thương hiệu tại Pelican Inlet -> 'original' đồng nghĩa với **first**.",
    181: "💡 <b>Đáp án (C):</b> Email thông báo trong cuối tháng 12 hãng sẽ tiếp nhận 6 chiếc máy bay Trak-4 đầu tiên và số còn lại sẽ được giao trong suốt năm tới -> Hãng sẽ nhận thêm máy bay mới.",
    182: "💡 <b>Đáp án (D):</b> Bài blog của Ken Ogawa nhận xét máy bay Trak-4 mới chỉ bố trí 2 ghế mỗi bên lối đi nên không ai phải ngồi ghế ở giữa, không như dòng máy bay cũ.",
    183: "💡 <b>Đáp án (C):</b> Email đề xuất mở các đường bay thẳng giữa các thành phố nhỏ để tránh phí sân bay đắt đỏ, và bài viết của Ogawa xác nhận hãng đã mở tuyến bay thẳng bỏ qua sân bay trung chuyển.",
    184: "💡 <b>Đáp án (B):</b> Ogawa bày tỏ sự vui mừng vì không còn phải vội vã chạy giữa các nhà ga đông đúc tại sân bay trung chuyển ('hurrying between terminals at Midwest through a sea of fellow passengers').",
    185: "💡 <b>Đáp án (A):</b> Ogawa nhận xét chỗ để chân hơi chật với vóc dáng của mình nhưng người có chiều cao trung bình thì ngồi rất thoải mái -> Ông là người có vóc dáng tương đối cao.",
    186: "💡 <b>Đáp án (B):</b> Mục đích thông báo của bảo tàng là báo trước cho khách tham quan biết khu trưng bày Gartner Wing đang tạm thời đóng cửa để chuẩn bị cho triển lãm mới.",
    187: "💡 <b>Đáp án (C):</b> Người quản lý Tae-Ho Mun nhắc trong email: 'Many of you have been on previous Renmark Solutions trips' -> Nhiều thực tập sinh đã từng tham gia các chuyến tham quan trước đây.",
    188: "💡 <b>Đáp án (C):</b> Lịch trình ghi rõ đoàn sẽ tham quan triển lãm 'The Power of Light' do giám tuyển Sachiko Morishita thiết kế theo tour tham quan riêng của nhóm.",
    189: "💡 <b>Đáp án (D):</b> Khung giờ đoàn tập trung tại phòng 203 là 1:45 - 2:00 P.M., đối chiếu bảng giờ chiếu thì phòng 203 lúc 1:45 P.M. có buổi chiếu phim ngắn của Viện Công nghệ FK.",
    190: "💡 <b>Đáp án (D):</b> Bảng giờ phòng 203 ghi lúc 2:45 P.M. có phần trình diễn giới thiệu sản phẩm của công ty Bigham Industries ('Product demonstrations by Bigham Industries').",
    191: "💡 <b>Đáp án (C):</b> Mẩu quảng cáo nêu máy bọc ô Protecto có chân đế di động nên có thể dễ dàng đẩy lăn đi khắp các khu vực khác nhau trong tòa nhà ('can be rolled around to different locations').",
    192: "💡 <b>Đáp án (A):</b> Bảng giá thể hiện túi ni lông thay thế được bán theo nhiều số lượng khác nhau trực tuyến: có hộp 1.000 túi (giá $35) và hộp 3.000 túi (giá $100).",
    193: "💡 <b>Đáp án (B):</b> Quảng cáo nêu khách mua máy trong tháng 11 sẽ được tặng một chiếc ô có logo công ty; bài đánh giá của ông Barr kể ông mua máy vào tháng 11, suy ra ông nhận được chiếc ô này.",
    194: "💡 <b>Đáp án (D):</b> Ông Barr đánh giá mẫu máy bọc có 2 đầu bằng thép không gỉ, đối chiếu bảng giá thì sản phẩm số 143 (máy 2 đầu, inox) có giá là 450 USD.",
    195: "💡 <b>Đáp án (B):</b> Ông Barr kể lại vấn đề trước đây tòa nhà từng đặt giá để ô lớn ở sảnh nhưng hầu như khách không chịu cất ô vào đó ('only a few people used it').",
    196: "💡 <b>Đáp án (A):</b> Trang tin tức công ty giới thiệu ông Steve Kogler là kỹ sư trưởng công trường mới được tuyển dụng ('Steve Kogler is our new chief site engineer').",
    197: "💡 <b>Đáp án (D):</b> Trang web hướng dẫn những người tìm việc truy cập vào trang tuyển dụng Jobs để xem các vị trí đang mở và nộp đơn trực tuyến ('Go to our Jobs page... to apply').",
    198: "💡 <b>Đáp án (C):</b> Thư của bà Rahija giải thích sự cố giao hàng trễ: một chiếc máy tại nhà máy sản xuất bị trục trặc kỹ thuật làm lỗi kính cửa sổ (Some equipment did not operate properly).",
    199: "💡 <b>Đáp án (A):</b> Kính cửa sổ được giao đến công trường phòng khám y tế, đối chiếu trang tin tức công ty thì phòng khám Willoughby Medical Clinic đang được xây dựng trên đường Grove Road.",
    200: "💡 <b>Đáp án (D):</b> Ông Makoare tuyên bố sẽ giữ lại số tiền thanh toán còn lại cho đến khi nhận đủ hàng, và bà Rahija hứa giao đủ hàng vào ngày 20/8, chứng tỏ ông sẽ sớm thanh toán đầy đủ cho nhà cung cấp."
};