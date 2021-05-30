'use strict';
const { text, json } = require('body-parser');
const BootBot = require('bootbot');
const fetch = require('node-fetch');
const GIPHY_URL = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=`;


const bot = new BootBot({
  accessToken: 'EAAETD98ScHcBAKTmcFVV3ZCCHW9QZCFeQXDZBTCCRawOmTLDfxIcKvo3YiSgrq8Bqe1fct823YRTd7y9vwZAFMnYRsHlMLY7Kk6EJfOc0pD2lZByprBGMsNEfAgbcIOrg4ZBtbz0LL0KJa9H1PfwwM8pFUUjlSWVKHpU01xNQGRhAPznGrWFnP',
  verifyToken: 'phanvantho18ct4',
  appSecret: '86a0d0a7c2425305529aa1a05c59679e'
});
bot.hear(['hello', 'hi','hey','xin chào','help','bắt đầu',], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say({
      text: 'Chào mừng bạn ghé thăm MobileCity. Hãy gửi cho chúng tôi bất kỳ câu hỏi nào của bạn.',
    	buttons: [{
      "type":"web_url",
      "url":"https://www.mobilecity.vn/",
      "title":"Truy cập trang Web của chúng tôi",
      "webview_height_ratio": "full"
    }]
  })
});
bot.hear(['cảm ơn ạ','ok cảm ơn ạ', 'thank you','cảm ơn','cảm ơn shop','bye','tạm biệt'], (payload, chat,data) => {
	const query = 'thankyou';
  chat.say('Rất vui được phục vụ bạn\nchúc bạn có một ngày tốt lành ạ :)');
  fetch(GIPHY_URL + query)
    .then(res => res.json())
    .then(json => {
      chat.say({
        attachment: 'image',
        url: json.data.image_url
      }, {
        typing: true
      });
    });
});
bot.hear(['tôi muốn mua điện thoại', 'tôi cần mua điện thoại','điện thoại','tầm giá khác','tôi muốn mua điện thoại tầm giá khác'], (payload, chat) => {
	// Send a text message with quick replies
	chat.say({
		text: 'Bạn có nhu cầu mua điện thoại trong tầm giá nào?',
		quickReplies: ['Dưới 3tr', 'Dưới 7tr', 'Dưới 10tr', 'Trên 10tr']
	});
});

bot.hear(['Dưới 3tr'], (payload, chat) => {
	// Xử lý tin nhắn cho điện thoại dưới 3tr
	chat.say({
    text: 'Bạn có quan tâm tới các hãng điện thoại khác không??',
    buttons: [
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-xiaomi",
      "title":"Xiaomi",
      "webview_height_ratio": "full"},
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-apple",
      "title":"Iphone",
      "webview_height_ratio": "full"},
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-samsung",
      "title":"SamSung",
      "webview_height_ratio": "full"}
    ],
    
  }).then(() => {
    chat.say({
      text: 'Sau đây là các mẫu điện thoại dưới 3tr bán chạy mời bạn tham khảo',
      quickReplies:['Xiaomi redmi 9','LG G7 ThinQ','Vsmart Joy4']
            });
  });
});

bot.hear(['Dưới 7tr'], (payload, chat) => {
	// xử lý tin nhắn cho điện thoại dưới 7tr
  chat.say({
    text: 'Bạn có quan tâm tới các hãng điện thoại khác không??',
    buttons: [
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-xiaomi",
      "title":"Xiaomi",
      "webview_height_ratio": "full"},
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-apple",
      "title":"Iphone",
      "webview_height_ratio": "full"},
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-samsung",
      "title":"SamSung",
      "webview_height_ratio": "full"}
    ],
    
  }).then(() => {
    chat.say({
      text: 'Sau đây là các mẫu điện thoại dưới 7tr bán chạy mời bạn tham khảo',
      quickReplies:['Honor 9X','OPPO Reno5 Chính Hãng','Realme Q3 Pro']
            });
  });
});

bot.hear(['Dưới 10tr'], (payload, chat) => {
	// xử lý tin nhắn cho điện thoại dưới 7tr
  chat.say({
    text: 'Bạn có quan tâm tới các hãng điện thoại khác không??',
    buttons: [
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-xiaomi",
      "title":"Xiaomi",
      "webview_height_ratio": "full"},
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-apple",
      "title":"Iphone",
      "webview_height_ratio": "full"},
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-samsung",
      "title":"SamSung",
      "webview_height_ratio": "full"}
    ],
    
  }).then(() => {
    chat.say({
      text: 'Sau đây là các mẫu điện thoại dưới 10tr bán chạy mời bạn tham khảo',
      quickReplies:['Smartisan Nut Pro 3','OnePlus 7 Pro','Samsung Galaxy Note 10']
            });
  });
});

bot.hear(['Trên 10tr'], (payload, chat) => {
	// xử lý tin nhắn cho điện thoại dưới 7tr
  chat.say({
    text: 'Bạn có quan tâm tới các hãng điện thoại khác không??',
    buttons: [
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-xiaomi",
      "title":"Xiaomi",
      "webview_height_ratio": "full"},
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-apple",
      "title":"Iphone",
      "webview_height_ratio": "full"},
      {"type":"web_url",
      "url":"https://www.mobilecity.vn/dien-thoai-samsung",
      "title":"SamSung",
      "webview_height_ratio": "full"}
    ],
    
  }).then(() => {
    chat.say({
      text: 'Sau đây là các mẫu điện thoại trên 10tr bán chạy mời bạn tham khảo',
      quickReplies:['Vivo iQOO 7','Xiaomi Mi 10S','Lenovo Legion Pro']
            });
  });
});

//xử lý 1 số tin nhắn khác
bot.hear(['tôi muốn mua điện thoại để chơi game','có điện thoại nào chơi game mạnh','mua điện thoại chơi game','tôi muốn mua điện thoại chơi game'],(payload,chat) => {
  chat.say({
    text: 'Mời bạn tham khảo một số dòng máy chơi game sau',
    quickReplies:['Xiaomi Redmi 10X 5G','Redmi K30 5G','IQOO Z1x']
          });
});
//điện thoại chơi game
bot.hear(['Xiaomi Redmi 10X 5G'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/05/w80/redmi-10x-white-1.jpg',
  }).then(() =>{
    chat.say({
      text:'Bên trong Xiaomi Redmi 10X 5G là bộ vi xử lý Dimensity 820 5G của MediaTek,Ngoài con Chip mới ra mắt thì điều đáng chú ý ở đây là chế độ 5G kép. Xiaomi Redmi 10X 5G là chiếc máy sở hữu chế độ chờ 5G kép đầu tiên trên thế giới,Về khả năng chụp ảnh, mẫu smartphone Xiaomi Redmi 10X 5G sở hữu cụm 3 camera tích hợp đèn LED flash trợ sáng với độ phân giải cao\nGiá chỉ: 5.050.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/xiaomi/xiaomi-redmi-10x-5g.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['Redmi K30 5G'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/04/w80/vivo-iqoo-z3-3.jpg',
  }).then(() =>{
    chat.say({
      text:'Cấu hình Xiaomi Redmi K30 5G được nâng cấp mạnh với Snapdragon 765G,CPU Snapdragon 765 là một con chip mới cực mạnh thời điểm hiện tại, hứa hẹn một hiệu năng vượt trội so với các vi sử lý tầm trung hiện tại.Camera selfie của Xiaomi Redmi K30 5G là một nét độc đáo riêng của dòng K này. Cụm Camera Selfie 20MP +2MP được thiết kế khác so mới thế hệ trước\nGiá chỉ: 5.450.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/xiaomi/xiaomi-redmi-k30-5g.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['IQOO Z1x'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/04/w150/vivo-iqoo-z1x-2.png',
  }).then(() =>{
    chat.say({
      text:'Chiếc iQOO Z1x này được trang bị màn hình IPS LCD 5.7 inch, độ phân giải Full HD+,Vivo iQOO Z1x sở hữu con chip Snapdragon 765G là con chip tầm trung mạnh mẽ nhất của nhà Qualcomm trong thời điểm hiện tại.Hệ thống làm mát bằng chất lỏng như của PC chỉ có trên Vivo iQOO Z1x.Vivo iQOO Z1x sở hữu thiết kế 3 camera rất thanh lịch và cuốn hút\nGiá chỉ: 5.050.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/vivo/vivo-iqoo-z1x.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['tôi sẽ liên hệ với shop','liên hệ','tôi muốn liên hệ shop','tôi sẽ liên hệ với shop sau','tôi muốn liên hệ'],(payload,chat) => {
  chat.say({
    text: 'Xin vui lòng liên hệ số điện thoại \n HN: 0969.120.120 \n SG: 0965.123.123 \n ĐN: 096.123.9797',
    buttons: [{
      "type":"web_url",
      "url":"https://www.mobilecity.vn/",
      "title":"Hoặc truy cập trang Web",
      "webview_height_ratio": "full"
    }
  ],
  })
});

//Các thông tin của điện thoại
bot.hear(['Xiaomi redmi 9'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/06/w150/redmi-9-1-1.jpg',
  }).then(() =>{
    chat.say({
      text:'Màn hình Xiaomi Redmi 9 nâng cấp lên Full HD+ cực nét\nXiaomi Redmi 9 là máy giá rẻ nhưng lại sở hữu chip chuyên game tầm trung Mediatek Helio G80\nSmartphone sở hữu 4 camera cực đẹp rẻ nhất chỉ có thể là Xiaomi Redmi 9\nGiá chỉ:2.950.00 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/xiaomi/xiaomi-redmi-9.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['LG G7 ThinQ'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/01/w150/lg-g7-thinq-do.jpg',
  }).then(() =>{
    chat.say({
      text:'LG G7 ThinQ cũ chính hãng với những trang bị cao cấp, Thiết kế tinh tế, hiệu năng mạnh mẹ cùng camera kép AI, Loa siêu lớn cho trải ngiệm vô cùng tuyệt vời.\nGiá chỉ: 2.990.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/lg/lg-g7-cu.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['Vsmart Joy4'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/09/w150/vsmart-joy-4.jpg',
  }).then(() =>{
    chat.say({
      text:'Cải tiến màn hình ở Vsmart Joy 4 so với phiên bản tiền nhiệm\nHiệu năng cải thiện khá nhiều với con chip mới trên Vsmart Joy 4\nBộ 4 camera được thiết kế đột phá trên Vsmart Joy 4\nVsmart Joy 4 còn được sở hữu 1 viên pin lớn và sạc nhanh\nGiá chỉ: 2.850.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/vsmart/vsmart-joy-4.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['Honor 9X'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/07/w150/9x-black.jpg',
  }).then(() =>{
    chat.say({
      text:'Honor 9X thiết kế hiện đại, màn hình Fullview, Camera Pop-up, hiệu năng cao – làm lên thành công cho thiết bị. Màn hình của Honor 9X liệu có tốt,Camera sau và camera Seflie Pop-up đặc biệt của sản phẩm,Pin trên Honor 9X rất tốt\nGiá chỉ: 5.050.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://www.mobilecity.vn/huawei/honor-9x.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['OPPO Reno5 Chính Hãng'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/04/w150/oppo-reno-5.png',
  }).then(() =>{
    chat.say({
      text:'OPPO Reno 5 chạy chip Snapdragon 720G với hiệu năng tốt trong tầm giá,OPPO Reno 5 có màn hình đẹp với độ phân giải cao với giá bán tốt nhất,OPPO Reno 5 có camera chụp ảnh đẹp, quay phim siêu nét,OPPO Reno 5 có viên pin dung lượng lớn, hỗ trợ sạc siêu nhanh\nGiá chỉ: 6.450.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/oppo/oppo-reno-5-chinh-hang.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['Realme Q3 Pro'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/04/w150/realme-q3-pro-3-2.jpg',
  }).then(() =>{
    chat.say({
      text:'Realme Q3 Pro chạy vi xử lý Dimensity 1100 5G hiệu năng cực khủng nhưng giá hợp lý,Realme Q3 Pro có hệ thống tản nhiệt tân tiến, giúp tản nhiệt hiệu quả cho máy,Realme Q3 Pro có cụm 3 camera sau chụp ảnh siêu đẹp, quay video siêu nét,Realme Q3 Pro có viên pin lớn hỗ trợ sạc nhanh công suất lớn,\nGiá chỉ: 6.350.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/oppo/realme-q3-pro.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});


bot.hear(['Smartisan Nut Pro 3'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/11/w150/smartisan-nut-pro-3.jpg',
  }).then(() =>{
    chat.say({
      text:'Smartisan Nut Pro 3 mới ra mắt cũng thế và thậm chí còn thêm một số điểm cải tiến.Cấu hình khủng trên Smartisan Nut Pro 3, Ở mặt sau của Smartisan Nut Pro 3  là máy ảnh IMX586 48MP f / 1.75, \nGiá chỉ: 9.100.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/smartisan/smartisan-nut-pro-3.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['OnePlus 7 Pro'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/11/w150/oneplus7pro.jpg',
  }).then(() =>{
    chat.say({
      text:'Về phần thiết kế tổng thể, OnePlus 7 Pro được thiết kế với khung nhôm và có một lớp kính bóng bẩy và máy có khối lượng 206g, OnePlus 7 Pro được coi là flagship killer còn Black Shark 2 Pro là điện thoại chơi Game số 1 của Xiaomi hiện tại. \nGiá chỉ: 8.750.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/oneplus/oneplus-7-pro.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['Samsung Galaxy Note 10'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/10/w150/samsung-note-10-plus-4.jpg',
  }).then(() =>{
    chat.say({
      text:'Màn hình Dynamic AMOLED của Samsung mang lại cho người dùng một màn hình hiển thị tuyệt vời. Màn hình có kích thước 6,3 inch với độ phân giải 1080 x 2280 pixels, Màn hình Quad HD + Dynamic AMOLED 6,3 inch thực sự ngoạn mục. Sản phẩm được trang bị nền tảng di động Qualcomm Snapdragon 855/ Exynos 9825 và kết hợp với 12GB RAM\nGiá chỉ: 8.750.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/samsung/samsung-galaxy-note-10-cu.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['Vivo iQOO 7'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/02/w150/vivo-iqoo-7-white.jpg',
  }).then(() =>{
    chat.say({
      text:'Vivo iQOO 7 Chip Snap 888, Gaming phone giá rẻ tại Hà Nội, Đà Nẵng, Tp.HCM. Phân phối Vivo iQOO 7 chính hãng, BH 12 tháng, Nổi bật ở mặt lưng này của iQOO 7 là cụm camera chính đặt trong mô-đun hình chữ nhật,Sang tới mặt trước, iQOO 7 được trang bị màn hình kích thước 6.6.62 inch, sử dụng tấm nền AMOLED, độ phân giải Full HD+ và có tần số quét 120Hz\nGiá chỉ: 12.550.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/vivo/vivo-iqoo-7.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['Xiaomi Mi 10S'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/04/w150/xiaomi-mi-10s-2.jpg',
  }).then(() =>{
    chat.say({
      text:'Xiaomi Mi 10S sở hữu 1 con chip vô cùng mạnh mẽ là Snapdragon 870 5G, với tiến trình 7nm vô cùng tiết kiệm nhiên liệu,Chất lượng âm thanh vô đối, cực kì nổi bật trên Xiaomi Mi 10S,Cụm 4 camera tuyệt đẹp có mặt trên Xiaomi Mi 10S,Xiaomi Mi 10S được trang bị viên pin khá lớn lên tới 4780 mAh.\nGiá chỉ: 12.050.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/xiaomi/xiaomi-mi-10s.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});

bot.hear(['Lenovo Legion Pro'],(payload,chat)=>{
  chat.say({
    attachment: 'image',
    url: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/07/w150/lenovo-legion-1.jpg',
  }).then(() =>{
    chat.say({
      text:'Lenovo Legion Pro là điện thoại thuộc dòng Legion chuyên chơi Game. Lenovo Legion Pro cũng chính là điện thoại được trang bị chip Snapdragon 865+ đầu tiên trên thế giới và có thiết kế cụm camera pop-up ở cạnh bên.Lenovo Legion Pro được trang bị chip mạnh nhất thế giới ở thời điểm hiện tại, Chip Snapdragon 865+ mạnh mẽ,Lenovo Legion Pro được trang bị sạc nhanh 90W đi kèm với nó là viên pin 5.000 mAh. \nGiá chỉ: 12.050.000 VNĐ',
      buttons: [{
        "type":"web_url",
        "url":"https://mobilecity.vn/lenovo/lenovo-legion-pro.html",
        "title":"Đặt hàng tại đây",
        "webview_height_ratio": "full"
      }]
    })
  }) 
});
bot.start( 4400 );