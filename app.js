
function tinhCanhHuyen(){
    // value để xác định giá trị mặc định của một phần tử nhập liệu
    //parseInt là một hàm trong JavaScript được sử dụng để chuyển đổi một chuỗi thành một số nguyên. Nó sẽ trích 
    // xuất các ký tự số từ đầu chuỗi và trả về số nguyên tương ứng.
   var a = parseInt (document.getElementById('a').value);
   var b = parseInt (document.getElementById('b').value);
   var c = Math.sqrt (a*a + b*b);
   
   document.getElementById('ketqua').innerHTML = "canh huyen la" + c;

}
function tinhCanNang() {
    var c = parseInt(document.getElementById('c').value);
    var d = parseInt(document.getElementById('d').value);
    var bmi = (c / (d * d));   

    if (bmi < 18.5) {
      alert('Thiếu cân');
    } else if (bmi >= 18.5 && bmi < 25) {
      alert('Bình thường');
    } else if (bmi >= 25 && bmi < 30) {
      alert('Thừa cân');
    } else {
      alert('Béo phì');
    }
    document.getElementById('ketquabmi').innerHTML = "Chỉ số BMI của bạn là " + bmi;
  }
