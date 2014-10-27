<!-- Add reason modal -->
<div class="modal fade" id="add{{$addReason}}Reason" tabindex="-1" role="dialog" aria-labelledby="addReasonLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="addReasonLabel">Add {{$addReason}} reason</h4>
        <h5><span class="label label-danger">Note</span> You can add up to 9 reasons for every category.</h5>
      </div>
      <div class="modal-body">
        {{Form::open(array('url' => 'addReason/'.$addReason, 'method' => 'POST'))}}
        {{Form::label('Reason name')}}<br/>
        <div class="input-group input-group-lg">
          {{Form::text($addReason . 'ReasonNew', null, array('class' => 'form-control', 'placeholder' => 'Enter Reason\'s name'))}}
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
<!-- /Add reason modal -->