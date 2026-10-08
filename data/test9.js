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

// 1. DÀN KEY 200 CÂU TEST 9 (CHUẨN XÁC 100% THEO FILE NGHE & ĐỀ READING)
window.TOEIC_KEYS[9] = parseKey("1D 2A 3C 4B 5C 6C 7C 8A 9B 10B 11B 12C 13A 14B 15B 16A 17A 18B 19C 20A 21C 22C 23B 24B 25C 26B 27B 28A 29C 30A 31A 32C 33A 34B 35D 36C 37B 38A 39D 40A 41C 42C 43B 44A 45C 46D 47B 48A 49C 50C 51B 52D 53C 54B 55C 56D 57C 58A 59A 60B 61B 62A 63D 64C 65C 66A 67D 68B 69B 70D 71D 72B 73A 74A 75C 76B 77C 78A 79B 80B 81C 82D 83B 84A 85D 86C 87D 88B 89A 90B 91C 92C 93C 94B 95D 96C 97B 98B 99A 100D 101A 102B 103B 104C 105A 106A 107C 108A 109B 110D 111C 112A 113C 114B 115D 116A 117C 118B 119D 120D 121D 122B 123C 124C 125A 126B 127B 128B 129D 130A 131B 132D 133A 134C 135D 136B 137A 138B 139C 140D 141A 142D 143D 144C 145A 146A 147D 148A 149D 150B 151C 152D 153B 154D 155A 156B 157B 158D 159C 160B 161A 162C 163D 164C 165B 166C 167D 168C 169A 170B 171C 172A 173B 174C 175D 176D 177D 178A 179B 180C 181C 182A 183D 184C 185B 186B 187A 188C 189D 190B 191C 192D 193C 194A 195B 196A 197C 198A 199C 200B");
// 2. FULL TRANSCRIPT LISTENING TEST 9 (ĐÃ CẬP NHẬT ĐÚNG THẺ HIGHLIGHT TỪ CÂU 1 ĐẾN 100)
window.TOEIC_SCRIPTS[9] = `
  <h3>PART 1: PHOTOGRAPHS (Câu 1 - 6)</h3>
  <div class="script-question">
    <span class="script-speaker">1. M-Cn</span>
    <div class="script-opt">(A) A man is placing books into a shelving unit.</div>
    <div class="script-opt">(B) A man is hanging up some flyers.</div>
    <div class="script-opt">(C) A man is picking up tools from the floor.</div>
    <div class="script-opt correct-pink">(D) A man is bending over some wires.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">2. W-Br</span>
    <div class="script-opt correct-pink">(A) A picnic area is covered by a roof.</div>
    <div class="script-opt">(B) A bin is filled with flowers.</div>
    <div class="script-opt">(C) A picnic area is shaded by trees.</div>
    <div class="script-opt">(D) A road leads to a picnic area.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">3. M-Cn</span>
    <div class="script-opt">(A) She's dusting a counter.</div>
    <div class="script-opt correct-pink">(B) She's loading paper into a copy machine.</div>
    <div class="script-opt">(C) She's distributing some envelopes.</div>
    <div class="script-opt">(D) She's opening some cabinet doors.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">4. W-Am</span>
    <div class="script-opt correct-pink">(A) Some people are waiting in line to order.</div>
    <div class="script-opt">(B) A menu board has been hung on a wall.</div>
    <div class="script-opt">(C) A server is placing some food on a tray.</div>
    <div class="script-opt">(D) A server is taking an order from a customer.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">5. M-Au</span>
    <div class="script-opt">(A) One of the men is stacking vegetables in a basket.</div>
    <div class="script-opt correct-pink">(B) One of the men is selling merchandise in front of a tent.</div>
    <div class="script-opt">(C) One of the men is riding a motorcycle down a street.</div>
    <div class="script-opt">(D) One of the men is walking into a store.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">6. W-Am</span>
    <div class="script-opt correct-pink">(A) The woman is standing in front of a painting.</div>
    <div class="script-opt">(B) The woman is carrying a painting through a doorway.</div>
    <div class="script-opt">(C) One of the paintings is displayed in a round frame.</div>
    <div class="script-opt">(D) Some paintings are leaning against a wooden bench.</div>
  </div>

  <h3>PART 2: QUESTION-RESPONSE (Câu 7 - 31)</h3>
  <div class="script-question">
    <span class="script-speaker">7. W-Br: Would you like me to check the price on that item?</span>
    <div class="script-opt">(A) A couple of bowls.</div>
    <div class="script-opt">(B) I hadn't noticed.</div>
    <div class="script-opt correct-pink">(C) Yes, thank you.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">8. M-Au: Shouldn't we have submitted the expense report by now?</span>
    <div class="script-opt correct-pink">(A) No, the deadline is tomorrow.</div>
    <div class="script-opt">(B) Yes, it is very expensive.</div>
    <div class="script-opt">(C) Did you check the batteries?</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">9. M-Cn: How can we resolve the problem with our client?</span>
    <div class="script-opt">(A) Please change the ink cartridge.</div>
    <div class="script-opt correct-pink">(B) By hiring a consulting firm.</div>
    <div class="script-opt">(C) His office is on the third floor.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">10. W-Am: Was the restaurant really expensive?</span>
    <div class="script-opt">(A) I can pick up some today.</div>
    <div class="script-opt correct-pink">(B) Yes, it was a lot.</div>
    <div class="script-opt">(C) Okay, I'll close the door.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">11. W-Am: When will the dishwasher prototype be ready?</span>
    <div class="script-opt">(A) On Treetown Avenue.</div>
    <div class="script-opt correct-pink">(B) Next Tuesday.</div>
    <div class="script-opt">(C) Okay, thanks for the update.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">12. M-Au: Let's cancel our appointment.</span>
    <div class="script-opt">(A) The shipping and receiving department.</div>
    <div class="script-opt">(B) My dentist has an office downtown.</div>
    <div class="script-opt correct-pink">(C) Sure, I'll do that now.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">13. W-Am: It's okay if we don't check these receipts until later.</span>
    <div class="script-opt correct-pink">(A) Good, because I'm busy at the moment.</div>
    <div class="script-opt">(B) I haven't seen that show either.</div>
    <div class="script-opt">(C) About two hundred dollars.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">14. M-Cn: Where can I find the shipping address?</span>
    <div class="script-opt">(A) He doesn't mind.</div>
    <div class="script-opt correct-pink">(B) It's on my business card.</div>
    <div class="script-opt">(C) No, I'm fine.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">15. M-Au: Which bus stop is closest to the apartment building?</span>
    <div class="script-opt">(A) No, I don't have any coins.</div>
    <div class="script-opt correct-pink">(B) The one on Eighth Street.</div>
    <div class="script-opt">(C) An extra bag for groceries.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">16. M-Cn: Who's the main performer at the music festival next weekend?</span>
    <div class="script-opt correct-pink">(A) The famous singer, Bradley Patel.</div>
    <div class="script-opt">(B) Some seats near the stage.</div>
    <div class="script-opt">(C) The corner of Main Street and First Avenue.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">17. W-Am: When are we meeting again?</span>
    <div class="script-opt correct-pink">(A) Tomorrow after lunch.</div>
    <div class="script-opt">(B) It was about two hours long.</div>
    <div class="script-opt">(C) I prefer to use local suppliers.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">18. M-Au: That project's been approved, right?</span>
    <div class="script-opt">(A) Dinner is at eight.</div>
    <div class="script-opt correct-pink">(B) We're waiting for the final cost estimate.</div>
    <div class="script-opt">(C) There is a store nearby.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">19. M-Cn: Did you put the brochures in the lobby?</span>
    <div class="script-opt">(A) The conference center is on Walnut Avenue.</div>
    <div class="script-opt">(B) Do you have a reservation?</div>
    <div class="script-opt correct-pink">(C) Yes, I left them at the front desk.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">20. M-Au: How soon will we be able to replace the furniture in the waiting room?</span>
    <div class="script-opt correct-pink">(A) We'll do that at the end of the summer.</div>
    <div class="script-opt">(B) Agreed, that painting looks good in this room.</div>
    <div class="script-opt">(C) Put all the old files upstairs.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">21. W-Br: Who is the keynote speaker on Friday?</span>
    <div class="script-opt">(A) The keys are on my desk.</div>
    <div class="script-opt">(B) Yes, she gave a nice speech.</div>
    <div class="script-opt correct-pink">(C) Here's the schedule.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">22. M-Au: When should we order the gift baskets?</span>
    <div class="script-opt">(A) No, just me this time.</div>
    <div class="script-opt">(B) From the florist down the street.</div>
    <div class="script-opt correct-pink">(C) Let's discuss that at our next meeting.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">23. M-Au: Why was the seminar agenda changed?</span>
    <div class="script-opt">(A) Try rebooting the computer.</div>
    <div class="script-opt correct-pink">(B) Because an additional speaker was added.</div>
    <div class="script-opt">(C) That's a good idea.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">24. W-Am: Are you taking the bus or a taxi to the client's office?</span>
    <div class="script-opt">(A) To pick up some coffee.</div>
    <div class="script-opt correct-pink">(B) I brought my car today.</div>
    <div class="script-opt">(C) They weren't too expensive.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">25. W-Br: Could you help me set up these chairs for the picnic?</span>
    <div class="script-opt">(A) She moved to Singapore last year.</div>
    <div class="script-opt">(B) The furniture store on Maple Street.</div>
    <div class="script-opt correct-pink">(C) I'm about to go pick up the cake.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">26. M-Au: Who'll be selected to work on the prototype?</span>
    <div class="script-opt">(A) No, it's not too heavy.</div>
    <div class="script-opt correct-pink">(B) Jacob's team has done some good work.</div>
    <div class="script-opt">(C) I already have some.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">27. M-Cn: Ms. Lambert is responsible for the payroll.</span>
    <div class="script-opt">(A) On the second floor.</div>
    <div class="script-opt correct-pink">(B) Yes, she's done it for years.</div>
    <div class="script-opt">(C) No, it shouldn't be too difficult.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">28. W-Br: Can't we extend the advertising campaign?</span>
    <div class="script-opt correct-pink">(A) We're already over budget.</div>
    <div class="script-opt">(B) Yes, it's a new printer.</div>
    <div class="script-opt">(C) A retirement bonus.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">29. M-Au: Please close the door so that the presentation can start.</span>
    <div class="script-opt">(A) The car keys are on my desk.</div>
    <div class="script-opt">(B) Our filing cabinets are full.</div>
    <div class="script-opt correct-pink">(C) We're waiting for a few more people.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">30. W-Br: How often have our packages been damaged during delivery?</span>
    <div class="script-opt correct-pink">(A) We need to find a new shipping partner.</div>
    <div class="script-opt">(B) Several customers are waiting to have their cars serviced.</div>
    <div class="script-opt">(C) No, we don't need to eat.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">31. M-Au: They're bringing a piano into the café, aren't they?</span>
    <div class="script-opt correct-pink">(A) There's not enough space.</div>
    <div class="script-opt">(B) The food is fantastic.</div>
    <div class="script-opt">(C) Turn left at the light.</div>
  </div>

  <h3>PART 3: CONVERSATIONS (Câu 32 - 70)</h3>
  <div class="script-dialogue">
    <b>[Questions 32 - 34]</b><br>
    <b>M-Au:</b> Hello, I'm calling because I'll be staying in the city next week for work, and <span class="correct-pink">[32] I'd like to purchase a temporary gym membership</span>.<br>
    <b>W-Br:</b> Of course. Our standard day pass is twenty dollars. <span class="correct-pink">[33] We also offer rentals on athletic equipment</span> like exercise mats and tennis rackets if you're interested.<br>
    <b>M-Au:</b> I'll just purchase the pass for now, thanks.<br>
    <b>W-Br:</b> Great. First, I'll need to set you up in our system. <span class="correct-pink">[34] Can I have your name and email address?</span>
  </div>

  <div class="script-dialogue">
    <b>[Questions 35 - 37]</b><br>
    <b>W-Br:</b> Welcome to Reynolds Ice Cream Factory! <span class="correct-pink">[35] I'm so glad that you'll be joining our quality assurance team</span>.<br>
    <b>M-Au:</b> Thanks! I'm excited to work with the rest of the group.<br>
    <b>W-Br:</b> Great. I saw on your résumé that you previously did quality control at a similar factory.<br>
    <b>M-Au:</b> Yes, <span class="correct-pink">[36] I learned a lot about food manufacturing regulations there</span>.<br>
    <b>W-Br:</b> Then you'll already be familiar with the testing we do. We test at the beginning of each shift to <span class="correct-pink">[37] make sure all the equipment has been cleaned and sanitized</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 38 - 40]</b><br>
    <b>M-Cn:</b> So, Jin, do you have a minute? I've got an assignment for you.<br>
    <b>W-Br:</b> Sure, what is it?<br>
    <b>M-Cn:</b> The human resources department is concerned that <span class="correct-pink">[38] employees aren't reading their weekly staff newsletter</span>. They asked if <span class="correct-pink">[39] one of our graphic designers could redesign the newsletter</span> to make it more attractive.<br>
    <b>W-Br:</b> All right, I'll start working on it after I finish with the website update.<br>
    <b>M-Cn:</b> <span class="correct-pink">[40] I'll ask Hiroki to take care of that so you're free</span> to work on the newsletter.
  </div>

  <div class="script-dialogue">
    <b>[Questions 41 - 43]</b><br>
    <b>M1:</b> Did you hear that Ms. Hamdi is retiring? There's going to be <span class="correct-pink">[41] an opening for an accounts payable manager</span>. I think you'd be a perfect fit for the job, Amanda.<br>
    <b>M2:</b> I agree. When anyone in accounting has a question, you're the one they go to.<br>
    <b>W-Am:</b> Thanks! The only thing I worry about is that <span class="correct-pink">[42] I've never managed a team before</span>.<br>
    <b>M2:</b> That's not a problem. The company provides an intensive training program for new managers. You learn how to motivate employees, how to handle budgets, all that stuff.<br>
    <b>W-Am:</b> I appreciate your encouragement. <span class="correct-pink">[43] I'll talk to Ms. Hamdi to learn more about what she does</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 44 - 46]</b><br>
    <b>W-Br:</b> Hi, Rodrigo. Would you like to join me and the team for lunch? We're going to Café Milano. <span class="correct-pink">[44] We've all been working hard to finish this advertising campaign for our client</span>.<br>
    <b>M-Au:</b> Sure, I can drive if you'd like.<br>
    <b>W-Br:</b> <span class="correct-pink">[45] The café is just down the street</span>.<br>
    <b>M-Au:</b> Oh, they must have opened a second location. I only know about the one across town.<br>
    <b>W-Br:</b> Yes, this one just opened. Would you like to see the menu? <span class="correct-pink">[46] I have a copy in my office</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 47 - 49]</b><br>
    <b>M-Au:</b> Thanks for agreeing to be interviewed for Textiles Quarterly about <span class="correct-pink">[47] your company's recycling process</span>. Our readers will be intrigued.<br>
    <b>W-Am:</b> Simply put, we shred discarded fabric, turn it into a watery mixture called slurry, and then dry it and press it into new sheets of fabric. That fabric is then available to create new products. <span class="correct-pink">[48] Reducing unnecessary waste is our goal</span>.<br>
    <b>M-Au:</b> It sounds like a great way to use leftover materials.<br>
    <b>W-Am:</b> Unfortunately, our facility is currently able to process only cotton waste. But in the next few years, we should be able to recycle more types of textiles here. <span class="correct-pink">[49] It's my hope that it could eventually become as common as recycling aluminum is now</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 50 - 52]</b><br>
    <b>M-Au:</b> Well, I think we've found the right person for the job. Sergey has a confident presence when speaking with reporters, and he knows the travel industry well. He'll be <span class="correct-pink">[50] a great spokesperson for our airline</span>.<br>
    <b>W-Br:</b> I liked the media clips he shared with us. He speaks clearly and naturally. However, he also does some consulting as an extra source of income. <span class="correct-pink">[51] Will he be available whenever we need him?</span><br>
    <b>M-Au:</b> You bring up a good point. We should call him about that.<br>
    <b>W-Br:</b> Well, we have his final interview scheduled for tomorrow. <span class="correct-pink">[52] Let's wait until then</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 53 - 55]</b><br>
    <b>W-Br:</b> Good morning, Mr. Murray. I'm here to help you start <span class="correct-pink">[53] planning the opening of your newest art gallery</span>.<br>
    <b>M-Au:</b> Great! As you know, this will be our third location, so I think I might like to try a different kind of approach this time.<br>
    <b>W-Br:</b> I understand. <span class="correct-pink">[54] I have many options for you to consider</span>.<br>
    <b>M-Au:</b> Glad to hear it.<br>
    <b>W-Br:</b> <span class="correct-pink">[55] Let me grab the catering menu and the book of flower selections from my van</span>. It's parked just outside.
  </div>

  <div class="script-dialogue">
    <b>[Questions 56 - 58]</b><br>
    <b>M-Cn:</b> Thanks for joining my podcast, Bianca. I'm enjoying your unique cookbook, which <span class="correct-pink">[56] takes traditional dishes from around the world and adds unusual ingredients</span>, which gives them a contemporary flair. What's your inspiration?<br>
    <b>W-Br:</b> Well, after finishing university, I was looking for a way to combine <span class="correct-pink">[57] my knowledge of history that I learned there</span> with cooking. So I decided to attend culinary school.<br>
    <b>M-Cn:</b> I also noticed that <span class="correct-pink">[58] you provide the recipes in a variety of other languages</span>. That's a nice touch that many readers will appreciate.
  </div>

  <div class="script-dialogue">
    <b>[Questions 59 - 61]</b><br>
    <b>W-Am:</b> Hi, Jisu and Alberto, are you planning on attending <span class="correct-pink">[59] the pharmaceutical conference</span> next month? I think it'll be a great opportunity for us to learn from and network with other industry professionals.<br>
    <b>M-Au:</b> Yes, we're going. In fact, <span class="correct-pink">[60] Alberto and I will be leading a round-table discussion</span> on sustainable healthcare.<br>
    <b>W-Am:</b> That's fantastic! When is it?<br>
    <b>M-Au:</b> I can't remember the time. Alberto, do you have the schedule?<br>
    <b>M-Cn:</b> Yes, I actually just downloaded the conference's app. It should be listed there... It looks like it's on Thursday at four.<br>
    <b>W-Am:</b> Great. <span class="correct-pink">[61] I'll download the app now</span> and sign up.
  </div>

  <div class="script-dialogue">
    <b>[Questions 62 - 64: Graphic / Lịch Ưu Đãi Công Viên Nước]</b><br>
    <b>W-Br:</b> Our water park will be reopening for the summer season soon, and <span class="correct-pink">[62] we're looking for ways to increase park attendance</span>. This has been an ongoing problem.<br>
    <b>M-Cn:</b> I agree. It's mainly weekdays that have poor attendance, so I've come up with a plan with special offers on those days. What do you think?<br>
    <b>W-Br:</b> It's good. I like the free parking. In fact, I think we should offer it on another day too. <span class="correct-pink">[63] How about we replace the free arcade tickets with another day of free parking?</span><br>
    <b>M-Cn:</b> Sure, but first, I'm going to talk to the maintenance staff and <span class="correct-pink">[64] make sure the repairs to the overflow parking area are done</span> before customers start arriving.
  </div>

  <div class="script-dialogue">
    <b>[Questions 65 - 67: Graphic / Giá Kệ Cửa Hàng Bảo Tàng]</b><br>
    <b>W-Am:</b> I can't find this shirt in my size. Do you have any more in a size small?<br>
    <b>M-Cn:</b> <span class="correct-pink">[65] The exhibit of Narumi Azuma's drawings is very popular</span>. <span class="correct-pink">[65] The gift shop has sold out of a lot of the merchandise</span>. Do you want me to see if the display shirt is a small?<br>
    <b>W-Am:</b> Sure, that print is one of my favorites.<br>
    <b>M-Cn:</b> You're in luck, it's a small. I'll ring it up for you. Are you a museum member?<br>
    <b>W-Am:</b> No, I'm not.<br>
    <b>M-Cn:</b> <span class="correct-pink">[67] You might consider becoming one. Members get a ten percent discount at the gift shop</span>.<br>
    <b>W-Am:</b> I'll think about it. For now, I'll just pay the full price of <span class="correct-pink">[66: $35]</span> for the T-shirt.
  </div>

  <div class="script-dialogue">
    <b>[Questions 68 - 70: Graphic / Sơ Đồ Thiết Kế Sân Vườn]</b><br>
    <b>W-Am:</b> Hi, I'm interested in installing a new fence on my property.<br>
    <b>M-Cn:</b> You called the right place. What type of fence are you looking for?<br>
    <b>W-Am:</b> <span class="correct-pink">[68] Something sturdy to put around the garden to keep animals from eating the vegetables</span>.<br>
    <b>M-Cn:</b> Okay. A mesh fence might work well for you. In fact, right now we have a promotion on fences. <span class="correct-pink">[69] If you pay half the cost in advance, you'll get twenty percent off the price</span>.<br>
    <b>W-Am:</b> Sounds great. Can you give me a cost estimate?<br>
    <b>M-Cn:</b> <span class="correct-pink">[70] Not until I take measurements. I can do that on Saturday</span> if you're available.
  </div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>
  <div class="script-dialogue">
    <b>[Questions 71 - 73]</b><br>
    <b>W-Br:</b> Welcome aboard Sunshine Cruises! On today's tour, you'll have the opportunity to see several of the city's most famous <span class="correct-pink">[71] buildings directly from the Camille River</span>. Our route along the river provides a great view of the architecture, and <span class="correct-pink">[72] we also have a professional photographer on board the boat</span> who is available to take your picture for a small fee. Okay, it's time for us to get going. <span class="correct-pink">[73] Please take your seats for departure</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 74 - 76]</b><br>
    <b>M-Cn:</b> Attention, customers of George's Grocery: we are pleased to share the launch of our <span class="correct-pink">[74] Shopper's Rewards Program</span>, and want you to be a part of it! This new program offers all members exclusive perks like personalized coupons and special discounts. Signing up is easy and can be done right at the register when you check out. <span class="correct-pink">[75] Just present your driver's license or other identification</span>, and you'll be given a membership card. Also, don't forget that <span class="correct-pink">[76] we will be closed tomorrow in honor of the national holiday</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 77 - 79]</b><br>
    <b>W-Am:</b> This just in on News Channel 6: <span class="correct-pink">[77] there is a traffic delay</span> on Highway 59 with expected delays of about fifteen minutes in the direction of the sports stadium. Apparently, <span class="correct-pink">[78] a tree has fallen into the easternmost lane of the road</span>. Many residents will recognize this tree—it's been featured in many publications about the area. Join me as I interview Jing-da Wei, <span class="correct-pink">[79] an aerial photographer</span> who has captured some of the most iconic images of this tree. Mr. Wei, thanks for talking with me.
  </div>

  <div class="script-dialogue">
    <b>[Questions 80 - 82]</b><br>
    <b>M-Cn:</b> Junko, I just read your email about the photo-sharing app that our <span class="correct-pink">[80] social media company</span> is launching tomorrow. You know, the email about updating the language in the community guidelines for the app? We've already spent a lot of time reviewing the guideline document, and actually, <span class="correct-pink">[81] I was just about to post it</span>. Since we'll both be at the all-staff meeting at one o'clock, <span class="correct-pink">[82] let's stay after it finishes to touch base</span> on upcoming projects.
  </div>

  <div class="script-dialogue">
    <b>[Questions 83 - 85]</b><br>
    <b>W-Am:</b> Thanks again for taking on this project. <span class="correct-pink">[83] You'll be authoring a comprehensive handbook that describes all the standard operating procedures</span> to be used by our <span class="correct-pink">[84] flight crew and airport staff</span>. The goal is to have a master document from which we can pull out different sections as needed. On your screens, <span class="correct-pink">[85] you'll see a list of who will be responsible for drafting each chapter</span>. All chapters will be co-written with one other author.
  </div>

  <div class="script-dialogue">
    <b>[Questions 86 - 88]</b><br>
    <b>M-Au:</b> One final thing before we close the team leaders' meeting: some educators from various countries will be visiting our company next week. I will be giving a brief presentation to introduce all of <span class="correct-pink">[86] the educational software products</span> we make. After that, <span class="correct-pink">[87] I'd like some of you to give demonstrations of the software your team developed</span>. I'll have a final agenda ready soon, and will meet with those of you who will be presenting that day to go over the details. We wanted to go to lunch with the visitors afterward at the restaurant next door, but it's closed for renovations. Luckily, <span class="correct-pink">[88] a new restaurant has opened close by</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 89 - 91]</b><br>
    <b>M-Cn:</b> Are you ready to launch a new career in the technology industry? At Joblift Enterprises, we provide <span class="correct-pink">[89] hands-on training</span> to help you learn the skills and earn the certifications that tech professionals need. Unlike other job training programs, <span class="correct-pink">[90] our courses are tuition-free</span>, so students leave our school debt-free and ready to pursue their careers. Our schools are conveniently located throughout the Grand Lakes region. <span class="correct-pink">[91] Visit our website today to find the location closest to you</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 92 - 94]</b><br>
    <b>W-Br:</b> I'd like to thank you all for attending <span class="correct-pink">[92] Omnicon Department Stores' staff meeting</span>. As you'll recall, six months ago, <span class="correct-pink">[93] we made a deal with Euphora sports clothing to sell their merchandise exclusively in our department stores</span>. The hope is that we can attract new customers to our stores by selling this brand. Data show that foot traffic in the department stores containing Euphora clothing is up twenty percent from last year. Keep in mind, however, that <span class="correct-pink">[94] total sales revenues are still being calculated</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 95 - 97: Graphic / Bảng Phí Đỗ Xe Thành Phố]</b><br>
    <b>M-Au:</b> Thanks for inviting me to represent <span class="correct-pink">[95] the parking authority</span> at this month's city council meeting. As you know, parking in city parking garages <span class="correct-pink">[96] will no longer be free on Saturdays</span>. My office has updated the parking rate schedule and posted copies in all city garages. If you look at the screen, you'll see the new rates that went into effect this week. We're planning to use some of the additional revenue to cover the cost of new payment kiosks for the garages. <span class="correct-pink">[97] I will provide a revenue report at next month's meeting</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 98 - 100: Graphic / Thông Tin Chuyến Bay]</b><br>
    <b>W-Am:</b> Attention, passengers: <span class="correct-pink">[98] Flight AU354</span> will now be departing from a different gate. (Bảng điện tử đối chiếu chuyến AU354 bay tới Los Angeles). The new gate will appear on screens throughout the terminal shortly. Your boarding time remains as scheduled and will begin in approximately twenty-five minutes. If you do not yet have a seat assignment, please come up to the counter now so that <span class="correct-pink">[99] Claudia can assist you with seat assignments</span>. And one important reminder: all carry-on baggage must comply with our height and width restrictions. <span class="correct-pink">[100] Size check templates are available</span> throughout the terminal for your reference.
  </div>
`;

// 3. GIẢI THÍCH CHI TIẾT READING (CÂU 101 - 200) TEST 9 (CHUẨN THEO ĐỀ GỐC)
window.TOEIC_EXPLANATIONS[9] = {
    101: "💡 <b>Đáp án (A) records:</b> Sau tính từ sở hữu 'Our' cần danh từ số nhiều làm chủ ngữ cho động từ nguyên mẫu 'indicate': 'Our records indicate...' (Hồ sơ/dữ liệu của chúng tôi cho thấy xe của công ty bạn sắp đến hạn bảo dưỡng định kỳ).",
    102: "💡 <b>Đáp án (B) main:</b> Cụm danh từ ghép 'main entrance' mang nghĩa lối vào chính: lối vào chính của tòa nhà văn phòng sẽ đóng cửa vào thứ Ba vì thi công.",
    103: "💡 <b>Đáp án (B) carefully:</b> Cần trạng từ 'carefully' (một cách cẩn thận) đứng sau bổ nghĩa cho cụm động từ thể bị động 'must be handled and stored'.",
    104: "💡 <b>Đáp án (C) allows:</b> Cấu trúc quen thuộc 'allow somebody/something to do something': 'allows trains to switch quickly' (cho phép các đoàn tàu chuyển đổi nhanh giữa hai chế độ điện và dầu diesel).",
    105: "💡 <b>Đáp án (A) stores:</b> Sau số từ '28' và tính từ 'new' cần danh từ đếm được số nhiều: 'open 28 new stores' (khai trương 28 cửa hàng mới trong vòng 3 năm tới).",
    106: "💡 <b>Đáp án (A) seeking:</b> Động từ ở thì hiện tại tiếp diễn 'is seeking new tenants' mang nghĩa trung tâm thương mại đang tìm kiếm khách thuê mới cho các mặt bằng bán lẻ còn trống.",
    107: "💡 <b>Đáp án (C) her:</b> Đứng trước cụm danh từ 'distinctive style' cần tính từ sở hữu 'her': 'developed her distinctive style' (đã định hình nên phong cách độc đáo của riêng cô ấy).",
    108: "💡 <b>Đáp án (A) around:</b> Giới từ 'around' dùng để chỉ mốc thời gian ước lượng: 'end around 4:00 P.M.' (kết thúc vào khoảng 4 giờ chiều).",
    109: "💡 <b>Đáp án (B) celebrated:</b> Dấu hiệu thời gian trong quá khứ 'Last Monday' (Thứ Hai tuần trước) nên động từ chia ở thì quá khứ đơn 'celebrated'.",
    110: "💡 <b>Đáp án (D) proposal:</b> Sau sở hữu cách 'Ms. Xuan's' cần danh từ: 'Ms. Xuan's proposal for reducing...' (bản đề xuất giảm mức tiêu thụ năng lượng công ty của cô Xuan rất đáng để cân nhắc).",
    111: "💡 <b>Đáp án (C) enthusiastically:</b> Trạng từ 'enthusiastically' (một cách hào hứng, phấn khởi) đứng trước bổ nghĩa cho động từ chính 'accepted'.",
    112: "💡 <b>Đáp án (A) opposite:</b> Giới từ vị trí 'opposite' mang nghĩa đối diện (= across from): phòng tranh nằm ở cuối phía bắc phố Arch, đối diện với quán Verdigris Bistro.",
    113: "💡 <b>Đáp án (C) to become:</b> Cấu trúc động từ 'promise to do something': 'promised to become a mentor' (đã hứa sẽ trở thành người cố vấn cho cô Winston sau khi nghỉ hưu).",
    114: "💡 <b>Đáp án (B) widely:</b> Cụm trạng từ - tính từ 'widely available' mang nghĩa được phân phối/bày bán rộng rãi trên thị trường.",
    115: "💡 <b>Đáp án (D) partnerships:</b> Cụm thành ngữ cố định 'form partnerships with somebody' mang nghĩa thiết lập mối quan hệ hợp tác/đối tác với các doanh nghiệp địa phương.",
    116: "💡 <b>Đáp án (A) knowledge:</b> Cụm danh từ 'limited knowledge of a product' mang nghĩa sự hiểu biết còn hạn chế về một sản phẩm nào đó.",
    117: "💡 <b>Đáp án (C) Something:</b> Đại từ bất định chỉ sự vật/hiện tượng 'Something' làm chủ ngữ số ít: 'Something is preventing the graphic artists...' (Có điều gì đó đang ngăn cản các nhà thiết kế truy cập các tệp ảnh).",
    118: "💡 <b>Đáp án (B) Despite:</b> Sau chỗ trống là cụm danh từ 'a delay' nên chọn giới từ chỉ sự nhượng bộ 'Despite' (Mặc dù có sự chậm trễ, công ty vẫn hoàn thành cải tạo trước thời hạn).",
    119: "💡 <b>Đáp án (D) effectively:</b> Trạng từ 'effectively' mang nghĩa trên thực tế/coi như là: cửa hàng coi như đã phải ngừng hoạt động kinh doanh trong lúc hệ thống quẹt thẻ tín dụng bị ngoại tuyến.",
    120: "💡 <b>Đáp án (D) over:</b> Giới từ 'over' đi với khoảng thời gian: 'over the last two years' (trong suốt khoảng thời gian 2 năm qua).",
    121: "💡 <b>Đáp án (D) may submit:</b> Động từ khuyết thiếu kết hợp động từ nguyên mẫu chủ động: 'may submit up to three applications' (các nhóm phi lợi nhuận có thể nộp tối đa 3 bộ hồ sơ xin tài trợ).",
    122: "💡 <b>Đáp án (B) favorably:</b> Trạng từ 'favorably' (một cách tích cực/ưu ái) bổ nghĩa cho động từ 'reacted': giới phê bình đã phản hồi vô cùng tích cực về vở nhạc kịch mới.",
    123: "💡 <b>Đáp án (C) among:</b> Giới từ 'among' mang nghĩa trong số / trong giới: 'well-known among writers and publishers' (nổi tiếng trong giới nhà văn và các nhà xuất bản).",
    124: "💡 <b>Đáp án (C) soar:</b> Cấu trúc tác động 'cause something to do something': 'caused the price... to soar' (khiến cho giá của một số mặt hàng đồ gỗ tăng vọt lên cao).",
    125: "💡 <b>Đáp án (A) magnetic:</b> Cần tính từ đứng trước danh từ: 'the magnetic tray' (khay từ tính/khay nam châm gắn chắc vào bất kỳ bề mặt kim loại phẳng nào).",
    126: "💡 <b>Đáp án (B) neglected:</b> Cấu trúc 'neglect to do something' mang nghĩa sao nhãng, bỏ sót hoặc quên không làm gì: khách hàng đã quên không mua gói bảo hành mở rộng.",
    127: "💡 <b>Đáp án (B) engaged:</b> Sau động từ nối 'remain' cần tính từ: 'remain engaged' (vẫn duy trì sự tập trung, chăm chú cuốn hút theo suốt bài thuyết trình).",
    128: "💡 <b>Đáp án (B) In addition to:</b> Cụm giới từ 'In addition to' mang nghĩa ngoài ra, bên cạnh: 'In addition to fresh fruit and vegetables...' (Bên cạnh rau quả tươi, các tiểu thương còn bán nhiều đồ thủ công).",
    129: "💡 <b>Đáp án (D) Whichever:</b> Từ hạn định 'Whichever' đứng trước danh từ: 'Whichever route they choose' (Bất kể lộ trình nào họ lựa chọn, nhóm quản lý cũng mất khoảng 4 tiếng lái xe).",
    130: "💡 <b>Đáp án (A) rigorous:</b> Cần tính từ đứng trước danh từ 'inspections': 'rigorous inspections' (trải qua các cuộc kiểm tra chất lượng vô cùng nghiêm ngặt để đảm bảo không có lỗi sót).",
    131: "💡 <b>Đáp án (B) wood:</b> Câu sau nhắc tới các sản phẩm làm bằng gỗ sồi ('oak shelving system'), nên câu trước phù hợp nhất là tôn vinh vẻ đẹp của chất liệu gỗ tự nhiên ('natural wood').",
    132: "💡 <b>Đáp án (D):</b> Câu làm rõ quan điểm những mắt gỗ nhỏ hay vết xước không phải khuyết tật: 'They are what makes each piece unique' (Chính chúng là điều tạo nên nét độc nhất cho từng sản phẩm).",
    133: "💡 <b>Đáp án (A) Moreover:</b> Trạng từ liên kết bổ sung ưu điểm thiết kế: 'Moreover, the wall-mounted design frees up floor space' (Hơn nữa, thiết kế gắn tường còn giúp giải phóng diện tích sàn nhà).",
    134: "💡 <b>Đáp án (C) retailers:</b> Cụm danh từ ghép 'furniture retailers' mang nghĩa các nhà bán lẻ đồ nội thất trên khắp cả nước.",
    135: "💡 <b>Đáp án (D) components:</b> Danh từ 'components' (các linh kiện/bộ phận máy móc): đảm bảo toàn bộ các bộ phận của nồi cơm điện đều đã nguội hẳn trước khi lau rửa.",
    136: "💡 <b>Đáp án (B) can be:</b> Thể bị động với động từ khuyết thiếu chỉ khả năng: 'can be damaged by abrasive cleaners' (lớp chống dính có thể bị hỏng bởi các chất tẩy rửa mài mòn mạnh).",
    137: "💡 <b>Đáp án (A):</b> Câu tiếp nối bước ngâm nồi trong nước xà phòng ấm 10 phút: 'Then, use a soft brush or sponge to finish cleaning' (Sau đó, hãy dùng bàn chải mềm hoặc miếng bọt biển để hoàn tất việc vệ sinh).",
    138: "💡 <b>Đáp án (B) Instead:</b> Trạng từ nối đưa ra phương án thay thế cho việc tuyệt đối không nhúng nồi vào nước: 'Instead, gently wipe it down with a damp cloth' (Thay vào đó, chỉ cần lau nhẹ nhàng bằng khăn ẩm).",
    139: "💡 <b>Đáp án (C) extensive:</b> Cần tính từ đứng trước danh từ: 'extensive notes' (ghi chép rất nhiều và chi tiết trong cuộc họp tuần trước).",
    140: "💡 <b>Đáp án (D) Each:</b> Đại từ số ít 'Each' đại diện cho từng mẫu trong số 5 bản phác thảo: 'Each represents your business in a slightly different way' (Mỗi mẫu đại diện cho doanh nghiệp theo một cách riêng).",
    141: "💡 <b>Đáp án (A):</b> Câu đúc kết điểm chung của cả phong cách cổ điển và tối giản: 'Nonetheless, they all give an impression of trustworthiness and precision' (Dẫu vậy, tất cả đều tạo ấn tượng về sự đáng tin cậy và chuẩn xác).",
    142: "💡 <b>Đáp án (D) finalizing:</b> Sau cụm 'look forward to' cần danh động từ V-ing: 'finalizing the design with you' (hoàn thiện mẫu thiết kế logo cùng với bạn).",
    143: "💡 <b>Đáp án (D) undisclosed:</b> Cụm từ thông dụng trong thương mại: 'an undisclosed amount' (thâu tóm với một mức giá/số tiền không được tiết lộ ra ngoài).",
    144: "💡 <b>Đáp án (C) purchase:</b> Danh từ 'purchase' (thương vụ mua lại) dùng để thay thế đồng nghĩa cho từ 'acquisition' ở câu trước.",
    145: "💡 <b>Đáp án (A):</b> Đoạn văn nêu 5 trong số 6 cửa hàng được mua lại, tiếp nối tự nhiên bằng câu: 'The fate of the shop in Leeds is still unknown' (Số phận của cửa hàng tại Leeds hiện vẫn chưa rõ).",
    146: "💡 <b>Đáp án (A) will be adding:</b> Thì tương lai tiếp diễn diễn tả giá trị mà thương hiệu này sẽ đóng góp vào danh mục sản phẩm của công ty: 'will be adding much to the Locke and Jeeves portfolio'.",
    147: "💡 <b>Đáp án (D):</b> Thư mời toàn thể nhân viên tham gia buổi tiệc đón chào Giám đốc tài chính mới (Ms. Misun Lee as Chief Financial Officer) -> Giới thiệu một lãnh đạo cấp cao mới của công ty.",
    148: "💡 <b>Đáp án (A) Refreshments will be served:</b> Thư mời ghi rõ: 'Join your colleagues for pastries and coffee' -> Buổi gặp gỡ có phục vụ đồ ăn thức uống nhẹ (Refreshments).",
    149: "💡 <b>Đáp án (D):</b> Email thông báo tài khoản sẽ bị đóng sau 6 tháng không hoạt động và tài khoản của ông Hong sắp bị vô hiệu hóa vì ông không đăng nhập gần đây -> Tài khoản đã không được dùng trong vài tháng qua.",
    150: "💡 <b>Đáp án (B):</b> Email hướng dẫn rõ: 'simply sign in to the app before that date' (trước ngày 20 tháng 7) để tránh việc tài khoản bị khóa.",
    151: "💡 <b>Đáp án (C):</b> Khách hàng nhắn tin hỏi thợ sửa lò sưởi đã xuất phát chưa vì ông đã xin nghỉ việc buổi sáng để đón thợ -> Nhằm đảm bảo dịch vụ được thực hiện đúng kế hoạch đã định.",
    152: "💡 <b>Đáp án (D):</b> Khi bên dịch vụ báo thợ sẽ đến trong khoảng 3:00 - 5:00 chiều, ông Dakers nhắn 'But I need to get to the office soon' ngụ ý lịch hẹn vào buổi chiều là không thể chấp nhận được vì ông phải lên cơ quan.",
    153: "💡 <b>Đáp án (B):</b> Từ 'ordinarily' trong ngữ cảnh 'ordinarily our busiest time' (thông thường là khoảng thời gian bận rộn nhất) đồng nghĩa với **typically**.",
    154: "💡 <b>Đáp án (D):</b> Đoạn 2 nhắc đến chính sách chất lượng dịch vụ cao nhất: 'a policy for which Bellerson Financial is highly regarded by its customers' -> Nổi tiếng với khách hàng nhờ chất lượng phục vụ xuất sắc.",
    155: "💡 <b>Đáp án (A):</b> Câu cuối bản ghi nhớ chốt hạn nộp đơn nghỉ phép: 'kindly submit your request by Friday, April 28' -> Hạn chót là ngày 28 tháng 4.",
    156: "💡 <b>Đáp án (B):</b> Đoạn 1 nêu mẫu Cirro là mẫu lớn nhất và: 'The Cirro model also includes an electronic stylus for writing or drawing on the screen' -> Đi kèm với một công cụ bổ sung (bút cảm ứng điện tử).",
    157: "💡 <b>Đáp án (B):</b> Đoạn 2 khẳng định nâng cấp đáng kể và ấn tượng nhất chính là máy ảnh: 'users will be impressed by a significant improvement to the camera'.",
    158: "💡 <b>Đáp án (D):</b> Câu áp chót bài báo thông báo rõ: 'Preorders are now being accepted at Teleteknic's online shop' -> Khách hàng hiện có thể đặt mua trước tại cửa hàng trực tuyến của hãng.",
    159: "💡 <b>Đáp án (C):</b> Bài đăng nêu dự án phim tài liệu kể lại câu chuyện thị trấn Tottenton chuyển mình từ một thị trấn công nghiệp cũ thành trung tâm công trình sinh thái bền vững -> Sự chuyển mình của một thị trấn qua thời gian.",
    160: "💡 <b>Đáp án (B):</b> Đạo diễn tìm cư dân từ 50 tuổi trở lên từng sống qua thời kỳ đó để phỏng vấn về trải nghiệm của họ -> Kêu gọi người dân chia sẻ lại những ký ức của mình.",
    161: "💡 <b>Đáp án (A) Job applicants:</b> Đoạn đầu nêu bài giới thiệu bản thân (Personal statement) là văn bản ngắn làm nổi bật tài năng, thành tích của ứng viên gửi tới nhà tuyển dụng -> Dành cho những người đang xin việc (Job applicants).",
    162: "💡 <b>Đáp án (C) Details about the writer's education:</b> Bài viết lưu ý về số lượng từ (word count), văn phong/chất lượng viết (word choice and tone) và các ví dụ vượt qua thử thách, hoàn toàn KHÔNG nhắc đến các chi tiết học vấn.",
    163: "💡 <b>Đáp án (D):</b> Đoạn cuối hướng dẫn nên điều chỉnh đoạn kết cho từng công việc cụ thể: 'as you can create a separate version of this paragraph for each position you apply for' -> Có thể dễ dàng tùy biến linh hoạt (easily customizable).",
    164: "💡 <b>Đáp án (C):</b> Vị trí [3] đứng ngay sau câu khuyên đưa ra ví dụ về cách bạn làm việc và học hỏi từ người khác, rất ăn khớp với ví dụ minh họa: 'Chẳng hạn, bạn có thể giải thích cách một người mà bạn kính trọng đã tạo ra ảnh hưởng tích cực đến cuộc sống của bạn'.",
    165: "💡 <b>Đáp án (B):</b> Mở đầu đoạn chat là báo cáo tình hình kiểm tra thực địa tại cầu Crosley và đề xuất các phương án bảo trì định kỳ -> Cập nhật tình trạng của một cây cầu.",
    166: "💡 <b>Đáp án (C):</b> Tin nhắn lúc 8:04 A.M. của Ji-Min Jeon xác nhận: 'Karl, I am on-site at the Crosley Bridge now' -> Cô đang có mặt tại hiện trường cầu Crosley.",
    167: "💡 <b>Đáp án (D):</b> Karl Scholz là người trực tiếp hỏi ý kiến chuyên môn, điều phối và phân công lịch trình kiểm tra các cây cầu cho Ji-Min Jeon -> Người chỉ đạo/giao việc cho cô Jeon.",
    168: "💡 <b>Đáp án (C):</b> Khi Ana mời họp ăn trưa lúc 12:30, câu trả lời 'I'll be there by 12:30' của Ji-Min Jeon khẳng định cô có ý định sẽ kịp quay về để tham dự cuộc họp này.",
    169: "💡 <b>Đáp án (A):</b> Thư của Giám đốc nhân sự Stephanie Acro gửi để ngỏ ý mời ông Fukiyama tham gia vào hội đồng tuyển dụng nhân sự cấp cao dưới tư cách chuyên gia tư vấn bên ngoài có hưởng thù lao (consulting opportunity).",
    170: "💡 <b>Đáp án (B):</b> Thư nêu ông từng giữ chức Giám đốc cấp cao về thiết kế đồ họa (Senior Director of Graphic Design) trước khi nghỉ hưu 4 năm trước -> Ông từng là một nhà quản lý cấp cao.",
    171: "💡 <b>Đáp án (C):</b> Bà Acro cho biết ngay sau khi nhận được thỏa thuận bảo mật có chữ ký, bà sẽ gửi: 'the applications with their respective résumés' -> Một tập hợp các bản sơ yếu lý lịch của ứng viên.",
    172: "💡 <b>Đáp án (A):</b> Đoạn 1 nêu rõ các khu trưng bày nâng cấp đã mở cửa đón khách vào thứ Hai: 'one week before the scheduled completion date' -> Hoàn thành sớm hơn một tuần so với kế hoạch ban đầu.",
    173: "💡 <b>Đáp án (B):</b> Giám đốc Ann Wert chia sẻ: 'Every week in the museum lobby, I interview patrons and record their opinions' -> Bà trực tiếp gặp gỡ và phỏng vấn khách tham quan bảo tàng.",
    174: "💡 <b>Đáp án (C) Visit a nearby historic neighborhood:</b> Đoạn cuối bài báo ghi: 'Ms. Wert suggests that guests stroll around the city's adjoining heritage district' -> Khuyên du khách ghé thăm khu phố di sản lịch sử lân cận sau khi tham quan.",
    175: "💡 <b>Đáp án (D):</b> Vị trí [4] nằm ngay sau câu nói về việc khách được tự kiểm soát trải nghiệm của mình, nối tiếp chuẩn nhất bằng câu: 'Du khách giờ đây sẽ có thể tự do lựa chọn các chủ đề mà họ muốn tìm hiểu sâu hơn'.",
    176: "💡 <b>Đáp án (D):</b> Gian hàng 101 bán bát đĩa salad, thớt và dụng cụ phục vụ; gian hàng 103 bán cốc gốm, đĩa và bình nước -> Cả hai gian hàng đều bán các vật dụng dùng cho nhà bếp (items for the kitchen).",
    177: "💡 <b>Đáp án (D):</b> Bảng mô tả nêu rõ xà phòng của Franny's Sensational Scents được làm từ 'herbs and flowers harvested from our own garden' -> Chứa các thành phần chiết xuất từ thực vật (parts of plants).",
    178: "💡 <b>Đáp án (A):</b> Cô McFarlan gửi email nhắc lại lời dặn của người bán ('you told me to contact you if I had any problems') khi mặt dây chuyền bị gãy -> Nhằm tiếp nối dịch vụ hỗ trợ sửa chữa đã được người bán cam kết trước đó.",
    179: "💡 <b>Đáp án (B):</b> Mặt dây chuyền được làm từ trang sách gấp nghệ thuật ('artistically folded page from a book'), đối chiếu danh mục lễ hội thì gian hàng 102 (Folding Designs) chuyên bán đồ trang sức làm từ nghệ thuật giấy thủ công.",
    180: "💡 <b>Đáp án (C):</b> Cô McFarlan cho biết cô làm việc ở Springdale trên cùng con đường diễn ra lễ hội, phần tiêu đề lễ hội ghi địa chỉ là 'Somerville Park, Broad Avenue, Springdale' -> Nơi làm việc của cô nằm trên đại lộ Broad Avenue.",
    181: "💡 <b>Đáp án (C):</b> Đoạn giới thiệu khẳng định công ty đã tạo dựng được uy tín lâu năm từ các gói dịch vụ dọn nhà định kỳ hàng tuần, hai tuần một lần và hàng tháng (regular service packages).",
    182: "💡 <b>Đáp án (A):</b> Cả ba gói dịch vụ đặc biệt (sau sự kiện, dọn một lần, dọn chuyển nhà) đều có ghi chú người giám sát đi cùng nhóm làm việc ('plus a supervisor', 'A supervisor will oversee', 'Under the guidance of a supervisor') -> Các đội làm việc đều có người giám sát.",
    183: "💡 <b>Đáp án (D):</b> Gạch đầu dòng cuối cùng nêu rõ: 'Over the past two months, we have posted video tutorials featuring clever cleaning tips' -> Công ty vừa mới phát hành các nội dung hướng dẫn mẹo dọn dẹp nhà cửa.",
    184: "💡 <b>Đáp án (C):</b> Bài đánh giá kể ông Singh dùng dịch vụ dọn nhà một lần ('One-time house cleaning') vì bạn đột ngột ghé thăm, đối chiếu với trang dịch vụ thì gói dọn nhà một lần được thực hiện bởi một nhóm 3 người ('three-person cleaning team').",
    185: "💡 <b>Đáp án (B):</b> Từ 'just' trong cụm 'managed to contact them at just the right time' (liên hệ được với họ vào vừa đúng thời điểm) đồng nghĩa với **exactly**.",
    186: "💡 <b>Đáp án (B):</b> Trang web của tiệm sách giải thích chi tiết các tiêu chuẩn, thể loại sách được chấp nhận và quy định đổi sách cũ lấy điểm tích lũy mua hàng -> Giải thích chính sách của cửa hàng (explain a store's policy).",
    187: "💡 <b>Đáp án (A):</b> Tiệm sách nêu ngoại lệ đối với sách dạy nấu ăn: 'except those by a celebrity chef such as Ian Wu' (ngoại trừ sách của các đầu bếp nổi tiếng như Ian Wu) -> Ông Wu là một người nổi tiếng (a famous person).",
    188: "💡 <b>Đáp án (C):</b> Tiệm sách ưu tiên sách xuất bản từ 20 năm trước và sách xuất bản lần đầu ('first editions are favoured'), do đó hai cuốn tiểu thuyết kinh điển xuất bản lần đầu của cụ cố để lại là món đồ chắc chắn được cửa hàng tiếp nhận.",
    189: "💡 <b>Đáp án (D):</b> Trong email, ông Townsend chia sẻ 3 cuốn sách nấu ăn chứa công thức nấu ăn do các thành viên của tổ chức từ thiện mà ông điều hành gửi đóng góp ('members of a charity I run') -> Ông là người quản lý/điều hành một tổ chức từ thiện.",
    190: "💡 <b>Đáp án (B):</b> Tiệm sách đóng cửa vào thứ Hai, thứ Ba. Cuối tuần tiệm chỉ mở từ 10:00 A.M. (thứ Bảy) và 12:00 trưa (Chủ nhật), trong khi ông chỉ rảnh trước 9:00 A.M. vào cuối tuần. Do đó ngày duy nhất ông có thể ghé tiệm là ngày thứ Tư (mở cửa từ 9:00 A.M.).",
    191: "💡 <b>Đáp án (C):</b> Giám đốc nhân sự Jessica Seung gửi email để giao nhiệm vụ chuẩn bị hồ sơ thủ tục và lên kế hoạch đào tạo thực tế (shadowing) cho nhân viên mới David Rein -> Phác thảo kế hoạch tiếp nhận nhân viên mới.",
    192: "💡 <b>Đáp án (D):</b> Max Aurinen nhận chỉ thị chuẩn bị các thủ tục giấy tờ hội nhập ban đầu và sắp xếp lịch làm việc 2 tuần đầu cho nhân sự mới -> Là trợ lý hành chính/nhân sự tại công ty Edwil Durables, Inc.",
    193: "💡 <b>Đáp án (C):</b> Ông David Rein sẽ đảm nhiệm vị trí phó giám sát bộ phận đồ gia dụng lớn (Large Appliance Division), tra danh bạ chức danh thì Latisha Lake chính là Giám đốc phụ trách bộ phận này -> Bà Lake là giám đốc trực tiếp của ông Rein.",
    194: "💡 <b>Đáp án (A):</b> Cột 'Building and Office' trong danh bạ phân bổ các phòng ban ở nhiều tòa nhà khác nhau: Ardmore, Winston West, Winston East và Meisner -> Công ty có nhiều tòa nhà văn phòng khác nhau.",
    195: "💡 <b>Đáp án (B):</b> Thư của bà Seung dặn nếu ông Amos Hillman kịp kết thúc kỳ nghỉ ở Thái Lan về đúng hẹn thì xếp lịch cho ông Rein đi cùng ông Hillman; bảng lịch trình chính thức ngày 9/5 ghi ông Rein sẽ đi cùng Amos Hillman, chứng tỏ ông Hillman đã về kịp chuyến công tác.",
    196: "💡 <b>Đáp án (A):</b> Bài báo nêu rõ dịch vụ quay phim từ trên cao bằng drone đáp ứng đa dạng các nhu cầu công việc của doanh nghiệp: 'Whether for marketing, progress reporting, training, or something else...' -> Phục vụ nhiều mục đích kinh doanh khác nhau.",
    197: "💡 <b>Đáp án (C):</b> Trang web của Hiệp hội Chuyến bay Điều khiển từ xa (RFA) nêu một trong các điều kiện cấp chứng chỉ bay thương mại là: 'completing an interview with a flight examiner' -> Phải tham gia một cuộc phỏng vấn với giám sát viên sát hạch bay.",
    198: "💡 <b>Đáp án (A):</b> Phiếu yêu cầu dịch vụ của công ty xây dựng Lunsklip ghi rõ: 'The client wants a video to show investors... The objective is to present how the highway project is proceeding' -> Để trình chiếu cho các nhà đầu tư thấy tiến độ thi công của dự án.",
    199: "💡 <b>Đáp án (C):</b> Bà Olivia Rowley là phi công lái drone chuyên nghiệp được cấp thẻ chứng chỉ hành nghề, mà quy định của RFA bắt buộc người lái phải: 'registering your equipment with the appropriate civil aviation authority' -> Bà đã đăng ký thiết bị bay với cơ quan hàng không.",
    200: "💡 <b>Đáp án (B):</b> Mục ghi chú của phiếu yêu cầu nêu rõ khách hàng không cần kỹ xảo hay chỉnh sửa thêm ('No special effects or extra editing is wanted'), và bài báo nêu công ty chỉ tính thêm phụ phí theo giờ nếu yêu cầu chỉnh sửa phức tạp -> Công ty không phải trả thêm phụ phí giờ làm việc."
};