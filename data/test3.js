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

// 1. DÀN KEY 200 CÂU TEST 3 (CHUẨN 100% THEO FILE NGHE VÀ ĐỀ READING)
window.TOEIC_KEYS[3] = parseKey("1D 2A 3D 4B 5C 6A 7A 8B 9B 10B 11A 12A 13C 14C 15C 16B 17C 18B 19C 20C 21C 22B 23C 24A 25B 26B 27A 28A 29C 30C 31C 32B 33C 34B 35C 36A 37D 38B 39D 40C 41B 42B 43D 44C 45A 46D 47D 48B 49B 50C 51D 52C 53B 54C 55D 56D 57A 58C 59B 60C 61D 62A 63C 64D 65C 66A 67C 68A 69A 70C 71B 72C 73D 74A 75C 76B 77C 78D 79A 80B 81D 82A 83B 84D 85D 86B 87A 88B 89B 90C 91A 92C 93C 94A 95C 96B 97C 98A 99B 100C 101B 102A 103B 104C 105D 106B 107A 108B 109A 110C 111B 112C 113B 114B 115D 116A 117D 118D 119A 120A 121B 122C 123D 124A 125B 126A 127C 128C 129C 130A 131A 132D 133A 134B 135B 136B 137A 138C 139B 140D 141A 142A 143B 144B 145D 146C 147D 148C 149B 150D 151C 152D 153A 154C 155A 156D 157C 158C 159D 160A 161B 162D 163C 164A 165C 166C 167A 168C 169D 170D 171D 172A 173D 174B 175D 176C 177B 178A 179D 180B 181B 182C 183B 184A 185D 186A 187B 188C 189D 190C 191B 192D 193A 194B 195B 196A 197B 198C 199D 200D");
// 2. FULL TRANSCRIPT LISTENING TEST 3 (ĐÃ SỬA CHUẨN THẺ HIGHLIGHT TỪ CÂU 1 ĐẾN 100)
window.TOEIC_SCRIPTS[3] = `
  <h3>PART 1: PHOTOGRAPHS (Câu 1 - 6)</h3>
  <div class="script-question">
    <span class="script-speaker">1. W-Am</span>
    <div class="script-opt">(A) He's fixing a file drawer.</div>
    <div class="script-opt">(B) He's rolling up his sleeves.</div>
    <div class="script-opt correct-pink">(C) He's closing a laptop computer.</div>
    <div class="script-opt">(D) He's drinking from a mug.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">2. M-Cn</span>
    <div class="script-opt correct-pink">(A) Some bushes are covered with snow.</div>
    <div class="script-opt">(B) Some flowers are being planted.</div>
    <div class="script-opt">(C) A person is walking in the road.</div>
    <div class="script-opt">(D) A person is cleaning some windows.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">3. M-Au</span>
    <div class="script-opt">(A) A man is changing a tire on his car.</div>
    <div class="script-opt">(B) A man is opening a car door.</div>
    <div class="script-opt">(C) A man is putting fuel into his car.</div>
    <div class="script-opt correct-pink">(D) A man is spreading out a map on top of his car.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">4. W-Br</span>
    <div class="script-opt">(A) They're leaving a restaurant.</div>
    <div class="script-opt">(B) They're seated next to each other.</div>
    <div class="script-opt correct-pink">(C) One of the women is looking in her handbag.</div>
    <div class="script-opt">(D) One of the women is folding a scarf.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">5. W-Am</span>
    <div class="script-opt">(A) A selection of luggage is on display.</div>
    <div class="script-opt correct-pink">(B) A lamp and some papers are on a desk.</div>
    <div class="script-opt">(C) Some boxes are arranged under some lamps.</div>
    <div class="script-opt">(D) Some wire has been rolled up on the floor.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">6. M-Au</span>
    <div class="script-opt correct-pink">(A) A cyclist is riding past a pedestrian.</div>
    <div class="script-opt">(B) A tent is set up next to a lake.</div>
    <div class="script-opt">(C) Some people are resting on a stone wall.</div>
    <div class="script-opt">(D) Some people are swimming in a lake.</div>
  </div>

  <h3>PART 2: QUESTION-RESPONSE (Câu 7 - 31)</h3>
  <div class="script-question">
    <span class="script-speaker">7. W-Br: Where's the coffee maker?</span>
    <div class="script-opt correct-pink">(A) On the bottom shelf.</div>
    <div class="script-opt">(B) A large serving spoon.</div>
    <div class="script-opt">(C) It was discounted.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">8. M-Cn: Why are you calling the clients?</span>
    <div class="script-opt">(A) A spreadsheet with their contact information.</div>
    <div class="script-opt correct-pink">(B) Because they canceled their order.</div>
    <div class="script-opt">(C) I can walk you there.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">9. W-Br: Would you like to attend our next company retreat?</span>
    <div class="script-opt">(A) I'm parked next to that tree.</div>
    <div class="script-opt correct-pink">(B) Yes, I'd like that.</div>
    <div class="script-opt">(C) Just some grilled vegetables.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">10. W-Am: Who can update the website?</span>
    <div class="script-opt">(A) I like the new website, too.</div>
    <div class="script-opt correct-pink">(B) Kento said he could do it.</div>
    <div class="script-opt">(C) That's the right password.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">11. M-Au: Does your desk face the door or the window?</span>
    <div class="script-opt correct-pink">(A) It faces the door.</div>
    <div class="script-opt">(B) About 40 minutes.</div>
    <div class="script-opt">(C) Because the room is too small.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">12. W-Am: When will your performance take place?</span>
    <div class="script-opt correct-pink">(A) Next Tuesday.</div>
    <div class="script-opt">(B) No, I just checked.</div>
    <div class="script-opt">(C) We shopped there yesterday.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">13. M-Au: What will you get for completing the program?</span>
    <div class="script-opt">(A) How many hours a week?</div>
    <div class="script-opt">(B) Okay, thanks for asking.</div>
    <div class="script-opt correct-pink">(C) A certificate in accounting.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">14. W-Am: How did the company get its name?</span>
    <div class="script-opt">(A) There's a new guest list.</div>
    <div class="script-opt">(B) Oh, about three years ago.</div>
    <div class="script-opt correct-pink">(C) It's named after the owner.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">15. W-Br: Your kitchen looks nice painted in this shade of yellow.</span>
    <div class="script-opt">(A) 20 color copies, please.</div>
    <div class="script-opt">(B) Dinner will be ready in 10 minutes.</div>
    <div class="script-opt correct-pink">(C) Yes, it really brightens up the room.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">16. W-Am: Are you considering hiring a public relations firm?</span>
    <div class="script-opt">(A) I wasn't at that press conference.</div>
    <div class="script-opt correct-pink">(B) No, we decided not to.</div>
    <div class="script-opt">(C) It's in the closet.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">17. M-Au: Does this hallway lead to the lobby or to the courtyard?</span>
    <div class="script-opt">(A) My brother mentioned that.</div>
    <div class="script-opt">(B) How much does the box weigh?</div>
    <div class="script-opt correct-pink">(C) To the lobby, I think.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">18. M-Cn: The company's headquarters is in Houston, right?</span>
    <div class="script-opt">(A) This quarter's budget.</div>
    <div class="script-opt correct-pink">(B) Let me look at the directory.</div>
    <div class="script-opt">(C) From 9:00 to 3:00.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">19. W-Br: Aren't the windows in the warehouse supposed to be replaced?</span>
    <div class="script-opt">(A) Sure, I'll frame the picture.</div>
    <div class="script-opt">(B) No, I don't have any.</div>
    <div class="script-opt correct-pink">(C) Mr. Bohra ordered them.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">20. W-Br: Who's leading the workshop on Friday?</span>
    <div class="script-opt">(A) Nice seeing you, too.</div>
    <div class="script-opt">(B) The other team has a 10-point lead.</div>
    <div class="script-opt correct-pink">(C) It'll be Olga.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">21. M-Cn: Should we join our department's book club?</span>
    <div class="script-opt">(A) An award-winning author.</div>
    <div class="script-opt">(B) The office supplies are in the storage room.</div>
    <div class="script-opt correct-pink">(C) They could use a few more people.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">22. W-Am: Shouldn't this package be returned?</span>
    <div class="script-opt">(A) Several packets of stamps from the post office.</div>
    <div class="script-opt correct-pink">(B) Yes, it has to go back to the manufacturer.</div>
    <div class="script-opt">(C) Didn't she return from her trip last week?</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">23. W-Br: When will the training sessions for the new security measures take place?</span>
    <div class="script-opt">(A) Yes, it was a complete success.</div>
    <div class="script-opt">(B) The upstairs conference room is large enough.</div>
    <div class="script-opt correct-pink">(C) Not until the start of next month.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">24. M-Cn: Do you want the draft of the proposal emailed to you or printed out?</span>
    <div class="script-opt correct-pink">(A) Irina will be the one reviewing it.</div>
    <div class="script-opt">(B) They're too expensive.</div>
    <div class="script-opt">(C) I can arrange a client dinner.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">25. W-Am: Which day is most convenient for you?</span>
    <div class="script-opt">(A) Yes, I'd appreciate it.</div>
    <div class="script-opt correct-pink">(B) Well, the conference begins on Thursday.</div>
    <div class="script-opt">(C) Yes, it's under the passenger seat.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">26. M-Au: Our department's looking for more interns.</span>
    <div class="script-opt">(A) My phone has an extended warranty.</div>
    <div class="script-opt correct-pink">(B) What are the qualifications?</div>
    <div class="script-opt">(C) Yes, you completed your project.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">27. M-Cn: How was your lunch at the park?</span>
    <div class="script-opt correct-pink">(A) I had an unexpected client meeting.</div>
    <div class="script-opt">(B) Three sugars, please.</div>
    <div class="script-opt">(C) It's on the top shelf.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">28. W-Am: Does your company send out the same promotional material every month?</span>
    <div class="script-opt correct-pink">(A) We're going to try something new.</div>
    <div class="script-opt">(B) The bank across the street.</div>
    <div class="script-opt">(C) Nico just got promoted.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">29. W-Br: Where can I look at floor plans for our new office building?</span>
    <div class="script-opt">(A) Yes, I'd like some coffee.</div>
    <div class="script-opt">(B) A few more resumes.</div>
    <div class="script-opt correct-pink">(C) I can ask the architect.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">30. M-Cn: Can I use the company car to pick up the clients from the airport?</span>
    <div class="script-opt">(A) Chen Zhao is the best project manager I know.</div>
    <div class="script-opt">(B) No, thanks, I've already been there.</div>
    <div class="script-opt correct-pink">(C) The keys are on the desk over there.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">31. M-Au: How often should our heating system be inspected?</span>
    <div class="script-opt">(A) Approximately $400.</div>
    <div class="script-opt">(B) Because I have a meeting at that time.</div>
    <div class="script-opt correct-pink">(C) The recommendation is in the manual.</div>
  </div>

  <h3>PART 3: CONVERSATIONS (Câu 32 - 70)</h3>
  <div class="script-dialogue">
    <b>[Questions 32 - 34]</b><br>
    <b>M-Cn:</b> Hi, Chef Ayaka. I was looking over this week's sales, and I noticed that <span class="correct-pink">[32] a lot of people ordered the beef stew special</span>.<br>
    <b>W-Am:</b> Yeah, it's been very popular with patrons. In fact, I want to add it to the regular menu.<br>
    <b>M-Cn:</b> Good idea. <span class="correct-pink">[33] Beef prices change frequently though, so we might need to consider that</span> when we set the price for the dish if we're going to offer it daily.<br>
    <b>W-Am:</b> Okay, <span class="correct-pink">[34] I'll call our supplier, too</span>. We need to make sure they can get us enough beef each week.
  </div>

  <div class="script-dialogue">
    <b>[Questions 35 - 37]</b><br>
    <b>M1:</b> Excuse me, does Train 1401 stop at the Lexington Street Station?<br>
    <b>W-Br:</b> Yes, it's a 20-minute ride.<br>
    <b>M2:</b> Oh, good. That gives us plenty of time to get to the party.<br>
    <b>W-Br:</b> <span class="correct-pink">[35] The train leaves from platform 12</span> in three minutes.<br>
    <b>M2:</b> Let's head over there now, Sergey. I'm really looking forward to <span class="correct-pink">[36] our company gala event</span> tonight.<br>
    <b>M1:</b> Me, too. Hey, did you happen to bring <span class="correct-pink">[37] an umbrella</span>? I forgot mine. It might rain on our walk from the station.<br>
    <b>M2:</b> I did, we can share it.
  </div>

  <div class="script-dialogue">
    <b>[Questions 38 - 40]</b><br>
    <b>W-Am:</b> I talked to Mr. Hoffman this morning, and he said <span class="correct-pink">[38] he's decided to start a delivery service</span> for our customers who have a difficult time picking up their <span class="correct-pink">[39] prescriptions</span>.<br>
    <b>M-Cn:</b> That's a good idea. I know a lot of people find it inconvenient to come in person to get their medications, but many of our customers buy other things while they're here.<br>
    <b>W-Am:</b> Oh, they'll be able to make other purchases, too, to be delivered with their medicine. In fact, I'm supposed to draft a job posting for delivery drivers. <span class="correct-pink">[40] Could you help me do that?</span>
  </div>

  <div class="script-dialogue">
    <b>[Questions 41 - 43]</b><br>
    <b>W-Am:</b> Marcel, I don't know if you reviewed the latest report. Unfortunately, <span class="correct-pink">[41] our sales are continuing to drop</span>.<br>
    <b>M-Au:</b> Yes, competition is at an all-time high. More and more companies are selling <span class="correct-pink">[42] clothing and gear for outdoor recreation</span>.<br>
    <b>W-Am:</b> We need better ways to make our brand stand out.<br>
    <b>M-Au:</b> Well, we could probably benefit from having more direct input from athletes who use our gear. I was thinking maybe we could hire a professional rock climber to consult with our designers.<br>
    <b>W-Am:</b> That's an interesting idea. Is there anyone you have in mind?<br>
    <b>M-Au:</b> <span class="correct-pink">[43] I'll email you a list this afternoon</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 44 - 46]</b><br>
    <b>W-Br:</b> Hello. <span class="correct-pink">[44] I was featured in an article in your newspaper</span> about five years ago, and now when I click on the link, nothing happens.<br>
    <b>M-Cn:</b> Oh, the public links expire after three years, but <span class="correct-pink">[45] I can search for your article in our database</span>. I just need keywords from the article to use in the search.<br>
    <b>W-Br:</b> It was about my internship at a dental office.<br>
    <b>M-Cn:</b> Okay, let me check our archives.<br>
    <b>W-Br:</b> Thanks. I was still in college when the article came out, but now <span class="correct-pink">[46] I'm starting my own practice</span>, and I'd like to hang the article on the wall.<br>
    <b>M-Cn:</b> Oh, congratulations!
  </div>

  <div class="script-dialogue">
    <b>[Questions 47 - 49]</b><br>
    <b>W-Am:</b> Welcome to Scott's Supplies. Just so you know, all our <span class="correct-pink">[47] power tools and ladders are 20% off</span> today. Is there something I can help you with?<br>
    <b>M-Cn:</b> Yes, I came in last week to get some lumber for a home project I was working on, but <span class="correct-pink">[48] the boards I purchased are the wrong width</span>. I was wondering if I could get a refund.<br>
    <b>W-Am:</b> Sure. Do you have the receipt?<br>
    <b>M-Cn:</b> No, unfortunately. I must have lost it.<br>
    <b>W-Am:</b> Hmm. Okay, <span class="correct-pink">[49] let me find the manager</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 50 - 52]</b><br>
    <b>W-Br:</b> Welcome back. How were your lunch deliveries?<br>
    <b>M-Au:</b> All right, except one bag broke and the food container fell out right as I was walking up to a customer's door. The container was still sealed, and the customer accepted it, so it turned out okay in the end.<br>
    <b>W-Br:</b> Well, I'm glad everything worked out. By the way, take a look at my screen: <span class="correct-pink">[51] I got the new delivery software installed and running</span> while you were gone.<br>
    <b>M-Au:</b> This looks great! I like how different areas can be grouped together so drivers can deliver more efficiently.<br>
    <b>W-Br:</b> Me, too. And since <span class="correct-pink">[52] we've recently had such a significant increase in customers</span>, this will be really useful.
  </div>

  <div class="script-dialogue">
    <b>[Questions 53 - 55]</b><br>
    <b>M-Cn:</b> Hi, Gina, I've got good news: We signed a contract to create <span class="correct-pink">[53] an ad campaign</span> for a new client.<br>
    <b>W-Br:</b> That's great! Who is it?<br>
    <b>M-Cn:</b> It's HMD Incorporated, an organic snack company. <span class="correct-pink">[54] They just developed a new line of snacks made entirely from vegetables</span>. They want to market the snacks to sports teams as well as individuals.<br>
    <b>W-Br:</b> Well, that sounds exciting, but hard to understand. I guess we'll need to learn more about the products first.<br>
    <b>M-Cn:</b> Exactly. We'll have the client come in to give us nutritional information and provide us with some samples. <span class="correct-pink">[55] I'll schedule a meeting with them soon</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 56 - 58]</b><br>
    <b>W1:</b> Oliver, have you finished the maintenance check on <span class="correct-pink">[56] the small airplane</span> that came in this morning? The owner's hoping to fly it this weekend.<br>
    <b>M:</b> I finished checking it earlier this morning. It needs a new fuel injection pump, so I've asked Camille to order one. Oh, here she comes. Camille, will the new pump arrive today?<br>
    <b>W2:</b> Unfortunately, no. The manufacturer said <span class="correct-pink">[57] there'll be a delay, and it won't arrive until Monday</span>.<br>
    <b>W1:</b> I better let the customer know. She was planning to fly the plane to Toronto this weekend <span class="correct-pink">[58] for a friend's wedding</span>. She'll need to find another way to get there.
  </div>

  <div class="script-dialogue">
    <b>[Questions 59 - 61]</b><br>
    <b>M-Au:</b> Hello, you've reached the customer service line for Quality <span class="correct-pink">[59] Internet Service</span>. How can I help you?<br>
    <b>W-Br:</b> I'm Mona Shannock, and my account number is PK62H5. I'd like to close my account on June 30th.<br>
    <b>M-Au:</b> Oh, have you been experiencing issues with the service?<br>
    <b>W-Br:</b> Actually, <span class="correct-pink">[60] my company has asked me to relocate to Spain</span>.<br>
    <b>M-Au:</b> That's exciting! I'll take care of your request for you, then.<br>
    <b>W-Br:</b> Thank you, I appreciate that.<br>
    <b>M-Au:</b> When I'm done updating your records, would you be willing to stay on the phone line to <span class="correct-pink">[61] take a survey</span> about your experience as a customer?<br>
    <b>W-Br:</b> Certainly.
  </div>

  <div class="script-dialogue">
    <b>[Questions 62 - 64]</b><br>
    <b>W-Am:</b> Marco, you'll be restocking the cleaning products this morning, right? While you're doing that, could you also put the updated sale price labels on the hand soap dispensers? They're on the shelf <span class="correct-pink">[62] right above the laundry detergent</span>.<br>
    <b>M-Cn:</b> No problem, that shouldn't take long. What else can I help with?<br>
    <b>W-Am:</b> Can you make room for our <span class="correct-pink">[63] new international foods section</span> at the front of the store?<br>
    <b>M-Cn:</b> Oh, did the shipment finally arrive? <span class="correct-pink">[64] That snowstorm up north really affected delivery schedules</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 65 - 67]</b><br>
    <b>W-Br:</b> Thanks for calling Kwan Photography Studio.<br>
    <b>M-Au:</b> Hello, I need to <span class="correct-pink">[65] have a photo taken for a Canadian passport</span>.<br>
    <b>W-Br:</b> Okay, you can make an appointment Monday through Friday. <span class="correct-pink">[66] Just bring in a copy of the application</span> so we can see the size requirements.<br>
    <b>M-Au:</b> I work 9:00 to 5:00 every day at my current job. Do you have any openings after 5:00 PM?<br>
    <b>W-Br:</b> No problem, <span class="correct-pink">[67] we're open until 6:00 PM one day a week</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 68 - 70]</b><br>
    <b>M-Au:</b> Hi, Marina. Do you have receipts for your expenses from the <span class="correct-pink">[68] Dental Hygienists Conference</span> you attended last week?<br>
    <b>W-Am:</b> Yes, I have them. I was just going to scan them and send them to you by email.<br>
    <b>M-Au:</b> Thanks very much. Once I receive them, <span class="correct-pink">[69] I'll process your request for reimbursement</span>. Don't forget to fill out the travel expenses form and include it in your email, too.<br>
    <b>W-Am:</b> Okay. Remind me, <span class="correct-pink">[70] what should I use for the department code?</span><br>
    <b>M-Au:</b> Oh, sorry, I forgot to tell you: Use number 1009.
  </div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>
  <div class="script-dialogue">
    <b>[Questions 71 - 73]</b><br>
    <b>W-Am:</b> The town's <span class="correct-pink">[71] annual music festival</span> is only a few months away, and our committee still has a lot of planning to do. We already have a list of performers who have agreed to appear. Fortunately, we can use the same stage and equipment we've used in the past. However, <span class="correct-pink">[72] we don't have enough fencing to create a larger seating area</span>. Eniola, since you're in charge of accounts, <span class="correct-pink">[73] would you check sometime today to see whether we have money for extra fencing?</span>
  </div>

  <div class="script-dialogue">
    <b>[Questions 74 - 76]</b><br>
    <b>W-Br:</b> Hello, everyone. Thanks for stopping by my booth. I hope you've been enjoying all the manufacturing exhibits and demonstrations. I'm Carmen Fuentes, and I'm a sales representative at LT Plastic Injectors. Today, I'm delighted to show you one of our new injection molding machines. It's currently fitted with a mold to make plastic bottle caps. <span class="correct-pink">[75] This machine is able to create 96 bottle caps every two seconds. That's incredibly fast!</span> And for today only, <span class="correct-pink">[76] we're offering a 10% discount on orders for this machine</span>, just for attending our demonstration.
  </div>

  <div class="script-dialogue">
    <b>[Questions 77 - 79]</b><br>
    <b>W-Am:</b> The company leadership here at PCF Technologies has decided to make a major change. Historically, we've been one of the largest manufacturers of <span class="correct-pink">[77] computer chips</span>. However, starting next month, our company will launch a research and development division and <span class="correct-pink">[78] start designing chips, too</span>. We've decided to make this change to allow us to have more control over the quality of the technology we produce. As a result, some employees will have new work assignments going forward. <span class="correct-pink">[79] Those assignments will be communicated later in the morning</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 80 - 82]</b><br>
    <b>M-Au:</b> Hello, welcome to AgCast, a podcast all about <span class="correct-pink">[80] the latest news in agriculture</span>. Before we get started with today's episode, I'd like to note that <span class="correct-pink">[81] I provided the wrong dates for the farming exposition</span> during last week's episode. The start date of the event is March 31st, not the 21st. I'm sorry about that. Okay, let's move on to today's guest: <span class="correct-pink">[82] Ms. Junko Adachi is the director at Fertilizer One</span>, a nonprofit organization that provides small farms with low-cost fertilizer.
  </div>

  <div class="script-dialogue">
    <b>[Questions 83 - 85]</b><br>
    <b>W-Br:</b> Hi, Mr. Flores, this is Susanna, the supervisor of the <span class="correct-pink">[83] construction crew working on your renovation project</span>. I'm calling because we've run into an issue with the front window replacements. Your house was built a long time ago and has settled over the years. Unfortunately, <span class="correct-pink">[84] this has caused some frame alignment issues</span>. We will not be able to install the new bay window you requested for the front room without more extensive work than the budget will cover. Our work is done for today, but we'll need to know how to proceed by tomorrow. <span class="correct-pink">[85] I'll be available for the next couple of hours</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 86 - 88]</b><br>
    <b>M-Cn:</b> You may remember that our <span class="correct-pink">[86] bank branch</span> was evaluated by auditors from our headquarters last week. Well, I received their report today. They looked at everything from how we handle record keeping for accounts and transactions, to how our bank tellers interact with individual customers. Above all, <span class="correct-pink">[87] they were impressed with the quality of our customer service</span>, specifically how we greet customers and direct them to the right associate. However, we received low ratings on marketing our other products. <span class="correct-pink">[88] I'd like all supervisors to talk to their staff about strategies to pitch our products and services</span> to customers.
  </div>

  <div class="script-dialogue">
    <b>[Questions 89 - 91]</b><br>
    <b>M-Au:</b> Oh, good, I'm glad to see everyone is here early, as requested. We have an unusually busy night ahead of us due to <span class="correct-pink">[89] the addition of six large group reservations</span>. We'll set up for those first in the overflow room. <span class="correct-pink">[90] Tables will need to come out of storage</span>. I'll unlock the door after this meeting. Before you start your shift, make sure to try tonight's specials. They're in their usual spot under the heat lamps. Be sure you promote the truffles dish in particular. We'd like to see if this could be a permanent menu item; <span class="correct-pink">[91] management will be watching closely</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 92 - 94]</b><br>
    <b>W-Am:</b> Hello, and welcome to WBCO <span class="correct-pink">[92] Financial News</span>. Tonight, we're talking about the prices we pay online for goods and services. In particular, we'll look at why you may pay more if you shop during times of peak demand. Called surge pricing, this trend first started with computer software that allowed large airlines to track demand and quickly change their ticket prices. <span class="correct-pink">[93] That technology is now widely available</span>. You may find that even small businesses charge more when demand is higher. Our guest today is Professor Yun Hong, a leading expert on the topic. <span class="correct-pink">[94] Last month, he was the featured speaker at the International Economic Summit</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 95 - 97]</b><br>
    <b>M-Au:</b> Hi, this is Liam from Oceana Flowers. <span class="correct-pink">[95] I'm calling about our print order for coupons</span>. We originally said we needed the coupons by Friday, but we now need them to be ready by Wednesday instead. <span class="correct-pink">[96] We just found out yesterday that our application to the National Florists Association was approved</span>. We'll be attending their annual floral show in Richmond this weekend. Oh, one other thing: We'd also like to <span class="correct-pink">[97] change the limit to five items on the coupon</span>. Can you take care of that before you start printing? Thank you.
  </div>

  <div class="script-dialogue">
    <b>[Questions 98 - 100]</b><br>
    <b>M-Cn:</b> Hi, Takuma, good news: You got your first television audition! It's for a role in a TV drama. I've sent an email with the script and details. Since you're auditioning to join the cast of an ongoing show, <span class="correct-pink">[99] you should watch some videos of previous episodes</span> so you understand the role. One last note: Since you're new to the city, you might be wondering about the best bus route to take. You could take the Green Line to Orchard, but <span class="correct-pink">[100] I'd recommend taking the Yellow Line to the last stop</span>. It's a longer route, but the last stop is closer to the studio.
  </div>
`;

// 3. GIẢI THÍCH CHI TIẾT READING (CÂU 101 - 200) TEST 3
window.TOEIC_EXPLANATIONS[3] = {
    101: "💡 <b>Đáp án (B) her:</b> Đứng trước danh từ 'youth' cần một tính từ sở hữu: 'Despite her youth' (Mặc dù tuổi đời còn trẻ, cô Cho đã rất nổi tiếng trên mạng xã hội).",
    102: "💡 <b>Đáp án (A) available:</b> Tính từ 'available' (có sẵn/sẵn dùng) đứng sau to-be 'are now' làm vị ngữ: hầu hết tài liệu đã có sẵn trên mạng.",
    103: "💡 <b>Đáp án (B) review:</b> Sau cụm mạo từ và tính từ 'A full-scale' cần danh từ số ít làm chủ ngữ: 'A full-scale review' (Một cuộc rà soát/đánh giá toàn diện).",
    104: "💡 <b>Đáp án (C) promoted:</b> Cấu trúc bị động thăng chức: 'has been promoted to president' (được thăng chức lên làm chủ tịch công ty).",
    105: "💡 <b>Đáp án (D) productive:</b> Sau động từ to-be 'are' trong cấu trúc so sánh hơn 'more... than' cần tính từ: 'more productive' (làm việc năng suất hơn).",
    106: "💡 <b>Đáp án (B) technician:</b> Dựa vào ngữ cảnh máy móc hỏng hóc cần sửa chữa ('need repairs') nên khách hàng được khuyến khích liên hệ với một 'kỹ thuật viên' (technician).",
    107: "💡 <b>Đáp án (A) nearly:</b> Trạng từ 'nearly' (suýt chút nữa, gần như) đứng trước bổ nghĩa cho động từ chính 'caused' (giao thông đông đúc suýt khiến cô Ikeda lỡ chuyến bay).",
    108: "💡 <b>Đáp án (B) probably:</b> Trạng từ chỉ khả năng 'probably' (có lẽ/có thể) đứng giữa trợ động từ 'will' và động từ 'take place' để bổ nghĩa cho phán đoán sự việc.",
    109: "💡 <b>Đáp án (A) various:</b> Đứng trước cụm danh từ số nhiều 'guest rooms' cần tính từ 'various' (nhiều phòng nghỉ đa dạng khác nhau).",
    110: "💡 <b>Đáp án (C) at:</b> Giới từ 'at' dùng để chỉ vị trí giao lộ/ngã tư cụ thể: 'at Gordon Avenue and Hutch Street' (tại góc đường Gordon và phố Hutch).",
    111: "💡 <b>Đáp án (B) acceptable:</b> Cấu trúc đánh giá 'rate something as + Adj': 'rated its transportation app as acceptable' (đánh giá ứng dụng giao thông ở mức chấp nhận được).",
    112: "💡 <b>Đáp án (C) is representing:</b> Thì hiện tại tiếp diễn được dùng để diễn tả kế hoạch/lịch trình chắc chắn sẽ diễn ra trong tương lai ('at next weekend's medical fair').",
    113: "💡 <b>Đáp án (B) profitable:</b> Sau trạng từ 'financially' và trước danh từ 'quarter' cần tính từ 'profitable' (quý kinh doanh có lãi/sinh lời).",
    114: "💡 <b>Đáp án (B) supplier:</b> Sau mạo từ 'the' cần danh từ chỉ đối tác/người cung ứng: 'chosen as the supplier' (được chọn làm nhà cung cấp thiệp ngày lễ).",
    115: "💡 <b>Đáp án (D) organization:</b> Danh từ 'organization' (tổ chức) phù hợp làm đại từ thay thế cho viện Whitetail ('the only organization that tracks deer populations...').",
    116: "💡 <b>Đáp án (A) who:</b> Đại từ quan hệ 'who' thay thế cho danh từ chỉ người đứng trước 'The committee members' để làm chủ ngữ cho động từ 'attended'.",
    117: "💡 <b>Đáp án (D) specifically:</b> Trạng từ 'specifically' (đặc thù, chuyên biệt) đứng giữa to-be và phân từ hai để bổ nghĩa: 'is specifically designed' (được thiết kế riêng biệt).",
    118: "💡 <b>Đáp án (D) struggle:</b> Mệnh đề sau 'suggest that' có chủ ngữ là 'more people' (danh từ số nhiều), câu diễn tả sự thật nên chia thì hiện tại đơn ở dạng nguyên mẫu 'struggle'.",
    119: "💡 <b>Đáp án (A) response:</b> Cụm giới từ cố định 'in response to' (nhằm phản hồi/đối phó với việc cắt giảm ngân sách).",
    120: "💡 <b>Đáp án (A) consistently:</b> Trạng từ 'consistently' (một cách nhất quán/liên tục) bổ nghĩa cho động từ 'improve' (liên tục cải thiện kỹ năng cho người tìm việc).",
    121: "💡 <b>Đáp án (B) former:</b> Cần tính từ đứng trước danh từ 'director': 'former director' (cựu giám đốc/nguyên giám đốc).",
    122: "💡 <b>Đáp án (C) up to:</b> Cụm từ chỉ số lượng tối đa: 'up to five files simultaneously' (mở đồng thời tối đa lên đến 5 tệp tin).",
    123: "💡 <b>Đáp án (D) promote:</b> Động từ chỉ mục đích 'to promote' mang nghĩa quảng bá/quảng cáo cho các hoạt động và sự kiện của nhóm.",
    124: "💡 <b>Đáp án (A) While:</b> Liên từ chỉ sự tương phản đối lập 'While' (Mặc dù khách sạn không có nhà hàng bên trong, nhưng có rất nhiều hàng quán lân cận).",
    125: "💡 <b>Đáp án (B) Despite:</b> Sau chỗ trống là cụm danh từ 'a slight decline in revenue' nên chọn giới từ nhượng bộ 'Despite' (Mặc dù doanh thu sụt giảm nhẹ...).",
    126: "💡 <b>Đáp án (A) over:</b> Cụm giới từ chỉ khoảng thời gian kéo dài: 'over the past ten years' (trong suốt 10 năm qua).",
    127: "💡 <b>Đáp án (C) auditions:</b> Cụm diễn đạt quen thuộc 'hold auditions for' (tổ chức các buổi thử vai/tuyển diễn viên cho vở kịch mùa xuân).",
    128: "💡 <b>Đáp án (C) hastily:</b> Trạng từ 'hastily' (vội vàng, hấp tấp) bổ nghĩa cho hành động 'packed' (xếp đồ vội quá nên quên cả áo vest và cà vạt).",
    129: "💡 <b>Đáp án (C) had revised:</b> Hành động chỉnh sửa lịch trình diễn ra và hoàn tất trước thời điểm 'the training program began' trong quá khứ nên chia thì quá khứ hoàn thành 'had revised'.",
    130: "💡 <b>Đáp án (A) once:</b> Liên từ chỉ thời gian 'once' (ngay khi/một khi): ông Swan sẽ quay lại cuộc họp ngay sau khi các thực tập sinh đã đến.",
    131: "💡 <b>Đáp án (A) purchase:</b> Sau từ chỉ định lượng 'every' cần một danh từ đếm được số ít: 'every purchase of $50 or more' (mỗi hóa đơn mua sắm từ 50 USD trở lên).",
    132: "💡 <b>Đáp án (D) automatically:</b> Trạng từ 'automatically' (tự động) đứng giữa trợ động từ và động từ chính bị động 'will automatically be deposited'.",
    133: "💡 <b>Đáp án (A) Alternatively:</b> Trạng từ liên kết đưa ra phương án khác: 'Hoặc ngoài ra, bạn có thể ghé chi nhánh ngân hàng Avanti để được hỗ trợ trực tiếp'.",
    134: "💡 <b>Đáp án (B):</b> Câu nối tiếp lời giục khách hàng đăng ký sớm: 'Đừng chần chừ — chương trình nhân đôi điểm thưởng sẽ kết thúc vào ngày 31 tháng 1'.",
    135: "💡 <b>Đáp án (B) Instead:</b> Trạng từ chuyển ý 'Thay vào đó, Winnie sẽ giữ chức vụ giám đốc phân phối khu vực mới của công ty'.",
    136: "💡 <b>Đáp án (B) promotion:</b> Danh từ 'promotion' (sự thăng chức): chúng tôi rất vui mừng trước sự thăng tiến trong sự nghiệp của cô ấy.",
    137: "💡 <b>Đáp án (A) final:</b> Tính từ 'final' đứng trước danh từ: 'her final day with us' (ngày làm việc cuối cùng của cô ấy tại phòng ban chúng ta).",
    138: "💡 <b>Đáp án (C):</b> Lời mời thân mật tại bữa tiệc chia tay: 'Please join us for coffee and cake' (Mời mọi người cùng tham gia dùng cà phê và bánh ngọt).",
    139: "💡 <b>Đáp án (B):</b> Khuyên không nên để nhà đầu tư phải đoán: 'Hãy nêu bật thế mạnh lớn nhất của công ty bạn ngay từ lúc bắt đầu' (Reveal your company's greatest strength from the outset).",
    140: "💡 <b>Đáp án (D) relevant:</b> Cấu trúc tính từ đi với giới từ: 'be relevant to' (có liên quan mật thiết đến sản phẩm hoặc dịch vụ bạn cung ứng).",
    141: "💡 <b>Đáp án (C) what:</b> Đại từ 'what' đóng vai trò làm chủ ngữ cho mệnh đề danh ngữ 'what sets your company apart' (điều làm nên sự khác biệt cho doanh nghiệp của bạn).",
    142: "💡 <b>Đáp án (A) funding:</b> Danh từ 'funding' (nguồn vốn đầu tư): bạn sẽ có nhiều khả năng nhận được nguồn vốn mà bạn đang tìm kiếm.",
    143: "💡 <b>Đáp án (B) system:</b> Danh từ 'system' thay thế cho 'online payroll portal': vui lòng không truy cập vào hệ thống này trong suốt 5 ngày bảo trì.",
    144: "💡 <b>Đáp án (C) will enable:</b> Sự việc nâng cấp diễn ra trong tương lai nên dùng thì tương lai đơn 'will enable users' (trang web mới sẽ cho phép người dùng...).",
    145: "💡 <b>Đáp án (D):</b> Câu làm rõ tác dụng của tính năng vừa nêu ở câu trước: 'Chức năng trò chuyện trực tiếp này sẽ tối ưu hóa các dịch vụ do phòng nhân sự cung cấp'.",
    146: "💡 <b>Đáp án (C) during:</b> Giới từ chỉ khoảng thời gian: 'during the period mentioned above' (trong suốt khoảng thời gian được đề cập ở trên).",
    147: "💡 <b>Đáp án (D):</b> Gói bảo dưỡng chỉ gồm thay dầu, thay bộ lọc dầu và kiểm tra tổng quát miễn phí, KHÔNG gồm dịch vụ rửa xe (A car wash).",
    148: "💡 <b>Đáp án (C):</b> Phiếu ưu đãi ghi 'through August 31', do đó bắt buộc phải sử dụng trước khi tháng 8 kết thúc.",
    149: "💡 <b>Đáp án (B):</b> Mục đích chính của mẩu tin là thông báo rộng rãi về việc khởi động dự án nâng cấp/cải tạo nhà ga đường sắt 100 năm tuổi.",
    150: "💡 <b>Đáp án (D):</b> Đoạn 2 nêu rõ: các nghệ sĩ địa phương được mời gửi đề xuất phác thảo các bức tranh tường trang trí (murals) vào tháng Ba.",
    151: "💡 <b>Đáp án (C):</b> Bức thư là thư mời tham dự buổi lễ khai trương khu trưng bày nghệ thuật mới Prosner Wing gửi đến ông Sanchez.",
    152: "💡 <b>Đáp án (D) He has a membership at an art museum:</b> Bức thư viết: 'This private celebration is limited to invaluable museum members like you', chứng tỏ ông Sanchez là hội viên của bảo tàng nghệ thuật.",
    153: "💡 <b>Đáp án (A):</b> Hai người nhắn tin thảo luận việc tìm kiếm và đặt thuê một mặt bằng kho chứa đồ tạm thời trên ứng dụng di động.",
    154: "💡 <b>Đáp án (C):</b> Khi cô Mehta gợi ý lái xe tải chở hàng tới khảo sát địa điểm, ông Beiger đồng tình vì ông cũng đang tính sẽ lái xe qua đó kiểm tra thực tế.",
    155: "💡 <b>Đáp án (A):</b> Doanh nghiệp chuyên chế tạo giá đỡ máy tính xách tay công thái học, ghế và bàn làm việc đứng điều chỉnh được -> Nhà sản xuất đồ nội thất máy tính văn phòng.",
    156: "💡 <b>Đáp án (D):</b> Trang web mời khách hàng ghé trang Testimonials để xem đánh giá độc lập từ các tạp chí uy tín -> Đọc các nhận xét, đánh giá sản phẩm.",
    157: "💡 <b>Đáp án (C):</b> Dòng cuối nêu: các tổ chức doanh nghiệp muốn mua số lượng lớn cho nhân viên hãy gửi email để nhận bảng báo giá miễn phí (a price quote for a bulk order).",
    158: "💡 <b>Đáp án (C):</b> Trong cuộc họp toàn thể tuần trước, bà Paulsen đã gửi lời chúc mừng toàn thể nhân viên về doanh số tăng trưởng mạnh mẽ.",
    159: "💡 <b>Đáp án (D):</b> Lewis Sung vốn là nhà thiết kế sản phẩm của công ty, nay được thăng chức nội bộ lên làm Trưởng bộ phận thiết kế sản phẩm.",
    160: "💡 <b>Đáp án (A):</b> Bà Paulsen nhắc tới Pretoria vì đồng nghiệp sắp nghỉ hưu của họ là ông Marcus Bromley sẽ chuyển về quê hương Pretoria định cư lâu dài.",
    161: "💡 <b>Đáp án (B):</b> Tiến sĩ Able làm việc tại Borman Institute và trình bày một báo cáo học thuật sâu sắc -> Ông là người làm công tác nghiên cứu tại một viện nghiên cứu.",
    162: "💡 <b>Đáp án (D):</b> Bà McGrath ngỏ ý muốn tìm hiểu các cách thức để công ty có thể hợp tác nghiên cứu cùng Tiến sĩ Able hoặc các nhà khoa học của viện trong tương lai.",
    163: "💡 <b>Đáp án (B):</b> Vị trí [2] đứng ngay trước câu 'Would you mind providing us with a copy of the article...', nên câu 'Chúng tôi rất muốn đọc toàn văn bài báo nghiên cứu của ông' là tiếp nối chuẩn nhất.",
    164: "💡 <b>Đáp án (A):</b> Tin tuyển dụng thông báo rõ: 'This is a work-from-home position' -> Vị trí làm việc từ xa tại nhà (remote).",
    165: "💡 <b>Đáp án (C):</b> Phần mô tả yêu cầu ứng viên bắt buộc phải có: 'Strong interpersonal skills and the ability to communicate across company departments' -> Kỹ năng giao tiếp tốt.",
    166: "💡 <b>Đáp án (C):</b> Bài đăng có nêu rõ trách nhiệm, giờ giấc làm việc (9:00 - 17:00), yêu cầu học vấn (bachelor's degree) nhưng KHÔNG nhắc đến ngày bắt đầu nhận việc.",
    167: "💡 <b>Đáp án (A):</b> Vị trí [1] theo sau câu nói về mức lương tương xứng với kinh nghiệm, rất hợp lý để bổ sung thông tin các gói phúc lợi bảo hiểm y tế và hưu trí.",
    168: "💡 <b>Đáp án (C):</b> Bài báo nêu tổ chức FGS không chỉ phục hồi công viên mà còn cung cấp 'guided nature tours and other educational programs' -> Các khóa học/chương trình giáo dục về thiên nhiên.",
    169: "💡 <b>Đáp án (D):</b> Giám đốc Reynoso cho biết mục đích của khu vườn là tạo ra không gian thu hút sự đa dạng của các loài chim trong vùng ('draw in more of the region's abundant birdlife').",
    170: "💡 <b>Đáp án (C):</b> Bài báo nêu rõ: việc tuyển chọn danh mục các loại cây trồng sẽ do các giảng viên Đại học Elbart (Elbart University faculty) đảm nhiệm.",
    171: "💡 <b>Đáp án (D):</b> Đội ngũ nhân viên sở công viên thành phố sẽ rải lớp đất mặt mới, chuẩn bị sẵn mặt bằng đất đai để các tình nguyện viên tiến hành trồng cây.",
    172: "💡 <b>Đáp án (A):</b> Cuộc họp nhằm chuẩn bị nội dung thuyết trình để thuyết phục ban giám đốc tăng ngân sách tiếp thị cho đội ngũ ('increase our budget').",
    173: "💡 <b>Đáp án (D):</b> Anh Nijad giải thích doanh số giảm là do tính chất mùa vụ chung của ngành hàng ('Sales usually slow down this time of year').",
    174: "💡 <b>Đáp án (B):</b> Khi cô Parkin hỏi xin số liệu chứng minh, Nijad nhắn 'I have the details onscreen right now' ngụ ý anh có sẵn dữ liệu và có thể đáp ứng ngay yêu cầu của cô.",
    175: "💡 <b>Đáp án (D):</b> Cô Parkin nhắc rằng quảng cáo trên nền tảng mạng xã hội (social media) chính là chuyên môn thế mạnh của cô Lili Tuan ở nơi làm việc cũ.",
    176: "💡 <b>Đáp án (C):</b> Trang giới thiệu khẳng định xe ba bánh chở hàng được làm thủ công với 'parts made by local craftspeople' (các linh kiện do chính thợ thủ công địa phương chế tác).",
    177: "💡 <b>Đáp án (B):</b> Hãng xe đạp khuyến khích khách hàng chụp ảnh quá trình sử dụng xe và đăng tải lên mạng xã hội ('share the images via social media').",
    178: "💡 <b>Đáp án (A):</b> Bài đánh giá kể ông Stewart biết đến thương hiệu sau khi trò chuyện với một người đồng nghiệp ở cơ quan ('After talking with a coworker').",
    179: "💡 <b>Đáp án (D):</b> Website thông báo các đơn từ 15/8 mất 10-12 tuần mới nhận, trong khi ông đặt ngày 20/8 mà chỉ mất đúng 2 tuần đã nhận được xe -> Nhận hàng sớm hơn dự kiến.",
    180: "💡 <b>Đáp án (B):</b> Từ 'meet' trong ngữ cảnh 'meet the demand' (đáp ứng/thỏa mãn nhu cầu thị trường) đồng nghĩa với **satisfy**.",
    181: "💡 <b>Đáp án (B):</b> Bài báo viết về công ty gia đình Milne Associates đã hoạt động suốt một thế kỷ qua -> Khắc họa câu chuyện thành công của một doanh nghiệp địa phương.",
    182: "💡 <b>Đáp án (C):</b> Cụ cố Angus Milne chính là người đã sáng lập ra công ty cách đây tròn 100 năm ('century-old company... founded by his great-grandfather Angus Milne').",
    183: "💡 <b>Đáp án (B):</b> Bà Nandi chia sẻ một ngày là không đủ để tham quan hết nên bà đã lên kế hoạch quay trở lại Edinburgh vào cuối mùa hè.",
    184: "💡 <b>Đáp án (A):</b> Từ 'appreciates' trong câu khen ngợi ẩm thực ngon ('appreciates delicious food') mang nghĩa trân trọng, đánh giá cao -> đồng nghĩa với **values**.",
    185: "💡 <b>Đáp án (D):</b> Bà Nandi đi xem nhạc kịch tại nhà hát Wolff và rất thích hàng ghế êm ái mới lắp đặt, mà ghế của nhà hát này do chính công ty Milne Associates thiết kế và cung cấp.",
    186: "💡 <b>Đáp án (A):</b> Trang tin bảo tàng kể rằng các mảnh gốm cổ được phát hiện hoàn toàn tình cờ bởi một người nông dân khi ông đang đào giếng trên mảnh đất của mình.",
    187: "💡 <b>Đáp án (B):</b> Tiến sĩ Fiallo giải thích nhiều hiện vật chỉ được trình chiếu qua ảnh chụp vì chúng quá mỏng manh, dễ gãy vỡ nên không thể di chuyển đi lại ('too delicate to be moved around').",
    188: "💡 <b>Đáp án (C):</b> Cô Deborah viết thư nêu rõ nếu thêm 30 sinh viên thì cần hơn 75 chỗ nên phải chuyển sang phòng khác, suy ra phòng Chovey Community Room chỉ chứa tối đa 75 chỗ ngồi.",
    189: "💡 <b>Đáp án (D):</b> Trong email ngày 19/10, Giáo sư Whitford bày tỏ hy vọng Tiến sĩ Fiallo sẽ cân nhắc lời mời cùng hợp tác thực hiện các dự án nghiên cứu khoa học sắp tới.",
    190: "💡 <b>Đáp án (C):</b> Các công cụ bằng đá thuộc cùng đợt khai quật cổ vật được Tiến sĩ Fiallo xác định là phản ánh đời sống người dân từ hơn 800 năm trước.",
    191: "💡 <b>Đáp án (B) On Wednesday:</b> Email gửi lúc 6:31 AM thứ Hai 7/6: chuyến bay bị hủy và chuyến sớm nhất là sáng mai (thứ Ba 8/6). Cô Moreland dự kiến sẽ có mặt tại văn phòng đúng giờ để tham gia 'data security training', theo bảng lịch biểu sự kiện này diễn ra vào thứ Tư ngày 9/6 (Wednesday).",
    192: "💡 <b>Đáp án (D):</b> Cô Weaver nhận nhiệm vụ điều phối, sắp xếp dời lại toàn bộ lịch trình công tác, họp hành và phỏng vấn cho sếp Moreland -> Trợ lý điều hành (executive assistant).",
    193: "💡 <b>Đáp án (A):</b> Email yêu cầu chỉ họp với phòng nhân sự sau khi tất cả các ứng viên đã được phỏng vấn xong -> Nhằm đánh giá, thảo luận kết quả các buổi phỏng vấn.",
    194: "💡 <b>Đáp án (B):</b> Lịch công tác thứ Sáu lúc 2:00 P.M. ghi nội dung 'Technology updates', trùng khớp với cuộc hẹn của ông Eric Kim mà cô Cindy đã xin hoãn lại.",
    195: "💡 <b>Đáp án (B):</b> Ở câu cuối, cô Weaver xác nhận vẫn chưa liên lạc được với tất cả thành viên trong nhóm tiếp thị và cô sẽ tiếp tục cố gắng kết nối với họ.",
    196: "💡 <b>Đáp án (A):</b> Đoạn thông báo ghi rõ Jeffrey Stolartz là 'Gradey City's own' (người con bản xứ/sinh ra và lớn lên tại chính thành phố Gradey).",
    197: "💡 <b>Đáp án (B):</b> Ông Ellis đau đầu vì đột ngột nhận thông báo hai ca sĩ phải thay thế gấp ngay trước khi mùa luyện tập bắt đầu vào tháng Tám -> Phải gấp rút tuyển ca sĩ trong thời gian rất ngắn.",
    198: "💡 <b>Đáp án (C):</b> Email ngày 7/7 thông báo ông vừa mở tài khoản với Music Link Plus sáng hôm đó; phần hướng dẫn phía trên nêu nhà tuyển dụng phải nộp phí kích hoạt ban đầu là 300 euro.",
    199: "💡 <b>Đáp án (D):</b> Thông báo tuyển dụng yêu cầu các ứng viên trúng tuyển phải có mặt tại khán phòng Neufried Auditorium vào ngày 11 tháng 8 để bắt đầu các buổi tập luyện cho mùa diễn.",
    200: "💡 <b>Đáp án (D):</b> Ứng viên phải cung cấp video thử giọng bằng cách truy cập trang Resources và làm theo các hướng dẫn tải video lên hệ thống."
};