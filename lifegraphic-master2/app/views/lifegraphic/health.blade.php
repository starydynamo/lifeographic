@extends('layouts.mainDash')

@section('content')
 
       
        <div class="healthbar_divDash">Health Bar</div>
        <!-- <button type="submit" class="submitButton"></button> -->
        <button type="submit" class="submit_button submit_button-circle submit_button-action">Submit</button>
        <div class="historygraphbox_divDash">
          <div class="historygraphDash historygraphDashHealth">Your Health History</div>
          <canvas id="historyGraphCanvasHealth" width="280" height="150"></canvas>
        </div>
        <div class="subtitle_divDash"><strong>How Do you Feel Today?</strong>

          <div class="btn-group rateButtons">
            <button type="button" class="btn btn-success rateHealth rateValue1"><span class="rate1">Very Bad</span></button>
            <button type="button" class="btn btn-success rateHealth rateValue2"><span class="rate2">Bad</span></button>
            <button type="button" class="btn btn-success rateHealth rateValue3"><span class="rate3">OK</span></button>
            <button type="button" class="btn btn-success rateHealth rateValue4"><span class="rate4">Good</span></button>
            <button type="button" class="btn btn-success rateHealth rateValue5"><span class="rate5">Very Good</span></button>
          </div>
        </div>
        
       
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p class="reasonLabel"><strong>Reason?</strong> 
          <button data-target="#addHealthReason" data-toggle="modal" class="btn btn-info btn-xs reasonButton"><i class="glyphicon glyphicon-plus"></i> Add New</button>
          <a href="{{URL::to('viewSubmissions')}}" class="btn btn-success btn-xs reasonButton"><i class="glyphicon glyphicon-eye-open"></i> View Submissions</a>
        </p>

        <div class="Reason_divDash">
          
          {{Form::open(array('url' => 'health', 'method' => 'POST', 'class' => 'categoryForm'))}}
          {{Form::hidden('healthValue', null, array('class' => 'catValue'))}}
          <div class="control-group reasonCheckboxes">
              <div class="controls col-md-4">
                  <label class="checkbox">
                      {{Form::checkbox('reasons[]', 'fitness')}} Fitness
                  </label>
                  <label class="checkbox">
                      {{Form::checkbox('reasons[]', 'bad-sleep')}} Bad Sleep
                  </label>
                  @if(count($userReasons) > 0)
                    @for($i=0; $i < count($userReasons); $i++)
                      @if($i % 3 === 0)
                      <label class="checkbox">
                        {{Form::checkbox('reasons[]', $userReasons[$i])}} {{$reasonNames[$i]}}
                      </label>
                      @endif
                    @endfor  
                  @endif
                
              </div>
              <div class="controls col-md-4">
                  <label class="checkbox">
                      {{Form::checkbox('reasons[]', 'diet')}} Diet
                  </label>
                  <label class="checkbox">
                      {{Form::checkbox('reasons[]', 'weight-loss')}} Weight Loss
                  </label>
                  @if(count($userReasons) > 0)
                    @for($i=0; $i < count($userReasons); $i++)
                      @if($i % 3 === 1)
                      <label class="checkbox">
                        {{Form::checkbox('reasons[]', $userReasons[$i])}} {{$reasonNames[$i]}}
                      </label>
                      @endif
                    @endfor  
                  @endif

              </div>
              <div class="controls col-md-4">
                  <label class="checkbox">
                      {{Form::checkbox('reasons[]', 'overweight')}} Overweight
                  </label>
                  <label class="checkbox">
                      {{Form::checkbox('reasons[]', 'sick')}} Sick
                  </label>
                  @if(count($userReasons) > 0)
                    @for($i=0; $i < count($userReasons); $i++)
                      @if($i % 3 === 2)
                      <label class="checkbox">
                        {{Form::checkbox('reasons[]', $userReasons[$i])}} {{$reasonNames[$i]}}
                      </label>
                      @endif
                    @endfor  
                  @endif
              </div>
          </div>
          {{Form::close()}}
        </div>
       

        <div class="modal fade" id="addHealthReason" tabindex="-1" role="dialog" aria-labelledby="addReasonLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="addReasonLabel">Add New Reason</h4>
                <h5><span class="label label-danger">Note</span> You can add up to 9 reasons for every category.</h5>
              </div>
              <div class="modal-body">
                {{Form::open(array('url' => 'reason/new'))}}
                {{Form::label('Reason Name')}}<br/>
                <div class="input-group input-group-sm">
                  <span class="input-group-addon">New</span>
                  {{Form::text('reason', null, array('class' => 'form-control', 'placeholder' => 'Enter Reason\'s name'))}}
                  {{Form::hidden('category', 'health')}}
                </div>
              </div>
              <div class="modal-footer">
                {{Form::submit('Add Reason', array('class' => 'btn btn-small btn-success'))}}
                {{Form::close()}}
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

        <div class="modal fade" id="viewHealthReasons" tabindex="-1" role="dialog" aria-labelledby="viewReasonsLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="viewReasonsLabel">Your Health Reasons:</h4>
              </div>
              <div class="modal-body">
                @if(empty($reasons))
                <p>No reasons chosen ...</p>
                @else
                <ul>
                  @foreach($reasons as $reason)
                    <li>{{$reason}}</li>
                  @endforeach
                </ul> 
                @endif
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
@stop

@section('script')

   {{ HTML::script('js/gauge.min.js') }} 
   {{ HTML::script('js/graphics.js') }}

@stop
