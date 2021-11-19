puts "Deleting user/video/comment data..."
User.destroy_all
Video.destroy_all
Comment.destroy_all




puts "seeding users"
user1 = User.create(name: "Cody", email: "cmchaff14@yahoo.com", password: "password") 
user2 = User.create(name: "Sowande", email: "swanDaBest@gamil.com", password: "password")
puts"finished users"
puts"seeding videos"
video1 = Video.create(user_id: user1.id, url: "OE0Lpy-ddxU", title: "MHW Iceborne | After you've killed 100 Alatreon", likes: 26000, description: "Thanks to Mzly for teaming up with us", veiws: 1944081)
video2 = Video.create(user_id: user2.id, url: "-Q82bpVJDSc", title: "Coding Interviews Be Like Pt. 3", likes: 7800, description: "After being thrown a problem that he saw on LeetCode but did not solve, Nick struggles trying to find the maximum width of a binary tree. What tricks does he have up his sleeve this time?", veiws: 141524)
video1 = Video.create(user_id: user1.id, url: "OE0Lpy-ddxU", title: "MHW Iceborne | After you've killed 100 Alatreon", likes: 26000, description: "Thanks to Mzly for teaming up with us", veiws: 1944081)
video2 = Video.create(user_id: user2.id, url: "-Q82bpVJDSc", title: "Coding Interviews Be Like Pt. 3", likes: 7800, description: "After being thrown a problem that he saw on LeetCode but did not solve, Nick struggles trying to find the maximum width of a binary tree. What tricks does he have up his sleeve this time?", veiws: 141524)
video3 = Video.create(user_id: user2.id, url: "2RYa2jns0AU", title: "ESPN First Take | Stephen A: Cam Newton need to roll the Washington up to prove he is Hall of Fame", likes: 238, description: "Hall of Fame", veiws: 6636)
video4 = Video.create(user_id: user2.id, url: "SPMxyFJ76h8", title: "If YOU Was a Rom-Com | YOU | Netflix", likes: 17000, description: "Fall in love with a romance for the ages. The untold story of Ethan and Blythe from YOU.", veiws: 359623)
video5 = Video.create(user_id: user2.id, url: "lSh_ViuJ5OE", title: "Disgusting Shawn Mendes Scandal Exposes A Lot, Zac Stacy, Rittenhouse MSNBC, Julius Jones, & More", likes: 28000, description: "It's a news Show", veiws: 323520)
video6 = Video.create(user_id: user2.id, url: "MrjUM88A2vM", title: "Grand Theft Auto: The Trilogy - The Definitive Edition Review", likes: 19000, description: "Reviewed on PlayStation 5 by Tristan Ogilvie. Also available on Xbox, PC, and Nintendo Switch.", veiws: 533594)
video7 = Video.create(user_id: user2.id, url: "-bVU8K6jlKE", title: "The Complete Halo Saga In 22 Minutes", likes: 25000, description: "We tried to get it in five, and we failed beautifully. So here, relatively unabridged, is the complete Halo saga in 22 minutes.", veiws: 957185)
video8 = Video.create(user_id: user2.id, url: "JSRtYpNRoN0", title: "The Elder Scrolls V: Skyrim - Official Trailer", likes: 245000, description: "We're pleased to share the first ever in-game trailer for The Elder Scrolls V: Skyrim, the next installment in The Elder Scrolls series from award-winning creators of The Elder Scrolls IV: Oblivion and Fallout 3, Bethesda Game Studios.", veiws: 13010910)

puts"finished videos"
puts"seeding comments"
comment1 = Comment.create(video_id: video1.id, user_id: user1.id, remark: "wow that was awesome")
comment2 = Comment.create(video_id: video2.id, user_id: user2.id, remark: "this happens?")
comment3 = Comment.create(video_id: video1.id, user_id: user2.id, remark: "how did you do that?")
comment4 = Comment.create(video_id: video2.id, user_id: user1.id, remark: "makes me nervous for interviews")
puts"finished seeding data"