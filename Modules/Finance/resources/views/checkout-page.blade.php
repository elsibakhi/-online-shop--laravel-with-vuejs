<head>
    <script src="https://js.stripe.com/basil/stripe.js"></script>

    
</head>
  <body>
    <div id="checkout">
      <!-- Checkout will insert the payment form here -->
    </div>

    <script>
            
          const data = {  
               'publishable_key' : '{{$publishable_key}}',
               'checkoutSessionRoute':"{{$checkoutSessionRoute}}",
               '_token' : '{{csrf_token()}}',
               'metadata':@json($metadata),
                
                };


    </script>
    <script src="{{asset('/assets/js/stripe/checkout-page.js')}}"></script>
  </body>