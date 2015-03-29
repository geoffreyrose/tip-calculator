function totalamount() {
	$('[name="bill-amount"]').priceFormat({
		prefix: '$ ',
	});
	$('.total-value').priceFormat({
		prefix: '$ ',
	});
	$('.your-total-value').priceFormat({
		prefix: '$ ',
	});

	var split = $('.split .active').attr('data-split');
	
	var amount = $('[name="bill-amount"]').unmask();
	amount = amount * 100;

	var tip = $('[name="tip"]').val();
	tip = tip / 100;
	tip = (tip * amount);

	var total = (amount +  tip) / 100;
	total = total.toFixed(0);

	var yourTotal = total / split;
	yourTotal = yourTotal.toFixed(0);

	$('.total-value').text(total);
	$('.total-value').priceFormat({
		prefix: '$ ',
	});

	$('.your-total-value').text(yourTotal);
		$('.your-total-value').priceFormat({
		prefix: '$ ',
	});

}

$(function(){
	totalamount();

	$('.split span').on('click', function(){
		$('.split span').removeClass('active');
		$(this).addClass('active');
		totalamount();
	});
	$('[name="bill-amount"]').on('keyup', function(){
		totalamount();	
	});

	$('[name="tip"]').on('change', function(){
		totalamount();	
	});
});