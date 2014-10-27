@extends('layouts.mainDash')

@section('content')

<div class="col-md-5">
	
		{{ Form::text('date-filter', null, array('placeholder' => 'Click to Filter by Date', 'class' => 'form-control form-group', 'id' => 'datepicker', 'ng-model' => 'searchDate', 'readonly' => 'true', 'onfocus' => 'this.blur()' )) }}
		{{ Form::text('category-filter', null, array('placeholder' => 'Search by Category, Reason or Value', 'class' => 'form-control form-group dropdown', 'ng-model' => 'searchValues', 'id' => 'search-filter')) }}
	
</div>


	<table  class="table table-bordered table-responsive submissions">
		<tr>
		  <th>Category</th>
		  <th>Date and Time</th>
		  <th style="padding-left: 25px;">Reasons</th>
		  <th>Value</th>
		</tr>
		<tbody ng-controller="SubmissionsController">
			<tr ng-repeat="submission in submissions | filter: searchValues | filter: searchDate" class={submission.class}>
				<td>{submission.category}</td>
				<td>{submission.date}</td>
				<td>
					<ul>
						<li ng-repeat="reason in submission.reasons">
							{reason}
						</li>
					</ul>
				</td>
				<td>{submission.value}</td>
			</tr>
		</tbody>
			
	</table>

	<!-- <h3 style="margin-top: 60px;">No data submitted for any category.</h3> -->
		
	<h2 class="submissions"><a href="{{URL::previous()}}">Go back</a></h2>
@stop

@section('script')

	<script type="text/javascript">

		$(document).ready(function() {

			$('input#datepicker').datepicker({

				todayBtn: "linked",
				format: 'yyyy-mm-dd',
				clearBtn: true,
				autoclose: true,
				keyboardNavigation: false,
				orientation: 'right'

			});

			$('input#datepicker').change(function() {

				console.log( $( this ).val() );

				/*$.ajax({
					url: 
					data:
					type:
				});*/

			});

		});

	</script>

@stop
