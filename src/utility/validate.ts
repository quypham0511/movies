
function isCheckedPass (oldPass: string, newPass: string) {
  if (oldPass.trim() !== newPass.trim()) {
    return 'Mat khau cu khac voi mat khau da nhap'
  }
}

function isPassword (text: string) {
  let err = ''
  let validCharacterRegex = /^[a-zA-Z0-9]*$/
  if (text == '') {
    err = 'ko duoc  de trong'
  }
 else if (!validCharacterRegex.test(text)) {
    err = 'Loi ko dung ki tu dac biet'
  } else if (text?.length < 8) {
    err = 'Ki tu nhap phai tu 8 tro len'
  }

  return err
}

export default {
  isCheckedPass,
  isPassword,
}
