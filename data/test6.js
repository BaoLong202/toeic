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

// 1. DÀN KEY 200 CÂU TEST 6 (ĐÃ ĐỐI CHIẾU CHUẨN XÁC 100%)
window.TOEIC_KEYS[6] = parseKey("1C 2A 3B 4B 5C 6B 7A 8A 9C 10A 11C 12B 13B 14C 15C 16C 17B 18A 19A 20B 21A 22C 23C 24C 25C 26A 27A 28B 29A 30A 31C 32B 33D 34C 35A 36D 37C 38B 39A 40C 41C 42B 43A 44C 45D 46C 47A 48D 49A 50A 51D 52C 53B 54B 55B 56A 57B 58D 59C 60D 61C 62B 63C 64A 65B 66C 67C 68A 69A 70C 71C 72A 73D 74A 75A 76D 77A 78A 79B 80C 81B 82B 83C 84C 85B 86B 87C 88C 89B 90B 91A 92D 93C 94B 95B 96D 97C 98D 99B 100A 101C 102A 103B 104B 105D 106A 107D 108A 109B 110D 111C 112A 113C 114D 115A 116D 117B 118C 119B 120D 121B 122B 123A 124A 125D 126D 127B 128C 129C 130B 131C 132A 133D 134B 135D 136A 137C 138A 139A 140C 141B 142A 143A 144C 145B 146A 147B 148D 149B 150D 151A 152B 153D 154D 155A 156A 157C 158A 159B 160B 161C 162D 163D 164D 165B 166D 167A 168C 169C 170C 171B 172B 173C 174D 175D 176B 177A 178C 179D 180A 181D 182D 183C 184B 185C 186B 187C 188A 189C 190B 191B 192D 193A 194C 195B 196B 197D 198C 199A 200C");

// 2. FULL TRANSCRIPT LISTENING TEST 6
window.TOEIC_SCRIPTS[6] = `
  <h3>PART 1: PHOTOGRAPHS (Câu 1 - 6)</h3>
  <div class="script-question">
    <span class="script-speaker">1. M-Cn</span>
    <div class="script-opt">(A) A restaurant buffet is filled with food.</div>
    <div class="script-opt">(B) Cups are sitting in a sink.</div>
    <div class="script-opt correct-pink">(C) A dining area is empty.</div>
    <div class="script-opt">(D) Some candles have been lit.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">2. W-Br</span>
    <div class="script-opt correct-pink">(A) He's facing a machine.</div>
    <div class="script-opt">(B) He's lifting up a machine.</div>
    <div class="script-opt">(C) He's wiping down a machine.</div>
    <div class="script-opt">(D) He's repairing a machine with a tool.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">3. W-Am</span>
    <div class="script-opt">(A) A man is tying his shoe.</div>
    <div class="script-opt correct-pink">(B) A woman is looking through her purse.</div>
    <div class="script-opt">(C) They're boarding a bus.</div>
    <div class="script-opt">(D) They're walking past a bench.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">4. M-Cn</span>
    <div class="script-opt">(A) She's organizing a workstation.</div>
    <div class="script-opt correct-pink">(B) She's holding a water bottle.</div>
    <div class="script-opt">(C) She's removing a book from a shelf.</div>
    <div class="script-opt">(D) She's reaching for a pen.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">5. W-Am</span>
    <div class="script-opt">(A) A woman is lifting a suitcase onto a counter.</div>
    <div class="script-opt">(B) A woman is writing on a piece of paper.</div>
    <div class="script-opt correct-pink">(C) A woman is leaning against a glass door.</div>
    <div class="script-opt">(D) A woman is talking to a worker at a desk.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">6. M-Au</span>
    <div class="script-opt">(A) Some paintings have been hung above a sofa.</div>
    <div class="script-opt correct-pink">(B) Some wooden chairs are stacked in a corner.</div>
    <div class="script-opt">(C) There are lamps lighting some seating areas.</div>
    <div class="script-opt">(D) There are curtains framing a doorway.</div>
  </div>

  <h3>PART 2: QUESTION-RESPONSE (Câu 7 - 31)</h3>
  <div class="script-question">
    <span class="script-speaker">7. M-Au: How long will the renovations take?</span>
    <div class="script-opt correct-pink">(A) About a month.</div>
    <div class="script-opt">(B) Mostly the roof.</div>
    <div class="script-opt">(C) I finished that book.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">8. W-Am: What is the factory's inspection process like?</span>
    <div class="script-opt correct-pink">(A) It's quite thorough.</div>
    <div class="script-opt">(B) I didn't bring any.</div>
    <div class="script-opt">(C) He likes working nights.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">9. W-Am: Hasn't our merchandise arrived yet?</span>
    <div class="script-opt">(A) Handmade clothing.</div>
    <div class="script-opt">(B) I can drive you there.</div>
    <div class="script-opt correct-pink">(C) No, it was just shipped yesterday.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">10. W-Br: Who's buying beverages for the retreat?</span>
    <div class="script-opt correct-pink">(A) At the café.</div>
    <div class="script-opt">(B) I parked the car by the tree.</div>
    <div class="script-opt">(C) Carlos and I are.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">11. M-Au: Why is the reception at a different location?</span>
    <div class="script-opt">(A) Sure, let's go greet the guests.</div>
    <div class="script-opt">(B) Because the conference room wasn't big enough.</div>
    <div class="script-opt correct-pink">(C) Yes, I can hear you very well, thank you.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">12. W-Am: Would you like me to process your travel voucher?</span>
    <div class="script-opt">(A) I didn't know that.</div>
    <div class="script-opt correct-pink">(B) A much larger convention center.</div>
    <div class="script-opt">(C) Yes, if you have time.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">13. M-Au: How far away is Azuma's Dry Cleaning Company?</span>
    <div class="script-opt">(A) No, not until I've seen it.</div>
    <div class="script-opt correct-pink">(B) Oh, it's only a few minutes' walk from here.</div>
    <div class="script-opt">(C) Five dollars per shirt.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">14. W-Am: Do we have the registration forms ready for the students?</span>
    <div class="script-opt">(A) The manager's signature.</div>
    <div class="script-opt">(B) Yes, I printed them.</div>
    <div class="script-opt correct-pink">(C) We require uniforms.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">15. M-Au: I could provide you with a copy of the lease.</span>
    <div class="script-opt">(A) Great, I need it for my records.</div>
    <div class="script-opt">(B) At least another week.</div>
    <div class="script-opt correct-pink">(C) Why don't we offer a discount?</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">16. M-Cn: How many oil changes are scheduled for this afternoon?</span>
    <div class="script-opt">(A) A few replacement pieces.</div>
    <div class="script-opt">(B) Right now, there are five.</div>
    <div class="script-opt correct-pink">(C) Can you change the channel?</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">17. M-Cn: When was the last time you traveled for business?</span>
    <div class="script-opt">(A) About three years ago.</div>
    <div class="script-opt correct-pink">(B) It's the black briefcase.</div>
    <div class="script-opt">(C) I have some stamps.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">18. W-Br: Should I order the parts online or over the phone?</span>
    <div class="script-opt correct-pink">(A) Just half, thank you.</div>
    <div class="script-opt">(B) No, I've never been there.</div>
    <div class="script-opt">(C) By phone is best.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">19. W-Am: Where should I pick up my conference badge?</span>
    <div class="script-opt correct-pink">(A) We signed the lease.</div>
    <div class="script-opt">(B) About 10,000 units per week.</div>
    <div class="script-opt">(C) There are three tables in the lobby.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">20. M-Au: Isn't the computer network running a bit slow?</span>
    <div class="script-opt">(A) To an upgraded service.</div>
    <div class="script-opt correct-pink">(B) Actually, I prefer to walk.</div>
    <div class="script-opt">(C) A technician's on the way.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">21. M-Cn: How do you like this office space?</span>
    <div class="script-opt correct-pink">(A) An afternoon appointment.</div>
    <div class="script-opt">(B) I'd rather have a window.</div>
    <div class="script-opt">(C) On page five of the contract.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">22. M-Cn: You can use the company van to make your deliveries.</span>
    <div class="script-opt">(A) Okay, I'll go get the key.</div>
    <div class="script-opt">(B) A clothing manufacturer.</div>
    <div class="script-opt correct-pink">(C) It's on Market Street.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">23. W-Am: Isn't the city council meeting tonight?</span>
    <div class="script-opt">(A) Thanks, that would be great.</div>
    <div class="script-opt">(B) He's the recently elected mayor.</div>
    <div class="script-opt correct-pink">(C) Did you check their website?</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">24. W-Am: Could you look at the revised logo tomorrow?</span>
    <div class="script-opt">(A) A color printer.</div>
    <div class="script-opt">(B) The score was tied.</div>
    <div class="script-opt correct-pink">(C) I have time now.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">25. W-Am: Is the business local or national?</span>
    <div class="script-opt">(A) At the community center nearby.</div>
    <div class="script-opt">(B) We have stores in every province.</div>
    <div class="script-opt correct-pink">(C) The flight's in two hours.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">26. W-Br: How do you make sure your products will sell well?</span>
    <div class="script-opt correct-pink">(A) No, I bought it last month.</div>
    <div class="script-opt">(B) I conduct market research.</div>
    <div class="script-opt">(C) Okay, I'll bring it.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">27. W-Br: Who will fill the open manager position?</span>
    <div class="script-opt correct-pink">(A) Interviews will take place next week.</div>
    <div class="script-opt">(B) I'd like a refill on my coffee, please.</div>
    <div class="script-opt">(C) The desk should be in the corner.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">28. W-Am: Where do you want to store the extra brochures?</span>
    <div class="script-opt">(A) The price lists for new products.</div>
    <div class="script-opt correct-pink">(B) I think that's right.</div>
    <div class="script-opt">(C) There are none left.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">29. M-Au: The new bottling machine's been installed, hasn't it?</span>
    <div class="script-opt correct-pink">(A) We'll have two packs, please.</div>
    <div class="script-opt">(B) No, I didn't drive here.</div>
    <div class="script-opt">(C) We're expecting delivery this afternoon.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">30. W-Am: Shouldn't we update our security protocol?</span>
    <div class="script-opt correct-pink">(A) About an hour.</div>
    <div class="script-opt">(B) We have a good plan in place.</div>
    <div class="script-opt">(C) No, it wasn't.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">31. M-Au: The engineering team would like to meet sometime today.</span>
    <div class="script-opt">(A) Yes, Mr. Tom Rice from Kyoto.</div>
    <div class="script-opt">(B) Before or after the company-wide meeting?</div>
    <div class="script-opt correct-pink">(C) That was a long baseball game.</div>
  </div>

  <h3>PART 3: CONVERSATIONS (Câu 32 - 70)</h3>
  <div class="script-dialogue">
    <b>[Questions 32 - 34]</b><br>
    <b>W-Br:</b> I saw one of the new commercials about our business on television last week. <span class="correct-pink">[32] I guess the advertising campaign has already launched</span>.<br>
    <b>M-Cn:</b> This ad campaign's coming out at a great time for us. <span class="correct-pink">[33] It's our busy season—people are starting to book our tours for their vacations</span>.<br>
    <b>W-Br:</b> There's still some money in the budget. We should use it to advertise our most recent package: a guided exploration of the theater district, including tickets to a performance.<br>
    <b>M-Cn:</b> That's a good idea. <span class="correct-pink">[34] Let me check how much it would cost to add that information</span> to our current commercials.
  </div>

  <div class="script-dialogue">
    <b>[Questions 35 - 37]</b><br>
    <b>W-Am:</b> Martial, <span class="correct-pink">[35] we've been getting some complaints from our guests when they check out</span>. Some people think the parking garage fee is included in the room reservation. They don't know they have to pay when they exit.<br>
    <b>M-Cn:</b> Oh. Well, it's written on the confirmation they receive, but <span class="correct-pink">[36] I'll start reminding our guests at check-in as well</span>.<br>
    <b>W-Am:</b> Great, thank you. Also, <span class="correct-pink">[37] remember the landscaping crew is coming by next week to plant some spring flowers by the entrance of the lobby</span>. It's starting to feel a bit warmer outside.
  </div>

  <div class="script-dialogue">
    <b>[Questions 38 - 40]</b><br>
    <b>M-Au:</b> Paulina, congratulations on being voted <span class="correct-pink">[38] Nurse of the Year for our hospital</span>! You really deserve the honor.<br>
    <b>W-Am:</b> Thanks! I'm a little embarrassed by all the attention, though.<br>
    <b>M-Au:</b> Well, you shouldn't be. After all, your patients and colleagues all felt you should be recognized for your outstanding efforts. Actually, <span class="correct-pink">[39] I'm hoping you'll help me update the training materials for new nurses</span>.<br>
    <b>W-Am:</b> I'd be happy to help. And by the way, will you be at <span class="correct-pink">[40] the awards ceremony next week</span>? All the hospital's winners will be celebrated.<br>
    <b>M-Au:</b> Of course, I'm looking forward to it.
  </div>

  <div class="script-dialogue">
    <b>[Questions 41 - 43]</b><br>
    <b>M-Cn:</b> Hello, I'm looking for a book that's listed in <span class="correct-pink">[41] your library's catalog</span>, but I can't find it on the shelves. Could you help me?<br>
    <b>W-Am:</b> Sorry, <span class="correct-pink">[42] I'm helping another patron on the phone right now</span>. Let me get one of my coworkers for you.<br>
    <b>M-Au:</b> Hi, how can I help you?<br>
    <b>M-Cn:</b> I'm looking for a book about abstract art called Night Canvases.<br>
    <b>M-Au:</b> Oh, we just received several copies of that, but <span class="correct-pink">[43] they're still packed in the box</span>. If you come back tomorrow, they'll be ready to borrow.
  </div>

  <div class="script-dialogue">
    <b>[Questions 44 - 46]</b><br>
    <b>M-Au:</b> Sylvia, I just heard <span class="correct-pink">[44] the city mayor will hold a press conference this afternoon. Can you cover it?</span> I'll be at the opening of the new train station.<br>
    <b>W-Br:</b> Okay, I'll get a camera crew together right away. I hope the mayor will provide details about <span class="correct-pink">[45] the proposal to build an offshore wind farm</span>?<br>
    <b>M-Au:</b> Yes, that's what I heard he'll discuss. There's a lot of interest in wind energy, so this will likely be the lead story on tonight's news.<br>
    <b>W-Br:</b> Perfect. <span class="correct-pink">[46] I'm going to ask the mayor about funding for the project</span>. The city residents will want to know where the finances will come from.
  </div>

  <div class="script-dialogue">
    <b>[Questions 47 - 49]</b><br>
    <b>W-Br:</b> Koji, you weren't at the team meeting this morning. Is everything okay?<br>
    <b>M-Cn:</b> <span class="correct-pink">[47] I had to take my car to the mechanic for repairs</span>. What did I miss?<br>
    <b>W-Br:</b> Well, we received some good news: <span class="correct-pink">[48] our firm is planning to hire more accountants</span>.<br>
    <b>M-Cn:</b> That's great! We've been busier than ever since we started working with True Value Industries.<br>
    <b>W-Br:</b> Yes. By the way, there's an article on our website about the founder of True Value. I'd suggest reading it.<br>
    <b>M-Cn:</b> <span class="correct-pink">[49] I'll be sure to check it out</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 50 - 52]</b><br>
    <b>W-Am:</b> Let's discuss <span class="correct-pink">[50] the upcoming retreat for the architects at our firm</span>. How's the planning going, Hong-Tai and Raya?<br>
    <b>M-Cn:</b> Well, the Evans Nature Reserve said they can organize a two-day expedition for us.<br>
    <b>W-Br:</b> Yes, <span class="correct-pink">[51] they're even offering a wildlife photography workshop on the second day</span>. I'm excited about that!<br>
    <b>W-Am:</b> Oh, that is exciting! Do you know if we'll be able to camp in the reserve overnight?<br>
    <b>M-Cn:</b> Yes, that's an option. But I don't know if all our staff have tents and camping equipment. I'm sure we can rent enough for everybody, though. <span class="correct-pink">[52] Let me look into it</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 53 - 55]</b><br>
    <b>M-Au:</b> Hi, Ms. Espinosa. This is Malik calling from ACC <span class="correct-pink">[53] Internet Providers</span>. I'm here at your residence at 88 Glastonbury Avenue to set up your Internet.<br>
    <b>W-Am:</b> Oh, I'm sorry, but I'm still on my way home from work. <span class="correct-pink">[54] There's a lot of traffic right now</span>.<br>
    <b>M-Au:</b> I see. Well, my next client's house isn't too far away. <span class="correct-pink">[55] I could be back in about an hour</span>. Does that sound okay?<br>
    <b>W-Am:</b> Yes, that'd be great. Thank you so much!
  </div>

  <div class="script-dialogue">
    <b>[Questions 56 - 58]</b><br>
    <b>W-Am:</b> Klaus, you were on the research team that <span class="correct-pink">[56] went to the Arctic last month</span>, right? For the new project?<br>
    <b>M-Cn:</b> Yes, I'll be going again next month. Are you joining?<br>
    <b>W-Am:</b> Yeah. <span class="correct-pink">[57] Sabine can't make it, so the project coordinator asked me to take her place</span>.<br>
    <b>M-Cn:</b> Great! But prepare for the freezing temperatures. <span class="correct-pink">[58] I'd recommend getting a heated jacket</span>. The one I have is battery-operated, and there are heating elements inside the fabric. <span class="correct-pink">[58] I'll send you a link to the online store</span>. The jacket didn't cost too much.
  </div>

  <div class="script-dialogue">
    <b>[Questions 59 - 61]</b><br>
    <b>W-Br:</b> We just got a rush order from Great Fitness. They need <span class="correct-pink">[59] T-shirts</span> with their business name and logo printed on the front—1,000, to be exact.<br>
    <b>M-Cn:</b> That's an unusually large order.<br>
    <b>W-Br:</b> We're definitely going to need some employees to work overtime on it.<br>
    <b>M-Cn:</b> Hmm, I don't know how easy that's going to be. It's the summer, and a lot of employees were hoping to take time off.<br>
    <b>W-Br:</b> Well, okay. <span class="correct-pink">[60] We could offer them an additional day off next month</span>.<br>
    <b>M-Cn:</b> I'm still worried about the three other orders we need to complete this week.<br>
    <b>W-Br:</b> I know, but <span class="correct-pink">[61] Great Fitness orders from us all the time</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 62 - 64: Graphic / Sơ Đồ Bàn Tiệc Kỷ Niệm]</b><br>
    <b>M-Cn:</b> I'm looking forward to our <span class="correct-pink">[62] anniversary banquet</span>, Shreya. It's hard to believe we've been in business for ten years!<br>
    <b>W-Am:</b> I know! I was looking through old company photos last night. I found some from when we had just started and were a team of only three people.<br>
    <b>M-Cn:</b> Wow, <span class="correct-pink">[63] those would be great to use for our slide show during the welcome speech</span>.<br>
    <b>W-Am:</b> I agree. And by the way, since I'll be getting up a few times to make announcements, <span class="correct-pink">[64] I'd like to sit at the table closest to the stage</span>.<br>
    <b>M-Cn:</b> I'll make sure to reserve a seat for you there.
  </div>

  <div class="script-dialogue">
    <b>[Questions 65 - 67: Graphic / Lịch Trình Chuyến Xe Buýt]</b><br>
    <b>W-Br:</b> Thank you for holding. This is Bianca, how can I help you?<br>
    <b>M-Cn:</b> Hi, I have a ticket for the bus to Springdale this morning, but my plans have changed, and <span class="correct-pink">[65] I need to switch my destination</span>.<br>
    <b>W-Br:</b> Sure, I can help you with that.<br>
    <b>M-Cn:</b> Thanks very much. <span class="correct-pink">[66] I need the bus to Centerton instead</span>.<br>
    <b>W-Br:</b> No problem. If you purchased your bus ticket electronically, <span class="correct-pink">[67] I just need your confirmation number</span>.<br>
    <b>M-Cn:</b> Okay, let me just find the email that has it.
  </div>

  <div class="script-dialogue">
    <b>[Questions 68 - 70: Graphic / Bảng Giá Công Tắc Điện Bảng Điều Khiển]</b><br>
    <b>M-Au:</b> Henderson's Electricians, how can I help you?<br>
    <b>W-Am:</b> Hello, I'm calling because <span class="correct-pink">[68] I purchased a clothes dryer a few days ago</span>, but I have a problem. I'm not sure if my home's electric system can support it.<br>
    <b>M-Au:</b> Well, let's see. <span class="correct-pink">[69] Could you take a look at your electric panel?</span> There should be a series of switches on it.<br>
    <b>W-Am:</b> Sure, hold on... Okay, I'm looking at it.<br>
    <b>M-Au:</b> Okay, do you see any unused spaces where additional switches could be installed?<br>
    <b>W-Am:</b> Just one.<br>
    <b>M-Au:</b> I see. Well, a clothes dryer requires two spaces, so most likely we'd need to install something called a subpanel. The good news is that you'd only need <span class="correct-pink">[70] a 60-amp electrical switch</span> to fix the problem.
  </div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>
  <div class="script-dialogue">
    <b>[Questions 71 - 73]</b><br>
    <b>M-Cn:</b> Good morning, and welcome to the third annual <span class="correct-pink">[71] robotics trade show</span>. Please note that in order to accommodate the large number of guests who signed up for the afternoon panel discussion, <span class="correct-pink">[72] that event has been moved to Exhibit Hall B</span>. That's on the lower level, to the left of the elevators. And will the person who left <span class="correct-pink">[73] a backpack at the information desk</span> please return to the desk to claim your item? It's a silver Rugged Hiker model with a blue strap.
  </div>

  <div class="script-dialogue">
    <b>[Questions 74 - 76]</b><br>
    <b>W-Am:</b> Welcome to this course about computer programming. I'm Jin Ah-jeong. Unfortunately, the regular instructor, Mr. Ramirez, is sick today, so <span class="correct-pink">[74] I'll be filling in</span>. Although I've never taught this course before, <span class="correct-pink">[75] I've been a computer programmer for seven years</span>. Now, to begin, let's go over some terms that are often used in the field of computer programming. I'll write them on the board. <span class="correct-pink">[76] If you know any of their meanings, please raise your hand and I'll call on you</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 77 - 79]</b><br>
    <b>M-Au:</b> Hi, Min-ji. This is Anil Gupta from Jeremy's <span class="correct-pink">[77] Family Restaurants</span>, calling about the application you sent in. I was very impressed with your résumé and your successful completion of the managerial training program when you worked at Harry's Bistros. I understand the program included <span class="correct-pink">[78] training in using bookkeeping software</span>—that would be useful in our company. Also, your supervisor at Harry's spoke very highly of your performance as a manager, so <span class="correct-pink">[79] I hope you haven't accepted any offers yet</span>. Please call me at your earliest convenience at 555-0187.
  </div>

  <div class="script-dialogue">
    <b>[Questions 80 - 82]</b><br>
    <b>M-Cn:</b> Welcome to another segment of Belmac City Business News. Belmac City has one of <span class="correct-pink">[80] the biggest seaports in the country</span>. The port receives and distributes thousands of containers full of cargo each day. Goods from the ships are usually distributed throughout the region by train or by truck. However, sometimes the goods need to wait for days before they are transported, which can cause problems due to <span class="correct-pink">[81] lack of affordable storage space</span>. Unfortunately, lease costs for storage space in the area are too high for many shipping companies to afford. After the break, we'll hear from Pablo Alvarez, <span class="correct-pink">[82] owner of Alva Shipping</span>, about this issue. So stay tuned.
  </div>

  <div class="script-dialogue">
    <b>[Questions 83 - 85]</b><br>
    <b>M-Au:</b> Welcome! I'm delighted to be leading another <span class="correct-pink">[83] outdoor workshop here in the botanical gardens</span>. <span class="correct-pink">[83] The paintings that participants produced</span> last time were extraordinary! There's nothing like being surrounded by flowers to inspire creativity. Now, remember that your participation fee does <span class="correct-pink">[84] include a light lunch</span>. I see you've all found spots to set up your easels, and you all have your own canvas and paints. That's perfect, since we don't provide painting supplies. Before we get started, <span class="correct-pink">[85] let's take a moment to have everyone tell us their names and why they signed up</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 86 - 88]</b><br>
    <b>W-Br:</b> Currently, you're all working on a <span class="correct-pink">[86] design project</span> for Takahashi Systems. They like the suggestions you've made so far, such as how to update their logo to make it more modern. That's welcome news, because they have high standards. They mentioned <span class="correct-pink">[87] they'll be in the area this Friday and expressed interest in visiting our office</span>, so I've invited them. But as I was walking by the workstation area, I noticed a lot of clutter. Please remember that <span class="correct-pink">[88] making a good impression is important</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 89 - 91]</b><br>
    <b>M-Au:</b> Good morning, everyone. I appreciate you all getting here early before your <span class="correct-pink">[89] assembly line shift</span> starts. I have a major announcement to make: remember our new injection mold machine was acting up yesterday? <span class="correct-pink">[90] A technician came at the end of the day</span>, and it turns out the hydraulic safety switch is turning itself off randomly. A part needs to be replaced, but that won't happen until later this week. In the meantime, please use our older machine only, which, as you know, is not as fast as the new one. <span class="correct-pink">[91] I'll need you to start working as soon as possible</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 92 - 94]</b><br>
    <b>W-Br:</b> Hi, Mr. Rossi. I work at Callam Studios, and I'm a production assistant for a new film that'll be set in seventeenth-century France. I'm calling because <span class="correct-pink">[92] we'd like to hire you as a consultant for our film</span>. I recently <span class="correct-pink">[93] came across the book you wrote on the history of French fashion</span> and found it fascinating. Since you're an expert on French clothing and lifestyle trends of that time, your knowledge would be valuable as we develop costume and set designs. We'd be thrilled to work with you, and we're offering a generous compensation package. <span class="correct-pink">[94] I can send you the details; I'll use the email address that you have on your website</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 95 - 97: Graphic / Bản Đồ Tuyến Đưa Đón Đi Lại Thành Phố]</b><br>
    <b>W-Am:</b> Are you looking for a convenient way to get around the city? The city of Lake Point offers <span class="correct-pink">[95] on-demand transportation</span> in several of our neighborhoods. Just download the Lake Point City application onto your mobile phone. Once you make an appointment on the app, <span class="correct-pink">[96] a shuttle will arrive within fifteen minutes</span>. This easy-to-use service will take you to any destination within the service area, like your doctor's office or the library. And we've recently <span class="correct-pink">[97] expanded service to Westbrook</span>, so residents can take the shuttle to the soccer stadium.
  </div>

  <div class="script-dialogue">
    <b>[Questions 98 - 100: Graphic / Bản Đồ Sự Kiện Lễ Hội Khảo Cổ]</b><br>
    <b>M-Cn:</b> And our last news item today is the Green Chester <span class="correct-pink">[98] Archaeological Festival</span> taking place this weekend. Green Chester is home to some rich prehistoric findings. If you've ever wondered what goes into excavating a site, here's your chance to find out. There'll be a special workshop where you can get hands-on experience practicing excavation skills. The workshop will be held <span class="correct-pink">[99] on the grounds in front of the Historical Society Building</span>. As for getting here, <span class="correct-pink">[100] I recommend that you simply walk over</span>. Many streets will be blocked off for the festival, and it will take longer to drive.
  </div>
`;

// 3. GIẢI THÍCH CHI TIẾT READING (CÂU 101 - 200) TEST 6 (CHUẨN 100% THEO ĐỀ GỐC)
window.TOEIC_EXPLANATIONS[6] = {
    101: "💡 <b>Đáp án (C) perform:</b> Sau trợ động từ 'will' cần động từ nguyên mẫu: 'will perform a new work' (dàn nhạc sẽ biểu diễn một tác phẩm mới).",
    102: "💡 <b>Đáp án (A) polite:</b> Sau động từ liên kết 'be' và trạng từ 'especially' cần tính từ: 'be especially polite' (đặc biệt lịch sự khi tiếp xúc với khách hàng mới).",
    103: "💡 <b>Đáp án (B) her:</b> Đứng trước danh từ 'achievements' cần tính từ sở hữu 'her' (những thành tựu của cô Endou đã được khen ngợi).",
    104: "💡 <b>Đáp án (B) goals:</b> Cụm danh từ cố định 'financial goals' mang nghĩa các mục tiêu tài chính của tổ chức/doanh nghiệp.",
    105: "💡 <b>Đáp án (D) available:</b> Tính từ 'available' (có sẵn/sẵn dùng) đứng sau to-be: tính năng đặt món trực tuyến đã có sẵn trên trang web của quán cà phê.",
    106: "💡 <b>Đáp án (A) following:</b> Giới từ 'following' mang nghĩa là sau khi (= after): ngài thị trưởng dự định họp với ban vận động sau cuộc tranh luận trên truyền hình.",
    107: "💡 <b>Đáp án (D) reliable:</b> Cần tính từ đứng trước cụm danh từ 'copy machine': 'a more reliable copy machine' (một chiếc máy photocopy hoạt động đáng tin cậy hơn).",
    108: "💡 <b>Đáp án (A) cover:</b> Cụm danh từ cố định 'front cover' mang nghĩa trang bìa trước của tờ tạp chí.",
    109: "💡 <b>Đáp án (B) as:</b> Cấu trúc động từ 'serve as something' (đóng vai trò như là những món đồ tiện ích thiết thực và thanh lịch).",
    110: "💡 <b>Đáp án (D) fewer:</b> Đứng trước danh từ đếm được số nhiều 'delays' cần từ chỉ định lượng 'fewer' (ít sự chậm trễ chuyến bay hơn).",
    111: "💡 <b>Đáp án (C) objectively:</b> Cần trạng từ 'objectively' (một cách khách quan) đứng cuối mệnh đề để bổ nghĩa cho động từ 'approach' (tiếp cận đề tài một cách khách quan).",
    112: "💡 <b>Đáp án (A) despite:</b> Giới từ nhượng bộ 'despite' đi với danh động từ/cụm V-ing: 'despite being new to the company' (mặc dù mới vào làm việc tại công ty).",
    113: "💡 <b>Đáp án (C) widest:</b> Cấu trúc so sánh nhất: 'the widest selection of premium paints' (sự lựa chọn sơn cao cấp phong phú/đa dạng nhất).",
    114: "💡 <b>Đáp án (D) determine:</b> Động từ nguyên mẫu chỉ mục đích sau 'to': 'to determine employee satisfaction' (nhằm xác định/đo lường mức độ hài lòng của nhân viên).",
    115: "💡 <b>Đáp án (A) elaborately:</b> Trạng từ 'elaborately' (một cách công phu, tinh xảo) đứng trước bổ nghĩa cho phân từ dạng bị động 'decorated'.",
    116: "💡 <b>Đáp án (D) assignment:</b> Cụm danh từ 'first assignment' mang nghĩa nhiệm vụ/phân công công việc đầu tiên của ông Brighton tại công ty.",
    117: "💡 <b>Đáp án (B) roughly:</b> Trạng từ ước lượng số liệu 'roughly' (= approximately): 'roughly €5,000' (khoảng/chừng 5.000 euro).",
    118: "💡 <b>Đáp án (C) Anyone:</b> Đại từ bất định chỉ người 'Anyone' làm chủ ngữ số ít: 'Anyone who is unable to attend... is welcome' (Bất kỳ ai không thể tham dự đều có thể cử đại diện).",
    119: "💡 <b>Đáp án (B) revealed:</b> Câu đang thiếu động từ chính ở thì quá khứ đơn chia theo chủ ngữ 'Singer Maria Stanley': 'revealed today that she is scheduling a world tour' (hôm nay đã tiết lộ rằng cô ấy đang lên lịch cho chuyến lưu diễn).",
    120: "💡 <b>Đáp án (D) style:</b> Cụm danh từ ghép 'writing style' (phong cách viết/hành văn độc đáo của nhà viết tiểu sử).",
    121: "💡 <b>Đáp án (B) exceptional:</b> Cần tính từ đứng trước danh từ: 'exceptional quality' (chất lượng đặc biệt vượt trội/xuất sắc).",
    122: "💡 <b>Đáp án (B) nearly:</b> Trạng từ chỉ mức độ 'nearly all of' mang nghĩa gần như toàn bộ doanh thu của công ty.",
    123: "💡 <b>Đáp án (A) expenses:</b> Danh từ 'expenses' (các khoản chi phí) làm tân ngữ cho động từ 'covers': bảo hiểm chi trả các khoản chi phí liên quan đến sửa chữa/xây dựng lại.",
    124: "💡 <b>Đáp án (A) registration:</b> Cụm danh từ 'prompt registration' (việc đăng ký sớm/kịp thời được khuyến khích vì lớp sơ cứu nhanh hết chỗ).",
    125: "💡 <b>Đáp án (D) control:</b> Cấu trúc 'allow somebody/something to do something': 'allows Long Bridge Steel Corp. to control every aspect' (cho phép công ty kiểm soát mọi khâu sản xuất).",
    126: "💡 <b>Đáp án (D) Because of:</b> Sau chỗ trống là cụm danh từ 'its use on home-cooking shows' nên dùng giới từ chỉ nguyên nhân 'Because of' (Nhờ/Do được sử dụng trên các chương trình dạy nấu ăn...).",
    127: "💡 <b>Đáp án (B) collaboratively:</b> Cần trạng từ 'collaboratively' (một cách hợp tác/phối hợp) đứng sau bổ nghĩa cho động từ 'work'.",
    128: "💡 <b>Đáp án (C) verified:</b> Thể bị động ở thì hiện tại hoàn thành: 'has finally been verified' (hợp đồng cuối cùng đã được xác thực/phê duyệt bởi giám sát viên thành phố).",
    129: "💡 <b>Đáp án (C) Almost:</b> Trạng từ ước lượng 'Almost' đứng trước số đếm: 'Almost 4,000 systems' (Gần 4.000 hệ thống xử lý rác đang được sử dụng).",
    130: "💡 <b>Đáp án (B) as soon as:</b> Liên từ chỉ thời gian 'as soon as' (ngay sau khi): lịch trình hội nghị sẽ được đăng lên mạng ngay sau khi nó được gửi qua thư cho người tham dự.",
    131: "💡 <b>Đáp án (C) equipment:</b> Danh từ 'equipment' dùng để thay thế cho thiết bị giá đỡ xe đạp ('exterior bicycle racks') vừa nêu ở câu đầu.",
    132: "💡 <b>Đáp án (A):</b> 'No additional fee will be charged for bringing a bicycle' (Sẽ không tính thêm phụ phí khi mang theo xe đạp) bổ sung cho tính chất miễn phí ('complimentary') của chương trình.",
    133: "💡 <b>Đáp án (D) permitted:</b> Tính từ phân từ 'permitted' (được cho phép): lưu ý rằng xe đạp điện không được phép mang lên xe buýt.",
    134: "💡 <b>Đáp án (B) can be:</b> Thể bị động với động từ khuyết thiếu: 'trails that can be accessed' (những cung đường đạp xe tuyệt đẹp có thể được tiếp cận từ các tuyến buýt của chúng tôi).",
    135: "💡 <b>Đáp án (D) implemented:</b> Động từ thì quá khứ đơn 'implemented' mang nghĩa vừa triển khai/áp dụng một chương trình đào tạo sáng tạo mới cho công nhân.",
    136: "💡 <b>Đáp án (A) each:</b> Cụm định lượng 'each of which' (mỗi phòng trong số 4 phòng đó đại diện cho một khu vực hoạt động toàn cầu của công ty).",
    137: "💡 <b>Đáp án (C):</b> 'The course must be completed within a half hour' nêu rõ quy định thử thách giải đố thoát hiểm phải hoàn thành trong vòng nửa tiếng.",
    138: "💡 <b>Đáp án (A) as well:</b> Cụm trạng từ 'as well' đặt ở cuối câu mang nghĩa cũng vậy: công ty cũng dự định lắp đặt các phòng này tại những cơ sở sản xuất ngoài châu Âu.",
    139: "💡 <b>Đáp án (A) carry out:</b> Cụm động từ cố định 'carry out repairs' mang nghĩa tiến hành/thực hiện các công việc sửa chữa cần thiết.",
    140: "💡 <b>Đáp án (C):</b> 'It will be closed from Tuesday morning through Friday' cung cấp thời gian biểu chi tiết đóng cửa bãi đỗ xe vào tuần tới.",
    141: "💡 <b>Đáp án (B) leads:</b> Mệnh đề quan hệ với chủ ngữ số ít 'a walkway': động từ chia ở thì hiện tại đơn số ít là 'leads' (lối đi dẫn vòng qua bên hông tòa nhà).",
    142: "💡 <b>Đáp án (A) inconvenience:</b> Danh từ 'inconvenience' trong lời xin lỗi quen thuộc: 'We apologize for the inconvenience' (Chúng tôi thành thật xin lỗi vì sự bất tiện này).",
    143: "💡 <b>Đáp án (A) As a result:</b> Trạng từ liên kết chỉ hệ quả: Do việc cắt giảm nhân sự phòng thư tín, 'As a result' (Do đó/Kết quả là), thư sẽ không còn được phát tận bàn nhân viên.",
    144: "💡 <b>Đáp án (C) should designate:</b> Lời đề xuất/khuyên bảo: 'Each department should designate one employee' (Mỗi phòng ban nên chỉ định ra một nhân viên để phụ trách việc nhận thư).",
    145: "💡 <b>Đáp án (B) that:</b> Cấu trúc câu giả định sau lời khuyên: 'It is strongly recommended that employees contact...' (Khuyến nghị nhân viên nên chủ động liên hệ nhà gửi thư để hủy nhận thư rác).",
    146: "💡 <b>Đáp án (A):</b> 'Doing so will help streamline mail distribution' nêu rõ lợi ích của việc loại bỏ thư rác: làm như vậy sẽ giúp tinh gọn quy trình phân phát thư từ.",
    147: "💡 <b>Đáp án (B):</b> Mẩu quảng cáo nhấn mạnh: 'We cater to families, but everyone is welcome!' -> Nông trại rất thân thiện và phù hợp với các gia đình (family-friendly).",
    148: "💡 <b>Đáp án (D):</b> Bài viết gợi ý ăn việt quất như món ăn nhẹ, làm mứt, làm bánh nướng hoặc trộn cùng ngũ cốc ăn sáng, KHÔNG nhắc đến việc ăn chung với kem lạnh (ice cream).",
    149: "💡 <b>Đáp án (B):</b> Đoạn 1 nêu giá thiếc tăng vọt một phần do 'increasing worldwide demand for and manufacturing of electronics' -> Sự gia tăng sản xuất các mặt hàng điện tử.",
    150: "💡 <b>Đáp án (D):</b> Từ 'driven' trong ngữ cảnh các yếu tố dẫn tới/thúc đẩy việc tăng giá cả đồng nghĩa với **caused** (gây ra).",
    151: "💡 <b>Đáp án (A):</b> Bài báo giới thiệu Chilean Smelting, Inc. là 'a major producer' (một nhà sản xuất lớn) của ngành -> Nhà cung ứng hàng đầu về kim loại thiếc.",
    152: "💡 <b>Đáp án (B):</b> Bức thư do chủ công ty cảnh quan gửi tới chủ nhà mới mua để chúc mừng và chào mời các gói dịch vụ làm đẹp sân vườn -> Quảng bá doanh nghiệp làm cảnh quan.",
    153: "💡 <b>Đáp án (D):</b> Công ty chăm sóc bãi cỏ, cây cối, lát lối đi bằng gạch và tường đá, hoàn toàn KHÔNG có dịch vụ xây dựng nhà ở (houses).",
    154: "💡 <b>Đáp án (D):</b> Thư là thông báo dọn nhà trước ngày hết hạn hợp đồng thuê và hỏi về việc hoàn lại tiền đặt cọc ('return of my security deposit') -> Bà Valdez là người quản lý bất động sản/chủ nhà cho thuê.",
    155: "💡 <b>Đáp án (A):</b> Người thuê nhà khen phòng giặt đồ không bao giờ phải chờ lâu vì 'there are plenty of machines available' -> Có sẵn nhiều máy giặt và máy sấy.",
    156: "💡 <b>Đáp án (A):</b> Đội bảo trì thay chuông báo khói, thay bộ lọc lò sưởi và cách nhiệt chống gió lùa cho cửa sổ, KHÔNG hề nhắc đến việc sửa các thiết bị nhà bếp.",
    157: "💡 <b>Đáp án (C):</b> Vị trí [3] đứng giữa lời khen về phòng giặt đồ và dịch vụ sửa chữa của tòa nhà, rất khớp để bổ sung thêm lời khen: 'Tôi cũng rất thích việc cảnh quan cây xanh luôn được chăm sóc chu đáo'.",
    158: "💡 <b>Đáp án (A):</b> Mục đích email là xin lỗi và làm rõ nguyên nhân giao hàng trễ: bên cung cấp bao bì đã giao nhầm loại hộp carton quá nhỏ so với đơn hàng (explain the cause of a delay).",
    159: "💡 <b>Đáp án (B):</b> Câu cuối thư ghi: 'attach a brochure of our new products with a detailed price list' -> Đính kèm danh mục các sản phẩm mới có thể đặt mua kèm bảng giá.",
    160: "💡 <b>Đáp án (B):</b> Hai người nhắn tin chuẩn bị tài liệu cho buổi mở cửa chào đón khách xem nhà ('open house') và chuẩn bị đồ ăn nhẹ cho người mua tiềm năng ('potential buyers') -> Làm việc trong ngành bất động sản.",
    161: "💡 <b>Đáp án (C):</b> Câu trả lời 'Consider it done' (Cứ xem như xong rồi) thể hiện Ervin sẽ phụ trách việc ghé tiệm bánh để mua bánh ngọt theo yêu cầu của Mindy.",
    162: "💡 <b>Đáp án (D):</b> Tác giả Salvador Torres mở đầu bài viết bằng việc nhắc lại câu hỏi của một độc giả và giải thích các tìm hiểu nghiên cứu của mình về tiềm năng ứng dụng công nghệ in 3D vào trò chơi bàn cờ.",
    163: "💡 <b>Đáp án (D):</b> Đoạn 2 nêu rõ sản xuất theo lô nhỏ ('small batches') rất lý tưởng để phát hành các bản trò chơi giới hạn hoặc tạo ra các phiên bản mới bổ sung cho trò chơi sẵn có.",
    164: "💡 <b>Đáp án (D) [4]:</b> Vị trí [4] nằm ngay sau câu nói về sản xuất lô nhỏ, rất thích hợp để bổ sung ý: 'Các doanh nghiệp thậm chí còn có thể chọn những vật liệu tự phân hủy sinh học' trước câu kết luận.",
    165: "💡 <b>Đáp án (B):</b> Từ 'space' trong ngữ cảnh 'offers a peaceful, comfortable space' (mang đến một không gian yên bình, thoải mái) đồng nghĩa với **area** (khu vực/không gian).",
    166: "💡 <b>Đáp án (D):</b> Danh sách tiện nghi của phòng chờ sân bay có liệt kê mục: 'Printing and copying services' -> Có sẵn máy in cho hành khách sử dụng.",
    167: "💡 <b>Đáp án (A):</b> Phòng chờ phục vụ đồ uống, bánh nướng ngọt và đồ ăn nhẹ ('Beverages, baked goods, and snacks') -> Đồ ăn thức uống nhẹ (Refreshments).",
    168: "💡 <b>Đáp án (D):</b> Thông báo nêu rõ nhân dịp khai trương, phòng chờ giảm giá một nửa vé vào cửa từ ngày 15/3 đến ngày 30/3 ('offering Repose Lounge passes at half price').",
    169: "💡 <b>Đáp án (C):</b> Ban tổ chức kêu gọi người dân đi dạo chụp ảnh đường mòn vào ngày thứ Hai và sẽ chọn 10 bức ảnh đẹp nhất để đăng lên trang web của làng.",
    170: "💡 <b>Đáp án (C):</b> Hoạt động phát túi vải thay thế túi nilon và buổi tọa đàm về giảm thiểu rác thải cho thấy một trong những mục tiêu cốt lõi của ủy ban là khuyến khích việc giảm thiểu rác thải (waste reduction).",
    171: "💡 <b>Đáp án (B):</b> Lịch hoạt động tuần lễ xanh gồm dọn rác, phát túi vải, tọa đàm tiết kiệm năng lượng và tặng cây giống, KHÔNG có hoạt động đạp xe trên đường mòn.",
    172: "💡 <b>Đáp án (B):</b> Ba đồng nghiệp trao đổi về việc thu thập các bài viết và nội dung đóng góp cho số phát hành tiếp theo của bản tin nội bộ phòng ban ('department bulletin').",
    173: "💡 <b>Đáp án (C):</b> Câu trả lời 'I do have something' ngụ ý Jay có một mẩu tin tóm tắt quy trình xin nghỉ phép mà anh có thể đóng góp vào bản tin (make a contribution).",
    174: "💡 <b>Đáp án (D):</b> Gina Karp bận kín lịch phỏng vấn buổi chiều nên cô hẹn sẽ nộp báo cáo cho số bản tin tiếp theo ('ready for the next bulletin' - tức là vào tháng sau).",
    175: "💡 <b>Đáp án (D):</b> Jay cho biết anh chỉ cần khoảng 1 tiếng nữa là xong việc và sẽ gửi bản nháp trước giờ ăn trưa, vì vậy bước tiếp theo anh sẽ tập trung viết xong bản nháp lời nhắc đó.",
    176: "💡 <b>Đáp án (B):</b> Mục đích email đầu tiên của Tổng biên tập Liza Pacurar là gửi lời cảm ơn và tóm tắt lại các điểm mấu chốt đã thống nhất tại cuộc họp ban biên tập hôm nay.",
    177: "💡 <b>Đáp án (A):</b> Gạch đầu dòng cuối cùng nêu rõ bản thảo số đặc biệt có chứa bài phỏng vấn độc quyền với nghệ sĩ hoạt hình Bret Lusk ('interview with animation artist Bret Lusk').",
    178: "💡 <b>Đáp án (C):</b> Trong email thứ hai, Karine Xu nhắc lại: 'use Sklarr Press to print our magazine's special issue, just as we did last year' -> Nhà in này đã từng in ấn ấn phẩm cho tạp chí vào năm ngoái.",
    179: "💡 <b>Đáp án (D):</b> Việc sắp xếp dàn trang đặc biệt với nhiều bức ảnh ghép nghệ thuật (photomontage) đòi hỏi đội ngũ làm thêm giờ và gửi yêu cầu in ấn tùy biến, làm tăng chi phí.",
    180: "💡 <b>Đáp án (A):</b> Karine Xu viết: 'Next on my agenda is to remind our subscribers... I'll let them know via e-mail' -> Bước tiếp theo của cô là gửi email nhắc nhở độc giả đặt báo đón chờ số đặc biệt.",
    181: "💡 <b>Đáp án (D):</b> Giám đốc nhân sự Maggie Rosen gửi email ngỏ ý mời Shaan Iqbal lên phát biểu đôi lời chia sẻ về nhà sáng lập Walter Weber trong bữa tiệc vinh danh sắp tới.",
    182: "💡 <b>Đáp án (D):</b> Thư của bà Maggie có đoạn: 'Since you work closely with him in the finance department' -> Anh Iqbal làm việc tại phòng tài chính.",
    183: "💡 <b>Đáp án (C):</b> Iqbal kể lại rằng đích thân ông Walter Weber là người đã phỏng vấn anh khi anh nộp đơn vào công ty 15 năm trước ('interviewed me when I first applied...').",
    184: "💡 <b>Đáp án (B):</b> Từ 'note' trong ngữ cảnh 'Please note that I have a meeting...' (Xin hãy lưu ý/biết rằng tôi có cuộc họp...) đồng nghĩa với **be aware**.",
    185: "💡 <b>Đáp án (C):</b> Thư của Maggie thông báo phần phát biểu bắt đầu lúc 7:30 P.M., và Iqbal xác nhận anh sẽ đến bữa tiệc vừa kịp lúc phần phát biểu bắt đầu ('arrive at the party just as the speeches begin' -> khoảng 7:30 P.M.).",
    186: "💡 <b>Đáp án (B):</b> Thông báo nêu rõ toàn bộ lợi nhuận từ việc bán vé tour vườn sẽ được dùng để trồng lại cánh rừng cây dương ở công viên Presidio ('replanting the cottonwood forest' -> trồng cây).",
    187: "💡 <b>Đáp án (C):</b> Trong email, bà Rebecca Olton bày tỏ: 'It would be a privilege... to meet more people who value gardens as we members of the society do' -> Gặp gỡ những người có cùng niềm yêu thích làm vườn.",
    188: "💡 <b>Đáp án (A):</b> Tiêu chuẩn tham gia tour bắt buộc vườn chỉ trồng các loài cây bản địa ('include only plants native to the region'), trong khi vườn của bà Olton lại có những bụi hoa oải hương (lavender) không phải thực vật bản địa.",
    189: "💡 <b>Đáp án (C):</b> Mục thông tin bài giảng ghi rõ: 'All lectures occur on the third Wednesday of the month at 7:00 P.M.' -> Diễn ra định kỳ vào thứ Tư tuần thứ ba của mỗi tháng (take place every month).",
    190: "💡 <b>Đáp án (B):</b> Mục tiêu của bà Olton là trồng cây để thu hút chim chóc và động vật tự nhiên, rất trùng khớp với nội dung bài giảng tháng 3 'Nourish the Neighbors' (dùng thực vật bản địa để thu hút động vật hoang dã).",
    191: "💡 <b>Đáp án (B):</b> Quảng cáo nêu công ty Terra Jaunts chuyên tổ chức các hoạt động leo núi dã ngoại, cắm trại, hội thao cho các đợt nghỉ dưỡng gắn kết nội bộ của các công ty ('activities for company retreats' -> team-building).",
    192: "💡 <b>Đáp án (D):</b> Nông trại Pink Ridge Ranch của bà Newsom đã nộp đơn và được tổ chức xem xét làm điểm đến, suy ra trang trại phải đáp ứng tiêu chí bắt buộc số 1: nằm trong bán kính 100 km cách một thành phố vừa và lớn.",
    193: "💡 <b>Đáp án (A):</b> Ông Oliver Jeong đánh giá cao việc bà tự vẽ bảng danh mục minh họa các loài hoa và cây dại trên đất của mình ('created an illustrated list of all the native flowers and trees... none of our other hosts offers anything like this').",
    194: "💡 <b>Đáp án (C):</b> Bà Newsom cảm thấy may mắn vì hai vị khách có thể theo các chỉ dẫn bằng văn bản phức tạp để tìm đường tới trang trại sau khi ứng dụng GPS bị mất sóng -> Nông trại khá khó tìm đường.",
    195: "💡 <b>Đáp án (B):</b> Bà Newsom viết: 'The hiking paths on my property are quite overgrown, as your partner pointed out' -> Ông Peter Cumberland (cộng sự của Oliver) đã chỉ ra các con đường mòn đi bộ đang bị cỏ mọc um tùm.",
    196: "💡 <b>Đáp án (B):</b> Dựa vào lịch trình, khung giờ 1:00 - 2:00 P.M. là phần trình bày mục tiêu của 'President' (Chủ tịch), khớp với thông báo ông Harlington thuyết trình ở email đầu tiên -> Ông Harlington là Chủ tịch công ty A-Quality Electronics.",
    197: "💡 <b>Đáp án (D):</b> Thư mời yêu cầu: 'Please let me know as soon as possible whether you will be able to attend the afternoon meeting and dinner' -> Các quản lý cần báo sớm khả năng có mặt/thu xếp dự họp của mình.",
    198: "💡 <b>Đáp án (C):</b> Bảng lịch trình ghi nội dung thuyết trình lúc 2:00 P.M. về chi nhánh Kanazawa Electronics: 'operational successes and challenges faced by the subsidiary in the third quarter' -> Công ty con gặp phải một số khó khăn/thách thức trong quý 3.",
    199: "💡 <b>Đáp án (A):</b> Deborah Powell viết: 'I plan to update the executives on the marketing team's activities', tương ứng với khung giờ 3:00 - 5:00 P.M. dành cho các trưởng bộ phận trình bày báo cáo hoạt động.",
    200: "💡 <b>Đáp án (C):</b> Do trận bóng chày bắt đầu lúc 8:00 P.M., cô Powell đề xuất dời giờ ăn tối sớm hơn, bắt đầu vào khoảng 5:00 P.M. (thay vì 6:00 P.M. theo lịch nháp) để kịp đến sân vận động -> Đề xuất đổi lại giờ bữa ăn (Rescheduling a meal)."
};