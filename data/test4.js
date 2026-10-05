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

// 1. DÀN KEY 200 CÂU TEST 4 (ĐÃ SỬA CHUẨN PART 2 THEO AUDIO VÀ ĐỀ READING)
window.TOEIC_KEYS[4] = parseKey("1A 2B 3D 4C 5A 6C 7C 8C 9C 10B 11C 12A 13A 14B 15C 16A 17A 18B 19A 20C 21B 22A 23B 24C 25B 26A 27A 28A 29B 30C 31B 32C 33B 34D 35A 36C 37B 38C 39D 40B 41C 42A 43D 44B 45C 46D 47B 48D 49A 50B 51A 52C 53D 54B 55C 56C 57D 58D 59A 60D 61C 62B 63C 64A 65C 66B 67A 68C 69B 70C 71C 72A 73C 74B 75C 76D 77D 78C 79D 80B 81C 82D 83A 84D 85A 86B 87B 88D 89D 90D 91B 92C 93B 94B 95C 96B 97B 98D 99A 100D 101D 102B 103B 104C 105B 106A 107B 108A 109B 110C 111B 112A 113B 114A 115C 116D 117A 118A 119B 120A 121C 122D 123D 124A 125C 126D 127C 128C 129A 130D 131C 132B 133D 134A 135A 136A 137D 138B 139A 140C 141D 142B 143B 144A 145C 146D 147A 148D 149B 150D 151A 152D 153B 154D 155B 156B 157C 158B 159D 160C 161A 162B 163C 164C 165B 166D 167A 168A 169B 170B 171D 172A 173B 174D 175A 176C 177D 178D 179C 180A 181B 182A 183C 184C 185B 186B 187A 188B 189D 190C 191C 192B 193B 194A 195D 196A 197D 198C 199A 200A");

// 2. FULL TRANSCRIPT LISTENING TEST 4 (ĐÃ TÔ HỒNG ĐÚNG ĐÁP ÁN PART 2)
window.TOEIC_SCRIPTS[4] = `
  <h3>PART 1: PHOTOGRAPHS (Câu 1 - 6)</h3>
  <div class="script-question">
    <span class="script-speaker">1. M-Cn</span>
    <div class="script-opt correct-pink">(A) She's crossing a busy street.</div>
    <div class="script-opt">(B) She's removing her eyeglasses.</div>
    <div class="script-opt">(C) She's standing next to a bin.</div>
    <div class="script-opt">(D) She's getting into a taxi cab.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">2. W-Br</span>
    <div class="script-opt">(A) Some trucks have stopped at a traffic signal.</div>
    <div class="script-opt correct-pink">(B) Some lights are being installed above a garage door.</div>
    <div class="script-opt">(C) A garden is being planted along a fence.</div>
    <div class="script-opt">(D) Several vehicles are parked outside a building.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">3. M-Cn</span>
    <div class="script-opt">(A) A woman is following a man down a corridor.</div>
    <div class="script-opt">(B) A woman is putting together some cardboard boxes.</div>
    <div class="script-opt">(C) A man is emptying a large container.</div>
    <div class="script-opt correct-pink">(D) A man is climbing up a ladder.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">4. M-Au</span>
    <div class="script-opt">(A) He's clearing some snow off a path.</div>
    <div class="script-opt">(B) He's pulling a cart on a walkway.</div>
    <div class="script-opt correct-pink">(C) He's leaning over to tie his shoe.</div>
    <div class="script-opt">(D) He's taking some items out of a basket.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">5. W-Br</span>
    <div class="script-opt correct-pink">(A) One of the women is carrying a bag on her shoulder.</div>
    <div class="script-opt">(B) One of the women is placing her luggage on a scale.</div>
    <div class="script-opt">(C) Some suitcases have been lined up against the wall.</div>
    <div class="script-opt">(D) Some clothes are being packed in a bag.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">6. W-Am</span>
    <div class="script-opt">(A) Some customers are drinking from coffee cups.</div>
    <div class="script-opt">(B) Some coffee cups have been placed on a counter.</div>
    <div class="script-opt correct-pink">(C) Some aprons are hanging from hooks.</div>
    <div class="script-opt">(D) One of the workers is wiping down a counter.</div>
  </div>

  <h3>PART 2: QUESTION-RESPONSE (Câu 7 - 31)</h3>
  <div class="script-question">
    <span class="script-speaker">7. M-Au: Will you let me know when the catering order arrives?</span>
    <div class="script-opt">(A) A reservation for two.</div>
    <div class="script-opt">(B) The front office.</div>
    <div class="script-opt correct-pink">(C) Sure, I'll text you.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">8. W-Am: Why is the manager being replaced?</span>
    <div class="script-opt">(A) Let's do that.</div>
    <div class="script-opt">(B) I prefer working with a team.</div>
    <div class="script-opt correct-pink">(C) Because she's leaving the company.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">9. W-Br: Ms. Cho should close the store early on Friday.</span>
    <div class="script-opt">(A) I prefer a salad.</div>
    <div class="script-opt">(B) Cash register four.</div>
    <div class="script-opt correct-pink">(C) Yes, I agree.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">10. W-Am: Why did you decide to become a pilot?</span>
    <div class="script-opt">(A) Is there free Internet access?</div>
    <div class="script-opt correct-pink">(B) I enjoy traveling.</div>
    <div class="script-opt">(C) He's on vacation in Argentina.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">11. M-Cn: Have you always commuted by train?</span>
    <div class="script-opt">(A) The training starts at two o'clock.</div>
    <div class="script-opt">(B) I think the station is on Mulberry Avenue.</div>
    <div class="script-opt correct-pink">(C) Yes, because I don't have a car.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">12. W-Am: When does your manager usually come in?</span>
    <div class="script-opt correct-pink">(A) Early in the morning.</div>
    <div class="script-opt">(B) No, I just left it there.</div>
    <div class="script-opt">(C) I haven't, thanks.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">13. W-Br: Isn't there a discount on this computer monitor?</span>
    <div class="script-opt correct-pink">(A) Yes, a ten percent discount.</div>
    <div class="script-opt">(B) An inventory check.</div>
    <div class="script-opt">(C) Mine is broken.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">14. W-Am: How is the new group of interns doing?</span>
    <div class="script-opt">(A) No, we have five people in total.</div>
    <div class="script-opt correct-pink">(B) I haven't heard any negative feedback at all.</div>
    <div class="script-opt">(C) Let's pose for a group photo over there.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">15. W-Br: They're carrying those boxes to the storage room.</span>
    <div class="script-opt">(A) That's a good price.</div>
    <div class="script-opt">(B) No, the store opens at noon today.</div>
    <div class="script-opt correct-pink">(C) I'll go with them.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">16. M-Au: Where can I send the money?</span>
    <div class="script-opt correct-pink">(A) To my bank account.</div>
    <div class="script-opt">(B) I think that's expensive too.</div>
    <div class="script-opt">(C) By next Tuesday.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">17. M-Au: Who's coming in tomorrow to help us prepare for the grand opening?</span>
    <div class="script-opt correct-pink">(A) Rebecca and Malik.</div>
    <div class="script-opt">(B) An online job posting.</div>
    <div class="script-opt">(C) Some sales data.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">18. W-Am: How often does the bus stop at this location?</span>
    <div class="script-opt">(A) I'll be visiting the office.</div>
    <div class="script-opt correct-pink">(B) About every twenty minutes.</div>
    <div class="script-opt">(C) A city council meeting.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">19. W-Am: What's the candidate review process?</span>
    <div class="script-opt correct-pink">(A) We review the résumés first.</div>
    <div class="script-opt">(B) A few good reviews.</div>
    <div class="script-opt">(C) OK, I'll just follow them.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">20. W-Am: There's coffee in the break room, right?</span>
    <div class="script-opt">(A) That shift starts at noon.</div>
    <div class="script-opt">(B) We decided to paint this room gray.</div>
    <div class="script-opt correct-pink">(C) Yes, I just made a fresh pot.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">21. M-Au: Who's going to the company picnic today?</span>
    <div class="script-opt">(A) About two hours long.</div>
    <div class="script-opt correct-pink">(B) I'm leaving in a few minutes.</div>
    <div class="script-opt">(C) A two-year maintenance contract.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">22. W-Br: Will the bakery be open tomorrow?</span>
    <div class="script-opt correct-pink">(A) No, it's closed until mid-August.</div>
    <div class="script-opt">(B) Have you checked the oven?</div>
    <div class="script-opt">(C) The pound cake is delicious.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">23. M-Cn: Are you installing the new software on Monday or Tuesday?</span>
    <div class="script-opt">(A) Thanks, but they already have one.</div>
    <div class="script-opt correct-pink">(B) I'll be out of the office all week.</div>
    <div class="script-opt">(C) It was an older model laptop.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">24. M-Cn: Let me find a sales associate to help you.</span>
    <div class="script-opt">(A) At the top of the list.</div>
    <div class="script-opt">(B) My article is ready to be uploaded.</div>
    <div class="script-opt correct-pink">(C) I just found what I'm looking for.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">25. M-Au: You're offering discounts to students, right?</span>
    <div class="script-opt">(A) No, that's not my wallet.</div>
    <div class="script-opt correct-pink">(B) You'll need valid identification.</div>
    <div class="script-opt">(C) I'm doing inventory this weekend.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">26. W-Br: The sales department posted an advertisement for an assistant.</span>
    <div class="script-opt correct-pink">(A) I didn't know they were hiring.</div>
    <div class="script-opt">(B) An additional charge for shipping.</div>
    <div class="script-opt">(C) No, I haven't been there.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">27. W-Br: Does the new accounting software work well?</span>
    <div class="script-opt correct-pink">(A) I haven't downloaded it yet.</div>
    <div class="script-opt">(B) We're not offering a discount.</div>
    <div class="script-opt">(C) That was my reaction too.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">28. W-Am: When's the finance department going to confirm our first-quarter budget?</span>
    <div class="script-opt correct-pink">(A) Their deadline is next week.</div>
    <div class="script-opt">(B) Yes, I'll be there.</div>
    <div class="script-opt">(C) In the mail room.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">29. M-Cn: Who canceled the conference call?</span>
    <div class="script-opt">(A) The upstairs conference room.</div>
    <div class="script-opt correct-pink">(B) It's been rescheduled.</div>
    <div class="script-opt">(C) Yes, you can.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">30. M-Au: Can you please transfer the service to my new phone?</span>
    <div class="script-opt">(A) Let's put it in the back seat.</div>
    <div class="script-opt">(B) At the Maple Street Station.</div>
    <div class="script-opt correct-pink">(C) There is a processing fee.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">31. W-Br: How was today's manufacturing seminar?</span>
    <div class="script-opt">(A) A new pair of shoes.</div>
    <div class="script-opt correct-pink">(B) We didn't get there in time.</div>
    <div class="script-opt">(C) There's a user's manual in the drawer.</div>
  </div>

  <h3>PART 3: CONVERSATIONS (Câu 32 - 70)</h3>
  <div class="script-dialogue">
    <b>[Questions 32 - 34]</b><br>
    <b>W-Am:</b> Good morning, thanks for coming to <span class="correct-pink">[32] tour this apartment building</span>.<br>
    <b>M-Au:</b> I'm glad I could visit in person. I've always wanted to live in this neighborhood. It's so beautiful. <span class="correct-pink">[33] This building is brand new, isn't it?</span><br>
    <b>W-Am:</b> Yes. In fact, you'd be among the very first tenants if you decide to move here. Before you look at some apartments, <span class="correct-pink">[34] would you please sign your name here in our guest book?</span><br>
    <b>M-Au:</b> Oh, of course.
  </div>

  <div class="script-dialogue">
    <b>[Questions 35 - 37]</b><br>
    <b>W-Am:</b> Chen, I hope all is going well on your first day. I saw you have some scheduled <span class="correct-pink">[35] seafood deliveries</span> across the bay in the Morgan District. Why haven't you left yet?<br>
    <b>M-Cn:</b> I wasn't going to head over to that particular area for another hour. Do the restaurants in the Morgan District want their deliveries earlier than scheduled?<br>
    <b>W-Am:</b> No, but <span class="correct-pink">[36] I'm concerned about Bay Bridge traffic</span>. It's routinely congested with vehicles, so you should always add at least an extra hour to your trip out there.<br>
    <b>M-Cn:</b> Thanks for the tip. <span class="correct-pink">[37] I'll also check traffic webcams</span> on the highway agency's Web site.
  </div>

  <div class="script-dialogue">
    <b>[Questions 38 - 40]</b><br>
    <b>M-Au:</b> This morning I got an email from Pelican, a local producer of beauty products. They're interested in purchasing lanolin from us to use in their <span class="correct-pink">[38] new line of all-natural makeup</span>.<br>
    <b>W-Br:</b> I'm not sure about that. We're a fairly small farm, and we already sell lanolin to another local business. <span class="correct-pink">[39] I'm worried that we don't produce enough lanolin to meet the demand</span> of another client. I don't want to expand and take on more wool production.<br>
    <b>M-Au:</b> But our contract with the business we currently supply lanolin to has almost expired. There's no guarantee it will be renewed. <span class="correct-pink">[40] I think you should at least read Pelican's proposal</span>.<br>
    <b>W-Br:</b> Sure. Can you forward me the email?
  </div>

  <div class="script-dialogue">
    <b>[Questions 41 - 43]</b><br>
    <b>M-Cn:</b> Nesreen, this is Lewis. I heard <span class="correct-pink">[41] you're going to be working for our company overseas in the New Zealand office</span>. What a great opportunity!<br>
    <b>W-Am:</b> Yes, thank you. I start next month, and I'm really excited.<br>
    <b>M-Cn:</b> I'm calling to touch base with you about some of our vendor contracts. It's time to renew the contracts, and <span class="correct-pink">[42] I wanted to ask you to take care of that before you left</span>.<br>
    <b>W-Am:</b> No problem. I know where those files are located on our shared computer drive. <span class="correct-pink">[43] I'll just need the password to access them</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 44 - 46]</b><br>
    <b>W-Br:</b> Hi, this is Giovanni Marino's agent. <span class="correct-pink">[44] I'm calling to reschedule his planned appearance on the Sunday morning show</span>.<br>
    <b>M-Cn:</b> Right. We have him booked to appear on the show in July to <span class="correct-pink">[45] promote his new movie</span>.<br>
    <b>W-Br:</b> Unfortunately, the movie he's acting in is behind schedule, and he'll now be on location through the end of August.<br>
    <b>M-Cn:</b> Hmm, I see. Let me look at our guest calendar. I have a slot I'm looking to fill on September 14. Would that work?<br>
    <b>W-Br:</b> Yes, that would be great. Thanks.<br>
    <b>M-Cn:</b> All right. <span class="correct-pink">[46] I'll update the contract with the new date and email it to you</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 47 - 49]</b><br>
    <b>M1:</b> Hello, Usha. Hi, Pablo.<br>
    <b>W-Br:</b> Hey, Constantine. <span class="correct-pink">[47] We're talking about our thoughts on the new company policy for remote workers</span>. On the days I have to come into the office, I always worry about finding an appropriate workstation.<br>
    <b>M2:</b> Yeah, I don't like the unpredictability either. Why can't we just sign up for our workstations sometime in advance? What do you think about it?<br>
    <b>M1:</b> These are good points. <span class="correct-pink">[48] Let's all go to the director to discuss this with her</span>.<br>
    <b>M2:</b> I believe she's in her office, so now's a good time.<br>
    <b>W-Br:</b> Oh, I can't go now. <span class="correct-pink">[49] I have a report to finalize by noon</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 50 - 52]</b><br>
    <b>W-Br:</b> OK, Mr. Gibran, <span class="correct-pink">[50] here's your new library card</span>. Remember that you can borrow books, CDs, and DVDs from our collection with it.<br>
    <b>M-Cn:</b> Thank you. I read somewhere that people can also borrow digital items?<br>
    <b>W-Br:</b> Yes, we offer the Cloud Camel application. <span class="correct-pink">[51] All you have to do is download the app and use the information on your card</span> to set up an account.<br>
    <b>M-Cn:</b> That's great! <span class="correct-pink">[52] I go on a business trip every month</span>, so having easy access to online content will be convenient.
  </div>

  <div class="script-dialogue">
    <b>[Questions 53 - 55]</b><br>
    <b>W-Am:</b> Have you reviewed the data from <span class="correct-pink">[53] the workplace survey</span>? You really should. It looks like most staff feel positive about the direction that the company is going in. But almost 40% feel like their individual contributions aren't being recognized.<br>
    <b>M-Cn:</b> Well, <span class="correct-pink">[54] the company's certainly had other priorities</span>. I wonder how the management team's going to respond.<br>
    <b>W-Am:</b> <span class="correct-pink">[55] I've suggested many times that they give out awards every quarter for exceptional performance</span>. Maybe now they'll finally start doing it.
  </div>

  <div class="script-dialogue">
    <b>[Questions 56 - 58]</b><br>
    <b>W1:</b> Hi, Agiola. As I mentioned on the phone, my colleague and I recently started <span class="correct-pink">[56] a clothing company</span>, and are hoping your branding firm can help us promote our line of athletic apparel. You think we should focus on advertising on social media, right?<br>
    <b>M-Au:</b> Right. Contrary to popular belief, <span class="correct-pink">[57] television is definitely not the entire advertising landscape</span>. Advertising on the Internet is also a great way for a company to increase its visibility.<br>
    <b>W2:</b> I heard you recommended working with an online influencer.<br>
    <b>M-Au:</b> Yes, Saskia Hoffman. Saskia is very knowledgeable about exercise, and <span class="correct-pink">[58] lots of people use her online exercise routines</span>. Her viewers will pay attention to what she recommends and wears.
  </div>

  <div class="script-dialogue">
    <b>[Questions 59 - 61]</b><br>
    <b>W-Br:</b> Hi, Shinji. I wanted to ask you about the order we got from the department store chain. You know, the one that placed an order for 5,000 <span class="correct-pink">[59] jigsaw puzzles</span>?<br>
    <b>M-Au:</b> Yes, they want the order in a week so they can stock them before the holiday.<br>
    <b>W-Br:</b> <span class="correct-pink">[60] A week is not a long time</span>.<br>
    <b>M-Au:</b> We've had short timelines before. Anyway, our illustrators sent some new puzzle illustrations, right? I heard they're making a special edition.<br>
    <b>W-Br:</b> Yes, and I'm so excited! <span class="correct-pink">[61] I've got the sketches right here. Let me show you</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 62 - 64]</b><br>
    <b>M-Au:</b> Hi, Ms. Rossi. I understand you're concerned about a charge that appears on <span class="correct-pink">[62] the statement for your business account</span>.<br>
    <b>W-Am:</b> Yes, I have a question about the charge on May 3. I don't remember purchasing anything for that amount.<br>
    <b>M-Au:</b> Let me review your statement now. Hmm, it looks like that purchase was made abroad, so an international transaction fee was added to the purchase amount.<br>
    <b>W-Am:</b> Oh, yes, I was out of the country at that time. Thanks for clarifying. Can you provide me with a list of all the bank fees for transactions made abroad?<br>
    <b>M-Au:</b> Yes, of course. <span class="correct-pink">[64] Here's a document that lists all the information</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 65 - 67]</b><br>
    <b>M-Cn:</b> Magali, were you able to <span class="correct-pink">[65] reserve the performing arts center for the piano concert</span>?<br>
    <b>W-Am:</b> Yes, I booked their main auditorium for that day. They're sending me the contract.<br>
    <b>M-Cn:</b> Thanks for doing that.<br>
    <b>W-Am:</b> No problem. Hopefully, it'll be as successful as last year.<br>
    <b>M-Cn:</b> We sold 2,000 tickets last year, but we had three celebrity performers. <span class="correct-pink">[66] I'm worried we won't sell as many tickets this year</span>.<br>
    <b>W-Am:</b> Well, Shin Yugu is a very popular pianist, and she's staying after the concert to sign autographs. Which reminds me: where should we set up the table for that?<br>
    <b>M-Cn:</b> Good question. Hmm, the café should be closed by then. <span class="correct-pink">[67] Let's set it up next to the café</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 68 - 70]</b><br>
    <b>M-Au:</b> Welcome to the garden center. Can I help you?<br>
    <b>W-Br:</b> Hi, <span class="correct-pink">[68] I've started growing rose bushes</span>, and I've heard they require special care. Are there any products you can recommend?<br>
    <b>M-Au:</b> Yes, but first, I'd like to show you a great resource on our Web site. Have you seen our blog?<br>
    <b>W-Br:</b> No, I haven't.<br>
    <b>M-Au:</b> We have monthly posts on many gardening topics, and there's a recent one about growing roses.<br>
    <b>W-Br:</b> I'll check it out. Thanks so much.<br>
    <b>M-Au:</b> You're welcome. Now, <span class="correct-pink">[70] let me show you our fertilizers. They're in aisle six</span>.
  </div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>
  <div class="script-dialogue">
    <b>[Questions 71 - 73]</b><br>
    <b>W-Br:</b> Attention, Casella <span class="correct-pink">[71] Transit</span> customers. Maintenance work on the Red and Yellow Lines will begin next week. You can expect some disruptions to regular service, so please plan ahead. Use the latest version of our mobile phone application for real-time updates. <span class="correct-pink">[72] You can receive notifications regarding delays if your train is impacted</span>. Want to save on commuter rides? <span class="correct-pink">[73] Purchase your e-ticket through the mobile app</span> as well. Printing a ticket at a kiosk is now subject to additional fees.
  </div>

  <div class="script-dialogue">
    <b>[Questions 74 - 76]</b><br>
    <b>W-Am:</b> Good morning, Glenman House Living Museum staff. Recently, researchers discovered the original plans for the house's gardens from the eighteenth century. So, <span class="correct-pink">[74] we're going to restore the gardens based on those plans</span>. Even though we have the original designs, making an authentic recreation won't be an easy task. <span class="correct-pink">[75] We don't know what specific varieties of plants were grown back then</span>. That's why we're so lucky to have <span class="correct-pink">[76] Vivek Hazarika consulting on this project</span>. As a gardener who has managed the grounds of many historic estates, he has extensive expertise in what would have been planted at the time.
  </div>

  <div class="script-dialogue">
    <b>[Questions 77 - 79]</b><br>
    <b>M-Cn:</b> Welcome, new sales representatives, to today's session on cold calling, <span class="correct-pink">[77] a sales technique where we call potential clients who haven't heard of us yet</span>. Toward the end of the session, <span class="correct-pink">[78] you'll each be given a list of prospective parties to call</span>. Now, the people you're contacting are busy and may not be receptive. Your job's to persuade them that what you have to say is worth their while. Be friendly and avoid using scripts. Now, <span class="correct-pink">[79] we'll listen to some cold call recordings</span> to learn what works and what doesn't.
  </div>

  <div class="script-dialogue">
    <b>[Questions 80 - 82]</b><br>
    <b>M-Au:</b> Ms. Stewart, this is Rodrigo Gomez, president of Gomez and Sons. I want to apologize personally for the problems your restaurant experienced using our <span class="correct-pink">[80] patio umbrellas</span>. At our company, we pride ourselves on doing everything in-house, from graphic design to production. This gives us greater control over the quality of our products. But <span class="correct-pink">[81] we do use outside suppliers for parts</span>. Apparently, we received some inferior metal components. <span class="correct-pink">[82] We will send you a replacement set of umbrellas at no cost today</span>, constructed with new metal parts.
  </div>

  <div class="script-dialogue">
    <b>[Questions 83 - 85]</b><br>
    <b>W-Br:</b> TempTime Work Solutions has hundreds of qualified temporary workers available to meet any of your staffing needs. Please call us to help your business fill open positions. We are the largest <span class="correct-pink">[83] temp agency</span> in the region <span class="correct-pink">[84] with branch offices in six locations</span>. Let TempTime help you find the right person to complete just about any job. Call us at 555-0145, and <span class="correct-pink">[85] mention this ad to get a twenty percent discount</span> off our fee.
  </div>

  <div class="script-dialogue">
    <b>[Questions 86 - 88]</b><br>
    <b>M-Au:</b> I've just received details about this year's hospitality conference. It looks like it'll be particularly informative this year. It'll be held at the end of the month. Now, I know I've set your project due dates for the end of the month as well, but <span class="correct-pink">[86] this is an important opportunity</span>. The conference will feature an expo of vendors who serve hotel chains, which could be useful given that <span class="correct-pink">[87] we'll be opening hotels in two new cities next year</span>. Speaking of which, <span class="correct-pink">[88] Thilo visited both of those construction sites last week, and is now going to give us a progress report</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 89 - 91]</b><br>
    <b>W-Am:</b> Welcome to the annual Soundtrack Music Award Show. <span class="correct-pink">[89] This year we're streaming this event live over the Internet for the very first time</span>. Tonight's honoree, <span class="correct-pink">[90] Olga Alabi, founded the EyeBeat music label</span> in 1996. She has worked tirelessly to bring original soundtrack music to film audiences around the world. Over the years, she has been responsible for discovering and developing some of today's leading composers. In fact, after Ms. Alabi receives her award, <span class="correct-pink">[91] some of her most famous clients will perform for us</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 92 - 94]</b><br>
    <b>M-Cn:</b> OK, team, let's discuss our first-quarter sales figures. Unfortunately, <span class="correct-pink">[92] retail sales of our smartwatches</span> and other products have continued to fall. Our president has proposed expanding the product line to include a virtual reality headset, and <span class="correct-pink">[93] those have been popular lately</span>. You can expect a lot more information at a future meeting. Next on the agenda, <span class="correct-pink">[94] Raya will be demonstrating the new software we'll be using</span> to track consumer purchasing trends.
  </div>

  <div class="script-dialogue">
    <b>[Questions 95 - 97]</b><br>
    <b>M-Au:</b> Please follow me, and we'll begin today's tour. Now, I know not everyone who takes this all-access tour is <span class="correct-pink">[95] a football fan</span>. Many of our visitors are just curious about how a modern sports facility of this size operates. Well, you'll get to see that and much more. And fortunately for us, <span class="correct-pink">[96] today's forecast shows a mix of sun and clouds with no rain</span>. That's just the right combination for spending some time outside on the field comfortably. Also, as a heads-up, <span class="correct-pink">[97] a shuttle bus will meet us at the end of the tour to bring us all back to the parking lot</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 98 - 100]</b><br>
    <b>W-Br:</b> As you all know, we're hosting a large event tonight. It's <span class="correct-pink">[98] a dinner party to celebrate the retirement of a long-time employee</span> of Jalton Incorporated. The chefs are already prepping dinner, and I need you all to set up the ballroom. Here's the assignment list. There's just one change: <span class="correct-pink">[99] Amanda couldn't make it, so Kota's covering for her and will take Amanda's assignment</span>. Now, <span class="correct-pink">[100] I have a meeting with a potential client at noon</span>, but otherwise I'll be available all day if anything comes up.
  </div>
`;

// 3. GIẢI THÍCH CHI TIẾT READING (CÂU 101 - 200) TEST 4
window.TOEIC_EXPLANATIONS[4] = {
    101: "💡 <b>Đáp án (D) she:</b> Cần đại từ nhân xưng chủ ngữ 'she' đứng trước to-be 'is' trong mệnh đề danh từ 'that she is planning to retire'.",
    102: "💡 <b>Đáp án (B) before:</b> Giới từ chỉ thời gian 'before the holiday' mang nghĩa trước kỳ nghỉ lễ.",
    103: "💡 <b>Đáp án (B) provide:</b> Sau động từ khuyết thiếu 'may' cần động từ nguyên mẫu không 'to': 'may provide a buyer with...'.",
    104: "💡 <b>Đáp án (C) location:</b> Danh từ 'location' phù hợp ngữ cảnh: tìm kiếm một địa điểm phù hợp để làm vườn cộng đồng.",
    105: "💡 <b>Đáp án (B) satisfactory:</b> Cần tính từ đứng trước danh từ 'manner': 'in a satisfactory manner' (theo một cách thức thỏa đáng/hài lòng).",
    106: "💡 <b>Đáp án (A) previously:</b> Trạng từ 'previously' (trước đây/trước đó) bổ nghĩa cho phân từ 'held' (vị trí trước đây từng do cô Akello đảm nhiệm).",
    107: "💡 <b>Đáp án (B) receives:</b> Trong mệnh đề chỉ thời gian bắt đầu bằng liên từ 'Once' (ngay khi), động từ chia ở thì hiện tại đơn để diễn tả hành động trong tương lai.",
    108: "💡 <b>Đáp án (A) enough:</b> Cấu trúc 'enough to do something': 'just enough to approve the proposal' (vừa đủ số lượng để thông qua bản đề xuất).",
    109: "💡 <b>Đáp án (B) delivery:</b> Cụm diễn đạt cố định 'make a delivery' (đi giao hàng cho khách).",
    110: "💡 <b>Đáp án (C) rescheduled:</b> Thể bị động 'has been rescheduled to' (cuộc chạy đua đã được dời lịch sang ngày 31 tháng 8 vì thời tiết xấu).",
    111: "💡 <b>Đáp án (B) both:</b> Cặp liên từ tương quan 'both... and...' (ở cả dạng viên nén và dạng chất lỏng).",
    112: "💡 <b>Đáp án (A) so that:</b> Liên từ chỉ mục đích 'so that' theo sau bởi một mệnh đề: để các áp phích có thể được dán lên trước đêm tiệc gala.",
    113: "💡 <b>Đáp án (B) personally:</b> Trạng từ 'personally' (về phương diện cá nhân) đứng trước động từ 'disliked' để bổ nghĩa.",
    114: "💡 <b>Đáp án (A) After:</b> Giới từ chỉ thời gian 'After weeks of record-setting rain' (Sau nhiều tuần mưa ngập kỷ lục, cuối tuần này sẽ có nắng).",
    115: "💡 <b>Đáp án (C) to ensure:</b> Dùng To-infinitive 'to ensure' chỉ mục đích (để đảm bảo sự thăng bằng vững chắc trên bề mặt gồ ghề).",
    116: "💡 <b>Đáp án (D) response:</b> Cụm danh từ 'expect a response' (có thể kỳ vọng nhận được một phản hồi trong vòng 3 ngày làm việc).",
    117: "💡 <b>Đáp án (A) Whoever:</b> Đại từ quan hệ 'Whoever' (= Anyone who) làm chủ ngữ cho mệnh đề danh từ 'Whoever prepares the patient's medical records'.",
    118: "💡 <b>Đáp án (A) significantly:</b> Trạng từ 'significantly' (một cách đáng kể) bổ nghĩa cho động từ dạng bị động 'was expanded'.",
    119: "💡 <b>Đáp án (B) sustainable:</b> Cần tính từ đứng trước danh từ: 'sustainable architecture' (kiến trúc bền vững/thân thiện với môi trường).",
    120: "💡 <b>Đáp án (A) experiencing:</b> Cụm 'experiencing problems with' (đang gặp/trải qua các sự cố hỏng hóc với máy điều nhiệt).",
    121: "💡 <b>Đáp án (C) collaboratively:</b> Cần trạng từ 'collaboratively' (một cách phối hợp/hợp tác) đứng sau bổ nghĩa cho động từ 'worked'.",
    122: "💡 <b>Đáp án (D) exact:</b> Cần tính từ đứng trước danh từ: 'exact colors' (màu sắc chuẩn xác của tác phẩm nghệ thuật).",
    123: "💡 <b>Đáp án (D) inquiries:</b> Sau dạng sở hữu cách 'customers'' cần một danh từ: 'customers' inquiries' (những câu hỏi/thắc mắc của khách hàng).",
    124: "💡 <b>Đáp án (A) regrettably:</b> Trạng từ 'regrettably' (đáng tiếc thay) đứng đầu mệnh đề diễn tả sự việc ngoài ý muốn: đáng tiếc là chúng tôi bận vào ngày hôm đó.",
    125: "💡 <b>Đáp án (C) following:</b> Giới từ 'following' mang nghĩa là sau khi (= after): trà và bánh quy sẽ được phục vụ sau cuộc họp.",
    126: "💡 <b>Đáp án (D) option:</b> Cụm danh từ cố định 'have the option of doing something' (có quyền/sự lựa chọn làm việc tại nhà hai ngày mỗi tuần).",
    127: "💡 <b>Đáp án (C) preferred:</b> Dùng quá khứ phân từ làm tính từ mang nghĩa bị động: 'preferred process' (quy trình mua sắm trang thiết bị được ưu tiên áp dụng).",
    128: "💡 <b>Đáp án (C) pertaining:</b> Rút gọn mệnh đề quan hệ chủ động sang dạng V-ing: 'documents pertaining to' (các tài liệu liên quan mật thiết đến thương vụ sáp nhập).",
    129: "💡 <b>Đáp án (A) affiliation:</b> Sau tính từ 'new' cần danh từ số ít 'affiliation' (mối quan hệ liên kết/hợp tác mới với Trường Điều dưỡng Friel).",
    130: "💡 <b>Đáp án (D) as well as:</b> Cụm liên từ song hành 'as well as' nối hai động từ nguyên mẫu: 'scan purchased items... as well as field questions'.",
    131: "💡 <b>Đáp án (C) has launched:</b> Thì hiện tại hoàn thành diễn tả việc đầu bếp vừa mới khai trương nhà hàng đầu tiên của mình gần đây.",
    132: "💡 <b>Đáp án (D) which:</b> Đại từ quan hệ 'which' thay thế cho danh từ riêng chỉ vật 'Plantains' làm chủ ngữ cho mệnh đề quan hệ không xác định có dấu phẩy.",
    133: "💡 <b>Đáp án (D):</b> Câu nối tiếp thông tin ông từng đoạt giải nhất cuộc thi truyền hình ẩm thực: 'He was thrilled to win that competition'.",
    134: "💡 <b>Đáp án (A) food:</b> Khách hàng khen đồ ăn là 'some of the best I've ever eaten' nên câu trước phù hợp nhất là sự hào hứng dành cho 'món ăn' (the food).",
    135: "💡 <b>Đáp án (C) participating:</b> Hiện tại phân từ 'participating' đóng vai trò tính từ: 'participating store' (cửa hàng có tham gia vào chương trình ưu đãi gửi xe).",
    136: "💡 <b>Đáp án (A) any:</b> Đại từ 'any' đi với danh từ số nhiều sau 'of': 'any of these establishments' (bất kỳ cơ sở kinh doanh nào trong số này).",
    137: "💡 <b>Đáp án (D):</b> Câu hướng dẫn thao tác chứng thực vé xe: 'A cashier will gladly stamp it for you' (Nhân viên thu ngân sẽ sẵn lòng đóng dấu chứng thực lên vé cho bạn).",
    138: "💡 <b>Đáp án (B) Then:</b> Trạng từ chỉ trình tự thời gian 'Then' (Sau giờ đỗ xe miễn phí đầu tiên đó, mức phí tiếp theo sẽ là $5 mỗi giờ).",
    139: "💡 <b>Đáp án (A) will perform:</b> Sự kiện kịch độc thoại diễn ra vào tuần tới ('next week') nên chia động từ ở thì tương lai đơn 'will perform'.",
    140: "💡 <b>Đáp án (C) characters:</b> Danh từ 'characters' phù hợp với ngữ cảnh cuốn hồi ký: chứa đựng những nhân vật hài hước và lôi cuốn.",
    141: "💡 <b>Đáp án (D) delightful:</b> Cần tính từ đứng trước danh từ: 'a delightful introduction' (một lời giới thiệu đầy thú vị và cuốn hút).",
    142: "💡 <b>Đáp án (B):</b> Câu kết thúc thông báo với lời kêu gọi hành động đặt vé: 'Call the theater at 704-555-0138 to reserve tickets'.",
    143: "💡 <b>Đáp án (B) approach:</b> Động từ 'approach' mang nghĩa tiếp cận/thực hiện: 'how I approach my work' (cách tôi tiếp cận và trau chuốt công việc cắm hoa của mình).",
    144: "💡 <b>Đáp án (A) Even so:</b> Cụm trạng từ nối mang nghĩa nhượng bộ: 'Dù vậy / Dẫu thế, có lẽ đôi bên vẫn có thể hợp tác cùng nhau'.",
    145: "💡 <b>Đáp án (C) referrals:</b> Danh từ 'referrals' trong cụm 'list of referrals' (danh sách các đối tác được khách sạn giới thiệu/khuyên dùng cho khách).",
    146: "💡 <b>Đáp án (D):</b> Câu chốt lại lợi ích đôi bên cùng có lợi: 'Tôi tin rằng sự dàn xếp hợp tác này có thể đem lại lợi ích thiết thực cho cả hai bên'.",
    147: "💡 <b>Đáp án (A):</b> Thông báo tuyển dụng nêu rõ: có thể làm toàn thời gian hoặc bán thời gian, có cả ca ngày và ca đêm -> Đem lại sự linh hoạt về ca làm việc cho nhân viên.",
    148: "💡 <b>Đáp án (D):</b> Tiêu chí bắt buộc là kỹ năng dịch vụ khách hàng xuất sắc -> Khả năng giao tiếp tốt với khách hàng (Ability to communicate with customers).",
    149: "💡 <b>Đáp án (B):</b> Đoạn 1 nêu công ty vệ tinh Alita Technology được nhận khoản tài trợ 9 triệu USD để thiết kế và chế tạo thiết bị cảm biến trên không.",
    150: "💡 <b>Đáp án (D):</b> Từ 'initiative' trong ngữ cảnh dự án khoa học phối hợp nghiên cứu đồng nghĩa với **project**.",
    151: "💡 <b>Đáp án (A):</b> Tiến sĩ Hugh Jaris là giám đốc đơn vị viễn thám thuộc phòng thí nghiệm của Đại học Southam -> Làm việc cho phòng thí nghiệm thuộc một trường đại học.",
    152: "💡 <b>Đáp án (D) They are saved electronically:</b> Biên nhận ghi rõ vé chỉ được hiển thị và quét qua ứng dụng Stub Master trên điện thoại, không được in ra -> Được lưu trữ dưới dạng điện tử.",
    153: "💡 <b>Đáp án (B):</b> Mục Order ghi rõ: 'regular season baseball' giữa Mayville Dodgers và Monterrey Medallions -> Đây là một trận đấu bóng chày.",
    154: "💡 <b>Đáp án (D):</b> Ông chủ tịch phát biểu ghi nhận: 'In her three-decades-long design career' -> Bà Candace Masondo đã làm nhà thiết kế sản phẩm suốt 30 năm qua.",
    155: "💡 <b>Đáp án (B):</b> Cả hai doanh nghiệp đều sản xuất các mặt hàng thiết bị hỗ trợ cuộc sống độc lập (accessibility / independent living products).",
    156: "💡 <b>Đáp án (B):</b> Vị trí [2] đứng ngay sau câu nhắc đến chức vụ đứng đầu bộ phận phát triển vật liệu, tiếp nối câu làm rõ thời gian bà giữ cương vị đó ('She served in that capacity for ten years...').",
    157: "💡 <b>Đáp án (C):</b> Luis nhắn 'I'm leaving the house now' để trả lời cho câu hỏi có đến văn phòng không -> Anh đang rời nhà để đi tới công ty làm việc.",
    158: "💡 <b>Đáp án (B):</b> Priya Gao làm việc tại nhà nhưng tài liệu ghi chú quan trọng cần cho cuộc gọi 9h sáng lại bị để quên trên bàn ở văn phòng công ty.",
    159: "💡 <b>Đáp án (D):</b> Hướng dẫn nêu rõ phải xin giấy phép thành phố khi 'adding to or expanding the size of a building' -> Mở rộng diện tích một tòa nhà văn phòng.",
    160: "💡 <b>Đáp án (C):</b> Bước 2 hướng dẫn: liên hệ với ông Ronald Abioye tại văn phòng quy hoạch đô thị nếu cần trợ giúp khi điền mẫu đơn xin cấp phép.",
    161: "💡 <b>Đáp án (A):</b> Bước 3 ghi rõ: công trình chỉ được thi công sau khi nhận giấy phép và giấy tờ này phải được treo/niêm yết ở nơi dễ thấy tại lối vào chính của công trường.",
    162: "💡 <b>Đáp án (B):</b> Lễ hội bao gồm diễu hành xe hoa, khu vui chơi lễ hội cho trẻ em, hòa nhạc ngoài trời và xưởng vẽ mở -> Có các hoạt động dành cho mọi lứa tuổi.",
    163: "💡 <b>Đáp án (C):</b> Sự kiện chuỗi hòa nhạc ngoài trời tại Greenrow Park có bán bánh pizza nướng củi và các món ăn nhẹ kèm theo.",
    164: "💡 <b>Đáp án (C):</b> Nội dung giới thiệu các gói cước phát sóng trực tiếp giải đấu bóng rổ chuyên nghiệp thường được tìm thấy trên các tạp chí thể thao chuyên ngành.",
    165: "💡 <b>Đáp án (A):</b> Gói Platinum Plan là gói duy nhất cung cấp đặc quyền xem trọn vẹn tất cả các trận đấu hoàn toàn không bị chèn quảng cáo ('All live games, commercial-free').",
    166: "💡 <b>Đáp án (C):</b> Gói TBC Silver Plan được thiết kế riêng: 'Most live games played by a team of your choice' (phát sóng phần lớn các trận của một đội bóng do khách hàng tùy chọn).",
    167: "💡 <b>Đáp án (B):</b> Bảng giá của gói Gold hiển thị rõ ràng: mức giá đăng ký theo tháng là 19 USD/tháng ($19/month).",
    168: "💡 <b>Đáp án (A):</b> Bài blog tường thuật chi tiết về dự án tái thiết và hồi sinh khu vực bờ sông Brentler Heights -> Sự đổi thay/chuyển mình của một khu phố đô thị.",
    169: "💡 <b>Đáp án (B):</b> Tác giả blog chia sẻ bà từng đặt mua nhiều tác phẩm trang sức thủ công do Skandar làm ra để bán lại tại cửa hàng của chính mình -> Là nhà cung cấp cho cửa hàng của tác giả.",
    170: "💡 <b>Đáp án (B):</b> Phòng tranh Brentler Heights Gallery nằm ở tầng 2 của một tòa nhà công nghiệp cũ vừa được trùng tu ('former industrial building... refurbished space').",
    171: "💡 <b>Đáp án (D) [4]:</b> Vị trí [4] nằm ngay sau câu nói về triển lãm mở màn chỉ trưng bày tác phẩm của Skandar, rất phù hợp để tiếp nối câu 'Trong tương lai, cô Skandar có kế hoạch trưng bày các bộ sưu tập của các nghệ sĩ địa phương khác' trước khi đến thông tin về ngày khai mạc.",
    172: "💡 <b>Đáp án (A):</b> Nhóm nhân sự trao đổi về việc cập nhật hình ảnh, nội dung giới thiệu sản phẩm và sửa các lỗi kỹ thuật hiển thị trên trang web.",
    173: "💡 <b>Đáp án (B):</b> Helen Black cho biết cô sẵn sàng chụp góc làm việc của mình: 'from one of the days that I'm working from home' -> Thỉnh thoảng cô có ngày làm việc tại nhà.",
    174: "💡 <b>Đáp án (D):</b> Khi Liz hỏi về các lỗi vận hành của web, câu 'I saw those' của Helen ngụ ý cô cũng đã phát hiện ra các lỗi kỹ thuật đó rồi.",
    175: "💡 <b>Đáp án (A):</b> Jeff Spina đề nghị sẽ nói chuyện với Ryeo Jee để nhóm kỹ thuật khắc phục lỗi, và Liz gửi lời cảm ơn Jeff vì đã chủ động liên hệ đồng nghiệp.",
    176: "💡 <b>Đáp án (C):</b> Bài báo mô tả các bức tường kính mang lại cho khách tầm nhìn tuyệt đẹp ngắm nhìn vườn cây xanh mát và hoa nở rực rỡ ngoài trời.",
    177: "💡 <b>Đáp án (D):</b> Từ 'function' trong cụm 'corporate function' (sự kiện, buổi tiệc của công ty) đồng nghĩa với **gathering**.",
    178: "💡 <b>Đáp án (D):</b> Mục đích email là xác nhận việc đặt chỗ cho buổi tiệc ra mắt sản phẩm của công ty Kitchen Designs vào ngày 16 tháng 6.",
    179: "💡 <b>Đáp án (C):</b> Điều phối viên đính kèm tệp thông tin về các phương án thực đơn và giá cả ('information about the menu options and pricing').",
    180: "💡 <b>Đáp án (A):</b> Toàn bộ khu bếp của Hillside House do Bếp trưởng Bashu Malik từng 2 lần đoạt giải Franklin Heard Foundation danh giá phụ trách.",
    181: "💡 <b>Đáp án (B):</b> Email đầu tiên phàn nàn rằng màu sắc của đôi bốt màu sô-cô-la khi nhận thực tế tối hơn nhiều so với màu sắc hiển thị trên ảnh chụp của trang web.",
    182: "💡 <b>Đáp án (A):</b> Khách hàng cho biết: 'I have purchased several pairs of boots from your company in the past' -> Đã từng nhiều lần mua giày bốt của công ty này trước đây.",
    183: "💡 <b>Đáp án (D):</b> Thư phản hồi của nhân viên thông báo mẫu bốt Erin màu đất nung ('terracotta') với kích cỡ của cô hiện đang hết sạch hàng trong kho.",
    184: "💡 <b>Đáp án (C):</b> Nhân viên giới thiệu dòng bốt Viola là mẫu mã được ưa chuộng và bán chạy nhất của công ty ('Viola boots, our most popular style').",
    185: "💡 <b>Đáp án (B):</b> Nhân viên đề nghị sẽ gửi nhãn gửi hàng trả lại qua email ('postage-paid return label via e-mail') để khách tự in ra và dán lên hộp gửi về.",
    186: "💡 <b>Đáp án (B):</b> Phóng viên Greg Tanner viết thư cho ủy viên hội đồng thành phố để hỏi thăm thông tin chính thức về tình trạng bảo trì con đường mòn Blue Trail sau nhiều phàn nàn.",
    187: "💡 <b>Đáp án (A):</b> Bài báo ngày 12/7 giới thiệu bà Helen Yancey là người mới được bổ nhiệm thay thế cho người tiền nhiệm (ông Oscar Lunes vừa nghỉ hưu).",
    188: "💡 <b>Đáp án (B):</b> Việc dọn dẹp đường mòn bị gián đoạn là do sở chuyển đổi mô hình từ nhân viên hưởng lương thành phố sang hoàn toàn dùng tình nguyện viên (thay đổi chính sách nội bộ).",
    189: "💡 <b>Đáp án (D):</b> Bài báo nêu ngày dọn dẹp dự kiến là ngày 12/8, nhưng trang thông báo thực tế xác nhận sự kiện đã diễn ra thành công vào ngày 8/8 -> Ngày tổ chức dọn dẹp đã bị thay đổi.",
    190: "💡 <b>Đáp án (C):</b> Ông Jason Skoda, một cư dân ở khu dân cư lân cận, đã cho đội tình nguyện mượn máy cắt cỏ, kéo tỉa cành và cào đất -> Cung cấp các dụng cụ làm vườn.",
    191: "💡 <b>Đáp án (C):</b> Mục đích email là thông báo cho toàn thể nhân sự công ty luật về buổi bán đấu giá tranh từ thiện thường niên sắp tới và kêu gọi đóng góp tác phẩm.",
    192: "💡 <b>Đáp án (B):</b> Bà Noonan nhận xét nhà hàng của khách sạn Seven Gates có hệ thống đèn chiếu sáng tuyệt vời -> Giải thích vì sao địa điểm này phù hợp với việc trưng bày tranh đấu giá.",
    193: "💡 <b>Đáp án (B):</b> Nghệ sĩ Michaela Green đã quyên góp bức tượng Streetlight cao 90 cm (vượt mức quy định 50 cm), tác phẩm này được chọn làm điểm nhấn trung tâm của buổi đấu giá.",
    194: "💡 <b>Đáp án (A):</b> Anh Orou viết 'I am planning to contribute a piece of art again this year' -> Chứng tỏ anh đã từng tham gia đóng góp tác phẩm nghệ thuật vào các năm trước.",
    195: "💡 <b>Đáp án (D):</b> Bức tranh vẽ cảnh mặt trời mọc trên vườn cây ăn quả của Orou có đề tài trùng lặp với bức tranh 'Cornfield Sunrise' (Bình minh trên cánh đồng ngô) của nghệ sĩ Kim Cheung.",
    196: "💡 <b>Đáp án (A):</b> Jerome Lennox gửi email kèm CV để bày tỏ sự quan tâm và ứng tuyển cho vị trí quản lý văn phòng (job 3723) tại chi nhánh Liverpool.",
    197: "💡 <b>Đáp án (D) That he confirm an interview appointment:</b> Cô Maeda yêu cầu ứng viên phản hồi email để xác nhận việc tham dự cuộc phỏng vấn qua điện thoại với bà Alisha Scott vào 11 giờ ngày 28/5.",
    198: "💡 <b>Đáp án (C):</b> Biển hiệu văn phòng nêu Franta Exports có tổng cộng 18 văn phòng trên toàn cầu (trong đó có 5 văn phòng tại Anh) -> Hoạt động tại nhiều quốc gia.",
    199: "💡 <b>Đáp án (B):</b> Lennox ứng tuyển tại quê hương Liverpool và biển hiệu văn phòng Liverpool hiện tại đã ghi tên 'Office manager: Jerome Lennox' -> Anh đã trúng tuyển công việc này.",
    200: "💡 <b>Đáp án (A):</b> Thư thứ hai nêu sau vòng online, vòng phỏng vấn trực tiếp kế tiếp sẽ diễn ra tại trụ sở chính ở Portsmouth. Biển hiệu ghi địa chỉ văn phòng Portsmouth là số 732 Park Avenue."
};