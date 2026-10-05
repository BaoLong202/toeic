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

// 1. DÀN KEY 200 CÂU TEST 5 (CHUẨN 100% THEO FILE AUDIO VÀ ĐỀ READING)
window.TOEIC_KEYS[5] = parseKey("1A 2B 3D 4C 5A 6C 7B 8B 9B 10C 11B 12C 13C 14B 15B 16C 17C 18A 19B 20B 21C 22C 23C 24C 25B 26B 27A 28C 29C 30B 31A 32D 33C 34A 35B 36A 37D 38C 39B 40D 41B 42A 43D 44B 45A 46B 47D 48C 49B 50A 51C 52A 53D 54C 55C 56C 57C 58B 59C 60D 61B 62A 63D 64D 65C 66D 67B 68B 69A 70D 71A 72C 73D 74D 75B 76C 77B 78A 79B 80A 81D 82B 83C 84A 85B 86C 87D 88D 89C 90B 91A 92A 93B 94A 95B 96B 97C 98C 99C 100A 101C 102A 103B 104B 105D 106A 107C 108A 109A 110C 111B 112C 113C 114B 115B 116D 117C 118C 119C 120A 121C 122D 123C 124D 125B 126B 127B 128B 129C 130D 131A 132D 133C 134C 135D 136D 137B 138C 139C 140A 141A 142D 143A 144C 145B 146B 147C 148C 149A 150D 151B 152D 153D 154A 155C 156D 157D 158C 159A 160C 161C 162A 163C 164D 165D 166B 167D 168A 169C 170D 171D 172D 173A 174C 175B 176C 177B 178C 179D 180B 181A 182C 183D 184B 185C 186A 187D 188C 189A 190B 191A 192D 193C 194C 195D 196B 197B 198D 199D 200C");

// 2. FULL TRANSCRIPT LISTENING TEST 5
window.TOEIC_SCRIPTS[5] = `
  <h3>PART 1: PHOTOGRAPHS (Câu 1 - 6)</h3>
  <div class="script-question">
    <span class="script-speaker">1. M-Au</span>
    <div class="script-opt correct-pink">(A) She's pushing a large container down a hallway.</div>
    <div class="script-opt">(B) She's looking at information on a laptop screen.</div>
    <div class="script-opt">(C) She's sorting through paper files.</div>
    <div class="script-opt">(D) She's placing a hat on top of a file cabinet.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">2. W-Br</span>
    <div class="script-opt">(A) A worker is painting lines on the floor.</div>
    <div class="script-opt correct-pink">(B) A worker is using a machine to move some boxes.</div>
    <div class="script-opt">(C) A worker is sealing some packages.</div>
    <div class="script-opt">(D) A worker is repairing a motor.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">3. W-Am</span>
    <div class="script-opt">(A) There are beverages available inside a tent.</div>
    <div class="script-opt">(B) There are some people riding in an automobile.</div>
    <div class="script-opt">(C) The man is reaching for a water bottle.</div>
    <div class="script-opt correct-pink">(D) The woman is moving some furniture.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">4. M-Cn</span>
    <div class="script-opt">(A) The door of a clothing store has been propped open.</div>
    <div class="script-opt">(B) Customers are waiting to enter a clothing store.</div>
    <div class="script-opt correct-pink">(C) One of the customers is trying on a jacket.</div>
    <div class="script-opt">(D) Clothing is displayed outside on racks.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">5. M-Cn</span>
    <div class="script-opt correct-pink">(A) One of the men is lowering some window shades.</div>
    <div class="script-opt">(B) One of the men is writing on a poster board.</div>
    <div class="script-opt">(C) One of the women is putting on a sweater.</div>
    <div class="script-opt">(D) One of the women is reading from a notebook.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">6. W-Br</span>
    <div class="script-opt">(A) One of the cars is stopped at a stop sign.</div>
    <div class="script-opt">(B) Some tires are stacked against a building.</div>
    <div class="script-opt correct-pink">(C) Some vehicles are being washed.</div>
    <div class="script-opt">(D) A motorcycle is going through a gate.</div>
  </div>

  <h3>PART 2: QUESTION-RESPONSE (Câu 7 - 31)</h3>
  <div class="script-question">
    <span class="script-speaker">7. W-Am: Where did you put the invoice from Stanson Incorporated?</span>
    <div class="script-opt">(A) No, not yet.</div>
    <div class="script-opt correct-pink">(B) On your desk.</div>
    <div class="script-opt">(C) The post office is crowded today.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">8. M-Au: Is the inspector coming this afternoon or tomorrow morning?</span>
    <div class="script-opt">(A) The exterior light isn't working.</div>
    <div class="script-opt correct-pink">(B) He'll be here tomorrow.</div>
    <div class="script-opt">(C) I'll take the next right turn.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">9. M-Au: What's the total cost to remodel the office lobby?</span>
    <div class="script-opt">(A) The view from this window is great.</div>
    <div class="script-opt correct-pink">(B) Over fifty thousand dollars.</div>
    <div class="script-opt">(C) No, a sofa and table.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">10. W-Am: Are you getting the same type of desk or a different one?</span>
    <div class="script-opt">(A) It's conveniently located.</div>
    <div class="script-opt">(B) I can pick it up for you.</div>
    <div class="script-opt correct-pink">(C) The same type.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">11. M-Cn: We're taking the clients to the theater this evening.</span>
    <div class="script-opt">(A) He already ate.</div>
    <div class="script-opt correct-pink">(B) I'll reserve a taxi.</div>
    <div class="script-opt">(C) From Australia.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">12. M-Cn: When is your budget report due?</span>
    <div class="script-opt">(A) It was too expensive.</div>
    <div class="script-opt">(B) I don't need one.</div>
    <div class="script-opt correct-pink">(C) By Tuesday at the latest.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">13. M-Au: Who can I talk to about getting a membership at this fitness center?</span>
    <div class="script-opt">(A) A monthly bill.</div>
    <div class="script-opt">(B) Some new workout equipment.</div>
    <div class="script-opt correct-pink">(C) I can help you with that.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">14. M-Au: Are you planning to buy a house in the city?</span>
    <div class="script-opt">(A) A housecleaning company.</div>
    <div class="script-opt correct-pink">(B) I don't want to move.</div>
    <div class="script-opt">(C) I'll be waiting at the post office.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">15. M-Au: How did you decide on a venue for the fundraising event?</span>
    <div class="script-opt">(A) A small contribution.</div>
    <div class="script-opt correct-pink">(B) I got a recommendation from a friend.</div>
    <div class="script-opt">(C) To buy books for the library.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">16. M-Cn: Could you help Ms. Ishida update the expense reports?</span>
    <div class="script-opt">(A) It's an electric vehicle.</div>
    <div class="script-opt">(B) This restaurant is expensive.</div>
    <div class="script-opt correct-pink">(C) I'll have time after my meeting.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">17. W-Br: The sales representatives really appreciated the training we led.</span>
    <div class="script-opt">(A) The new transportation center nearby.</div>
    <div class="script-opt">(B) No, but there is a manual online.</div>
    <div class="script-opt correct-pink">(C) Yes, they seemed to find it helpful.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">18. M-Au: Do you know who was promoted to senior director?</span>
    <div class="script-opt correct-pink">(A) It hasn't been announced yet.</div>
    <div class="script-opt">(B) I received my promotional gift yesterday.</div>
    <div class="script-opt">(C) I've seen that film.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">19. W-Br: Isn't the registration deadline tomorrow?</span>
    <div class="script-opt">(A) Here's a map that you can use.</div>
    <div class="script-opt correct-pink">(B) No, it's next week.</div>
    <div class="script-opt">(C) My office is on the ninth floor.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">20. M-Cn: Would you like some help installing that new software?</span>
    <div class="script-opt">(A) No, I'm sure we sent it out yesterday.</div>
    <div class="script-opt correct-pink">(B) Thanks, but I know how to do it.</div>
    <div class="script-opt">(C) He can type very fast.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">21. W-Am: Our factory makes the best cookies in the city.</span>
    <div class="script-opt">(A) A cup of sugar.</div>
    <div class="script-opt">(B) He worked an afternoon shift.</div>
    <div class="script-opt correct-pink">(C) Aren't they delicious?</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">22. M-Cn: The fruit market is still selling mangoes, isn't it?</span>
    <div class="script-opt">(A) No, thanks. I don't need anything.</div>
    <div class="script-opt">(B) There's a waiting area in the lobby.</div>
    <div class="script-opt correct-pink">(C) Yes, I bought some there yesterday.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">23. W-Br: Why are you staying in the office for lunch?</span>
    <div class="script-opt">(A) No, they weren't.</div>
    <div class="script-opt">(B) Just a salad and soup, please.</div>
    <div class="script-opt correct-pink">(C) Because it is raining.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">24. W-Am: How did the company basketball team play last night?</span>
    <div class="script-opt">(A) Sure, I'll have a few.</div>
    <div class="script-opt">(B) How can I sign up?</div>
    <div class="script-opt correct-pink">(C) The game was canceled.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">25. M-Au: Isn't our department's quarterly report supposed to be sent out today?</span>
    <div class="script-opt">(A) No, he drinks coffee.</div>
    <div class="script-opt correct-pink">(B) There's a lot of information to include.</div>
    <div class="script-opt">(C) Some office supplies.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">26. M-Cn: Would you like a copy of the article I mentioned?</span>
    <div class="script-opt">(A) No, I'm not.</div>
    <div class="script-opt correct-pink">(B) Yes, I'd appreciate that.</div>
    <div class="script-opt">(C) A Thursday morning appointment.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">27. M-Au: Did you decide on the design for the new logo?</span>
    <div class="script-opt correct-pink">(A) There are so many good options.</div>
    <div class="script-opt">(B) Please adjust that sign by the door.</div>
    <div class="script-opt">(C) Maybe he'll arrive today.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">28. M-Cn: Our bookstore is having a sale today, isn't it?</span>
    <div class="script-opt">(A) Sure, you can use my printer.</div>
    <div class="script-opt">(B) I really enjoyed that book.</div>
    <div class="script-opt correct-pink">(C) It's only a small discount.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">29. W-Br: Why haven't the painters arrived yet?</span>
    <div class="script-opt">(A) The keys are in the desk drawer.</div>
    <div class="script-opt">(B) No, that's all right.</div>
    <div class="script-opt correct-pink">(C) I heard that traffic is heavy this morning.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">30. M-Cn: Should I bring some flowers or some food to the party?</span>
    <div class="script-opt">(A) He's right down the hall.</div>
    <div class="script-opt correct-pink">(B) Don't you live next to a florist's shop?</div>
    <div class="script-opt">(C) A few more hours.</div>
  </div>

  <div class="script-question">
    <span class="script-speaker">31. W-Am: The meeting can wait until tomorrow.</span>
    <div class="script-opt correct-pink">(A) I'll make sure the room is set up.</div>
    <div class="script-opt">(B) Did you bring an umbrella?</div>
    <div class="script-opt">(C) No, he wasn't.</div>
  </div>

  <h3>PART 3: CONVERSATIONS (Câu 32 - 70)</h3>
  <div class="script-dialogue">
    <b>[Questions 32 - 34]</b><br>
    <b>W-Am:</b> Hello, Tariq, could you do me a favor?<br>
    <b>M-Cn:</b> Sure, what is it?<br>
    <b>W-Am:</b> I'm meeting with the Gerhardt Group at ten A.M. for the product pitch, and <span class="correct-pink">[32] I need copies of your market analysis report made for each representative</span>.<br>
    <b>M-Cn:</b> Aren't you at the office right now?<br>
    <b>W-Am:</b> Actually, I came in early today, but <span class="correct-pink">[33] I couldn't get the copy machine to work</span>.<br>
    <b>M-Cn:</b> Seriously? We bought it last month!<br>
    <b>W-Am:</b> I'm afraid so.<br>
    <b>M-Cn:</b> <span class="correct-pink">[34] I just got off the train</span>. I'll stop at Business Express on McAllister Street and take care of it on my way to the office.
  </div>

  <div class="script-dialogue">
    <b>[Questions 35 - 37]</b><br>
    <b>W-Br:</b> <span class="correct-pink">[35] Delton Van Lines</span>, how can I help you?<br>
    <b>M-Cn:</b> Hello, I'm the office manager at Woodson Insurance Company. We are relocating to a new office in June and would like to book your services.<br>
    <b>W-Br:</b> Certainly. But before we reserve a date for the move, <span class="correct-pink">[36] we'll need to come to your current location and estimate the cost of moving your furniture and equipment</span>.<br>
    <b>M-Cn:</b> We have a staff meeting tomorrow morning, so no one's available to show you around then. But tomorrow afternoon works.<br>
    <b>W-Br:</b> Perfect. Our representative can be there at two. <span class="correct-pink">[37] I'll just need to know where you're located</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 38 - 40]</b><br>
    <b>M-Au:</b> Dr. McMillan, <span class="correct-pink">[38] I'm calling from the human resources department</span>. I'm in charge of your onboarding, and I wanted to confirm your start date. It's the first of April, right?<br>
    <b>W-Br:</b> Right, that's when I'll be joining <span class="correct-pink">[39] the scientific research team</span>. And as you probably know, I'm still finishing up a research paper with my current institution.<br>
    <b>M-Au:</b> Yes, the director did tell me that. Your contract includes time for you to finish up your previous commitments. <span class="correct-pink">[40] I can send it to you this afternoon</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 41 - 43]</b><br>
    <b>W1:</b> <span class="correct-pink">[41] We've been getting a lot of online orders for our chocolate candies lately</span>. I'm glad to see the increase in orders, but I'm worried about meeting the demands. Are we going to be able to fill and ship all these orders?<br>
    <b>M-Cn:</b> <span class="correct-pink">[42] I think we should hire a few more people to work in the mornings</span>. They could help with packaging and shipping. What do you think, Rebecca?<br>
    <b>W2:</b> I agree. I also think that we should ask if our delivery service can pick up our packages twice a day instead of just once a day—maybe every morning and afternoon. <span class="correct-pink">[43] I'll call them today</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 44 - 46]</b><br>
    <b>W-Am:</b> I spoke to the Mancini brothers. They just shipped our leather order, the hazelnut color, but it'll take a while to arrive. We don't have enough in stock to complete <span class="correct-pink">[44] the ten sofa orders</span> that we've received the past few days.<br>
    <b>M-Cn:</b> <span class="correct-pink">[45] What about the local leather supplier that brought us some samples last week?</span> We could ask them whether they have enough for ten sofas.<br>
    <b>W-Am:</b> To be honest, <span class="correct-pink">[46] I wasn't very impressed with the quality of their leather</span>. I'd rather wait. I'll reach out to the customers about the delay.
  </div>

  <div class="script-dialogue">
    <b>[Questions 47 - 49]</b><br>
    <b>W-Am:</b> Thanks for coming in, Marcos. I just got the results from the consulting firm we hired. They have some ideas about how we can increase sales of our <span class="correct-pink">[47] denim blue jeans</span>.<br>
    <b>M-Au:</b> I hope so. What does our target audience want?<br>
    <b>W-Am:</b> Well, they think it's time we updated our brand with new styles or colors.<br>
    <b>M-Au:</b> You know, <span class="correct-pink">[48] it takes a lot of effort to develop and launch new styles</span>.<br>
    <b>W-Am:</b> Yes, but if we don't do it, another company will.<br>
    <b>M-Au:</b> You're right. <span class="correct-pink">[49] I'll ask Junko to come up with some new designs</span> for us to consider.
  </div>

  <div class="script-dialogue">
    <b>[Questions 50 - 52]</b><br>
    <b>M-Cn:</b> Hi, Gabriella. Thanks for agreeing to give me the highlights of the budget discussion from the monthly meeting. <span class="correct-pink">[50] I'm back from vacation</span> and still catching up.<br>
    <b>W-Am:</b> Sure, here's a copy of the report. Everyone on our organization's board at <span class="correct-pink">[51] Tennis United</span> agreed to the fee increase for the tennis camp for young players.<br>
    <b>M-Cn:</b> Good. And why do we have T-shirts listed as an expense item?<br>
    <b>W-Am:</b> Although the next tournament's in the fall, the T-shirts were ordered very early. <span class="correct-pink">[52] That way we received half off the price, since the supplier wanted to get rid of his summer inventory</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 53 - 55]</b><br>
    <b>W-Am:</b> The first item on today's meeting agenda is our bid to renovate the Morrisville Bridge. Do we have an update on that yet?<br>
    <b>M1:</b> Yes. Unfortunately, we didn't get the contract.<br>
    <b>M2:</b> Yes, the only explanation given was that another <span class="correct-pink">[53] construction company</span> submitted a proposal with <span class="correct-pink">[54] a shorter timeline</span>.<br>
    <b>W-Am:</b> So, what do we know about this competitor? Have they worked on other local projects?<br>
    <b>M1:</b> The only thing I heard was their name: CDQ Construction Company.<br>
    <b>W-Am:</b> Well, I'd like to know more about them. <span class="correct-pink">[55] Can you two do some research before our next meeting?</span>
  </div>

  <div class="script-dialogue">
    <b>[Questions 56 - 58]</b><br>
    <b>W-Br:</b> Did you see that the results of <span class="correct-pink">[56] last month's employee survey</span> have been compiled? All the staff feedback is available.<br>
    <b>M-Au:</b> Yes, and I just finished reviewing the comments.<br>
    <b>W-Br:</b> You know, I noticed one recurring complaint: the size of the break room is too small. Perhaps we could enlarge the break room by having the wall taken down between it and the meeting room next door.<br>
    <b>M-Au:</b> Well, <span class="correct-pink">[57] we do have money available in the budget</span>.<br>
    <b>W-Br:</b> Then could you reach out to your contact at the construction company?<br>
    <b>M-Au:</b> I can't do it this afternoon since <span class="correct-pink">[58] I need to see a dentist</span>, but I will definitely make the call.
  </div>

  <div class="script-dialogue">
    <b>[Questions 59 - 61]</b><br>
    <b>W-Am:</b> Thanks for calling Hong's <span class="correct-pink">[59] Metal Recycling Company</span>. How can I help you?<br>
    <b>M-Au:</b> Hi, I'm with Shannock Construction Company. We've got a lot of brass metal scrap from a recent remodeling job. Are you currently buying metal scrap?<br>
    <b>W-Am:</b> Yes, we are. We currently pay two dollars a pound.<br>
    <b>M-Au:</b> Oh, there's another recycling center that pays two dollars and twenty-five cents a pound. <span class="correct-pink">[60] Would you be willing to match their price?</span><br>
    <b>W-Am:</b> Yes, we have a price-match guarantee.<br>
    <b>M-Au:</b> Great! <span class="correct-pink">[61] I'll bring the metal to you this afternoon then</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 62 - 64]</b><br>
    <b>W-Br:</b> Hi, I just got off the phone with management. They're not happy. The construction of the train tunnel isn't progressing fast enough.<br>
    <b>M-Cn:</b> Yeah, I'm not surprised. <span class="correct-pink">[62] The drilling is done now</span>. The thing is, we can't start installing the support columns until we have all the materials for the concrete.<br>
    <b>W-Br:</b> When are the materials going to get here?<br>
    <b>M-Cn:</b> A week, maybe two.<br>
    <b>W-Br:</b> <span class="correct-pink">[63] Let's see if the shipment can be expedited. Can you do that?</span><br>
    <b>M-Cn:</b> Sure, I'll call the supplier to ask about getting it here sooner.<br>
    <b>W-Br:</b> In the meantime, <span class="correct-pink">[64] I'm going to write an email to management</span> to explain how we're attempting to resolve the situation.
  </div>

  <div class="script-dialogue">
    <b>[Questions 65 - 67]</b><br>
    <b>M-Au:</b> The city just posted its new parking rates, and we need to talk about how they'll affect our <span class="correct-pink">[65] restaurant's food delivery service</span>. I'm worried we'll lose money because we'll need to pay more for parking while the delivery driver takes the food to customers.<br>
    <b>W-Am:</b> Wow, parking in our main delivery area is up to <span class="correct-pink">[66] fifteen dollars an hour</span>? That is a problem. But offering free delivery attracts a lot of business. What else can we do to lower expenses?<br>
    <b>M-Au:</b> <span class="correct-pink">[67] We could start using bicycle delivery</span> whenever possible. That should help.<br>
    <b>W-Am:</b> Good idea. I'll talk to our drivers to see who's willing to switch to bicycle deliveries for customers nearby. Some people really like the exercise.
  </div>

  <div class="script-dialogue">
    <b>[Questions 68 - 70]</b><br>
    <b>M-Au:</b> When customers walk into Southern Regional Bank, I want them to feel confident about entrusting their money to us. As I mentioned the last time we met, I'm hoping your <span class="correct-pink">[68] interior design firm</span> can give our lobby a more polished, professional look.<br>
    <b>W-Br:</b> Our proposal does just that. Here, take a look. The cover page includes a summary of the renovations.<br>
    <b>M-Au:</b> Hmm, do you really think we need <span class="correct-pink">[69] skylights</span>? That would be a big expense.<br>
    <b>W-Br:</b> There aren't many windows in your lobby, so it's the best way to bring more natural light into the room. Besides, our proposed renovations would actually come in under budget. <span class="correct-pink">[70] If you turn to page four, you'll see the cost breakdown</span>.
  </div>

  <h3>PART 4: TALKS (Câu 71 - 100)</h3>
  <div class="script-dialogue">
    <b>[Questions 71 - 73]</b><br>
    <b>W-Am:</b> Welcome to the monthly company staff meeting. Before I begin my report on last month's sales figures, I want to congratulate our fantastic <span class="correct-pink">[71] IT team</span>. <span class="correct-pink">[72] The sales tracking system they built allows us to easily share results with colleagues from other branches</span>. All employees are <span class="correct-pink">[73] required to attend a training session</span> on how to use it. A registration link will be sent out this afternoon. Now, let's look at last month's figures. We need to decide if we're ready to expand into more markets.
  </div>

  <div class="script-dialogue">
    <b>[Questions 74 - 76]</b><br>
    <b>M-Au:</b> Hello, you've reached the communications team of Business as Usual, the talk show about starting a new business. If you are calling because <span class="correct-pink">[74] you'd like to appear on our show, we'd love to hear your story</span>. To record your story idea, please press one. Please note, <span class="correct-pink">[75] it is necessary to keep your message under sixty seconds</span>. Submissions that are more than a minute long will not be reviewed. The typical timeline for the review process is two weeks, with longer wait times expected <span class="correct-pink">[76] around holidays</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 77 - 79]</b><br>
    <b>W-Am:</b> Welcome to the <span class="correct-pink">[77] culinary tour</span> of downtown Springfield. Today you'll taste a variety of local foods. Normally I'd start by taking you inside Zelda's Bakery to try one of their famous corn muffins, but <span class="correct-pink">[78] we have such a large group today</span>. Instead, we're going to head directly to the open-air market. There you'll find a wide selection of the homemade breads, jams, and pastries that we're noted for. After that, we'll head to the original Springfield Corn Mill, which is still in use today. And remember to keep your tour ticket: it's good for <span class="correct-pink">[79] one free entry at the local museum</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 80 - 82]</b><br>
    <b>W-Br:</b> The Novikov Award is named after Maxim Novikov, the founder of Novikov Aviation. It is given each year to a company that has made outstanding contributions to the <span class="correct-pink">[80] aviation industry</span>. The company chosen for the award this year was frustrated by the lack of qualified job applicants, and decided to do something about it. Zenith Aviation's <span class="correct-pink">[81] apprenticeship program has trained hundreds of workers for careers in aircraft maintenance and repair</span>. Dozens of firms nationwide have copied the program. Before I present the award, please <span class="correct-pink">[82] direct your attention to the screen for a video</span> highlighting the program's effectiveness.
  </div>

  <div class="script-dialogue">
    <b>[Questions 83 - 85]</b><br>
    <b>M-Cn:</b> Thank you for allowing me the opportunity to speak at this <span class="correct-pink">[83] city council</span> meeting. On behalf of the transportation department, I'd like to present a proposal to fund the replacement of all 350 <span class="correct-pink">[84] bus-stop shelters</span> in our city. We feel this is a worthwhile investment because the current shelters aren't in good shape. Many of them have cracked glass and broken benches. We want to go with Urban Retreat because its shelters are made of durable materials. While less expensive options are available, <span class="correct-pink">[85] its models include a display for advertisements</span>. These shelters could provide the city with a new source of income.
  </div>

  <div class="script-dialogue">
    <b>[Questions 86 - 88]</b><br>
    <b>W-Br:</b> Hi, it's Sarai. I'm calling about the new <span class="correct-pink">[86] wallpaper</span> patterns that your team submitted. We all really like the geometric prints. I'm almost certain that all of those will be approved for production in several different color schemes. And the wallpaper patterns for children's rooms are all so imaginative. <span class="correct-pink">[87] You have some truly creative people on your design team</span>. However, the animal-themed prints you sent—the thing is, <span class="correct-pink">[88] we have a full supply of those in stock</span>. Call me back so we can discuss it.
  </div>

  <div class="script-dialogue">
    <b>[Questions 89 - 91]</b><br>
    <b>M-Cn:</b> In local news, the opening of the Stewart <span class="correct-pink">[89] Performing Arts Center</span> tomorrow night has attracted widespread attention. This state-of-the-art center holds three different theaters. The designer won an award for <span class="correct-pink">[90] the building's insulated walls</span>. They have rubber material that absorbs sound from the other theaters and nearby trains. On top of this, the interior decoration is magnificent. If you'd like to see some photos, browse upcoming shows, and plan your visit, go to the theater's Web site. We warn you, though: <span class="correct-pink">[91] many shows are already sold out</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 92 - 94]</b><br>
    <b>W-Am:</b> Regular listeners of the Going Electric podcast may be familiar with today's guest, because she was on the podcast last year. Dr. Mona Alamri is a leading <span class="correct-pink">[92] transportation engineer</span>. In today's episode, she'll be talking about <span class="correct-pink">[93] electric ships that can operate with zero emissions</span>. These high-speed ships may completely change the way people and goods are moved along the world's coastlines. But before I welcome Dr. Alamri, please note there is a change to next month's schedule: most notably, <span class="correct-pink">[94] I'll be on vacation for three weeks</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 95 - 97]</b><br>
    <b>M-Cn:</b> Good morning, everyone, and welcome to the fifteenth annual Summerhaven <span class="correct-pink">[95] Bicycle Race</span>! The profits from this year's race will help our town fix the Grant Park <span class="correct-pink">[96] footbridge</span>, which is in serious need of maintenance. Please take a look at the map to familiarize yourselves with the route the cyclists will be taking. Remember, there's a beverage stand located between City Hall and the Art Museum, <span class="correct-pink">[97] so you can stay hydrated while you watch the race along Cedar Avenue</span>.
  </div>

  <div class="script-dialogue">
    <b>[Questions 98 - 100]</b><br>
    <b>M-Au:</b> In today's meeting, we'll discuss where we are in our software development process for Universal Banking. In-depth user research will help us create a better <span class="correct-pink">[98] online banking application</span>. Sarai will start by telling us about <span class="correct-pink">[99] her research into Universal Banking's target customers</span>. What features do they need in a banking app, and how comfortable are they with technology? But before Sarai begins her presentation, let me remind you that as summer begins next week, so do summer hours. You'll be able to stop working at two o'clock on Friday afternoons, so <span class="correct-pink">[100] we'll be moving our regular meeting to Friday mornings</span>.
  </div>
`;

// 3. GIẢI THÍCH CHI TIẾT READING (CÂU 101 - 200) TEST 5
window.TOEIC_EXPLANATIONS[5] = {
    101: "💡 <b>Đáp án (C) and:</b> Liên từ nối 'and' liên kết hai danh từ nghề nghiệp/vai trò song hành: 'an experienced accountant and investor' (kế toán viên kiêm nhà đầu tư dày dạn kinh nghiệm).",
    102: "💡 <b>Đáp án (A) bottle:</b> Cụm danh từ ghép 'water bottle' (bình đựng nước miễn phí dành cho 150 vị khách đầu tiên đến công viên thể dục).",
    103: "💡 <b>Đáp án (B) shortly:</b> Trạng từ 'shortly' (chẳng bao lâu nữa/ngay sau đây) bổ nghĩa cho thì tương lai 'will be e-mailed' (hướng dẫn vận hành sẽ sớm được gửi qua email).",
    104: "💡 <b>Đáp án (B) satisfied:</b> Phân từ hai đóng vai trò tính từ: 'satisfied customers' (những khách hàng hài lòng đã đăng nhiều đánh giá tích cực).",
    105: "💡 <b>Đáp án (D) widely:</b> Cụm bị động quen thuộc 'has been widely praised' (được ngợi ca rộng rãi trên toàn quốc).",
    106: "💡 <b>Đáp án (A) her:</b> Cần tính từ sở hữu 'her' đứng trước danh từ: 'her meeting with the vice president' (sau cuộc họp của bà ấy với phó chủ tịch).",
    107: "💡 <b>Đáp án (C) lively:</b> Cần tính từ đứng trước bổ nghĩa cho cụm danh từ: 'a lively game night' (một đêm hội trò chơi sôi nổi dành cho trẻ em).",
    108: "💡 <b>Đáp án (A) copies:</b> Danh từ đếm được số nhiều 'copies' làm tân ngữ cho động từ 'distribute' (phát các bản sao của chương trình làm việc).",
    109: "💡 <b>Đáp án (A) after:</b> Liên từ chỉ thời gian 'after' nối hai mệnh đề: 'after they have been employed for five years' (sau khi nhân viên đã làm việc đủ 5 năm).",
    110: "💡 <b>Đáp án (C) constructive:</b> Cần tính từ đứng trước danh từ 'feedback': 'constructive feedback' (những lời nhận xét/phản hồi mang tính xây dựng).",
    111: "💡 <b>Đáp án (B) basis:</b> Cụm thành ngữ cố định 'on a seasonal basis' (hoạt động/vận hành theo thời vụ).",
    112: "💡 <b>Đáp án (C) Weakness:</b> Vị trí đầu câu trước giới từ 'in' cần danh từ làm chủ ngữ: 'Weakness in the housing market' (Sự suy yếu của thị trường nhà ở).",
    113: "💡 <b>Đáp án (C) surprised:</b> Động từ thì quá khứ đơn 'surprised' làm vị ngữ chính của câu: vụ sáp nhập bất ngờ đã làm ngạc nhiên phần lớn các chuyên gia phân tích tài chính.",
    114: "💡 <b>Đáp án (B) most common:</b> Cấu trúc so sánh nhất 'one of the most common [mistakes]' (một trong những lỗi sai phổ biến nhất tại nơi làm việc).",
    115: "💡 <b>Đáp án (B) primary:</b> Tính từ 'primary' trong cụm 'primary mission' (sứ mệnh hàng đầu/trọng tâm của tập đoàn).",
    116: "💡 <b>Đáp án (D) responsible:</b> Cấu trúc tính từ cố định: 'be responsible for doing something' (chịu trách nhiệm bảo đảm an toàn trang thiết bị khi kết thúc ca làm).",
    117: "💡 <b>Đáp án (C) harbor:</b> Danh từ 'harbor' (cảng biển/vũng tàu): dự án kéo dài 3 năm nhằm nạo vét sâu lòng cảng để tiếp nhận các tàu chở hàng lớn nhất thế giới.",
    118: "💡 <b>Đáp án (C) wildly:</b> Trạng từ 'wildly' đứng trước tính từ 'different' để nhấn mạnh: 'wildly different' (hoàn toàn khác xa so với kỳ vọng ban đầu).",
    119: "💡 <b>Đáp án (C) Despite:</b> Sau chỗ trống là cụm danh từ 'critical reviews' nên dùng giới từ chỉ sự nhượng bộ 'Despite' (Mặc cho những nhận xét khắt khe của giới phê bình...).",
    120: "💡 <b>Đáp án (A) acts:</b> Chủ ngữ số ít 'The spray-on sealant', câu diễn tả sự thật nên chia động từ hiện tại đơn số ít: 'acts as a protective layer' (đóng vai trò như một lớp màng bảo vệ).",
    121: "💡 <b>Đáp án (C) until:</b> Liên từ chỉ thời gian 'until' (cho đến khi): hợp đồng sẽ không được trao cho đến khi tất cả các hồ sơ đấu thầu được nộp đầy đủ.",
    122: "💡 <b>Đáp án (D) health:</b> Cụm danh từ ghép 'health benefits' (những lợi ích đối với sức khỏe con người).",
    123: "💡 <b>Đáp án (C) among:</b> Giới từ 'among' dùng khi ở giữa/nằm trong số nhiều đối tượng: 'among the winners' (nằm trong số những người chiến thắng cuộc thi nghệ thuật).",
    124: "💡 <b>Đáp án (D) to be forgotten:</b> Cấu trúc 'cause somebody/something to do something', ở đây mang nghĩa bị động nên dùng 'to be forgotten' (khiến các doanh nghiệp nhỏ bị khách hàng lãng quên).",
    125: "💡 <b>Đáp án (B) absorb:</b> Động từ nguyên mẫu chỉ mục đích sau 'to': 'absorb unwanted background noise' (triệt tiêu/hấp thụ tiếng ồn không mong muốn xung quanh).",
    126: "💡 <b>Đáp án (B) using:</b> Dùng hiện tại phân từ V-ing chỉ phương thức thực hiện hành động: 'using the hotel's wireless network' (bằng cách kết nối mạng không dây của khách sạn).",
    127: "💡 <b>Đáp án (B) diligently:</b> Trạng từ 'diligently' (một cách cần mẫn, tận tụy) đứng giữa trợ động từ và động từ chính 'worked' để bổ nghĩa.",
    128: "💡 <b>Đáp án (B) those:</b> Đại từ 'those' làm đại từ thay thế cho người trong cấu trúc 'those who...' (dành cho những ai mong muốn an tâm hơn).",
    129: "💡 <b>Đáp án (C) commence:</b> Động từ 'commence' (bắt đầu/khởi động): chương trình đọc sách cho trường học sẽ chính thức khởi động vào tháng 10.",
    130: "💡 <b>Đáp án (D) impartial:</b> Tính từ 'impartial' (khách quan, không thiên vị): các chuyên gia cố vấn độc lập là nguồn cung cấp những lời khuyên khách quan, công tâm cho các chủ doanh nghiệp mới.",
    131: "💡 <b>Đáp án (A) role:</b> Danh từ 'role' (vai trò/vị trí): sau 10 năm cống hiến ở vai trò giám đốc nghệ thuật.",
    132: "💡 <b>Đáp án (A) There:</b> Trạng từ chỉ nơi chốn 'There' thay thế cho thủ đô Paris vừa nhắc ở câu trước: Tại đó, cô ấy sẽ gia nhập ban lãnh đạo...",
    133: "💡 <b>Đáp án (C):</b> 'He will be joining us on January 12' bổ sung thời gian người kế nhiệm Marcos Molina chính thức nhận việc.",
    134: "💡 <b>Đáp án (C) has been:</b> Thì hiện tại hoàn thành diễn tả sự cống hiến kéo dài suốt nhiệm kỳ 10 năm qua: 'She has been a key factor...'.",
    135: "💡 <b>Đáp án (D) as:</b> Giới từ 'as' mang nghĩa với tư cách là: 'Your success as a team leader' (Sự thành công của bạn với tư cách là một người trưởng nhóm).",
    136: "💡 <b>Đáp án (C):</b> 'They communicate with their team regularly to keep them informed' tiếp nối luận điểm mô tả kỹ năng của những nhà lãnh đạo giỏi ở câu trước.",
    137: "💡 <b>Đáp án (B) will learn:</b> Thì tương lai đơn diễn tả kết quả sau khi tham gia khóa học: 'In this seminar, you will learn...' (Trong khóa học này, bạn sẽ học được...).",
    138: "💡 <b>Đáp án (C) Participants:</b> Danh từ số nhiều chỉ người: 'Participants in the seminar' (Những người tham gia khóa hội thảo).",
    139: "💡 <b>Đáp án (C) within:</b> Giới từ chỉ khoảng thời gian: 'within the next few months' (trong vòng vài tháng tới).",
    140: "💡 <b>Đáp án (A):</b> 'Let us help you achieve these objectives' kết nối tự nhiên với mong muốn tạo lập một cơ sở trị liệu thoải mái, trấn an bệnh nhân ở câu trước.",
    141: "💡 <b>Đáp án (A) space:</b> Cụm từ 'create an inviting space' (tạo nên một không gian ấm cúng, thân thiện mà bạn có thể tự hào).",
    142: "💡 <b>Đáp án (D) previous:</b> Cụm danh từ 'our previous projects' (các dự án trước đây của chúng tôi trên trang web danh mục công trình).",
    143: "💡 <b>Đáp án (A):</b> 'Lengthier articles are sometimes considered as well' (Những bài viết dài hơn đôi khi cũng được xem xét) bổ sung thông tin sau quy định độ dài bài viết thông thường từ 800 đến 1.200 từ.",
    144: "💡 <b>Đáp án (C) Before you do:</b> Cụm liên từ chỉ thời gian: 'Trước khi bạn gửi bản đề xuất, hãy dành thời gian đọc tạp chí của chúng tôi...'.",
    145: "💡 <b>Đáp án (A) We:</b> Đại từ nhân xưng 'We' làm chủ ngữ đại diện cho ban biên tập tạp chí Digital Chicory (Chúng tôi sẽ phản hồi nhanh chóng...).",
    146: "💡 <b>Đáp án (B) drafts:</b> Danh từ số nhiều 'Full-length drafts' (Các bản thảo hoàn chỉnh đầy đủ độ dài thường không được khuyến khích ở giai đoạn gửi đề xuất sơ bộ).",
    147: "💡 <b>Đáp án (C):</b> Mẩu thông tin quảng bá diện tích quảng cáo trên tờ báo nhằm thu hút các cá nhân, doanh nghiệp địa phương muốn quảng bá dịch vụ của mình.",
    148: "💡 <b>Đáp án (C):</b> Chi tiết 'The Clearpoint Times reaches thousands of your neighbors each week' cho thấy đây là một ấn phẩm báo tuần phục vụ cộng đồng địa phương.",
    149: "💡 <b>Đáp án (A):</b> Thợ cảnh quan David Paltz gửi email để hẹn gặp lại gia chủ nhằm trao đổi cụ thể hơn về dự án thi công hiên nhà.",
    150: "💡 <b>Đáp án (D):</b> Ông Paltz đề nghị hai vợ chồng gia chủ suy nghĩ và định hình các mong muốn thiết kế (provide him with landscaping ideas).",
    151: "💡 <b>Đáp án (B):</b> Khách sạn nằm sát vịnh biển, gần các tuyến đường mòn đi bộ, chèo thuyền kayak, câu cá -> Rất thích hợp cho những người yêu thích các hoạt động ngoài trời.",
    152: "💡 <b>Đáp án (D):</b> Danh mục phòng liệt kê có loại 'two-room suite with kitchen' (phòng suite hai gian có sẵn bếp riêng để nấu nướng).",
    153: "💡 <b>Đáp án (D):</b> Khi nói 'I know you'd be a great fit. You check all the boxes', Paul khẳng định Marisol là một ứng viên vô cùng sáng giá cho công việc tại Yadav Digital Marketing.",
    154: "💡 <b>Đáp án (A):</b> Paul Cho khuyên không cần gửi thư xin việc vì ông và giám đốc Elise Mayer đã là bạn bè thân thiết từ nhiều năm nay ('Elise and I have been friends for years').",
    155: "💡 <b>Đáp án (C):</b> Bài báo đưa tin hãng Covered Bridge Industries chuẩn bị ra mắt dòng nước giải khát mới Balmy Breeze ('soft drink') -> Nhà sản xuất thức uống/nước giải khát.",
    156: "💡 <b>Đáp án (D):</b> Lãnh đạo công ty phải dời lịch ra mắt sản phẩm là do thiếu hụt nguồn cung cấp chiết xuất xoài ('a shortage of one of the drink's main components, mango extract').",
    157: "💡 <b>Đáp án (D):</b> Công ty kỳ vọng hoàn tất kiểm định chất lượng vào tháng 11 để có thể tung sản phẩm ra thị trường vào tháng kế tiếp ('the following month' -> tháng 12 - December).",
    158: "💡 <b>Đáp án (C):</b> Thông báo giải thích phần mềm Zipvid bị ngừng sử dụng và thay thế bằng Curtain Call vì phần mềm cũ thường xuyên gặp lỗi/bị sập ('less likely to crash').",
    159: "💡 <b>Đáp án (A):</b> Nhân viên cần trợ giúp cài đặt tiện ích để chuyển đổi định dạng video được hướng dẫn liên hệ với Manuel Costa thuộc bộ phận hỗ trợ kỹ thuật.",
    160: "💡 <b>Đáp án (B):</b> Vị trí [2] nằm ngay sau câu giới thiệu phần mềm mới Curtain Call, rất khớp để nối tiếp: 'Nó đã được cài đặt sẵn trên mọi máy tính cơ quan, vì vậy bạn có thể bắt đầu sử dụng ngay lập tức'.",
    161: "💡 <b>Đáp án (C):</b> Cửa hàng A Thousand Stories do bà Liz Ohtani và Sandra Rivera làm chủ, thường xuyên tổ chức sự kiện với các tác giả và phục vụ những khách hàng yêu sách -> Cửa hàng bán sách.",
    162: "💡 <b>Đáp án (D):</b> Cả hai doanh nghiệp địa phương đều chia sẻ họ gặp vô vàn trắc trở, thử nghiệm và sai sót trong giai đoạn đầu mới thành lập trước khi kinh doanh ổn định.",
    163: "💡 <b>Đáp án (B):</b> Cụm từ quen thuộc 'turn a profit' mang nghĩa bắt đầu sinh lời, thu được lợi nhuận -> từ 'turn' đồng nghĩa với **gain**.",
    164: "💡 <b>Đáp án (D):</b> Ông Louie Rosier chia sẻ ông đang tiến hành khảo sát khu vực Morganville để mở thêm cơ sở thứ hai cho trung tâm làm vườn của mình.",
    165: "💡 <b>Đáp án (D):</b> Thông báo nêu rõ: đối với một số công việc đặc thù, người giám sát có trách nhiệm cung cấp thêm các hướng dẫn an toàn bổ sung cho nhân viên.",
    166: "💡 <b>Đáp án (B):</b> Từ 'measures' trong ngữ cảnh 'propose additional measures' (đề xuất các biện pháp/quy trình bổ sung) đồng nghĩa với **procedures**.",
    167: "💡 <b>Đáp án (D):</b> Nhân viên muốn tìm hiểu thông tin về lịch tổ chức các khóa tập huấn sơ cấp cứu được hướng dẫn liên hệ với Lynn Schneider (request a training schedule).",
    168: "💡 <b>Đáp án (A):</b> Bản mô tả công việc của giám sát viên đường cao tốc bao gồm nhiệm vụ tổ chức các hoạt động dọn tuyết ('snow-removal operations') -> Khu vực Dora County có mùa đông lạnh giá và tuyết rơi.",
    169: "💡 <b>Đáp án (C):</b> Hướng dẫn quy định rõ: nếu phát sinh các vấn đề nhân sự lớn, giám sát viên phải báo cáo lên giám đốc bộ phận ('informs the division director of major personnel problems').",
    170: "💡 <b>Đáp án (D):</b> Giám sát viên vận hành máy móc công trình, đánh giá nhân viên và quản lý ngân sách tháng, nhưng KHÔNG có quyền hạn đàm phán tiền lương của công nhân.",
    171: "💡 <b>Đáp án (B):</b> Vị trí [2] mở đầu cho đoạn văn mô tả các nhiệm vụ tuyển dụng, đào tạo, giám sát và đánh giá nhân sự (staff management).",
    172: "💡 <b>Đáp án (D):</b> Ba người nhắn tin để thống nhất và điều phối thời gian tháo dỡ rồi lắp lại đường ống sưởi khớp với tiến độ thi công sửa chữa móng nhà.",
    173: "💡 <b>Đáp án (A):</b> Marcus gọi địa chỉ 210 Leon Drive là 'the Browns' house' và gia đình Brown đang đi nghỉ mát -> Đây là nhà ở riêng của hộ gia đình.",
    174: "💡 <b>Đáp án (C):</b> Arthur cho biết công trình này mất 3 đến 4 ngày vì quy mô lớn bất thường ('unusually large job'), ngụ ý rằng các công trình thông thường của đội ông chỉ mất dưới 3 ngày.",
    175: "💡 <b>Đáp án (B):</b> Khi Marcus đồng ý lịch làm vào sáng sớm thứ Hai, câu trả lời 'You got it' của Jennifer xác nhận cô sẽ có mặt tại nhà số 210 Leon Drive vào sáng sớm thứ Hai.",
    176: "💡 <b>Đáp án (C):</b> Bảng thông tin ghi rõ một số sản phẩm như Easy Star và Big Mix có dòng ghi chú 'In-store pickup only' -> Chỉ có thể đến lấy trực tiếp tại cửa hàng, không hỗ trợ giao hàng.",
    177: "💡 <b>Đáp án (B):</b> Email của ông Weaver ghi rõ ông đã đặt mua chiếc máy trộn dung tích 4 foot khối, đối chiếu bảng sản phẩm dung tích 4 cubic feet chính là mẫu Concretizer (giá 499 USD).",
    178: "💡 <b>Đáp án (C):</b> Từ 'full' trong cụm 'full refund' (hoàn tiền toàn bộ/đầy đủ) đồng nghĩa với **complete**.",
    179: "💡 <b>Đáp án (D):</b> Ông Weaver đề cập việc có thể tự đến lấy hàng tại cửa hàng ở New Gralen hoặc cửa hàng ở Paloner -> Doanh nghiệp này có nhiều chi nhánh cửa hàng khác nhau.",
    180: "💡 <b>Đáp án (B):</b> Bảng giá của JJ's niêm yết mẫu Mr. Buddy là 359 USD, và ông Weaver khẳng định cửa hàng Alliance bán chiếc máy này với mức giá y hệt cửa hàng JJ's.",
    181: "💡 <b>Đáp án (A):</b> Trang web lưu ý kinh doanh thương mại quốc tế rất phức tạp vì 'Guidelines vary from country to country' (Quy định và hướng dẫn khác nhau tùy theo từng quốc gia).",
    182: "💡 <b>Đáp án (C):</b> Chi phí duy trì tư vấn hàng tháng (monthly retainer) sẽ được hai bên thỏa thuận và ấn định trong buổi tư vấn ban đầu ('negotiated during the introductory session').",
    183: "💡 <b>Đáp án (D):</b> Ông Yadav giải thích ông đã điền phiếu câu hỏi trên trang web nhưng không nhận được email xác nhận nên phải gửi email này để nhắc lại thông tin công ty.",
    184: "💡 <b>Đáp án (B):</b> Doanh nghiệp của ông Yadav chuyên bán máy giặt và máy sấy cao cấp (đồ gia dụng), đối chiếu bảng nhân sự thì Jonah Woodrow là cố vấn chuyên trách mảng thiết bị gia dụng (household appliances).",
    185: "💡 <b>Đáp án (C):</b> Ông Yadav chia sẻ trong email rằng doanh nghiệp của ông đang muốn mở rộng hoạt động thương mại sang thị trường quốc tế, đặc biệt là khắp châu Âu.",
    186: "💡 <b>Đáp án (A):</b> Đoạn 2 bài báo khẳng định: ngoại trừ sự hỗ trợ về giấy tờ thuế, các chương trình đào tạo kiến thức tài chính đều được cung cấp hoàn toàn miễn phí cho chủ tài khoản BASA.",
    187: "💡 <b>Đáp án (D):</b> Sonfaya Mutual có trụ sở chính tại Kigali (Rwanda) và có các văn phòng chi nhánh tại Tanzania, Uganda và Zambia -> Doanh nghiệp hoạt động quốc tế đa quốc gia.",
    188: "💡 <b>Đáp án (C):</b> Bà Chabinga tìm số báo tháng Giêng vì bài viết giới thiệu số báo đó có bài phân tích chuyên sâu về nguồn gốc lịch sử hình thành và phát triển của ngân hàng Sonfaya Mutual.",
    189: "💡 <b>Đáp án (A):</b> Bài báo nêu chính sách miễn phí quản lý hàng tháng trong 6 tháng đầu cho khách hàng mới mở tài khoản BASA, và bà Nirere vừa mới mở tài khoản này.",
    190: "💡 <b>Đáp án (B):</b> Thư của người quản lý tài khoản hướng dẫn cách chuyển tiền online giữa tài khoản thanh toán và tiết kiệm, cùng cách rút tiền qua thẻ ATM -> Giới thiệu các phương thức quản lý dòng tiền.",
    191: "💡 <b>Đáp án (A):</b> Bà Rodriguez phải rời đi trước 7 giờ sáng nên đã hỏi xin danh sách nhà hàng gần đó phục vụ giờ này, và hóa đơn hoàn trả cho thấy bà phải ăn sáng ở quán khác -> B&B không phục vụ bữa sáng trước 7 giờ.",
    192: "💡 <b>Đáp án (D):</b> Hướng dẫn quy định tất cả nhân viên đi công tác phải hoàn thành mẫu hoàn tiền và tải các hóa đơn lên hệ thống trong vòng 30 ngày kể từ ngày công tác.",
    193: "💡 <b>Đáp án (C):</b> Hội nghị diễn ra tại khách sạn Ivor Hotel & Conference Center, biên lai ăn sáng tại Eileen's Diner nằm ngay bên trong khuôn viên trung tâm này ghi địa chỉ tại Santa Clara, California.",
    194: "💡 <b>Đáp án (C):</b> Quy định của biểu mẫu nêu rõ phải được ký duyệt bởi người quản lý bộ phận của nhân viên ('approved and signed by the employee's department manager'), và người ký tên là Eun Park.",
    195: "💡 <b>Đáp án (D):</b> Hóa đơn của Eileen's Diner in rõ dòng giới thiệu: 'Family-owned and operated for over two decades!' -> Quán đã hoạt động kinh doanh hơn 20 năm.",
    196: "💡 <b>Đáp án (B):</b> Quản lý sản xuất Stacy Landon gửi email khẩn cấp yêu cầu cử kỹ thuật viên đến kiểm tra và khắc phục sự cố máy dập Quinar 5000 đang làm gián đoạn dây chuyền sản xuất.",
    197: "💡 <b>Đáp án (B):</b> Do đội ngũ bảo trì nội bộ đang quá tải, ông Nahm quyết định thuê một công ty dịch vụ bên ngoài (Konner Services) cử chuyên viên kỹ thuật đến kiểm tra máy.",
    198: "💡 <b>Đáp án (D):</b> Email của Nahm lưu ý Alex Nadiner có thể cần bố trí công nhân làm tăng ca, và báo cáo kỹ thuật xác nhận người quản lý dây chuyền ('line manager') đã được thông báo -> Nadiner là quản lý dây chuyền sản xuất.",
    199: "💡 <b>Đáp án (D):</b> Báo cáo dịch vụ sửa chữa của Konner Services ghi rõ địa điểm máy đặt tại Tòa nhà F của Haverford Industries -> Bà Landon làm việc cho Haverford Industries.",
    200: "💡 <b>Đáp án (C):</b> Báo cáo kết quả ghi 'Test 477: Faulty Baum X33 main switch', và phần nhận xét của thợ xác nhận kỹ thuật viên đã thay thế chiếc công tắc chính bị hỏng này."
};