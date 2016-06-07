/* ===  forms.js  06/07/2016  seawuf  === */

function billingFunction() {
  var form_update_info = ""
  var shipping_name = document.getElementById("shippingName");
  var shipping_zip  = document.getElementById("shippingZip");
  var should_dup = document.getElementById("same").checked;

  if (should_dup == true) {
    if (testShipFilled() == true) {
      document.getElementById("billingName").value = shipping_name.value;
      document.getElementById("billingZip").value = shipping_zip.value;
      form_update_info = "Copied Shipping Information to Billing Information.";
    }
    else {
      form_update_info = "There's no Shipping Information to copy.";
      document.getElementById("same").checked = false;
    }
  }
  else {
    if (testBillFilled() == true) {
      if (testBillIsIdentical() == true) {
        clearBilling();
        form_update_info = "Cleared Billing Information.";
      }
      else { // testBillIsIdentical FALSE
        if (confirm("Billing Information is different than Shipping Information.\n\t\t\t\tClear it?")) {
          clearBilling();
          form_update_info = "Cleared Billing Information that was not identical.";
        }
        else
          form_update_info = "Billing Information was not cleared.";
      } // testBillIsIdentical END
    }
    else // testBillFilled FALSE (nothing to clear)
      form_update_info = "There is no Billing Information to clear.";
  }
  document.getElementById("form_update").innerHTML = form_update_info;
}

function testShipFilled() {
  var sName = document.getElementById("shippingName").value;
  var sZip  = document.getElementById("shippingZip").value;
  var shipping_has_data = false;
  if ((sName.trim() > "") || (sZip.trim() > ""))
    shipping_has_data = true;
  return shipping_has_data;
}

function testBillFilled() {
  var bName = document.getElementById("billingName").value;
  var bZip  = document.getElementById("billingZip").value;
  var billing_has_data = false;
  if ((bName > "") || (bZip > ""))
    billing_has_data = true;
  return billing_has_data;
}

function testBillIsIdentical() {
  var sName = document.getElementById("shippingName").value;
  var sZip  = document.getElementById("shippingZip").value;
  var bName = document.getElementById("billingName").value;
  var bZip  = document.getElementById("billingZip").value;
  var billing_is_identical = false;
  if ((sName == bName) && (sZip == bZip))
    billing_is_identical = true;
  return billing_is_identical;
}

function clearBilling() {
  document.getElementById("billingName").value = null;
  document.getElementById("billingZip").value = null;
}
