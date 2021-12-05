const { Post } = require('../models');

const postdata = [
  {
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    post_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate nisi sit amet massa consequat, sed imperdiet risus semper. Pellentesque elit ipsum, dictum a neque ac, malesuada rhoncus augue. Donec et semper tortor. Pellentesque dapibus lacus pulvinar, venenatis nibh eget, mollis erat. Morbi tempor, orci ac vehicula iaculis, urna tellus facilisis dolor, nec convallis ex ex ut lectus. Curabitur interdum et magna eu lobortis. Vestibulum tempor lacus vitae tincidunt vehicula. Aliquam blandit accumsan nibh eget dapibus. Maecenas aliquet, augue eu dignissim tincidunt, risus lorem vehicula arcu, id imperdiet odio dui nec nunc. Donec sit amet tincidunt lectus, id venenatis nisl. Integer pretium est ac consectetur venenatis. Nulla ut diam tellus. Aenean sapien magna, sodales ut viverra at, consectetur sed libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada eros sed vehicula vehicula.",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_text:
      "Cras pulvinar turpis odio, id tristique justo interdum eu. Ut orci massa, laoreet in gravida a, gravida non diam. Nam at viverra tortor. Fusce eu tortor bibendum, iaculis sapien ut, condimentum felis. Sed ac mauris nec orci ornare consectetur. Aliquam ultricies feugiat risus. Cras mollis ornare scelerisque. Suspendisse feugiat nulla dolor, a vulputate nisi aliquet quis. Nullam nec congue felis. Suspendisse dui elit, fringilla et nunc sollicitudin, suscipit tincidunt ante.",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_text:
      "Vivamus porttitor nibh at felis ornare, id maximus felis tristique. Integer ac arcu dui. Ut tristique est porttitor lacinia maximus. Vivamus venenatis est neque, in luctus libero tristique eget. Ut porttitor, orci non auctor pharetra, elit dolor auctor nisi, eget lobortis ante eros nec dolor. Nam risus sem, sollicitudin vitae venenatis ac, molestie nec odio. Curabitur eleifend, risus nec tincidunt efficitur, elit risus varius nibh, in venenatis lacus odio id odio. Nulla vestibulum imperdiet pulvinar.",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    post_text:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis pharetra tincidunt neque. Nulla in sapien id metus molestie pellentesque non eget velit. Ut dui nulla, congue cursus efficitur eleifend, bibendum vitae sem. Phasellus consequat semper diam quis aliquet. Suspendisse vel sem sapien. Vivamus ut arcu id lectus pharetra fringilla.",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    post_text:
      "Phasellus ante lorem, dapibus non sapien vitae, pretium fermentum massa. Integer metus nibh, aliquet in ante ornare, vestibulum accumsan augue. Integer felis tellus, pharetra at nisi et, tempus dictum risus. Donec vulputate, tortor vel aliquet aliquet, felis eros finibus ex, vel bibendum nunc sapien id odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse suscipit elit molestie felis sollicitudin, sed vehicula leo congue. Phasellus at tristique nunc. Nullam sagittis mi id velit iaculis, vitae vulputate neque vehicula. Morbi turpis dui, dapibus eget neque vitae, pretium volutpat orci. Donec ultrices ac elit eu fringilla. Nullam luctus semper tempus. Pellentesque ac ornare libero. Sed eget dictum ex. Sed pulvinar vestibulum feugiat. Integer eu erat at sapien bibendum fringilla.",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    post_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a laoreet ligula. Integer eget hendrerit arcu, in malesuada enim. Etiam consectetur tincidunt augue, a pellentesque enim tempus pretium. Morbi a finibus ligula, a elementum nisi. Aenean cursus massa quis enim aliquet pharetra. Proin nec malesuada velit, id sodales tellus. Curabitur quis sapien a felis luctus faucibus vitae quis nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vitae arcu et lorem egestas scelerisque malesuada at tortor. Donec volutpat diam enim, eleifend cursus ex rhoncus ut.",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_text:
      "Sed ut tortor vitae enim sodales facilisis et ac nisi. Nullam sit amet magna ut quam sagittis tincidunt ultrices in risus. In sed pretium lacus. Ut non suscipit nunc. Pellentesque pellentesque et magna vel porta. Donec non porta ligula. Vestibulum quis lorem vitae enim facilisis sodales. Fusce ut enim a sem vulputate facilisis. Sed volutpat facilisis diam, ut malesuada leo commodo in. Fusce a massa id tellus tristique posuere sed ac orci.",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_text:
      "Donec lorem ante, elementum id semper at, vehicula eu erat. Nullam imperdiet vehicula vehicula. Aliquam leo orci, euismod eu lacus ac, feugiat rutrum ipsum. Sed malesuada dapibus ante, vel tempus ex aliquam in. Pellentesque laoreet nec odio a finibus. Donec blandit, eros in pharetra malesuada, neque ante fringilla metus, quis pretium nisi urna eu purus. Proin ac enim sapien. Morbi blandit, justo nec commodo ultrices, orci ligula molestie dui, eu lacinia urna quam fringilla justo. Nulla congue velit a augue cursus, ac mattis libero porta. Donec ornare ultricies sapien, nec faucibus nisi interdum nec. Sed at quam massa. Aliquam erat volutpat.",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    post_text:
      "Vivamus sed neque ultrices, ultrices libero et, egestas nisi. Cras tincidunt bibendum lectus at condimentum. Pellentesque placerat justo efficitur, tempor ligula a, mollis nisl. Vivamus ultricies dolor libero, eget molestie enim vehicula sollicitudin. Maecenas volutpat ac justo sit amet ornare. Pellentesque sit amet quam eget felis pulvinar dictum. Suspendisse potenti. Aliquam auctor ex non ultricies tincidunt. Quisque placerat nulla vel orci luctus, a condimentum libero lacinia. Nullam eu elit lacus. Nam suscipit finibus aliquam. Phasellus nec neque ornare, placerat nunc eu, commodo massa. Phasellus vitae lorem sed leo laoreet ornare id facilisis orci. Fusce fringilla dignissim est, sit amet tempus dolor sodales pulvinar. Ut diam sem, varius eu faucibus nec, accumsan sed leo. Donec ullamcorper urna nec egestas cursus.",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    post_text:
      "Sed ultrices tortor ultrices diam sodales fringilla. Phasellus rutrum accumsan tristique. Donec erat tellus, finibus nec commodo eu, lacinia eget erat. Sed ornare interdum tincidunt. Aenean neque libero, consectetur cursus pellentesque nec, consectetur eget enim. Praesent a felis sem. Suspendisse sed mattis sapien. Maecenas aliquet venenatis venenatis. In sollicitudin elit a malesuada efficitur. Praesent elit lacus, consequat at molestie sed, facilisis nec purus. Ut porta orci in dolor fringilla porttitor. Proin eros metus, fermentum et vestibulum eget, lobortis non lacus. Duis molestie tristique dignissim.",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_text:
      "Quisque placerat auctor leo id ultricies. Proin bibendum eu nisl vel pretium. Aenean aliquam tempor felis, faucibus ornare metus tincidunt sit amet. Vivamus urna turpis, laoreet eget pellentesque sed, iaculis id eros. Sed tempor quam id urna feugiat, at pharetra tortor rutrum. Pellentesque mauris diam, cursus a metus non, hendrerit mollis sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer fermentum nisl at ante ullamcorper tempor. Phasellus id leo pharetra, pretium ligula quis, molestie orci. Sed pulvinar purus et varius efficitur. Cras id condimentum mauris, quis tincidunt risus. Mauris congue elementum diam, eget cursus nibh vehicula ut. Phasellus ut rhoncus lorem, id porttitor neque.",
    user_id: 3,
  },
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
